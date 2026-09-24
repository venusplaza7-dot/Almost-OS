import crypto from 'crypto'
export async function publishFix({ pr_url, model, failureMode, original, fixed, explanation, supabase }) {
  const hash = crypto.createHash('sha256').update((original||'')+(fixed||'')).digest('hex').slice(0,16)
  const pov = `pov_${hash}`
  const { data } = await supabase.from('proofs').insert({ pr_url, model: model||'unknown', failure_mode: failureMode, original, fixed, explanation, hash: pov }).select().single()
  return data
}
