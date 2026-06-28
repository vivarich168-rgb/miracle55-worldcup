// Supabase config - Prediction Platform V12.1
// โหลด config.js ก่อนไฟล์นี้เสมอ

if (!window.supabase) {
  alert('โหลด Supabase Library ไม่สำเร็จ กรุณาเช็กอินเทอร์เน็ตหรือ CDN');
}

if (typeof CONFIG === 'undefined') {
  alert('ไม่พบ CONFIG กรุณาตรวจสอบว่า index.html/admin.html โหลด config.js ก่อน supabase-config.js');
  throw new Error('CONFIG is not defined. Load config.js before supabase-config.js');
}

const supabaseUrl = CONFIG.supabaseUrl;
const supabaseKey = CONFIG.supabaseAnonKey;

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

console.log('✅ Supabase config loaded:', supabaseUrl);
console.log('✅ Site:', CONFIG.siteName);
