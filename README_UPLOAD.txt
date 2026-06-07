Miracle55 Worldcup Top20 Final Deploy Ready

ทำตามนี้ทีละข้อ:

1) แตก ZIP นี้

2) อัปโหลดไฟล์ทั้งหมดไปที่ root ของ GitHub repo:
- index.html
- admin.html
- app.js
- calculate.js
- style.css
- supabase-config.js
- 00_RUN_THIS_SQL_FIRST.sql
- README_UPLOAD.txt

3) เข้า Supabase > SQL Editor
เปิดไฟล์ 00_RUN_THIS_SQL_FIRST.sql ด้วย Notepad แล้ว Copy ทั้งหมดไปวาง จากนั้นกด Run

4) ถ้า Results ส่วนแรกไม่มี duplicate ที่ match_key ไม่ใช่ NULL = ผ่าน
หมายเหตุ: แถวเก่า match_key = NULL ไม่กระทบระบบใหม่ เพราะ unique index ใช้ WHERE match_key IS NOT NULL

5) เปิดเว็บผู้เล่น:
https://vivarich168-rgb.github.io/miracle55-worldcup/?v=top20-final-4

6) เปิดหน้าแอดมิน:
https://vivarich168-rgb.github.io/miracle55-worldcup/admin.html?v=top20-final-4

รหัสแอดมิน: 556677

สิ่งที่แก้แล้ว:
- Leaderboard แสดง Top 20
- อันดับ 1-10 มีสีเด่น
- หน้า admin มี Leaderboard Top 20
- ป้องกัน duplicate prediction ด้วย unique index แบบ partial
- match_key ของ matches/predictions ถูกเติมให้ครบ
- SQL รันซ้ำได้
