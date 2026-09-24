import { supabase } from '../../../lib/supabase'
export async function GET() {
  const { data } = await supabase.from('proofs').select('*').order('created_at',{ascending:false}).limit(50)
  return Response.json({ proofs:data })
}
