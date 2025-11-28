// src/lib/supabase.ts
import { createClient } from "@supabase/supabase-js";
import type { Session } from "@supabase/supabase-js";

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://byhdvnksjyrhsdwwexkg.supabase.co";
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5aGR2bmtzanlyaHNkd3dleGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2OTI0NDUsImV4cCI6MjA3OTI2ODQ0NX0.6mDHu7QrSmtrSAJshq0YoVaxOTbQkMiKE_L5ptmQv3s";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://javledjpcqivzukuoyct.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphdmxlZGpwY3Fpdnp1a3VveWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyOTE1NjYsImV4cCI6MjA3ODg2NzU2Nn0.s45I_n3tnEsuOvc4EfsioKt3tSbG4ygZSYqsiSrXVsQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export type SupabaseSession = Session;
