# Kongo Prediction Platform V11 Template Engine

ใช้ไฟล์นี้เป็นแม่แบบสร้างเว็บใหม่ เช่น 8xhuay, sloyday88, legacybet88, 8xufa

## สิ่งที่ต้องแก้หลัก ๆ
เปิดไฟล์ `config.js` แล้วแก้:

```js
siteName: '8xhuay',
supabaseUrl: 'https://xxxx.supabase.co',
supabaseAnonKey: 'xxxx',
version: '8xhuay-v1'
```

## ขั้นตอนสร้างเว็บใหม่
1. สร้าง GitHub Repository ใหม่
2. สร้าง Supabase Project ใหม่
3. รัน `00_RUN_THIS_SQL_FIRST.sql`
4. แก้ `config.js`
5. อัปโหลดไฟล์ทั้งหมดขึ้น GitHub
6. เปิด GitHub Pages
7. ทดสอบหน้าเว็บและ Admin

## แนะนำโครงสร้าง
- 1 เว็บ = 1 GitHub Repo
- 1 เว็บ = 1 Supabase Project

ช่วงแรกวิธีนี้ง่ายสุด ปลอดภัยสุด และข้อมูลไม่ปนกัน
