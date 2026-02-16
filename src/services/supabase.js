import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://kptklnzafzkvdelnkfjk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwdGtsbnphZnprdmRlbG5rZmprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4MDg2NjksImV4cCI6MjA2OTM4NDY2OX0.m8w-KkkMMh8TUiWx3eY7JwMc-1YtoWB2zl3xP8g6nT8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
