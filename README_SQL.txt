วิธีใช้งานชุดไฟล์ Miracle55 Worldcup Fixed

1) เปิดไฟล์ supabase-config.js
- เปลี่ยน REPLACE_WITH_YOUR_SUPABASE_ANON_KEY เป็น anon key ของโปรเจกต์ Supabase
- ห้ามใช้ service_role key ในหน้าเว็บเด็ดขาด

2) รัน SQL นี้ใน Supabase SQL Editor ก่อนใช้งาน

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  username text unique not null,
  full_name text,
  total_points integer default 0,
  created_at timestamptz default now()
);

create table if not exists predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references users(id) on delete cascade,
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

create table if not exists matches (
  id uuid primary key default gen_random_uuid(),
  match_key text unique not null,
  actual_score_a integer,
  actual_score_b integer,
  actual_winner text,
  is_finished boolean default false,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

3) เปิด RLS เบื้องต้น
alter table users enable row level security;
alter table predictions enable row level security;
alter table matches enable row level security;

-- หมายเหตุ: Policy ด้านล่างเป็นแบบง่ายสำหรับเว็บ static เท่านั้น
-- ถ้าจะใช้งานจริงแบบเงินรางวัล ควรใช้ Supabase Auth แยก user/admin ให้ชัดเจน

create policy "allow read users leaderboard" on users for select using (true);
create policy "allow create users" on users for insert with check (true);
create policy "allow update own total via client disabled" on users for update using (true);

create policy "allow read predictions" on predictions for select using (true);
create policy "allow insert predictions" on predictions for insert with check (true);
create policy "allow update predictions" on predictions for update using (true);

create policy "allow read matches" on matches for select using (true);
create policy "allow upsert matches" on matches for insert with check (true);
create policy "allow update matches" on matches for update using (true);

4) สำคัญมาก
Policy ด้านบนยังไม่ใช่ระบบปลอดภัยเต็มรูปแบบ เพราะเว็บนี้ยังไม่ได้ใช้ Supabase Auth จริง
ถ้าเปิดใช้จริงกับเงินรางวัล แนะนำให้เพิ่ม Supabase Auth และจำกัด admin ด้วย role ก่อนเผยแพร่

5) match_key ที่ใช้ในหน้าแอดมิน
รอบแรก: m-1 ถึง m-16
รอบ 16 ทีม: left-r16-1 ถึง left-r16-4, right-r16-1 ถึง right-r16-4
รอบ 8 ทีม: left-r8-1 ถึง left-r8-2, right-r8-1 ถึง right-r8-2
รอบ 4 ทีม: left-r4-1, right-r4-1
นัดชิง: final
ชิงอันดับ 3: third
