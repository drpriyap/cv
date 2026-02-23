# Quick Start Guide

## 🚀 Deploy to GitHub Pages in 3 Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/drpriyap/cv.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. **Settings** → **Pages**
3. Source: **Deploy from a branch**
4. Branch: **gh-pages** → **/ (root)** → **Save**

### Step 3: Deploy from VS Code
Open terminal in VS Code and run:
```bash
pnpm run deploy
```

**Done!** 🎉 Your site will be live at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

---

## 📝 Daily Workflow

### Make changes and redeploy:
```bash
git add .
git commit -m "Update CV"
git push
pnpm run deploy
```

### Preview locally before deploying:
```bash
pnpm run dev
```
Then open: http://localhost:5173

---

## 🔧 Available Commands

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Run development server |
| `pnpm run build` | Build for production |
| `pnpm run deploy` | Build & deploy to GitHub Pages |
| `pnpm run deploy:clean` | Force deploy (clears cache) |

---

## 💡 Tips

- **Update CV content**: Edit `/src/app/components/CVContent.tsx`
- **Change colors/styling**: Modify the component files
- **Test downloads**: PDF and DOC generation works locally and on GitHub Pages

---

## ❓ Need Help?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment options and troubleshooting.
