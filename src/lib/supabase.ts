import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pchqjarhsaxiizgwzqtb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjaHFqYXJoc2F4aWl6Z3d6cXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0OTcwOTYsImV4cCI6MjA2NDA3MzA5Nn0.PnlNN-F6e5FQK3sMSlGqyQT9HtZMGEUqfMJJ0lSQe8w';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});