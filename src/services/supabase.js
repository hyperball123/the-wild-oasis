import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gpzcjmnbydvddazntmik.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwemNqbW5ieWR2ZGRhem50bWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MDExNTUsImV4cCI6MjAxODM3NzE1NX0.lOIPU4cE3WzzaOZvWFROK6a4s_UgR9KaOj32F-XnLBU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
