import Papa from 'papaparse';

export const normalize = (value) => String(value ?? '').trim().replace(/\s+/g, ' ').toLowerCase();
const attending = new Set(['yes', 'attending', 'accepted', 'accept', 'confirmed', 'true', '1', 'going', 'will attend', 'rsvp yes']);
export function isAttending(value) { return attending.has(normalize(value)); }

export function parseGuestCSV(text) {
  const result = Papa.parse(text.replace(/^\uFEFF/, ''), { header: true, skipEmptyLines: 'greedy', transformHeader: (h) => h.trim() });
  if (result.errors.length) throw new Error(`Could not read CSV: ${result.errors[0].message}`);
  if (!result.meta.fields?.length || !result.data.length) throw new Error('This CSV has no guest rows.');
  if (result.data.length > 5000) throw new Error('Please import no more than 5,000 guests at a time.');
  return { headers: result.meta.fields, rows: result.data };
}

export function suggestMapping(headers) {
  const find = (...names) => headers.find(h => names.includes(normalize(h))) || '';
  const template=normalize(headers[0])==='first name'&&normalize(headers[1])==='last name'&&normalize(headers[8])==='wedding day - rsvp'&&/^wedding day - .*dietary/i.test(headers[9]||'');
  return {
    template:template?'the-knot-wedding-day':'',
    name: template?'':find('full name', 'guest name', 'name'),
    firstName: find('first name', 'first'), lastName: find('last name', 'last'),
    status: template?headers[8]:headers.find(h => /wedding/i.test(h) && /rsvp|status|attend|response/i.test(h)) || find('rsvp status', 'rsvp', 'attending', 'status', 'response'),
    email: find('email', 'email address'), externalId: find('guest id', 'id', 'guest identifier'),
    household: template?'':find('household', 'party', 'group', 'household name'),
    meal: template?'':find('meal', 'meal choice', 'meal selection', 'dinner choice'),
    dietary:template?headers[9]:headers.find(h=>/wedding/i.test(h)&&/dietary|allerg/i.test(h))||find('dietary restrictions','dietary requirements','dietary notes','allergies'),
  };
}

export function mapGuests(rows, mapping) {
  if (!mapping.status) throw new Error('Choose the RSVP column for your wedding event.');
  if (!mapping.name && !mapping.firstName) throw new Error('Choose a full-name or first-name column.');
  const seen = new Set();
  return rows.map((row, i) => {
    const name = (mapping.name ? String(row[mapping.name] ?? '') : `${row[mapping.firstName] ?? ''} ${row[mapping.lastName] ?? ''}`).trim().replace(/\s+/g, ' ');
    if (!name) throw new Error(`Row ${i + 2} is missing a name.`);
    const email = String(row[mapping.email] ?? '').trim();
    const externalId = String(row[mapping.externalId] ?? '').trim();
    const sourceKey = externalId ? `id:${normalize(externalId)}` : `name:${normalize(name)}|${normalize(email)}`;
    if (seen.has(sourceKey)) throw new Error(`“${name}” appears more than once. Map a unique guest ID or email column so each person can be identified.`);
    seen.add(sourceKey);
    return { sourceKey, name, attending: (mapping.template==='the-knot-wedding-day'||normalize(mapping.status)==='wedding day - rsvp')?normalize(row[mapping.status])==='attending':isAttending(row[mapping.status]), email,
      dietary:mapping.dietary?String(row[mapping.dietary]??'').trim():undefined,
      household: String(row[mapping.household] ?? '').trim(), meal: String(row[mapping.meal] ?? '').trim() };
  });
}
