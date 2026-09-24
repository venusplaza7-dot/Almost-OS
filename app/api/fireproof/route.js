import { fireproofPR } from '../../../lib/fireproof.js'
export async function POST(req) {
  const { diff } = await req.json()
  const r = await fireproofPR({ diff })
  return Response.json(r)
}
