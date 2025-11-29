# 🚀 Deployment Checklist

Before pushing to GitHub and deploying, complete these steps:

## ✅ Pre-Upload Checklist

### 1. **Update Personal Information**
- [ ] Replace `[Your Name]` in `LICENSE` file
- [ ] Update email in `components/Footer.tsx` (currently: `your.email@example.com`)
- [ ] Update copyright in `components/Footer.tsx` (currently: `ECE Portfolio`)
- [ ] Update social media links in `data/index.ts`:
  - [ ] GitHub URL
  - [ ] LinkedIn URL
  - [ ] Twitter URL

### 2. **Update Content**
- [ ] Replace project data in `data/index.ts` with your actual projects
- [ ] Update work experience in `data/index.ts`
- [ ] Customize tech stack if needed
- [ ] Update navigation items if you add new sections

### 3. **Add Assets**
Follow `public/ASSETS_NEEDED.md` to add:
- [ ] Project preview images (`p1.svg`, `p2.svg`, `p3.svg`, `p4.svg`)
- [ ] Experience icons (`exp1.svg`, `exp2.svg`, `exp3.svg`, `exp4.svg`)
- [ ] Tech stack icons (Arduino, ESP32, React, Node, MongoDB, etc.)
- [ ] Social media icons (`git.svg`, `link.svg`, `twit.svg`)
- [ ] Background patterns (`grid.svg`, `footer-grid.svg`, `bg.png`)
- [ ] Bento grid icons (`b1.svg`, `b4.svg`, `b5.svg`)

### 4. **Test Locally**
- [ ] Run `npm run dev` - verify all pages work
- [ ] Test on mobile viewport (responsive design)
- [ ] Run `npm run build` - ensure no errors
- [ ] Check all links work correctly
- [ ] Verify all animations play smoothly

### 5. **Code Quality**
- [ ] Run `npm run lint` - fix any linting errors
- [ ] Remove any console.log statements
- [ ] Check for TODO comments and address them
- [ ] Verify TypeScript types are correct

## 📤 GitHub Upload Steps

### 1. Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: ECE Portfolio with MERN + IoT projects"
```

### 2. Create GitHub Repository
1. Go to GitHub.com
2. Click "New Repository"
3. Name it (e.g., `ece-portfolio` or `my-portfolio`)
4. **Don't** initialize with README (we already have one)
5. Click "Create Repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy" (auto-detects Next.js)
6. Done! Your site is live

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Sign in with GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

### Option 3: GitHub Pages (Static Export)
```bash
# Add to next.config.mjs:
# output: 'export',
# images: { unoptimized: true }

npm run build
# Deploy the 'out' folder to GitHub Pages
```

## 🔒 Environment Variables

If you add API keys or secrets later:
1. **Never** commit `.env` files
2. Add to Vercel/Netlify dashboard
3. Update `.gitignore` to exclude `.env*`

## 📊 Post-Deployment

- [ ] Add repository description on GitHub
- [ ] Add topics/tags (nextjs, typescript, portfolio, etc.)
- [ ] Update repository website URL
- [ ] Share on LinkedIn/Twitter
- [ ] Add to your resume

## 🎯 Optional Enhancements

- [ ] Add Google Analytics
- [ ] Set up custom domain
- [ ] Add SEO meta tags
- [ ] Create Open Graph images
- [ ] Add a blog section
- [ ] Implement contact form with Formspree/EmailJS
- [ ] Add testimonials section

## ⚡ Performance

- [ ] Replace `<img>` with Next.js `<Image />` component
- [ ] Optimize SVG files with SVGO
- [ ] Enable Vercel Analytics
- [ ] Test with Lighthouse (target 90+ scores)

---

**Ready to go live? 🚀**

After completing this checklist, your portfolio will be production-ready and GitHub-professional!
