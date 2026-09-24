export async function checkSpend({ repo, currentCost, toolCalls, supabase }) {
  if (currentCost > 5.00) return { blocked: true, reason: `Session $${currentCost} > $5 - pausing`, action: "pause" }
  if (toolCalls > 50) return { blocked: true, reason: `${toolCalls} calls without checkpoint`, action: "checkpoint" }
  if (supabase) await supabase.from('spend_logs').insert({ repo, cost: currentCost, task: toolCalls })
  return { blocked: false }
}
