export default function Home() {
  return (
    <div style={{padding:'40px', maxWidth:'800px', margin:'0 auto', background:'#0a0a0a', color:'white', fontFamily:'monospace', minHeight:'100vh'}}>
      <h1>🔥 ALMOST OS</h1>
      <p>The OS for AI-Built Software — Fixes the 10% your AI lies about</p>
      <p>66% devs frustrated by almost right code | 685 gaps found</p>
      <hr style={{borderColor:'#333', margin:'20px 0'}}/>
      <h3>✅ Live APIs:</h3>
      <ul>
        <li><a href="/api/antifolio" style={{color:'#0af'}}>/api/antifolio</a> - Anti-Portfolio</li>
        <li><a href="/api/spend" style={{color:'#0af'}}>/api/spend</a> - Spend logs</li>
        <li>POST /api/fireproof - send diff</li>
        <li>POST /api/escrow - security audit</li>
        <li>POST /api/feedback - cluster to PRD</li>
        <li>POST /api/webhook - GitHub PR webhook</li>
      </ul>
      <p style={{color:'#888', marginTop:'30px'}}>Build fixed - no JSX errors</p>
    </div>
  )
}
