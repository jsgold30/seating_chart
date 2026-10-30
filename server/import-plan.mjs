import { normalize } from '../shared/import.mjs';

// Build the same matching plan for both preview and commit. Never infer that two
// people with the same name are one person when the roster is ambiguous.
export function planGuestImport(existing, incoming, complete, fail) {
  const usable = existing.filter(g=>g.source!=='demo');
  const claimed = new Set();
  const counts = new Map();
  for(const row of incoming) counts.set(normalize(row.name),(counts.get(normalize(row.name))||0)+1);
  const strong = key => key?.startsWith('id:');
  const compatible = (guest,row) => !(strong(guest.source_key)&&strong(row.sourceKey)&&guest.source_key!==row.sourceKey);
  const operations=[];
  for(const row of incoming) {
    if(!row.attending&&!complete)continue;
    let match=usable.find(g=>g.source_key===row.sourceKey);
    if(!match) {
      const sameName=usable.filter(g=>normalize(g.name)===normalize(row.name)&&compatible(g,row));
      const sameEmail=row.email?sameName.filter(g=>normalize(g.email)===normalize(row.email)):[];
      if(sameEmail.length===1)match=sameEmail[0];
      else if(sameEmail.length>1)throw fail(409,`More than one existing guest matches ${row.name}. Use unique guest IDs to match them safely.`);
      else if(sameName.length===1&&counts.get(normalize(row.name))===1)match=sameName[0];
      else if(sameName.length>0)throw fail(409,`Cannot safely match ${row.name}. Map a unique guest ID or email, or resolve duplicate names first. Your seating plan has not changed.`);
    }
    if(match&&claimed.has(match.id))throw fail(409,`Two CSV rows match ${match.name}. Give each person a unique guest ID or email. Your seating plan has not changed.`);
    if(match)claimed.add(match.id);
    operations.push({row,existing:match,sourceKey:match&&strong(match.source_key)&&!strong(row.sourceKey)?match.source_key:row.sourceKey});
  }
  const stillAttending=new Set(operations.filter(op=>op.row.attending&&op.existing).map(op=>op.existing.id));
  const explicitDeclines=new Set(operations.filter(op=>!op.row.attending&&op.existing).map(op=>op.existing.id));
  const removals=usable.filter(g=>g.attending&&(explicitDeclines.has(g.id)||(complete&&g.source==='import'&&!stillAttending.has(g.id))));
  return {operations,removals,summary:{
    added:operations.filter(op=>op.row.attending&&!op.existing).length,
    updated:operations.filter(op=>op.row.attending&&op.existing).length,
    preservedSeats:usable.filter(g=>g.attending&&g.table_id&&!removals.some(r=>r.id===g.id)).length,
    keptExisting:usable.filter(g=>g.attending&&!claimed.has(g.id)&&!removals.some(r=>r.id===g.id)).length,
    demoRemoved:existing.filter(g=>g.source==='demo').length,
  }};
}
