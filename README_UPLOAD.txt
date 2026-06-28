Kongo Group Worldcup V10.4 Live Matches Fixed

แก้ไขสำคัญ:
- หน้าเว็บโหลดรายชื่อทีมจาก Supabase ตาราง matches อัตโนมัติ
- แก้ปัญหา app.js syntax error จาก async async function
- เปลี่ยน cache version เป็น v10.4-live-matches
- เพิ่มไฟล์ FIX_MATCH_KEYS_FOR_KONGO_GROUP.sql สำหรับเติม match_key

วิธีใช้งาน:
1) แตก ZIP
2) อัปโหลดไฟล์ทั้งหมดทับของเดิมใน GitHub Repository root
3) ถ้าใน Supabase match_key ยังว่าง ให้รัน FIX_MATCH_KEYS_FOR_KONGO_GROUP.sql
4) เปิดหน้าเว็บ:
https://vivarich168-rgb.github.io/mirade55-worldcup/?v=v10.4-live-matches

หน้า Admin:
https://vivarich168-rgb.github.io/mirade55-worldcup/admin.html?v=v10.4-live-matches

หมายเหตุ:
- ถ้าแก้ชื่อทีมใน Supabase แล้วเว็บยังไม่เปลี่ยน ให้กด Ctrl+Shift+R หรือเปลี่ยนท้าย URL version
- ตาราง matches ควรมี id 1-16 และ match_key m-1 ถึง m-16
