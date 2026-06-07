-- Miracle55 Worldcup: Tables + Columns + RLS Policies
-- รันไฟล์นี้ใน Supabase > SQL Editor ได้เลย
-- รันซ้ำได้ ไม่ต้องลบ policy เอง

create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  full_name text,
  total_points integer default 0,
  created_at timestamptz default now()
);

create table if not exists public.matches (
  id uuid primary key default gen_random_uuid(),
  match_key text unique not null,
  actual_score_a integer,
  actual_score_b integer,
  actual_winner text,
  is_finished boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.users(id) on delete cascade,
  match_id integer,
  match_key text not null,
  stage text,
  team_a text,
  team_b text,
  pred_a integer,
  pred_b integer,
  predicted_winner text,
  top_scorer_guess text,
  points_awarded integer default 0,
  scored_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(user_id, match_key)
);

-- เผื่อเคยสร้างตารางเวอร์ชันเก่าไว้แล้ว ให้เติมคอลัมน์ที่ขาดโดยไม่พัง
alter table public.users add column if not exists full_name text;
alter table public.users add column if not exists total_points integer default 0;
alter table public.users add column if not exists created_at timestamptz default now();

alter table public.matches add column if not exists actual_score_a integer;
alter table public.matches add column if not exists actual_score_b integer;
alter table public.matches add column if not exists actual_winner text;
alter table public.matches add column if not exists is_finished boolean default false;
alter table public.matches add column if not exists created_at timestamptz default now();
alter table public.matches add column if not exists updated_at timestamptz default now();

alter table public.predictions add column if not exists match_id integer;
alter table public.predictions add column if not exists match_key text;
alter table public.predictions add column if not exists stage text;
alter table public.predictions add column if not exists team_a text;
alter table public.predictions add column if not exists team_b text;
alter table public.predictions add column if not exists pred_a integer;
alter table public.predictions add column if not exists pred_b integer;
alter table public.predictions add column if not exists predicted_winner text;
alter table public.predictions add column if not exists top_scorer_guess text;
alter table public.predictions add column if not exists points_awarded integer default 0;
alter table public.predictions add column if not exists scored_at timestamptz;
alter table public.predictions add column if not exists created_at timestamptz default now();
alter table public.predictions add column if not exists updated_at timestamptz default now();

-- unique สำหรับกัน user คนเดิมส่งคู่เดิมซ้ำ
create unique index if not exists predictions_user_match_key_unique
on public.predictions (user_id, match_key);

alter table public.users enable row level security;
alter table public.predictions enable row level security;
alter table public.matches enable row level security;

-- ลบ policy ชื่อเดียวกันก่อน เพื่อรันซ้ำได้ ไม่เจอ already exists
drop policy if exists "miracle55_users_anon_all" on public.users;
drop policy if exists "miracle55_predictions_anon_all" on public.predictions;
drop policy if exists "miracle55_matches_anon_all" on public.matches;

-- Policy สำหรับทดสอบบน GitHub Pages
-- หมายเหตุ: เวอร์ชันนี้เปิดสิทธิ์กว้างเพื่อให้ทดสอบง่าย
-- ถ้าใช้จริงกับเงินรางวัล ควรทำ Supabase Auth + แยกสิทธิ์ admin/user เพิ่ม
create policy "miracle55_users_anon_all"
on public.users
for all
to anon
using (true)
with check (true);

create policy "miracle55_predictions_anon_all"
on public.predictions
for all
to anon
using (true)
with check (true);

create policy "miracle55_matches_anon_all"
on public.matches
for all
to anon
using (true)
with check (true);
