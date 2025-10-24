# Build Instructions

## Quick Start (Without npm)

Since you're experiencing PowerShell execution policy issues, here's how to run the portfolio without npm:

### Option 1: Direct Browser Opening
1. Open `index.html` directly in your browser
2. The portfolio will work with CDN links for Three.js and GSAP

### Option 2: Local Server (Recommended)
1. Install a simple HTTP server:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000
   
   # Or using Node.js http-server
   npx http-server
   
   # Or using Live Server extension in VS Code
   ```

2. Open `http://localhost:8000` in your browser

## Production Build (With npm)

If you want to use the production build process:

### 1. Enable PowerShell Scripts
Run PowerShell as Administrator and execute:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Build CSS
```bash
npm run build-prod
```

### 4. Serve the Files
```bash
# Using any static server
npx serve .
# or
npx http-server
```

## File Structure After Build

```
whoami/
├── index.html              # Main portfolio file
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind config
├── styles/
│   ├── input.css          # Source CSS
│   └── output.css         # Compiled CSS (ready to use)
├── scripts/
│   └── main.js            # Main JavaScript
├── README.md              # Documentation
└── build-instructions.md  # This file
```

## Features Included

✅ **Cinematic Intro Animation**
- 3D floating particles
- Animated 3D text
- Smooth camera movements
- Skip intro button

✅ **Interactive 3D Scenes**
- Mouse-responsive camera
- Particle systems
- 3D geometries for projects
- Smooth animations

✅ **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions

✅ **Modern UI/UX**
- Dark theme with neon effects
- Glass morphism design
- Smooth transitions
- Professional typography

✅ **Performance Optimized**
- Efficient Three.js rendering
- Optimized animations
- Fast loading times
- 60fps smooth animations

## Customization

### Personal Information
Edit `index.html` to update:
- Your name and title
- About section content
- Project descriptions
- Contact information

### Styling
Modify `styles/input.css` or `tailwind.config.js` for:
- Color schemes
- Typography
- Spacing and layout
- Animation timings

### 3D Elements
Update `scripts/main.js` to:
- Change 3D geometries
- Modify particle systems
- Add new animations
- Customize interactions

## Deployment Options

### 1. Netlify (Recommended)
1. Drag and drop the entire folder to Netlify
2. Your site will be live instantly
3. Custom domain available

### 2. Vercel
1. Connect your GitHub repository
2. Automatic deployments
3. Global CDN

### 3. GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Free hosting with custom domain

### 4. AWS S3 + CloudFront
1. Upload files to S3 bucket
2. Configure CloudFront distribution
3. Professional hosting solution

## Troubleshooting

### Common Issues

1. **CORS Errors**: Use a local server instead of opening file directly
2. **3D Not Loading**: Check browser console for errors
3. **Animations Stuttering**: Reduce particle count in main.js
4. **Mobile Performance**: Disable some 3D effects on mobile

### Browser Compatibility
- Chrome 60+ ✅
- Firefox 55+ ✅
- Safari 12+ ✅
- Edge 79+ ✅

## Support

If you encounter any issues:
1. Check browser console for errors
2. Ensure you're using a local server
3. Verify all files are in the correct locations
4. Check that JavaScript is enabled

---

Your 3D portfolio is ready to showcase your skills! 🚀
