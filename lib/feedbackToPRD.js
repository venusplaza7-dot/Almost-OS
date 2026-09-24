export async function clusterFeedback(items) {
  const clusters = {}
  for (const f of items||[]) {
    const key = f.text.toLowerCase().includes('login')? 'login-performance' : 'general'
    if (!clusters[key]) clusters[key]=[]
    clusters[key].push(f)
  }
  return Object.entries(clusters).map(([k,v])=>({ cluster:k, count:v.length, examples:v.slice(0,3), prd: `As user, I want ${k} improved. Acceptance: <100ms p95` }))
}
