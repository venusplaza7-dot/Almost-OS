import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export async function fireproofPR({ diff }) {
  const prompt = `You are ALMOST OS Fireproof. 66% devs frustrated by almost right AI code. Given PR diff, find subtle bug. Return JSON: {hasBug, failureMode, reproTest, explanation, patch, confidence} Diff:${(diff||'').slice(0,12000)}`
  const res = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  })
  return JSON.parse(res.choices[0].message.content)
}
