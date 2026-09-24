import { fireproofPR } from '../../../lib/fireproof'
import { checkSpend } from '../../../lib/spendFirewall'
import { publishFix } from '../../../lib/antiFolio'
import { supabase } from '../../../lib/supabase'

export async function POST(req){
  try{
    const payload = await req.json()
    if(!['opened','synchronize'].includes(payload.action)) return Response.json({ok:true,skip:payload.action})
    const pr = payload.pull_request
    const diff = await fetch(pr.diff_url).then(r=>r.text()).catch(()=>pr.body||'')
    const spendCheck = await checkSpend({repo:payload.repository.full_name,currentCost:2.34,toolCalls:12,supabase})
    if(spendCheck.blocked) return Response.json({ok:true,blocked:spendCheck.reason})
    const result = await fireproofPR({diff})
    if(result.hasBug){
      await publishFix({pr_url:pr.html_url,model:'gpt-4o',failureMode:result.failureMode,original:diff.slice(0,2000),fixed:result.patch?.slice(0,2000)||'',explanation:result.explanation,supabase})
    }
    return Response.json({ok:true,result})
  }catch(e){
    return Response.json({ok:true,error:e.message})
  }
}
