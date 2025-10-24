# 🚀 Portfolio Deployment Guide

This guide will help you deploy your 3D interactive portfolio to GitHub Pages.

## 📋 Prerequisites

1. **Git Installation**
   - Download Git from: https://git-scm.com/downloads
   - Follow the installation wizard
   - Verify installation: `git --version`

2. **GitHub Account**
   - Create account at: https://github.com
   - Verify email address

## 🛠️ Deployment Steps

### Step 1: Prepare Your Portfolio

1. **Build CSS** (if not already done):
   ```bash
   npm run build-prod
   ```

2. **Test Locally**:
   ```bash
   npx serve .
   ```
   Visit: http://localhost:3000

### Step 2: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio` (or your preferred name)
3. Description: "3D Interactive Portfolio"
4. Set to **Public** (required for free GitHub Pages)
5. **Don't** initialize with README (we already have files)
6. Click "Create repository"

### Step 3: Initialize Git and Push

Open terminal/command prompt in your portfolio folder and run:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio deployment"

# Rename branch to main
git branch -M main

# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.**

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The deployment will start automatically

### Step 5: Access Your Portfolio

- Your portfolio will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`
- GitHub Actions will build and deploy automatically
- Check the **Actions** tab in your repository for deployment status

## 🔧 Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository root:
   ```
   yourdomain.com
   ```

2. Configure DNS:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for root domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## 📁 Repository Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── scripts/
│   └── main.js                 # Main JavaScript
├── styles/
│   ├── input.css              # Tailwind input
│   └── output.css             # Compiled CSS
├── index.html                 # Main HTML file
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind configuration
├── .gitignore                 # Git ignore rules
└── DEPLOYMENT.md             # This file
```

## 🚨 Troubleshooting

### Common Issues:

1. **Git not found**: Install Git from https://git-scm.com/downloads
2. **Permission denied**: Check GitHub username and repository name
3. **Build fails**: Ensure all dependencies are installed with `npm install`
4. **CSS not loading**: Run `npm run build-prod` before deploying
5. **3D not working**: Check browser console for errors

### GitHub Pages Issues:

1. **404 Error**: Wait 5-10 minutes for deployment to complete
2. **Build Fails**: Check Actions tab for error details
3. **Custom Domain**: Ensure DNS is properly configured

## 🔄 Updating Your Portfolio

After making changes:

```bash
# Add changes
git add .

# Commit changes
git commit -m "Update portfolio content"

# Push to GitHub
git push origin main
```

GitHub Actions will automatically rebuild and deploy your changes.

## 📱 Mobile Testing

Test your deployed portfolio on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes

## 🎯 Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Minimize CSS**: Use `npm run build-prod` for production
3. **Test Loading**: Check loading times on different connections
4. **Mobile First**: Ensure mobile experience is smooth

## 🆘 Support

If you encounter issues:

1. Check the GitHub Actions logs
2. Verify all files are committed
3. Test locally first with `npx serve .`
4. Check browser console for JavaScript errors

## 🎉 Success!

Once deployed, your portfolio will be live at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME`

Share your portfolio with potential employers and clients!
