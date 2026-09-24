import { clusterFeedback } from '../../../lib/feedbackToPRD'
export async function POST(req) {
  const { items } = await req.json()
  const clusters = await clusterFeedback(items||[])
  return Response.json({ clusters })
}
