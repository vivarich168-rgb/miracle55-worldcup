Miracle55 Worldcup - CLEAN FINAL

ทำตามนี้ทีละข้อเท่านั้นครับ

1) แตก ZIP นี้

2) เข้า GitHub repo ที่ถูกต้อง:
   miracle55-worldcup

3) อัปโหลดไฟล์ทั้งหมดใน ZIP นี้ไปไว้หน้าแรกของ repo เท่านั้น ห้ามซ้อนโฟลเดอร์
   ไฟล์ที่ต้องเห็นใน repo:
   - index.html
   - admin.html
   - app.js
   - calculate.js
   - style.css
   - supabase-config.js
   - 00_RUN_THIS_SQL_FIRST.sql
   - README_UPLOAD.txt

4) เข้า Supabase > SQL Editor > New query
   เปิดไฟล์ 00_RUN_THIS_SQL_FIRST.sql ด้วย Notepad
   กด Ctrl+A > Ctrl+C
   กลับไป SQL Editor > Ctrl+V > Run
   รอ 30 วินาที

5) เปิดเว็บผู้เล่น:
   https://vivarich168-rgb.github.io/miracle55-worldcup/?v=clean-final-1

6) เปิดหน้าแอดมิน:
   https://vivarich168-rgb.github.io/miracle55-worldcup/admin.html?v=clean-final-1

7) รหัสแอดมินเบื้องต้น:
   556677

8) วิธีกรอกแอดมิน:
   match_key รอบแรก: m-1 ถึง m-16
   ตัวอย่าง:
   match_key: m-10
   สกอร์ A: 3
   สกอร์ B: 1
   ผู้ชนะ: สวิตเซอร์แลนด์

9) ถ้าเว็บยังแปลก ให้กด Ctrl+F5

หมายเหตุสำคัญ:
- ชุดนี้ไม่ใช้ service_role key บน GitHub เพราะอันตรายมาก
- ใช้ anon key + RLS แบบเปิดสำหรับทดสอบ/ใช้งานเว็บ static
- ถ้าจะใช้กับเงินรางวัลจริง ควรทำระบบแอดมินผ่าน server/backend เพิ่มในอนาคต
