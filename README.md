# Placecard

Recovered from the published Railway application on 2026-10-30. The server modules
are recovered source. `src/recovered-app.js` is the formatted published client
bundle, including retained third-party runtime code; original React/TypeScript
source and unpublished workspace files were not present in the export.
New client features live in `src/features.jsx`.

## Development

Requires Node 24 or newer. Run `npm ci`, `npm run build`, and `npm start`.
`DATABASE_PATH` defaults to `./data/gather.sqlite`; use a separate temporary file
for local testing. Run `npm test` for persistence and API tests.
`node tests/browser.mjs` runs isolated Chromium checks (expects `/usr/bin/chromium`).

## Existing production

Railway project: d6caa323-9a47-490f-84f7-1fa121ece25b
Service: aaa2b45c-7fca-4fd1-94cc-fad045809306
Environment: 6e9aba0b-2368-43ea-b045-fa62d12090b3
Persistent volume mount: /app/data
Database: /app/data/gather.sqlite

Deploy only to these existing resources. Keep DATABASE_PATH and the volume mount.
The Docker image includes server, shared modules, and built client assets. It does
not contain a database or seed production data. Before opening an existing database,
startup creates a consistent SQLite backup at
`/app/data/gather.sqlite.before-floor-plan-v1.sqlite` if it does not already exist.
A startup fingerprint verifies all existing guest records and tables stay unchanged.
Floor-plan configuration is additive and stored in a separate `floor_plans` table.

Venue layout saves use their own revision to reject simultaneous layout changes;
concurrent seating edits are independent. PNG/JPEG/WebP images are resized in the
browser and stored in the same persistent SQLite database. Clients need the existing
private invitation link; no invitation keys or access rules are changed.

## Recovery limitations

The supplied archive preserves the deployed application only. No unpublished files
were available in this thread's initial empty checkout. The original archive is
preserved separately in the recovery workspace and must not be treated as a backup
of the live database.
