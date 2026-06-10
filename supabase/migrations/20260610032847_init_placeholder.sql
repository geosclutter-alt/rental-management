-- Sprint 0 placeholder: proves migration pipeline works.
-- Sprint 1 will add the real schema.
create table if not exists _pipeline_check (
  id int primary key default 1,
  deployed_at timestamptz default now()
);
