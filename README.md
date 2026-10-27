# The Menstrual Cycle & Sport — Education Site
Your site is live at https://mulaxn.github.io/Sophias-Capstone-Project/

A static, no-build HTML/CSS/JS awareness site for HUBI 4800 (Group 19): educating
female athletes (17–25) and coaches on how the menstrual cycle affects athletic
performance, with built-in pre/post surveys for measuring impact.

## Pages
- `index.html` — home
- `phases.html` — the 4 cycle phases
- `impacts.html` — strength, injury risk, nutrition, stats
- `coping.html` — symptom management tips
- `coaches.html` — coach-specific guidance
- `knowledge-check.html` — self-check questions
- `survey.html` — pre/post surveys (athlete + coach)
- `about.html` — team + full references

## Running it locally

No build step needed, but **don't just double-click the HTML files** — opening via
`file://` breaks the shared header/footer script in some browsers. Serve it with a
tiny local server instead:

```
cd cycle-ed-site
python -m http.server 8000
```

Then open http://localhost:8000 in your browser. (Any static server works — VS Code's
"Live Server" extension is another easy option.)

## Setting up the surveys (Formspree)

The survey forms submit to [Formspree](https://formspree.io) — a free service that
emails you form submissions with no backend required.

1. Create a free account at formspree.io.
2. Create a new form and copy its endpoint, e.g. `https://formspree.io/f/abcd1234`.
3. In `survey.html`, replace every `YOUR_FORM_ID` in the four `<form action="...">`
   lines with your real endpoint ID (you can use the same form for all four, and tell
   them apart later using the hidden `survey_type` field, or create separate Formspree
   forms for cleaner separation).
4. Remove the yellow "Setup note" box near the top of `survey.html` once configured.
5. Formspree's free tier requires confirming your email on the first submission from a
   new domain — test it once after deploying.

## Deploying to GitHub Pages

1. Create a new GitHub repo and push this folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub: Settings → Pages → Source → select `main` branch, `/ (root)` folder → Save.
3. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

No build process or config file is needed since this is plain HTML/CSS/JS.
