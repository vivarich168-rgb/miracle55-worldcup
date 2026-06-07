Miracle55 Worldcup - Clean Final Top20 Ready

ทำตามนี้ทีละข้อ ไม่ต้องรันไฟล์เก่าซ้ำ

1) แตก ZIP นี้

2) เข้า GitHub repo: miracle55-worldcup

3) อัปโหลดไฟล์ทั้งหมดใน ZIP ไปไว้หน้าแรกของ repo เท่านั้น ห้ามซ้อนโฟลเดอร์
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
เปิดไฟล์ 00_RUN_THIS_SQL_FIRST.sql ด้วย Notepad แล้วกด Ctrl+A, Ctrl+C
กลับมาที่ SQL Editor แล้วกด Ctrl+V จากนั้นกด Run

ไฟล์ SQL นี้รวม:
- เพิ่ม/ซ่อมคอลัมน์ match_key
- ลบ predictions เก่าที่ match_key ว่าง
- ลบรายการทายซ้ำ user_id + match_key
- สร้าง unique index ใหม่
- เปิด RLS + policy
- reload schema cache

5) รอ 30 วินาที

6) เปิดเว็บผู้เล่น:
https://vivarich168-rgb.github.io/miracle55-worldcup/?v=top20-final-2

7) เปิดหน้าแอดมิน:
https://vivarich168-rgb.github.io/miracle55-worldcup/admin.html?v=top20-final-2

รหัสแอดมินเบื้องต้น: 556677

8) สิ่งที่แก้แล้วในชุดนี้:
- Leaderboard แสดง Top 20 เท่านั้น
- อันดับ 1-10 มีสีเด่นตามลำดับรางวัล
- หน้า admin มี Leaderboard Top 20
- กันส่งผลทายซ้ำด้วย unique index user_id + match_key
- แก้ปัญหา match_key หาย / duplicate / schema cache

9) match_key สำหรับกรอกผลจริง:
รอบแรก: m-1 ถึง m-16
รอบ 16 ทีม: left-r16-1 ถึง left-r16-4, right-r16-1 ถึง right-r16-4
รอบ 8 ทีม: left-r8-1 ถึง left-r8-2, right-r8-1 ถึง right-r8-2
รอบ 4 ทีม: left-r4-1, right-r4-1
นัดชิง: final
ชิงอันดับ 3: third

หมายเหตุความปลอดภัย:
ชุดนี้ใช้ anon public key + RLS policy แบบเปิดสำหรับเว็บ static เพื่อให้ใช้งานง่าย
ถ้าเปิดใช้จริงกับเงินรางวัลใหญ่ แนะนำเพิ่ม Supabase Auth และแยกสิทธิ์ admin/user เพิ่มเติม
