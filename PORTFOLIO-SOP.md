# Ocular Portfolio — SOP
**Site:** ocular.it.com | **Stack:** Astro + Supabase + Vercel + Namecheap

---

## One-Time Setup (Already Done)

### Supabase
- Project: **Ocular** at supabase.com
- SQL table `contacts` created with: id, name, email, subject, message, read, created_at
- RLS policy: public inserts allowed, reads via service key only

### Vercel
- Project: **ocular-portfolio** connected to GitHub repo `Eggzy26/ocular-portfolio`
- Auto-deploys on every push to `main`
- Env vars set: `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_KEY`, `ADMIN_PASSWORD`

### Domain
- `ocular.it.com` → Namecheap DNS → A Record `216.198.79.1` + CNAME `www`

---

## Adding a New Case Study

### Step 1 — Prepare your HTML file
- Build the case study as a single self-contained HTML file
- All CSS must be inside `<style>` tags in the file
- No external file dependencies

### Step 2 — Add to the project
```bash
# Place the file here (replace brand-name with slug e.g. "nike-rebrand"):
public/work/brand-name/index.html
```

### Step 3 — Add to Work page
Open `src/pages/work.astro` and add to the `projects` array:
```js
{ 
  title: 'Brand Name', 
  category: 'Branding / Identity', 
  year: '2025', 
  desc: 'One sentence about the project.', 
  slug: 'brand-name'   // must match folder name above
},
```

### Step 4 — Deploy
```bash
cd "/Users/yllanaglocelellevera/Documents/Operation 15/ocular-portfolio"
git add .
git commit -m "Add [Brand Name] case study"
git push
```
Vercel auto-deploys in ~30 seconds.

### Result
Case study live at: `ocular.it.com/work/brand-name`
Work page card links to it automatically.

---

## Updating Existing Pages

Edit any `.astro` file in `src/pages/`, then:
```bash
git add .
git commit -m "describe what changed"
git push
```

---

## Admin Dashboard
- URL: `ocular.it.com/admin`
- Password: stored in `.env` as `ADMIN_PASSWORD`
- View, read/unread, reply to, and delete contact form submissions

---

## File Structure Reference
```
ocular-portfolio/
├── src/
│   ├── layouts/Layout.astro        ← nav, footer, global styles
│   ├── lib/supabase.ts             ← public Supabase client
│   ├── lib/supabase-admin.ts       ← admin Supabase client
│   └── pages/
│       ├── index.astro             ← Home
│       ├── work.astro              ← Work grid (edit to add projects)
│       ├── about.astro
│       ├── services.astro
│       ├── blog.astro
│       ├── contact.astro
│       └── admin/
│           ├── index.astro         ← Dashboard
│           ├── login.astro
│           └── logout.astro
├── public/
│   └── work/
│       └── [brand-name]/
│           └── index.html          ← Case study files go here
├── .env                            ← secrets (never commit)
├── astro.config.mjs
├── vercel.json
└── package.json
```

---

## Key Links
| What | URL |
|---|---|
| Live site | ocular.it.com |
| Admin | ocular.it.com/admin |
| Vercel dashboard | vercel.com |
| GitHub repo | github.com/Eggzy26/ocular-portfolio |
| Supabase | supabase.com → Ocular project |
| Namecheap DNS | namecheap.com → ocular.it.com → Advanced DNS |
