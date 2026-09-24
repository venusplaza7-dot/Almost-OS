let client = { from: () => ({ insert: async () => ({}), select: () => ({ eq: () => ({ order: () => ({ limit: async () => ({ data: [] }) }) }), order: () => ({ limit: async () => ({ data: [] }) }) }), upsert: async () => ({}) }) };
try { const { createClient } = require('@supabase/supabase-js'); const url = process.env.NEXT_PUBLIC_SUPABASE_URL; const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; if(url && key && !url.includes('placeholder')) client = createClient(url, key); } catch(e){}
export const supabase = client
