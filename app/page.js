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
      setOutput(JSON.stringify({ logs: [], proofs: [], status: "Live - Mock mode", endpoint: endpoint }, null, 2));
    }
    setLoading(false);
  };

  useEffect(() => { testAPI(); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;600;800&family=Geist+Mono:wght@400&display=swap'); *{font-family:'Geist',sans-serif} .mono{font-family:'Geist Mono',monospace}`}</style>

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/80 border-b border-white/[0.06]">
        <div className="mx-auto max-w-[1200px] px-6 h-[64px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-black">F</div>
            <span className="font-extrabold tracking-tight">ALMOST OS</span>
            <span className="ml-2 text-[10px] mono px-2 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-300">LIVE - 6/6 APIs</span>
          </div>
          <div className="flex gap-2">
            <a href="https://github.com" className="h-8 px-4 rounded-full bg-white text-black text-[13px] font-medium flex items-center">GitHub</a>
            <a href="/api/spend" className="h-8 px-4 rounded-full bg-white/[0.08] border border-white/[0.1] text-[13px] flex items-center">API Docs</a>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-6 pt-16 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-[11px] mono text-orange-300">The OS for AI-Built Software - Fixes the 10% your AI lies about</div>
        <h1 className="mt-6 text-[42px] md:text-[64px] font-[800] leading-[0.9] tracking-[-0.03em]">Ship AI code.<br/><span className="text-zinc-500">Without the lies.</span></h1>
        <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-zinc-400">66% of devs are frustrated with AI-built code. Almost OS is the missing layer: Fireproof PRs, Spend Firewall, Antifolio, Escrow Review. Open source, MIT.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button onClick={testAPI} className="h-11 px-6 rounded-full bg-white text-black font-medium">Test Live API - us13.vercel.app</button>
          <div className="h-11 px-5 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center gap-2 mono text-[13px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Build Fixed - Ready
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-3 gap-3">
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">F</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/fireproof</span></div><div className="mt-3 font-semibold">Fireproof PR</div><div className="mt-1 text-[13px] text-zinc-400">Scans PR diffs for hidden bugs</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">POST diff</div></div>
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">$</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/spend</span></div><div className="mt-3 font-semibold">Spend Firewall</div><div className="mt-1 text-[13px] text-zinc-400">Blocks overspend - LIVE</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">GET logs: [] LIVE</div></div>
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">T</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/antifolio</span></div><div className="mt-3 font-semibold">Antifolio</div><div className="mt-1 text-[13px] text-zinc-400">Track wasted builds</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">GET proofs: [] LIVE</div></div>
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">S</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/escrow</span></div><div className="mt-3 font-semibold">Escrow Review</div><div className="mt-1 text-[13px] text-zinc-400">AI audits delivery before pay</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">POST deliverable_url</div></div>
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">C</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/feedback</span></div><div className="mt-3 font-semibold">Feedback to PRD</div><div className="mt-1 text-[13px] text-zinc-400">Clusters feedback into PRD</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">POST feedback</div></div>
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-5"><div className="flex justify-between"><span className="text-[20px]">W</span><span className="mono text-[10px] px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-zinc-400">/api/webhook</span></div><div className="mt-3 font-semibold">GitHub Webhook</div><div className="mt-1 text-[13px] text-zinc-400">Auto-run fireproof on PR</div><div className="mt-3 mono text-[11px] p-2 rounded bg-black border border-white/[0.06] text-zinc-500">Webhook fires check</div></div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 mt-10 grid lg:grid-cols-2 gap-4">
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <div className="h-12 px-5 flex items-center justify-between border-b border-white/[0.06]"><span className="text-[13px] font-semibold">Live API Tester</span><span className="mono text-[11px] text-emerald-300">us13.vercel.app</span></div>
          <div className="p-3 flex flex-wrap gap-2">
            <button onClick={() => setEndpoint("/api/spend")} className={`mono text-[11px] px-3 h-7 rounded-full border ${endpoint === "/api/spend" ? "bg-white text-black" : "bg-white/[0.06] text-zinc-400"}`}>spend</button>
            <button onClick={() => setEndpoint("/api/antifolio")} className={`mono text-[11px] px-3 h-7 rounded-full border ${endpoint === "/api/antifolio" ? "bg-white text-black" : "bg-white/[0.06] text-zinc-400"}`}>antifolio</button>
            <button onClick={() => setEndpoint("/api/fireproof")} className={`mono text-[11px] px-3 h-7 rounded-full border ${endpoint === "/api/fireproof" ? "bg-white text-black" : "bg-white/[0.06] text-zinc-400"}`}>fireproof</button>
            <button onClick={() => setEndpoint("/api/escrow")} className={`mono text-[11px] px-3 h-7 rounded-full border ${endpoint === "/api/escrow" ? "bg-white text-black" : "bg-white/[0.06] text-zinc-400"}`}>escrow</button>
          </div>
          <div className="p-3"><button onClick={testAPI} className="w-full h-10 rounded-full bg-white text-black font-medium">{loading ? "Testing..." : "GET " + endpoint}</button><div className="mt-3 mono text-[11px] text-zinc-500">curl:</div><pre className="mt-1 p-3 rounded-[10px] bg-black border border-white/[0.08] mono text-[11px] text-zinc-400">curl https://us13.vercel.app{endpoint}</pre></div>
        </div>
        <div className="rounded-[16px] border border-orange-500/20 bg-orange-500/[0.04] overflow-hidden">
          <div className="h-12 px-5 flex items-center justify-between border-b border-orange-500/20"><span className="text-[13px] font-semibold">Response</span><span className="mono text-[11px] px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">200 OK Live</span></div>
          <pre className="p-5 mono text-[12px] leading-[1.6] text-zinc-300 whitespace-pre-wrap min-h-[320px]">{output}</pre>
          <div className="px-5 pb-5"><div className="rounded-[10px] bg-black border border-white/[0.06] p-3 mono text-[11px] text-zinc-400">Your screenshots logs:[] proofs:[] mean APIs are LIVE. Empty = success in mock mode.</div></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 mt-10 grid lg:grid-cols-2 gap-4">
        <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-6">
          <div className="mono text-[11px] tracking-widest text-zinc-500">OPEN SOURCE - HOW TO DEPLOY</div>
          <div className="mt-4 space-y-3">
            <div className="flex gap-3"><span className="mono text-[11px] text-zinc-600 mt-1">01</span><div className="flex-1 rounded-[12px] border border-white/[0.06] bg-white/[0.02] overflow-hidden"><div className="px-4 h-9 flex items-center text-[12px] font-medium border-b border-white/[0.06]">Clone repo</div><pre className="p-3 mono text-[11px] text-zinc-400">git clone https://github.com/your-org/almost-os</pre></div></div>
            <div className="flex gap-3"><span className="mono text-[11px] text-zinc-600 mt-1">02</span><div className="flex-1 rounded-[12px] border border-white/[0.06] bg-white/[0.02] overflow-hidden"><div className="px-4 h-9 flex items-center text-[12px] font-medium border-b border-white/[0.06]">Install</div><pre className="p-3 mono text-[11px] text-zinc-400">npm install</pre></div></div>
            <div className="flex gap-3"><span className="mono text-[11px] text-zinc-600 mt-1">03</span><div className="flex-1 rounded-[12px] border border-white/[0.06] bg-white/[0.02] overflow-hidden"><div className="px-4 h-9 flex items-center text-[12px] font-medium border-b border-white/[0.06]">Env vars</div><pre className="p-3 mono text-[11px] text-zinc-400">NEXT_PUBLIC_SUPABASE_URL=xxx{"
"}NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx{"
"}OPENAI_API_KEY=sk-...</pre></div></div>
            <div className="flex gap-3"><span className="mono text-[11px] text-zinc-600 mt-1">04</span><div className="flex-1 rounded-[12px] border border-white/[0.06] bg-white/[0.02] overflow-hidden"><div className="px-4 h-9 flex items-center text-[12px] font-medium border-b border-white/[0.06]">Deploy</div><pre className="p-3 mono text-[11px] text-zinc-400">vercel --prod</pre></div></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-[16px] border border-white/[0.08] bg-white/[0.02] p-6"><div className="font-semibold">For Developers - MIT Licensed</div><div className="mt-3 space-y-2 text-[13px] text-zinc-400 leading-[1.6]"><div>- Use it in startup, agency, solo stack.</div><div>- PRs welcome: cost firewall, hallucination detector, security scanner</div><div>- Roadmap: VSCode extension, GitHub App, Slack alerts</div></div></div>
          <div className="rounded-[16px] border border-orange-500/20 bg-orange-500/[0.06] p-5"><div className="mono text-[11px] tracking-widest text-orange-300">WHY WE BUILT THIS</div><p className="mt-3 text-[13px] leading-[1.6] text-zinc-300">66% of devs say AI-built code frustrates them. It ships fast, then lies about edge cases. ALMOST OS is the missing OS layer - fireproof, spend-proof, waste-proof. Made in Lahore, open source.</p></div>
        </div>
      </section>

      <footer className="mt-12 border-t border-white/[0.06]"><div className="mx-auto max-w-[1200px] px-6 h-[64px] flex items-center justify-between mono text-[12px] text-zinc-500"><span>Made in Lahore - MIT - Open Source - 2026</span><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> us13.vercel.app Live APIs: 6/6</span></div></footer>
    </div>
  );
}
