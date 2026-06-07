Kongo Group Worldcup V10.2 Multi-Site Starter

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
6) เปิดทดสอบด้วย ?v=v10.2-template

ตัวอย่าง:
https://worldcup.kongo-group.com/?v=v10.2-template
https://worldcup.kongo-group.com/admin.html?v=v10.2-template
