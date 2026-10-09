import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name').max(100),
  email: z.string().trim().toLowerCase().email('Enter a valid email').max(254),
  message: z
    .string()
    .trim()
    .min(10, 'Message should be at least 10 characters')
    .max(2000, 'Message is too long (max 2000 characters)'),
  // Honeypot: a hidden field that real visitors leave empty.
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
