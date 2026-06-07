Miracle55 Worldcup - Clean Final Top20

สิ่งที่แก้รวมในชุดนี้:
1) แก้ repo/link ให้ใช้ miracle55-worldcup
2) แก้ schema matches/predictions/users ให้มี column ที่โค้ดใช้ครบ
3) เพิ่ม match_key และ unique index กันส่งซ้ำ user_id + match_key
4) ลบ duplicate predictions โดยเก็บรายการล่าสุด
5) reload schema cache ของ Supabase
6) Leaderboard แสดงแค่ Top 20
7) อันดับ 1-10 มีสีแยกชัดเจนตามเกณฑ์รางวัล
8) หน้า admin มี Leaderboard Top 20 ด้านขวา

วิธีติดตั้ง:
1) แตก ZIP
2) อัปโหลดไฟล์ทั้งหมดใน ZIP ไปที่ root repository ของ GitHub:
   https://github.com/vivarich168-rgb/miracle55-worldcup
   ต้องเห็นไฟล์เหล่านี้หน้าแรก repo:
   - index.html
   - admin.html
   - app.js
   - calculate.js
   - style.css
   - supabase-config.js
   - 00_RUN_THIS_SQL_FIRST.sql
   - README_UPLOAD.txt

3) เข้า Supabase > SQL Editor
4) เปิดไฟล์ 00_RUN_THIS_SQL_FIRST.sql ด้วย Notepad
5) Ctrl+A, Ctrl+C แล้ววางใน SQL Editor
6) กด Run 1 ครั้ง
7) รอ 30 วินาที
8) เปิดเว็บ:
   https://vivarich168-rgb.github.io/miracle55-worldcup/?v=top20-final-1

หน้าแอดมิน:
https://vivarich168-rgb.github.io/miracle55-worldcup/admin.html?v=top20-final-1
รหัสแอดมิน: 556677

หมายเหตุความปลอดภัย:
ชุดนี้ใช้ anon key + RLS แบบเปิดเพื่อให้เว็บ static ใช้งานได้ง่าย
ถ้าใช้เงินจริง/เปิดสาธารณะเต็มรูปแบบ แนะนำเพิ่ม Supabase Auth หรือ Edge Function ภายหลัง
