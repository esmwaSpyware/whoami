#!/usr/bin/env node

/**
 * Simple deployment script for GitHub Pages
 * This script prepares the portfolio for deployment
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Preparing portfolio for deployment...');

// Ensure all necessary files exist
const requiredFiles = [
  'index.html',
  'scripts/main.js',
  'styles/output.css',
  'package.json'
];

const missingFiles = requiredFiles.filter(file => !fs.existsSync(file));

if (missingFiles.length > 0) {
  console.error('❌ Missing required files:', missingFiles);
  process.exit(1);
}

console.log('✅ All required files found');

// Create a simple index.html for GitHub Pages if needed
const indexPath = 'index.html';
if (fs.existsSync(indexPath)) {
  console.log('✅ index.html exists');
} else {
  console.error('❌ index.html not found');
  process.exit(1);
}

// Check if styles are built
const stylesPath = 'styles/output.css';
if (fs.existsSync(stylesPath)) {
  const stats = fs.statSync(stylesPath);
  if (stats.size > 0) {
    console.log('✅ CSS styles are built');
  } else {
    console.log('⚠️  CSS file is empty, run: npm run build');
  }
} else {
  console.log('⚠️  CSS not found, run: npm run build');
}

console.log('🎉 Portfolio is ready for deployment!');
console.log('');
console.log('Next steps:');
console.log('1. Install Git: https://git-scm.com/downloads');
console.log('2. Create a GitHub repository');
console.log('3. Run the following commands:');
console.log('   git add .');
console.log('   git commit -m "Initial portfolio deployment"');
console.log('   git branch -M main');
console.log('   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git');
console.log('   git push -u origin main');
console.log('4. Enable GitHub Pages in repository settings');
