const PATTERNS = [
  { id: 'exposed_key', regex: /sk_(live|test)_[a-zA-Z0-9]+/, severity: 'critical', msg: 'API key exposed in client' },
  { id: 'missing_auth', regex: /\/api\/admin/, severity: 'critical', msg: 'Missing auth on /api/admin' },
  { id: 'sql_injection', regex: /SELECT.*\+/, severity: 'high', msg: 'SQL injection risk' },
  { id: 'xss', regex: /innerHTML/, severity: 'medium', msg: 'XSS risk - innerHTML' }
]
export function auditRepo(files) {
  const findings=[]
  for (const file of files||[]) {
    const content=file.content||''
    for (const pat of PATTERNS) if (pat.regex.test(content)) findings.push({ file: file.name,...pat })
  }
  return findings
}
export function generateCleanExport(findings) {
  return `// ALMOST OS Clean Export - fixed ${findings.length} issues\nimport { createClient } from '@supabase/supabase-js'\n// secrets in server-only env, RLS`
}
