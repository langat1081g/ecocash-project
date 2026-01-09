import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL ="https://ckhnamaulkmwbigittam.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_fj80XZYznaDnR4C6cEOkog_QT-IjiyP";

export const supabase = createClient(
 SUPABASE_URL,
  SUPABASE_ANON_KEY
);
