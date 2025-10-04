import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kgstuurlhljfqbxtndcw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnc3R1dXJsaGxqZnFieHRuZGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MjAwODUsImV4cCI6MjA1ODk5NjA4NX0.XZECnAv6cGCzUBHjnW-N1Xw2RCEC8HNipVNjicEAeE8';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

