@echo off
echo 🚀 Portfolio Deployment Script
echo.

echo Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git is not installed!
    echo Please install Git from: https://git-scm.com/downloads
    echo.
    pause
    exit /b 1
)

echo ✅ Git is installed
echo.

echo Building CSS...
call npm run build-prod
if %errorlevel% neq 0 (
    echo ❌ CSS build failed!
    echo Please run: npm install
    pause
    exit /b 1
)

echo ✅ CSS built successfully
echo.

echo Initializing Git repository...
git init
git add .
git commit -m "Initial portfolio deployment"

echo.
echo ✅ Git repository initialized
echo.
echo Next steps:
echo 1. Create a GitHub repository
echo 2. Run these commands:
echo    git branch -M main
echo    git remote add origin https://github.com//YOUR_REPO_NAME.git
echo    git push -u origin main
echo 3. Enable GitHub Pages in repository settings
echo.
echo Your portfolio will be available at:
echo https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
echo.
pause
