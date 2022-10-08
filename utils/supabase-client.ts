import { createClient } from "@supabase/supabase-js";

// https://supabase.com/docs/guides/api#api-url-and-keys
const supabaseUrl = "";
const supabaseAnonKey = "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
