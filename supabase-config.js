// Supabase config - Miracle55 Worldcup
// ใช้ anon public key เท่านั้น ห้ามใช้ service_role key บนหน้าเว็บ
const supabaseUrl = 'https://qbqjogfflfnsldjkpiog.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFicWpvZ2ZmbGZuc2xkamtwaW9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAwNzA5ODcsImV4cCI6MjA5NTY0Njk4N30.Gbi0Z814_hW5Z3nzaOr_icMRkguTGsziUbl_7Sy4zAU';

if (!window.supabase) {
  alert('โหลด Supabase Library ไม่สำเร็จ กรุณาเช็กอินเทอร์เน็ตหรือ CDN');
}

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

const PREDICTION_DEADLINE = '2026-06-28T23:59:59+07:00';


// ===============================
// BRAND CONFIG - แก้ชื่อเว็บตรงนี้จุดเดียว
// ===============================
const SITE_NAME = 'Miracle55';
const EVENT_NAME = 'FIFA Worldcup 2026';
const SITE_TAGLINE = 'Prediction Challenge';
const SITE_DOMAIN_HINT = 'worldcup.miracle55.com';
// ===============================

console.log('✅ Supabase config loaded:', supabaseUrl);
