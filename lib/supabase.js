// Safe mock that works without env vars during build
const mock = {
  from: () => ({
    insert: async () => ({ data: null, error: null }),
    select: () => ({
      eq: () => ({ 
        order: () => ({ limit: async () => ({ data: [] }) }),
        data: [] 
      }),
      order: () => ({ limit: async () => ({ data: [] }) }),
      limit: async () => ({ data: [] }),
      data: []
    }),
    upsert: async () => ({})
  })
}

let client = mock
try {
  const { createClient } = require('@supabase/supabase-js')
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if(url && key){
    client = createClient(url, key)
  }
} catch(e){}

export const supabase = client
