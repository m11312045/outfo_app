import { createClient } from "@supabase/supabase-js";

// ⚠️ Service Role Key，不是 anon key
const supabase = createClient(
  "https://javledjpcqivzukuoyct.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphdmxlZGpwY3Fpdnp1a3VveWN0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2MzI5MTU2NiwiZXhwIjoyMDc4ODY3NTY2fQ.x6lY9ktrGBX3nlFc830MJGyRa1s4XwevMxx5sPWIiaE"   // 非常重要
);

// 你想建立的 user UUID / email / password
const userId = "e5f6cee1-d65d-4d3c-a843-496f63a638d4";
const email = "kai@example.com";
const password = "12345678";

const run = async () => {
  const { data, error } = await supabase.auth.admin.createUser({
    id: userId,
    email: email,
    password: password,
    email_confirm: true,  // 👉 建立即為已驗證
  });

  console.log("data:", data);
  console.error("error:", error);
};

run();
