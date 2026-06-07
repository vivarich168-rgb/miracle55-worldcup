Miracle55 Worldcup - Admin Fix Ready

ทำตามนี้ทีละข้อครับ

1) แตก ZIP นี้

2) เข้า GitHub repo: miracle55-worldcup

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
ไฟล์ SQL ตัวนี้รันซ้ำได้ และมี notify reload schema แล้ว

5) รอ GitHub Pages อัปเดต 1-3 นาที

6) เปิดหน้าผู้เล่น:
https://vivarich168-rgb.github.io/miracle55-worldcup/?v=admin-fix-1

7) เปิดหน้าแอดมิน:
https://vivarich168-rgb.github.io/miracle55-worldcup/admin.html?v=admin-fix-1
รหัสแอดมินเบื้องต้น: 556677

8) match_key สำหรับกรอกผลจริง:
รอบแรก: m-1 ถึง m-16
รอบ 16 ทีม: left-r16-1 ถึง left-r16-4, right-r16-1 ถึง right-r16-4
รอบ 8 ทีม: left-r8-1 ถึง left-r8-2, right-r8-1 ถึง right-r8-2
รอบ 4 ทีม: left-r4-1, right-r4-1
นัดชิง: final
ชิงอันดับ 3: third

หมายเหตุความปลอดภัย:
ชุดนี้ไม่ใส่ service_role key ลง GitHub เพราะอันตรายมาก ใช้ anon key + RLS Policy สำหรับทดสอบ/ใช้งานเบื้องต้น
ถ้าจะใช้จริงกับเงินรางวัล ควรทำระบบ admin ผ่าน Supabase Auth หรือ Edge Function ภายหลัง
