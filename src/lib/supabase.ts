import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration - replace with your actual values
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only create client if credentials are provided
export const supabase: SupabaseClient | null = 
  supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project.supabase.co' && supabaseAnonKey !== 'your-anon-key'
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Founders table interface
export interface Founder {
  id: number;
  username: string;
  email: string;
  image_url: string | null;
  transaction_hash: string;
  amount: number;
  tier: 'VIP' | 'GOD';
  slot_number: number | null;
  created_at: string;
}

