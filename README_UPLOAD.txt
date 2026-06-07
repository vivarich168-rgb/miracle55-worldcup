วิธีใช้งานชุดไฟล์ Miracle55 Worldcup - Final Ready

ทำตามนี้ทีละข้อพอครับ ไม่ต้องรันซ้ำหลายรอบ

1) แตก ZIP นี้

2) เข้า GitHub repo: mirade55-worldcup

3) อัปโหลดไฟล์ทั้งหมดนี้ทับของเดิมที่หน้าแรกของ repo เท่านั้น ห้ามใส่ไว้ในโฟลเดอร์ซ้อน
ไฟล์ที่ต้องเห็นในหน้า repo:
- index.html
- admin.html
- app.js
- calculate.js
- style.css
- supabase-config.js
- SQL_SETUP_POLICY.sql
- README_UPLOAD.txt

4) เข้า Supabase > SQL Editor > New query
เปิดไฟล์ SQL_SETUP_POLICY.sql ด้วย Notepad แล้วกด Ctrl+A, Ctrl+C
กลับมาที่ SQL Editor แล้วกด Ctrl+V จากนั้นกด Run
หมายเหตุ: ไฟล์ SQL ตัวนี้รันซ้ำได้ เพราะมี drop policy if exists และ alter table add column if not exists

5) รอ GitHub Pages อัปเดต 1-3 นาที

6) เปิดเว็บแบบล้างแคช:
https://vivarich168-rgb.github.io/mirade55-worldcup/?v=final-ready-1

7) ถ้ายังขึ้น 401 ให้เช็กจุดเดียว:
DevTools > Network > คลิก supabase-config.js > ดูในไฟล์ว่าเป็น
https://qbqjogfflfnsldjkpiog.supabase.co
ถ้าไม่ใช่ แปลว่า GitHub ยังใช้ไฟล์เก่า หรืออัปโหลดไม่ทับ root repo

8) หน้าแอดมิน:
https://vivarich168-rgb.github.io/mirade55-worldcup/admin.html?v=final-ready-1
รหัสแอดมินเบื้องต้นอยู่ใน admin.html คือ 556677

match_key สำหรับกรอกผลจริง:
รอบแรก: m-1 ถึง m-16
รอบ 16 ทีม: left-r16-1 ถึง left-r16-4, right-r16-1 ถึง right-r16-4
รอบ 8 ทีม: left-r8-1 ถึง left-r8-2, right-r8-1 ถึง right-r8-2
รอบ 4 ทีม: left-r4-1, right-r4-1
นัดชิง: final
ชิงอันดับ 3: third
