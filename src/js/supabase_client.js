import { createClient } from "@supabase/supabase-js";

const PUBLIC_URL = import.meta.env.PUBLIC_URL
const API_KEY = import.meta.env.PUBLIC_SUPABASE_API_KEY

export const supabaseClient = createClient(PUBLIC_URL, API_KEY)
