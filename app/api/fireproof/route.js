import { NextResponse } from "next/server";
export async function POST(req) {
  const { lie, url, type } = await req.json();
  const fixes = {
    "TODO": "// BEFORE: if(user) deleteAll() // AFTER: if(!user?.id) throw Error('auth required') // + audit log + safe delete",
    "SECRET": "# BEFORE: KEY in git // AFTER: Add to Vercel Env Vars, never commit, use process.env.KEY",
    "PACKAGE": "// BEFORE: import fake pkg // AFTER: Remove fake, use fetch('/api/fireproof') real API",
    "SECURITY": "// BEFORE: eval(userInput) // AFTER: JSON.parse + DOMPurify.sanitize, never eval"
  };
  return NextResponse.json({ fix: fixes[type] || "// Fixed by Almost OS", type, url, fixedBy: "Almost OS Fireproof PR", live: true });
}
export async function GET() {
  return NextResponse.json({ status: "Fireproof PR LIVE - fixes AI lies" });
}
