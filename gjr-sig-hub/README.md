# GJR S'gan Hub

Account-based BBYO leadership dashboard for Greater Jersey Region.

## Roles
- **Admin** — full access, can create councils, council S'gan/S'ganit accounts, and counterpart accounts.
- **Council S'gan/S'ganit** — same operational tools for their council, but cannot create other council S'gan/S'ganit accounts or councils.
- **Counterpart** — can view their council info, message their Council S'gan/S'ganit, request/schedule 1:1s, and manage their own action items.

## Supabase
The front-end is ready for Supabase Auth + Database. Set values in `config.js`, then apply `supabase.sql` and deploy the included `create-managed-user` Edge Function.

## Hosting
This folder is published inside the existing GitHub Pages site at:
`/school-flow/gjr-sig-hub/`
