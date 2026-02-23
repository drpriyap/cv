# Deploying to GitHub Pages

This CV website is fully compatible with GitHub Pages and will work perfectly as a static site.

## Method 1: Deploy from VS Code Terminal (Easiest) 🚀

The fastest way to deploy directly from VS Code:

### One-Time Setup:

1. **Initialize Git and push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Select branch: **gh-pages** and folder: **/ (root)**
   - Click **Save**

### Deploy Command:

Simply run this in VS Code terminal:

```bash
pnpm run deploy
```

That's it! Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

### Available Deploy Scripts:

- `pnpm run deploy` - Builds and deploys to GitHub Pages
- `pnpm run deploy:clean` - Force deploy (clears cache)
- `pnpm run build` - Build only (without deploying)

## Method 2: Automatic Deployment via GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages on every push to the main branch.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**

3. **Deploy:**
   - The workflow will automatically run on push
   - Check the **Actions** tab to see the deployment progress
   - Once complete, your site will be available at: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`

## Manual Deployment

If you prefer to deploy manually:

1. **Build the project:**
   ```bash
   pnpm install
   pnpm run build
   ```

2. **Deploy the `dist` folder:**
   - Use the GitHub Pages settings to deploy from the `gh-pages` branch
   - Or use a tool like `gh-pages`:
     ```bash
     pnpm add -D gh-pages
     pnpm run build
     npx gh-pages -d dist
     ```

## Important Notes

### Base Path Configuration

The `vite.config.ts` is set to `base: './'` which works for most deployments.

**If deploying to a repository page** (e.g., `username.github.io/repo-name/`):
- Change `base: './'` to `base: '/repo-name/'` in `vite.config.ts`

**If using a custom domain** or root GitHub Pages (e.g., `username.github.io`):
- Keep `base: '/'` or `base: './'`

### Custom Domain (Optional)

To use a custom domain:
1. Add a `CNAME` file to the `/public` directory with your domain name
2. Configure DNS settings with your domain provider
3. Enable custom domain in GitHub Pages settings

## Features That Work on GitHub Pages

✅ **All features work client-side:**
- PDF download (generated in browser using jsPDF)
- DOC download (generated in browser using docx library)
- Responsive design
- All styling and interactions

✅ **No server required** - everything runs in the browser!

## Troubleshooting

**If the site shows a blank page:**
1. Check the base path in `vite.config.ts`
2. Clear browser cache
3. Check browser console for errors

**If downloads don't work:**
- Ensure browser allows downloads
- Check browser console for errors
- Try in a different browser

## Local Development

To run locally before deploying:
```bash
pnpm install
pnpm run dev
```

Then open `http://localhost:5173` in your browser.