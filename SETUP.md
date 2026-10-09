# Stage 2: Project setup kit

## What's in this kit

| File | What it does |
|---|---|
| `scripts/setup.sh` | Creates the Next.js app, installs libraries, copies the files below into it |
| `tailwind.config.ts` | The Stitch colors, fonts, spacing and text sizes (copied exactly) |
| `postcss.config.mjs` | Lets Tailwind process your CSS |
| `src/app/globals.css` | Tailwind + the small custom CSS from Stitch |
| `src/app/layout.tsx` | Loads the fonts, sets the dark theme, page title, viewport |
| `src/config/site.ts` | Your name, email, social links (placeholders marked TODO) |
| `.env.example` | Template listing every secret/setting the app will need |
| `src/app/api/contact/route.ts` | Contact form endpoint: rate limit, validate, save, optional email |
| `src/lib/validation/contact.ts` | Zod schema for the contact form (with honeypot field) |
| `src/lib/ratelimit.ts` | Upstash limiter: 5 submissions / 10 min / IP |
| `src/lib/db/supabase-server.ts` | Server-only Supabase client (secret key) |
| `src/lib/email/notify.ts` | Optional Resend notification email |
| `supabase/migrations/0001_contact_messages.sql` | Creates the `contact_messages` table (run in Supabase SQL Editor) |

## Run it

1. Install Node.js 20 or newer from nodejs.org.
2. Unzip this kit, open a terminal inside it, then run:
       bash scripts/setup.sh
   (On Windows use Git Bash or WSL.)
3. `cd ../portfolio-app && npm run dev`, then open http://localhost:3000.
4. Check it works:
       npx tsc --noEmit
       npm run lint
       npm run build

You should see the default Next.js page for now. The real pages arrive in Stage 3.

## Why these choices?

- **Tailwind 3, not 4:** Stitch built your designs with Tailwind 3. Version 4 renamed some default
  shadow and corner-radius classes, which could slightly change how things look.
- **Fonts via `next/font`:** same fonts (Inter and Space Grotesk), but served from your own site, so faster.
- **`.env.example` vs `.env.local`:** the example file is safe to commit, with empty values.
  Your real secrets go in `.env.local`, which Git ignores.
