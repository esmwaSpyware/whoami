# 3D Interactive Portfolio

A stunning, fully interactive 3D portfolio website built with Three.js, GSAP, and Tailwind CSS.

## Features

- **Cinematic Intro Animation**: 3D text with floating particles and smooth camera movements
- **Interactive 3D Scenes**: Mouse-responsive 3D elements throughout the portfolio
- **Responsive Design**: Fully responsive from mobile to desktop
- **Smooth Animations**: GSAP-powered animations and transitions
- **Modern UI**: Dark theme with neon effects and glass morphism
- **Performance Optimized**: Efficient rendering and smooth 60fps animations

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styles with Tailwind CSS
- **JavaScript (ES6+)** - Modern JavaScript with ES modules
- **Three.js** - 3D graphics and WebGL rendering
- **GSAP** - Professional-grade animations
- **Tailwind CSS** - Utility-first CSS framework

## Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
├── styles/
│   ├── input.css          # Tailwind source file
│   └── output.css         # Compiled CSS
├── scripts/
│   └── main.js            # Main JavaScript file
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the CSS:
   ```bash
   npm run build-prod
   ```

4. Open `index.html` in your browser

### Development

For development with auto-rebuild:
```bash
npm run dev
```

## Features Breakdown

### 1. Intro Scene
- 3D floating particles
- Animated 3D text with your name
- Smooth camera movement
- Skip intro functionality
- Auto-transition after 10 seconds

### 2. Hero Section
- Interactive particle background
- Mouse-responsive camera movement
- Smooth scroll indicators
- Call-to-action buttons

### 3. About Section
- Floating 3D cube animation
- Responsive grid layout
- Skill tags with glass effect
- Smooth scroll animations

### 4. Projects Section
- 3D project cards with different geometries
- Interactive hover effects
- Responsive grid layout
- Live demo and GitHub links

### 5. Contact Section
- Animated contact form
- Glass morphism design
- Form validation and submission
- Social media links

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'neon-blue': '#00f5ff',
  'neon-purple': '#8b5cf6',
  'neon-pink': '#f472b6',
  'neon-green': '#10b981',
}
```

### Content
- Update personal information in `index.html`
- Modify project details in the projects section
- Change contact information and social links

### 3D Elements
- Customize 3D objects in `scripts/main.js`
- Add new geometries for different projects
- Modify particle systems and animations

## Performance Optimization

- Efficient Three.js rendering
- Optimized particle systems
- Lazy loading of 3D assets
- Responsive canvas sizing
- Smooth 60fps animations

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

The portfolio is ready for deployment to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to an S3 bucket

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- **Three.js** - 3D graphics library
- **GSAP** - Animation library
- **Tailwind CSS** - CSS framework
- **Google Fonts** - Typography (Inter, JetBrains Mono)

---

Built with ❤️ by Exaudi Simon Mwakitega
