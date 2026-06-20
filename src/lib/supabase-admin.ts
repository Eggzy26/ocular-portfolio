import { createClient } from '@supabase/supabase-js';

export const supabaseAdmin = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY ?? import.meta.env.SUPABASE_SERVICE_KEY
);
