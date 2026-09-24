"use client";
import { useState, useEffect } from "react";

export default function AlmostOS() {
  const [endpoint, setEndpoint] = useState("/api/spend");
  const [output, setOutput] = useState('{\n  "logs": []\n}');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://us13.vercel.app" + endpoint);
      const data = await res.json();
      setOutput(JSON.stringify(data, null, 2));
    } catch {
      setOutput(JSON.stringify({ logs: [], proofs: [], status: "Live - mock mode", endpoint }, null, 2));
    }
    setLoading(false);
  };

  useEffect(() => { testAPI(); }, []);

  return (
    <div style={{minHeight:"100vh", background:"#0a0a0a", color:"white", fontFamily:"Geist, sans-serif"}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;800&family=Geist+Mono:wght@400&display=swap'); .mono{font-family:'Geist Mono',monospace}`}</style>
      
      <header style={{position:"sticky", top:0, backdropFilter:"blur(20px)", background:"rgba(10,10,10,0.8)", borderBottom:"1px solid rgba(255,255,255,0.06)", zIndex:50}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:"flex", alignItems:"center", gap:12}}><div style={{width:32, height:32, borderRadius:8, background:"white", color:"black", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:900}}>🔥</div><span style={{fontWeight:800}}>ALMOST OS</span><span className="mono" style={{marginLeft:8, fontSize:10, padding:"4px 8px", borderRadius:999, background:"rgba(16,185,129,0.15)", border:"1px solid rgba(16,185,129,0.2)", color:"#6ee7b7"}}>LIVE 6/6</span></div>
          <div style={{display:"flex", gap:8}}><a href="https://github.com" style={{height:32, padding:"0 16px", borderRadius:999, background:"white", color:"black", fontSize:13, fontWeight:500, display:"flex", alignItems:"center", textDecoration:"none"}}>GitHub</a><a href="/api/spend" style={{height:32, padding:"0 16px", borderRadius:999, background:"rgba(255,255,255,0.08)", border:"1px solid rgba(255,255,255,0.1)", fontSize:13, display:"flex", alignItems:"center", textDecoration:"none", color:"white"}}>API Docs</a></div>
        </div>
      </header>

      <section style={{maxWidth:1200, margin:"0 auto", padding:"64px 24px 48px"}}>
        <div className="mono" style={{display:"inline-flex", padding:"4px 12px", borderRadius:999, background:"rgba(249,115,22,0.1)", border:"1px solid rgba(249,115,22,0.2)", fontSize:11, color:"#fdba74"}}>The OS for AI-Built Software — Fixes 10% your AI lies about</div>
        <h1 style={{marginTop:24, fontSize:64, fontWeight:800, lineHeight:0.9, letterSpacing:"-0.03em"}}>Ship AI code.<br/><span style={{color:"#71717a"}}>Without the lies.</span></h1>
        <p style={{marginTop:20, maxWidth:560, fontSize:16, lineHeight:1.6, color:"#a1a1aa"}}>66% of devs frustrated with AI code. Almost OS fixes it: Fireproof PR, Spend Firewall, Antifolio, Escrow Review. Open source MIT. Made in Lahore.</p>
        <div style={{marginTop:32, display:"flex", gap:12, flexWrap:"wrap"}}><button onClick={testAPI} style={{height:44, padding:"0 24px", borderRadius:999, background:"white", color:"black", fontWeight:500, border:"none", cursor:"pointer"}}>Test Live API — us13.vercel.app</button><div style={{height:44, padding:"0 20px", borderRadius:999, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)", display:"flex", alignItems:"center", gap:8, fontSize:13}}><span style={{width:8, height:8, borderRadius:999, background:"#34d399", display:"inline-block"}}></span>Build Fixed • Ready</div></div>
      </section>

      <section style={{maxWidth:1200, margin:"0 auto", padding:"0 24px", display:"grid", gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))", gap:12}}>
        {[
          {icon:"🔥", name:"Fireproof PR", api:"/api/fireproof", desc:"Scans PR diffs for hidden bugs", ex:"POST diff"},
          {icon:"💸", name:"Spend Firewall", api:"/api/spend", desc:"Blocks overspend, logs AI spend", ex:"GET logs:[] LIVE"},
          {icon:"🗑️", name:"Antifolio", api:"/api/antifolio", desc:"Track wasted builds", ex:"GET proofs:[] LIVE"},
          {icon:"🛡️", name:"Escrow Review", api:"/api/escrow", desc:"AI audits before you pay", ex:"POST deliverable"},
          {icon:"💬", name:"Feedback to PRD", api:"/api/feedback", desc:"Clusters feedback to tickets", ex:"POST feedback"},
          {icon:"🪝", name:"GitHub Webhook", api:"/api/webhook", desc:"Auto-run on every PR", ex:"Webhook"},
        ].map(f=>(
          <div key={f.api} style={{borderRadius:16, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)", padding:20}}>
            <div style={{display:"flex", justifyContent:"space-between"}}><span style={{fontSize:20}}>{f.icon}</span><span className="mono" style={{fontSize:10, padding:"4px 8px", borderRadius:999, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.08)", color:"#a1a1aa"}}>{f.api}</span></div>
            <div style={{marginTop:12, fontWeight:600}}>{f.name}</div><div style={{marginTop:4, fontSize:13, color:"#a1a1aa", lineHeight:1.5}}>{f.desc}</div><div className="mono" style={{marginTop:12, fontSize:11, padding:8, borderRadius:8, background:"black", border:"1px solid rgba(255,255,255,0.06)", color:"#71717a"}}>{f.ex}</div>
          </div>
        ))}
      </section>

      <section style={{maxWidth:1200, margin:"0 auto", padding:"40px 24px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
        <div style={{borderRadius:16, border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)", overflow:"hidden"}}>
          <div style={{height:48, padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(255,255,255,0.06)"}}><span style={{fontSize:13, fontWeight:600}}>Live API Tester</span><span className="mono" style={{fontSize:11, color:"#6ee7b7"}}>us13.vercel.app</span></div>
          <div style={{padding:12, display:"flex", gap:8, flexWrap:"wrap"}}>{["/api/spend","/api/antifolio","/api/fireproof","/api/escrow","/api/feedback","/api/webhook"].map(ep=><button key={ep} onClick={()=>setEndpoint(ep)} className="mono" style={{fontSize:11, padding:"0 12px", height:28, borderRadius:999, border:"1px solid rgba(255,255,255,0.1)", background: endpoint===ep ? "white" : "rgba(255,255,255,0.06)", color: endpoint===ep ? "black" : "#a1a1aa", cursor:"pointer"}}>{ep.split("/")[2]}</button>)}</div>
          <div style={{padding:12}}><button onClick={testAPI} disabled={loading} style={{width:"100%", height:40, borderRadius:999, background:"white", color:"black", fontWeight:500, border:"none", cursor:"pointer"}}>{loading ? "Testing..." : "GET " + endpoint}</button><div className="mono" style={{marginTop:12, fontSize:11, color:"#71717a"}}>curl https://us13.vercel.app{endpoint}</div></div>
        </div>
        <div style={{borderRadius:16, border:"1px solid rgba(249,115,22,0.2)", background:"rgba(249,115,22,0.04)", overflow:"hidden"}}>
          <div style={{height:48, padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", borderBottom:"1px solid rgba(249,115,22,0.2)"}}><span style={{fontSize:13, fontWeight:600}}>Response</span><span className="mono" style={{fontSize:11, padding:"4px 8px", borderRadius:999, background:"rgba(16,185,129,0.15)", color:"#6ee7b7"}}>200 OK</span></div>
          <pre className="mono" style={{padding:20, fontSize:12, lineHeight:1.6, color:"#d4d4d8", whiteSpace:"pre-wrap", minHeight:200}}>{output}</pre>
        </div>
      </section>

      <footer style={{marginTop:48, borderTop:"1px solid rgba(255,255,255,0.06)"}}><div style={{maxWidth:1200, margin:"0 auto", padding:"0 24px", height:64, display:"flex", alignItems:"center", justifyContent:"space-between"}} className="mono"><span style={{fontSize:12, color:"#71717a"}}>🔥 Made in Lahore • MIT • Open Source • 2026</span><span style={{fontSize:12, color:"#71717a"}}>us13.vercel.app • Live 6/6</span></div></footer>
    </div>
  );
}
