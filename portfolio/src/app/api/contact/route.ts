import { NextResponse } from 'next/server';
import { createHash } from 'crypto';
import { contactSchema } from '@/lib/validation/contact';
import { getContactLimiter } from '@/lib/ratelimit';
import { supabaseAdmin } from '@/lib/db/supabase-server';
import { notifyNewMessage } from '@/lib/email/notify';

export const runtime = 'nodejs';

function getIp(req: Request) {
  return req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
}

export async function POST(req: Request) {
  const ip = getIp(req);

  // 1. Rate limit (fails open if Redis is unset or down)
  try {
    const limiter = getContactLimiter();
    if (limiter) {
      const { success, reset } = await limiter.limit(ip);
      if (!success) {
        const retryAfter = Math.max(1, Math.ceil((reset - Date.now()) / 1000));
        return NextResponse.json(
          { ok: false, error: 'Too many requests. Please try again later.' },
          { status: 429, headers: { 'Retry-After': String(retryAfter) } }
        );
      }
    }
  } catch (err) {
    console.error('Rate limit error', err);
  }

  // 2. Parse + validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, fieldErrors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // 3. Honeypot tripped: pretend success so bots learn nothing
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  // 4. Save
  const { name, email, message } = parsed.data;
  const ipHash = createHash('sha256').update(ip).digest('hex').slice(0, 32);

  try {
    const { error } = await supabaseAdmin()
      .from('contact_messages')
      .insert({ name, email, message, ip_hash: ipHash });
    if (error) throw error;
  } catch (err) {
    console.error('Supabase insert error', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }

  // 5. Optional email notification (never blocks or fails the request)
  await notifyNewMessage(parsed.data);

  return NextResponse.json({ ok: true }, { status: 201 });
}
