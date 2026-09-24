
create table if not exists proofs (
  id uuid primary key default gen_random_uuid(),
  pr_url text,
  model text,
  failure_mode text,
  original text,
  fixed text,
  explanation text,
  hash text unique,
  created_at timestamp default now()
);
create table if not exists spend_logs (
  id uuid primary key default gen_random_uuid(),
  repo text,
  cost float,
  task int,
  created_at timestamp default now()
);
create table if not exists feedback_clusters (
  id uuid primary key default gen_random_uuid(),
  source text,
  cluster text,
  count int,
  prd text,
  pr_url text,
  status text default 'open',
  created_at timestamp default now()
);
create table if not exists escrow_scans (
  id uuid primary key default gen_random_uuid(),
  repo text,
  findings jsonb,
  clean_url text,
  created_at timestamp default now()
);
alter table proofs enable row level security;
create policy "public read" on proofs for select using (true);
create policy "service insert" on proofs for insert with check (true);
