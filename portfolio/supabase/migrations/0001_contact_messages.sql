-- Run in Supabase Dashboard > SQL Editor (or via the Supabase CLI).
create table if not exists public.contact_messages (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 2 and 100),
  email       text not null check (char_length(email) <= 254),
  message     text not null check (char_length(message) between 10 and 2000),
  ip_hash     text,
  created_at  timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

-- RLS on with no policies: browser (publishable) keys cannot read or write.
-- Only the server, using the secret key, inserts via /api/contact.
alter table public.contact_messages enable row level security;
