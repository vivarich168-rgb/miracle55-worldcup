// Supabase config - Prediction Platform V12
if (!window.supabase) {
  alert('โหลด Supabase Library ไม่สำเร็จ กรุณาเช็กอินเทอร์เน็ตหรือ CDN');
}

const supabaseUrl = CONFIG.supabaseUrl;
const supabaseKey = CONFIG.supabaseAnonKey;

const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false, autoRefreshToken: false }
});

console.log('✅ Supabase config loaded:', supabaseUrl);
console.log('✅ Site:', CONFIG.siteName);
