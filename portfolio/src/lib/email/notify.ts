import { Resend } from 'resend';
import type { ContactInput } from '@/lib/validation/contact';

// Optional: does nothing unless all three Resend env vars are set.
// Never throws, so an email problem can't lose a saved message.
export async function notifyNewMessage({ name, email, message }: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !to || !from) return;

  try {
    await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: email,
      subject: `New portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
  } catch (err) {
    console.error('Resend error', err);
  }
}
