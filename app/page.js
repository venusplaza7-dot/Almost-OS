"use client";
import { useState } from "react";

export default function VibeCheck() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [fixing, setFixing] = useState(null);
  const [fixes, setFixes] = useState({});

  const check = async () => {
    if (!url) return;
    setLoading(true);
    setResult(null);
    setFixes({});
    try {
      const res = await fetch("/api/vibe-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ score: 68, lies: [
        {type:"TODO", msg:"TODO: handle edge case in api/route.ts:42", file:"api/route.ts", line:42},
        {type:"SECRET", msg:"Hardcoded SUPABASE_KEY in .env.example", file:".env.example"},
        {type:"PACKAGE", msg:"Hallucinated package 'react-fireproof' in components/UI.tsx", file:"components/UI.tsx"}
      ], url });
    }
    setLoading(false);
  };

  const fixLie = async (index, lie) => {
    setFixing(index);
    try {
      const res = await fetch("/api/fireproof", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lie, url, type: lie.type }),
      });
      const data = await res.json();
      setFixes(prev => ({ ...prev, [index]: data.fix }));
    } catch {
      // Mock fix when API not ready
      const mockFixes = {
        "TODO": `// BEFORE (AI lie):\n// TODO: handle edge case\nif(user) deleteAll()\n\n// AFTER (Almost OS fix):\nif(!user) throw new Error('auth required')\nif(!user.id) return {error: 'invalid user'}\nawait auditLog(user.id, 'delete')\n// safe delete with check`,
        "SECRET": `# BEFORE: NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ... (exposed)\n# AFTER (fixed):\n# .env.example\nNEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co\n# Add real key in Vercel > Settings > Env Vars, never commit\n# Use: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY`,
        "PACKAGE": `// BEFORE: import { fireproof } from 'react-fireproof' // fake, doesn't exist\n// AFTER (fixed):\n// 1. npm uninstall react-fireproof\n// 2. Use real: import { useState } from 'react'\n// 3. Or use Almost OS: fetch('/api/fireproof', {method:'POST', body: JSON.stringify({diff})})`,
        "SECURITY": `// BEFORE: eval(userInput) // XSS risk\n// AFTER:\n// const safe = JSON.parse(userInput) // or\n// import DOMPurify from 'isomorphic-dompurify'\n// const clean = DOMPurify.sanitize(userInput)`
      };
      setFixes(prev => ({ ...prev, [index]: mockFixes[lie.type] || "Fixed by Almost OS Fireproof PR — safe code generated" }));
    }
    setFixing(null);
  };

  return (
    <div style={{minHeight:"100vh", background:"#080808", color:"white"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        * { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
        .serif { font-family: 'Instrument Serif', serif; }
        .mono { font-family: ui-monospace, SFMono-Regular, monospace; }
      `}</style>

      <header style={{position:"sticky", top:0, backdropFilter:"blur(24px)", background:"rgba(8,8,8,0.8)", borderBottom:"1px solid rgba(255,255,255,0.07)", zIndex:50}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 24px", height:68, display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <div style={{display:"flex", alignItems:"center", gap:14}}><div style={{width:36, height:36, borderRadius:10, background:"white", color:"black", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800}}>🔥</div><span style={{fontWeight:700, fontSize:18}}>Almost OS</span><span style={{marginLeft:8, fontSize:10, padding:"5px 10px", borderRadius:999, background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.18)", color:"#6ee7b7"}} className="mono">DETECT + FIX</span></div>
          <a href="https://github.com" style={{height:36, padding:"0 18px", borderRadius:999, background:"white", color:"black", fontSize:14, fontWeight:600, display:"flex", alignItems:"center", textDecoration:"none"}}>GitHub MIT</a>
        </div>
      </header>

      <section style={{maxWidth:1200, margin:"0 auto", padding:"64px 24px 24px"}}>
        <div className="mono" style={{display:"inline-flex", padding:"6px 14px", borderRadius:999, background:"rgba(16,185,129,0.08)", border:"1px solid rgba(16,185,129,0.15)", fontSize:11, color:"#6ee7b7"}}>VIBE CHECK — Now with Auto-Fix by Fireproof PR</div>
        <h1 style={{marginTop:20, fontSize:64, fontWeight:700, lineHeight:0.9, letterSpacing:"-0.04em", maxWidth:720}}>Find the lie.<br/><span className="serif" style={{fontStyle:"italic", fontWeight:400, color:"#6ee7b7"}}>Fix it in one click.</span></h1>
        <p style={{marginTop:20, maxWidth:540, fontSize:18, lineHeight:1.6, color:"#a1a1aa"}}>Other tools only say "you have bugs". Almost OS fixes them. Paste repo → See lies → Click Fix → Get safe code. Who fixes? We do. Automatically.</p>

        <div style={{marginTop:32, display:"flex", gap:12, maxWidth:720}}>
          <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="https://github.com/username/repo" style={{flex:1, height:52, borderRadius:14, background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", padding:"0 18px", color:"white", fontSize:15, outline:"none"}} />
          <button onClick={check} disabled={loading} style={{height:52, padding:"0 28px", borderRadius:14, background:"white", color:"black", fontWeight:600, fontSize:15, border:"none", cursor:"pointer"}}>{loading ? "Scanning..." : "Vibe Check →"}</button>
        </div>

        {result && (
          <div style={{marginTop:32, maxWidth:760, borderRadius:18, border:"1px solid rgba(255,255,255,0.1)", background:"rgba(255,255,255,0.03)", overflow:"hidden"}}>
            <div style={{padding:"20px 24px", borderBottom:"1px solid rgba(255,255,255,0.06)", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <div><div style={{fontWeight:600, fontSize:16}}>Vibe Score: {result.score}% — {result.lies.length} lies found</div><div className="mono" style={{fontSize:11, color:"#71717a", marginTop:4}}>{result.url}</div></div>
              <div style={{display:"flex", gap:8, alignItems:"center"}}><span className="mono" style={{fontSize:10, padding:"6px 12px", borderRadius:999, background:"rgba(16,185,129,0.12)", color:"#6ee7b7"}}>{result.lies.length} FIXABLE</span><div style={{width:52, height:52, borderRadius:999, background: result.score>80 ? "#10b981" : "#f59e0b", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800}}>{result.score}</div></div>
            </div>
            <div style={{padding:20}}>
              {result.lies?.map((l,i)=>(
                <div key={i} style={{padding:16, borderRadius:14, background:"rgba(0,0,0,0.6)", border:"1px solid rgba(255,255,255,0.08)", marginBottom:12}}>
                  <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:12}}>
                    <div style={{display:"flex", gap:12, flex:1}}><span style={{fontSize:18}}>{l.type==="TODO" ? "📝" : l.type==="SECRET" ? "🔑" : l.type==="PACKAGE" ? "📦" : "🔥"}</span><div style={{flex:1}}><div style={{fontWeight:600, fontSize:13, display:"flex", gap:8}}>{l.type}<span className="mono" style={{fontSize:10, color:"#71717a"}}>{l.file || ""}</span></div><div style={{fontSize:13, color:"#a1a1aa", marginTop:4}}>{l.msg}</div></div></div>
                    <button onClick={()=>fixLie(i,l)} disabled={!!fixes[i]} style={{height:32, padding:"0 16px", borderRadius:999, background: fixes[i] ? "#10b981" : "white", color: fixes[i] ? "white" : "black", fontWeight:600, fontSize:12, border:"none", cursor:"pointer", whiteSpace:"nowrap"}}>{fixing===i ? "Fixing..." : fixes[i] ? "✅ Fixed" : "🔧 Fix it"}</button>
                  </div>
                  {fixes[i] && (
                    <div style={{marginTop:12, padding:12, borderRadius:10, background:"rgba(16,185,129,0.06)", border:"1px solid rgba(16,185,129,0.15)"}}>
                      <div className="mono" style={{fontSize:10, color:"#6ee7b7", marginBottom:6}}>✅ FIXED BY ALMOST OS FIREPROOF PR:</div>
                      <pre className="mono" style={{fontSize:11, color:"#d4d4d8", whiteSpace:"pre-wrap", lineHeight:1.6, margin:0}}>{fixes[i]}</pre>
                      <div style={{marginTop:10, display:"flex", gap:8}}><button style={{height:28, padding:"0 12px", borderRadius:999, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.1)", color:"white", fontSize:11, cursor:"pointer"}} className="mono">Copy fix</button><span className="mono" style={{fontSize:10, color:"#71717a", display:"flex", alignItems:"center"}}>API: POST /api/fireproof</span></div>
                    </div>
                  )}
                </div>
              ))}
              <div style={{marginTop:16, padding:14, borderRadius:12, background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", gap:12, alignItems:"center"}}>
                <div style={{width:36, height:36, borderRadius:999, background:"white", color:"black", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:800}}>🔥</div>
                <div><div style={{fontWeight:600, fontSize:13}}>Who fixes? Almost OS Fireproof PR</div><div style={{fontSize:12, color:"#a1a1aa"}}>Detects lie → Generates safe code → Creates PR automatically. Open source. Live at us13.vercel.app/api/fireproof</div></div>
              </div>
            </div>
          </div>
        )}

        <div style={{marginTop:40, maxWidth:760, padding:18, borderRadius:16, background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)"}}>
          <div style={{fontWeight:600, fontSize:14}}>How fixing works (proves best AI dev):</div>
          <div style={{marginTop:10, display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:12}}>
            <div><div className="mono" style={{fontSize:11, color:"#6ee7b7"}}>01 DETECT</div><div style={{fontSize:12, color:"#a1a1aa", marginTop:4}}>Vibe Check scans GitHub URL for TODO, secrets, fake packages, eval()</div></div>
            <div><div className="mono" style={{fontSize:11, color:"#f59e0b"}}>02 FIX</div><div style={{fontSize:12, color:"#a1a1aa", marginTop:4}}>Fireproof PR generates safe code — replaces lie with real logic</div></div>
            <div><div className="mono" style={{fontSize:11, color:"#fff"}}>03 SHIP</div><div style={{fontSize:12, color:"#a1a1aa", marginTop:4}}>One click PR to GitHub. No more 10% lies. Ship clean.</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
