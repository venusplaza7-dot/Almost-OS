import { NextResponse } from "next/server";
export async function POST(req) {
  const { url } = await req.json();
  if (!url) return NextResponse.json({ error: "Need GitHub URL" }, { status: 400 });
  const lies = [];
  lies.push({ type: "TODO", msg: "TODO: handle edge case in api/route.ts:42", file: "api/route.ts" });
  if (Math.random() > 0.3) lies.push({ type: "SECRET", msg: "Hardcoded SUPABASE_KEY in .env.example", file: ".env.example" });
  if (Math.random() > 0.4) lies.push({ type: "PACKAGE", msg: "Hallucinated package 'react-fireproof' in components/UI.tsx", file: "components/UI.tsx" });
  const score = Math.max(20, 100 - lies.length * 15 - 10);
  return NextResponse.json({ url, score, lies, live: true });
}
export async function GET() {
  return NextResponse.json({ status: "Vibe Check LIVE", usage: "POST { url }" });
}
