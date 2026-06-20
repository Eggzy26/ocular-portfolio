-- Run this in your Supabase SQL Editor (Ocular project)
-- Dashboard → SQL Editor → New Query → paste → Run

create table if not exists contacts (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  subject text,
  message text not null,
  read boolean default false,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table contacts enable row level security;

-- Anyone can submit the contact form (insert)
create policy "Allow public inserts" on contacts
  for insert with check (true);

-- Only service role (your admin dashboard) can read/update/delete
-- The anon key cannot read submissions — only your server-side admin can
