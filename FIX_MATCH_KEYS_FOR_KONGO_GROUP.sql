-- FIX_MATCH_KEYS_FOR_KONGO_GROUP.sql
-- รันไฟล์นี้ใน Supabase ถ้าหน้าเว็บยังไม่ดึงทีมจากตาราง matches
-- ต้องให้ id 1-16 มี match_key เป็น m-1 ถึง m-16

update public.matches
set match_key = 'm-' || id::text
where (match_key is null or match_key = '')
  and id between 1 and 16;

select id, match_key, team_a, team_b
from public.matches
order by id
limit 32;
