# V12 Enterprise Brand Engine Guide

เป้าหมาย: เว็บใหม่ไม่ต้องไล่แก้คำว่า Kongo Group หรือชื่อแบรนด์ในหลายไฟล์อีกต่อไป

## แก้ไฟล์เดียวเป็นหลัก

เปิด `config.js`

ตัวอย่างสำหรับเว็บ 8xhuay:

```js
siteName: '8xhuay',
companyName: '8xhuay',
eventName: 'FIFA Worldcup 2026',
tagline: 'Prediction Challenge',

titles: {
  browserTitle: '8xhuay | FIFA Worldcup 2026',
  leaderboardTitle: '🏆 8xhuay Leaderboard Top 20',
  adminTitle: '8xhuay Admin Center',
  footerText: '© 2026 8xhuay • All Rights Reserved'
},

supabaseUrl: 'https://xxxx.supabase.co',
supabaseAnonKey: 'xxxx',
adminPin: '556677',
version: '8xhuay-v1'
```

## สิ่งที่ต้องเปลี่ยนทุกเว็บ
- siteName
- companyName
- titles
- theme
- supabaseUrl
- supabaseAnonKey
- adminPin
- version
