import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export function isSupabaseConfigured(): boolean {
  return (
    Boolean(supabaseUrl && supabaseKey) &&
    !supabaseUrl.includes("your_supabase") &&
    !supabaseKey.includes("your_supabase")
  );
}

export const supabase: SupabaseClient | null = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseKey)
  : null;
