// Supabase config
// หมายเหตุ: anon key อยู่หน้าเว็บได้ แต่ต้องเปิด RLS Policy ใน Supabase ให้ถูกต้อง
const supabaseUrl = 'https://qbqjogfflfnsldjkpiog.supabase.co';
const supabaseKey = 'REPLACE_WITH_YOUR_SUPABASE_ANON_KEY';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// ตั้งเวลาปิดรับทายผลตามเวลาประเทศไทย
const PREDICTION_DEADLINE = '2026-06-28T23:59:59+07:00';
