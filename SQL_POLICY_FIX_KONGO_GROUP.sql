-- Kongo Group SQL Policy Fix
-- ใช้กรณี SQL เดิม error เพราะชื่อ policy มีขีดกลาง '-'

drop policy if exists kongo_group_users_anon_all on public.users;
drop policy if exists kongo_group_matches_anon_all on public.matches;
drop policy if exists kongo_group_predictions_anon_all on public.predictions;

create policy kongo_group_users_anon_all
on public.users for all to anon
using (true) with check (true);

create policy kongo_group_matches_anon_all
on public.matches for all to anon
using (true) with check (true);

create policy kongo_group_predictions_anon_all
on public.predictions for all to anon
using (true) with check (true);

notify pgrst, 'reload schema';
