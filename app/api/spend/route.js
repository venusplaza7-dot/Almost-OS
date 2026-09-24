import { supabase } from '../../../lib/supabase.js'
export async function GET() {
  const { data } = await supabase.from('spend_logs').select('*').order('created_at',{ascending:false}).limit(20)
  return Response.json({ logs:data })
}
export async function POST(req) {
  const { repo, cost, task } = await req.json()
  const { data } = await supabase.from('spend_logs').insert({ repo, cost, task }).select().single()
  return Response.json(data)
}
