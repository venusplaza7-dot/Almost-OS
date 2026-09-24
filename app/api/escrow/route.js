import { auditRepo, generateCleanExport } from '../../../lib/escrow.js'
export async function POST(req) {
  const { files } = await req.json()
  const findings = auditRepo(files||[])
  const clean = generateCleanExport(findings)
  return Response.json({ findings, clean })
}
