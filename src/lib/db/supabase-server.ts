import { createClient } from '@supabase/supabase-js';

// SERVER ONLY. Uses the secret key, which bypasses Row Level Security.
// Never import this file from a client component.
export function supabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) throw new Error('Supabase env vars are missing');
  return createClient(url, key, { auth: { persistSession: false } });
}
