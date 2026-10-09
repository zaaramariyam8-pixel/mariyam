#!/usr/bin/env bash
# Stage 2 setup. Run this on YOUR computer (needs Node.js 20+ and internet).
#
# Usage (from the folder that contains this kit):
#     bash scripts/setup.sh
#
# What it does, step by step:
#   1. Creates a fresh Next.js app called "portfolio-app" next to this kit
#   2. Installs Tailwind CSS 3 (same major version Stitch used)
#   3. Installs the other libraries we need
#   4. Copies this kit's config files into the new app, backing up any
#      file it would replace (as *.bak) so nothing is lost
set -euo pipefail

KIT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
APP_DIR="$(dirname "$KIT_DIR")/portfolio-app"

if [ -e "$APP_DIR" ]; then
  echo "✋ $APP_DIR already exists. Not touching it. Rename or delete it first."
  exit 1
fi

NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
if [ "$NODE_MAJOR" -lt 20 ]; then
  echo "✋ Node.js 20 or newer is required (you have $(node -v))."
  exit 1
fi

echo "▶ 1/4 Creating the Next.js app (App Router, TypeScript, ESLint, src/ folder)..."
cd "$(dirname "$APP_DIR")"
npx create-next-app@latest portfolio-app \
  --typescript --eslint --app --src-dir \
  --import-alias "@/*" --use-npm --no-tailwind

cd "$APP_DIR"

echo "▶ 2/4 Installing Tailwind CSS 3 + PostCSS..."
npm install -D tailwindcss@3 postcss autoprefixer

echo "▶ 3/4 Installing app libraries (Supabase, Zod, Resend, Lucide, Upstash)..."
npm install @supabase/supabase-js zod resend lucide-react @upstash/ratelimit @upstash/redis

echo "▶ 4/4 Copying kit files (existing files are backed up as .bak)..."
copy_file () {
  local rel="$1"
  mkdir -p "$(dirname "$rel")"
  if [ -e "$rel" ]; then cp "$rel" "$rel.bak"; fi
  cp "$KIT_DIR/$rel" "$rel"
  echo "   ✓ $rel"
}
copy_file tailwind.config.ts
copy_file postcss.config.mjs
copy_file src/app/globals.css
copy_file src/app/layout.tsx
copy_file src/config/site.ts
copy_file .env.example
copy_file src/app/api/contact/route.ts
copy_file src/lib/ratelimit.ts
copy_file src/lib/validation/contact.ts
copy_file src/lib/db/supabase-server.ts
copy_file src/lib/email/notify.ts
copy_file supabase/migrations/0001_contact_messages.sql

# Remove any old Tailwind config create-next-app might have left behind
rm -f tailwind.config.js

mkdir -p src/components/{layout,ui,home,about,contact} src/lib/{validation,db,email} \
         src/data supabase/migrations tests public/images

cat "$KIT_DIR/.gitignore.additions" >> .gitignore

echo
echo "✅ Done. Next:"
echo "   cd $APP_DIR"
echo "   npm run dev      # then open http://localhost:3000"
