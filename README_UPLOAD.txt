Kongo Group Worldcup V10.2

เวอร์ชันนี้ทำเพื่อใช้เป็นต้นแบบสำหรับทำเว็บแบบเดียวกันหลายเว็บ

ไฟล์สำคัญ:
- supabase-config.js : แก้ชื่อเว็บ / event / domain hint
- CNAME.example : ตัวอย่างไฟล์ CNAME สำหรับ Custom Domain
- BRANDING_AND_DOMAIN_GUIDE.md : คู่มือเปลี่ยนชื่อเว็บและตั้ง Custom Domain
- 00_RUN_THIS_SQL_FIRST.sql : SQL สำหรับ Supabase

วิธีใช้งาน:
1) แตก ZIP
2) แก้ชื่อเว็บใน supabase-config.js
3) อัปโหลดไฟล์ทั้งหมดไป GitHub repo
4) รัน 00_RUN_THIS_SQL_FIRST.sql ใน Supabase
5) ตั้ง Custom Domain ถ้าไม่อยากให้ URL โชว์ชื่อ GitHub
6) เปิดทดสอบด้วย ?v=v10.3-supabase-matches

ตัวอย่าง:
https://worldcup.kongo-group.com/?v=v10.3-supabase-matches
https://worldcup.kongo-group.com/admin.html?v=v10.3-supabase-matches


Kongo Group Rename Note
- เปลี่ยนชื่อจาก Miracle55 เป็น Kongo Group แล้ว
- Cache version: v10.3-supabase-matches
- SQL policy prefix ใช้ kongo_group เพื่อป้องกัน error จากเครื่องหมายขีดกลาง
- หากรัน SQL แล้วเจอ policy error ให้ใช้ไฟล์ SQL_POLICY_FIX_KONGO_GROUP.sql


V10.3 Supabase Matches Update
- หน้าเว็บโหลดทีมรอบแรกจาก Supabase ตาราง matches โดยอัตโนมัติ
- แก้ทีมใน Supabase แล้วหน้าเว็บจะเปลี่ยนตาม
- ถ้ายังไม่เปลี่ยน ให้เช็กว่า matches มี match_key เป็น m-1 ถึง m-16
- มีไฟล์ช่วยรัน: FIX_MATCH_KEYS_FOR_KONGO_GROUP.sql

ลิงก์ทดสอบ:
https://vivarich168-rgb.github.io/mirade55-worldcup/?v=v10.3-supabase-matches

หน้า Admin:
https://vivarich168-rgb.github.io/mirade55-worldcup/admin.html?v=v10.3-supabase-matches
