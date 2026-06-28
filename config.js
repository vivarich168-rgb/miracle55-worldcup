// ======================================================
// Kongo Prediction Platform V12 - Enterprise Brand Engine
// แก้ไฟล์นี้เป็นหลัก เมื่อต้องการสร้างเว็บใหม่
// ======================================================

const CONFIG = {
  siteName: 'Kongo Group',
  companyName: 'Kongo Group',
  eventName: 'FIFA Worldcup 2026',
  tagline: 'Prediction Challenge',
  ownerName: 'ThEkOpZ_DrEaMz_2_Team',

  titles: {
    browserTitle: 'Kongo Group | FIFA Worldcup 2026',
    heroKicker: '⚽ Prediction Challenge',
    loginTitle: '👤 กรอกข้อมูลผู้เล่นเพื่อเริ่มทายผล',
    leaderboardTitle: '🏆 Kongo Group Leaderboard Top 20',
    adminTitle: 'Kongo Group Admin Center',
    footerText: '© 2026 Kongo Group • All Rights Reserved'
  },

  theme: {
    primary: '#fbbf24',
    secondary: '#38bdf8',
    accent: '#22c55e',
    bg: '#050814'
  },

  assets: {
    logo: '',
    favicon: ''
  },

  domainHint: '',

  // เปลี่ยน 2 ค่านี้ทุกครั้งเมื่อสร้างเว็บใหม่
  supabaseUrl: 'https://qbqjogfflfnsldjkpiog.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWpvZ2ZmbGZuc2xkamtwaW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzA5ODcsImV4cCI6MjA5NTY0Njk4N30.Gbi0Z814_hW5Z3nzaOr_icMRkguTGsziUbl_7Sy4zAU',

  adminPin: '556677',
  predictionDeadline: '2026-06-28T23:59:59+07:00',
  version: 'v12.1-config-loader-fix'
};

const SITE_NAME = CONFIG.siteName;
const EVENT_NAME = CONFIG.eventName;
const SITE_TAGLINE = CONFIG.tagline;
const SITE_DOMAIN_HINT = CONFIG.domainHint;
const PREDICTION_DEADLINE = CONFIG.predictionDeadline;
