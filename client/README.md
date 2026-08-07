# EL EZER Digital Marketing — Website

A static, fully responsive marketing website built with React, Vite, and Tailwind CSS. No backend or database is required — forms are handled through Formspree, and images are served from Cloudinary.

---

## 1. What's inside

- **React 18 + Vite** — the frontend framework and build tool
- **Tailwind CSS** — styling, configured with EL EZER's brand colors and fonts
- **React Router** — client-side routing across all 20+ pages
- **Framer Motion** — animations and transitions
- **React Hook Form** — the contact form, with real-time validation
- **Formspree** — handles form submissions with no backend needed
- **Cloudinary** — hosts and serves every image on the site

Every blog post, service, case study, and testimonial lives in plain JavaScript data files under `src/data/`. To add or edit content, you're editing a data file, not a database.

---

## 2. Before you start: three accounts you'll need

You don't need to set these up before running the site locally (it will run fine with placeholder values), but you'll need them before going live:

1. **Cloudinary** (free tier is fine) — [cloudinary.com](https://cloudinary.com). This is where your actual photos live.
2. **Formspree** (free tier is fine) — [formspree.io](https://formspree.io). This is what makes your forms actually send you an email.
3. **Render** — [render.com](https://render.com). This is where the site will be hosted.

---

## 3. Setting up your images in Cloudinary

The site expects images to already exist in your Cloudinary account under specific folder paths. Here's how to get that set up:

1. Create a free Cloudinary account and note your **Cloud Name** (visible on your dashboard homepage).
2. In Cloudinary's Media Library, create a folder called `el-ezer`, and inside it, create these subfolders: `hero`, `services`, `industries`, `portfolio`, `case-studies`, `blog`, `team`, `testimonials`, `logos`, `about`.
3. Upload your screenshots and photos into the matching folder. **The filename you give each image (without the extension) must match what the code expects.** For example, the homepage hero image is expected at `el-ezer/hero/hero-main`, so upload your hero photo and name it `hero-main` inside the `hero` folder.
4. To see the full list of expected image names, search any file inside `src/data/` for `cld(`. Each call like `cld('el-ezer/services/seo', ...)` tells you exactly what folder and filename Cloudinary expects.
5. Until you upload a given image, that spot on the site will simply show a broken image icon — nothing will crash. You can launch with some images missing and fill them in over time.

---

## 4. Setting up your forms in Formspree

1. Create a free Formspree account.
2. Create **three separate forms** (Formspree's free tier includes this): one for your main contact form, one for the newsletter signup, and one for the free audit request.
3. For each form, copy its **form ID**. This is the short code at the end of your form's endpoint URL — if your endpoint is `https://formspree.io/f/mzblvqkd`, your form ID is `mzblvqkd`.
4. You'll paste these IDs into your `.env` file in the next step.
5. Formspree will ask you to confirm your email address the first time a test submission comes through — do this, or real submissions will be silently blocked.

---

## 5. Running the project on your machine

**Requirements:** [Node.js](https://nodejs.org) version 18 or higher installed on your computer.

1. **Unzip the project** and open the folder in your IDE (VS Code, WebStorm, etc.).

2. **Open a terminal in the project folder** and install dependencies:
   ```bash
   npm install
   ```

3. **Create your environment file.** Copy the example file:
   ```bash
   cp .env.example .env
   ```
   Then open `.env` in your editor and fill in the three values:
   ```
   VITE_CLOUDINARY_CLOUD_NAME=your-actual-cloud-name
   VITE_FORMSPREE_CONTACT_ID=your-contact-form-id
   VITE_FORMSPREE_NEWSLETTER_ID=your-newsletter-form-id
   VITE_FORMSPREE_AUDIT_ID=your-audit-form-id
   ```
   You can leave these blank for now if you just want to preview the site — nothing will crash. Forms simply won't submit anywhere until they're filled in.

4. **Start the local dev server:**
   ```bash
   npm run dev
   ```
   Open the URL it prints (usually `http://localhost:5173`) in your browser.

5. **Make your edits.** Company info (phone, email, address, social links) lives in `src/data/site.js`. Everything else follows the same pattern — one data file per content type.

---

## 6. Editing content

You do not need to touch component code to update content. Everything editorial lives in `src/data/`:

| To change...                          | Edit this file                  |
|----------------------------------------|----------------------------------|
| Phone, email, address, hours, socials  | `src/data/site.js`              |
| Services and their detail pages        | `src/data/services.js`          |
| Industries                             | `src/data/industries.js`        |
| Portfolio projects                     | `src/data/portfolio.js`         |
| Case studies                           | `src/data/caseStudies.js`       |
| Blog posts                             | `src/data/blogPosts.js`         |
| Team members                           | `src/data/team.js`              |
| Pricing plans                          | `src/data/pricing.js`           |
| FAQs                                   | `src/data/faqs.js`              |
| Mission, vision, values, timeline      | `src/data/about.js`             |
| Homepage stats and testimonials        | `src/data/site.js`, `src/data/testimonials.js` |

### Adding a new blog post

Open `src/data/blogPosts.js` and copy an existing post object, then edit it. The `content` field is a list of blocks:
```js
content: [
  { type: 'p', text: 'A regular paragraph.' },
  { type: 'h2', text: 'A subheading' },
  { type: 'list', items: ['One point', 'Another point'] },
]
```
The post will automatically show up on `/blog`, get its own page at `/blog/your-slug`, and appear in related-posts sections. No other file needs to change.

---

## 7. Deploying to Render

1. **Push this project to a GitHub (or GitLab) repository.** Render deploys from a git repo, so this has to happen first:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **In Render**, click **New +** → **Static Site**, and connect the repository you just pushed.

3. Render should detect the included `render.yaml` and pre-fill these settings. If it doesn't, enter them manually:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`

4. **Add your environment variables.** In the Render dashboard, go to your site's **Environment** tab and add the same three variables from your `.env` file:
   - `VITE_CLOUDINARY_CLOUD_NAME`
   - `VITE_FORMSPREE_CONTACT_ID`
   - `VITE_FORMSPREE_NEWSLETTER_ID`
   - `VITE_FORMSPREE_AUDIT_ID`

   This step matters — without it, your live site will build successfully but show broken images and non-working forms.

5. **Confirm the rewrite rule is active.** This site is a single-page application, meaning a visitor who lands directly on `/blog/some-post` (instead of clicking there from the homepage) needs the server to still serve `index.html`. The included `render.yaml` sets this up automatically as:
   ```yaml
   routes:
     - type: rewrite
       source: /*
       destination: /index.html
   ```
   If Render doesn't pick this up automatically from the blueprint file, add it manually under your site's **Redirects/Rewrites** tab in the dashboard: source `/*`, destination `/index.html`, action **Rewrite**. Skipping this step is the single most common reason a React site "works" on the homepage but shows a 404 on every other page after a refresh.

6. Click **Create Static Site**. Render will run the build and give you a live `.onrender.com` URL. From there, you can attach a custom domain under **Settings → Custom Domains**.

---

## 8. A note on the forms

This site is intentionally static, so there's no server-side code sending emails. Formspree fills that gap: when someone submits a form, their browser sends the data directly to Formspree, which then emails it to you. The free Formspree plan supports a limited number of submissions per month, which is enough for most small businesses starting out. If you outgrow it, Formspree's paid tiers raise that limit, or you can swap in another form backend (see `src/hooks/useFormspree.js`) without touching any page code.

---

## 9. Project structure

```
src/
  components/
    layout/       Navbar, Footer, WhatsApp button, mobile CTA bar, search
    home/         Homepage sections (hero, services overview, testimonials, etc.)
    cards/        Reusable cards (service, portfolio, blog, team, pricing...)
    tools/        ROI calculator, free audit form
    ui/           Small reusable pieces (buttons, accordion, star rating...)
  data/           All editable site content
  pages/          One file per route
  hooks/          useFormspree, useScrollProgress
  lib/            Cloudinary URL helper, date formatting
  App.jsx         Route definitions
  main.jsx        App entry point
```

---

## 10. Before you launch

- [ ] Real phone number, email, and address in `src/data/site.js`
- [ ] All images uploaded to Cloudinary with matching filenames
- [ ] All three Formspree forms created, IDs added, and test submissions confirmed
- [ ] Environment variables added in the Render dashboard (not just your local `.env`)
- [ ] Rewrite rule confirmed working (test by refreshing on a page other than the homepage, once deployed)
- [ ] `public/robots.txt` updated with your real domain
- [ ] Legal pages (`Privacy Policy`, `Terms of Service`, `Cookie Policy`) reviewed by an actual attorney before publishing — the included copy is a generic starting template, not legal advice
