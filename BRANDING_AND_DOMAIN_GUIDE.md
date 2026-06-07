# Kongo Group Worldcup V10.2 Multi-Site Starter

ชุดนี้ทำไว้เป็น "ต้นแบบ" สำหรับคัดลอกไปทำเว็บอื่นอีกหลายเว็บ

## วิธีเปลี่ยนชื่อเว็บสำหรับเว็บใหม่

เปิดไฟล์ `supabase-config.js` แล้วแก้เฉพาะส่วนนี้:

```js
const SITE_NAME = 'Kongo Group';
const EVENT_NAME = 'FIFA Worldcup 2026';
const SITE_TAGLINE = 'Prediction Challenge';
const SITE_DOMAIN_HINT = 'worldcup.kongo-group.com';
```

ตัวอย่างเว็บใหม่:

```js
const SITE_NAME = 'LuckyBall99';
const EVENT_NAME = 'FIFA Worldcup 2026';
const SITE_TAGLINE = 'Prediction Challenge';
const SITE_DOMAIN_HINT = 'worldcup.luckyball99.com';
```

## วิธีทำให้ URL ไม่โชว์ชื่อ GitHub

GitHub Pages แบบฟรีจะโชว์ชื่อบัญชี เช่น:

```text
https://vivarich168-rgb.github.io/mirade55-worldcup/
```

ถ้าต้องการไม่ให้โชว์ชื่อบัญชี ต้องใช้ Custom Domain เช่น:

```text
https://worldcup.kongo-group.com
```

## วิธีตั้ง Custom Domain บน GitHub Pages

1. ซื้อโดเมน เช่น `kongo-group.com`
2. เข้า GitHub Repository ของเว็บ
3. ไปที่ Settings > Pages
4. ช่อง Custom domain ใส่:
   ```text
   worldcup.kongo-group.com
   ```
5. กด Save
6. ไปที่ DNS ของผู้ให้บริการโดเมน
7. เพิ่ม CNAME:
   ```text
   Name: worldcup
   Type: CNAME
   Value: vivarich168-rgb.github.io
   ```
8. รอ DNS อัปเดต
9. กลับมาติ๊ก Enforce HTTPS

## ถ้าใช้โดเมนหลัก เช่น kongo-group.com

ให้ตั้ง A Record ไปที่ IP ของ GitHub Pages:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

และอาจเพิ่ม `www` เป็น CNAME ไปที่:

```text
vivarich168-rgb.github.io
```

## สำหรับ 10 เว็บ แนะนำโครงสร้างแบบนี้

- เว็บ 1: `worldcup.kongo-group.com`
- เว็บ 2: `worldcup.luckyball99.com`
- เว็บ 3: `worldcup.goalwin88.com`

หรือถ้าใช้โดเมนเดียว:

- `kongo-group.com/worldcup`
- `kongo-group.com/hanoi`
- `kongo-group.com/lotto`

## สิ่งที่ต้องเปลี่ยนทุกครั้งเมื่อทำเว็บใหม่

1. `SITE_NAME`
2. `EVENT_NAME`
3. `SITE_DOMAIN_HINT`
4. Supabase Project URL / anon key ถ้าแยกฐานข้อมูล
5. GitHub Repository name
6. Custom Domain / CNAME
7. Logo / ภาพประกอบ ถ้ามี

## สิ่งที่ไม่ต้องแก้

- ระบบ Leaderboard
- ระบบ Admin
- ระบบคะแนน
- Privacy username + ชื่อย่อ
- Top 20 / Prize Zone
- Duplicate protection SQL

## ลิงก์ทดสอบหลัง Deploy

```text
https://<your-domain>/?v=v10.2-template
https://<your-domain>/admin.html?v=v10.2-template
```

รหัส Admin เริ่มต้น: `556677`
