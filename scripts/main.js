// Import Three.js as ES module
import * as THREE from 'three';
// GSAP is loaded globally via script tag

// Wait for GSAP to be available
if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded. Please check the script tag.');
}

// Global variables
let introScene, introCamera, introRenderer;
let heroScene, heroCamera, heroRenderer;
let aboutScene, aboutCamera, aboutRenderer;
let projectScenes = [];
let mouse = { x: 0, y: 0 };
let isIntroComplete = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializePortfolio();
});

// Initialize portfolio with loading screen management
async function initializePortfolio() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainPortfolio = document.getElementById('main-portfolio');
    const loadingProgress = document.getElementById('loading-progress');
    const loadingText = document.getElementById('loading-text');
    
    try {
        // Simulate loading progress
        let progress = 0;
        const progressInterval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            loadingProgress.style.width = progress + '%';
            
            if (progress < 30) {
                loadingText.textContent = 'Loading 3D Environment...';
            } else if (progress < 60) {
                loadingText.textContent = 'Initializing Graphics...';
            } else if (progress < 90) {
                loadingText.textContent = 'Preparing Portfolio...';
            } else {
                loadingText.textContent = 'Almost Ready...';
            }
            
            if (progress >= 100) {
                clearInterval(progressInterval);
                hideLoadingScreen();
            }
        }, 100);
        
        // Initialize 3D scenes
        await initIntroScene();
        await initHeroScene();
        await initAboutScene();
        await initProjectScenes();
        
        // Initialize event listeners
        initEventListeners();
        
        // Start animations
        startIntroAnimation();
        
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        hideLoadingScreen();
    }
}

// Hide loading screen and show portfolio
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainPortfolio = document.getElementById('main-portfolio');
    
    if (loadingScreen && mainPortfolio) {
        // Fade out loading screen
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 0.5s ease-out';
        
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainPortfolio.classList.remove('hidden');
            mainPortfolio.style.opacity = '0';
            mainPortfolio.style.transition = 'opacity 0.5s ease-in';
            
            setTimeout(() => {
                mainPortfolio.style.opacity = '1';
            }, 50);
        }, 500);
    }
}

// Initialize intro scene
async function initIntroScene() {
    try {
        const canvas = document.getElementById('intro-canvas');
        if (!canvas) {
            console.warn('Intro canvas not found, skipping intro scene');
            return;
        }
        
        introScene = new THREE.Scene();
        introCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        introRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        introRenderer.setSize(window.innerWidth, window.innerHeight);
        introRenderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        introScene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x00f5ff, 1, 100);
        pointLight.position.set(10, 10, 10);
        introScene.add(pointLight);

        // Create floating particles
        createFloatingParticles();
        
        // Create 3D text
        createIntroText();
        
        console.log('Intro scene initialized successfully');
    } catch (error) {
        console.error('Error initializing intro scene:', error);
    }
}

// Initialize hero scene
async function initHeroScene() {
    try {
        const canvas = document.getElementById('hero-canvas');
        if (!canvas) {
            console.warn('Hero canvas not found, skipping hero scene');
            return;
        }
        
        heroScene = new THREE.Scene();
        heroCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        heroRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
        heroRenderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        heroScene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x00f5ff, 1, 100);
        pointLight.position.set(10, 10, 10);
        heroScene.add(pointLight);

        // Create hero elements
        createHeroElements();
        
        console.log('Hero scene initialized successfully');
    } catch (error) {
        console.error('Error initializing hero scene:', error);
    }
}

// Initialize about scene
async function initAboutScene() {
    try {
        const canvas = document.getElementById('about-canvas');
        if (!canvas) {
            console.warn('About canvas not found, skipping about scene');
            return;
        }
        
        aboutScene = new THREE.Scene();
        aboutCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        aboutRenderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        aboutRenderer.setSize(window.innerWidth, window.innerHeight);
        aboutRenderer.setClearColor(0x000000, 0);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        aboutScene.add(ambientLight);
        
        const pointLight = new THREE.PointLight(0x8b5cf6, 1, 100);
        pointLight.position.set(10, 10, 10);
        aboutScene.add(pointLight);

        // Create about elements
        createAboutElements();
        
        // Add cybersecurity visualization
        createCybersecurityElements();
        
        console.log('About scene initialized successfully');
    } catch (error) {
        console.error('Error initializing about scene:', error);
    }
}

// Initialize project scenes
async function initProjectScenes() {
    try {
        for (let i = 1; i <= 6; i++) {
            const canvas = document.getElementById(`project${i}-canvas`);
            if (!canvas) continue;
            
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setSize(canvas.clientWidth, canvas.clientHeight);
            renderer.setClearColor(0x000000, 0);

            // Lighting
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
            scene.add(ambientLight);
            
            const pointLight = new THREE.PointLight(0x00f5ff, 1, 100);
            pointLight.position.set(10, 10, 10);
            scene.add(pointLight);

            // Create project elements
            createProjectElements(scene, i);
            
            projectScenes.push({ scene, camera, renderer });
        }
        
        console.log('Project scenes initialized successfully');
    } catch (error) {
        console.error('Error initializing project scenes:', error);
    }
}

// Create hero elements
function createHeroElements() {
    if (!heroScene) return;
    
    // Create floating geometric shapes with shared geometry
    const geometry = new THREE.SphereGeometry(0.5, 16, 16); // Reduced complexity
    const material = new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x001122
    });
    
    for (let i = 0; i < 10; i++) { // Reduced count
        const sphere = new THREE.Mesh(geometry, material.clone());
        sphere.position.set(
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        heroScene.add(sphere);
    }
    
    // Add network topology visualization
    createNetworkTopology();
    
    // Add floating data packets
    createDataPackets();
    
    // Add fiber optic cable simulation
    createFiberOpticCables();
}

// Create about elements
function createAboutElements() {
    if (!aboutScene) return;
    
    // Create rotating cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        metalness: 0.6,
        roughness: 0.3
    });
    
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, 0, -5);
    aboutScene.add(cube);
    
    // Animate cube
    if (typeof gsap !== 'undefined') {
        gsap.to(cube.rotation, { y: Math.PI * 2, duration: 8, repeat: -1, ease: "none" });
    }
}

// Create project elements
function createProjectElements(scene, projectNumber) {
    if (!scene) return;
    
    const colors = [0x00f5ff, 0x8b5cf6, 0x10b981, 0xf59e0b, 0xef4444, 0x8b5cf6];
    const color = colors[projectNumber - 1] || 0x00f5ff;
    
    // Create geometric shapes based on project number
    let geometry;
    switch (projectNumber) {
        case 1:
            geometry = new THREE.BoxGeometry(1, 1, 1);
            break;
        case 2:
            geometry = new THREE.SphereGeometry(0.5, 32, 32);
            break;
        case 3:
            geometry = new THREE.ConeGeometry(0.5, 1, 8);
            break;
        case 4:
            geometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
            break;
        case 5:
            geometry = new THREE.TorusGeometry(0.5, 0.2, 8, 100);
            break;
        case 6:
            geometry = new THREE.OctahedronGeometry(0.5);
            break;
        default:
            geometry = new THREE.BoxGeometry(1, 1, 1);
    }
    
    const material = new THREE.MeshStandardMaterial({
        color: color,
        metalness: 0.7,
        roughness: 0.3
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, 0, -3);
    scene.add(mesh);
    
    // Animate mesh
    if (typeof gsap !== 'undefined') {
        gsap.to(mesh.rotation, { 
            y: Math.PI * 2, 
            duration: 5 + projectNumber, 
            repeat: -1, 
            ease: "none" 
        });
    }
}

// Create floating particles
function createFloatingParticles() {
    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 100;

        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.2 + 0.5, 1, 0.5);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    introScene.add(particleSystem);

    // Animate particles
    gsap.to(particleSystem.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
    });
}

// Create intro text using basic geometries
function createIntroText() {
    // Create floating geometric shapes instead of text
    // Main title representation - large rotating cube
    const titleGeometry = new THREE.BoxGeometry(3, 1, 0.5);
    const titleMaterial = new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0x001122,
        transparent: true,
        opacity: 0.9
    });
    const titleMesh = new THREE.Mesh(titleGeometry, titleMaterial);
    titleMesh.position.set(0, 2, -5);
    introScene.add(titleMesh);

    // Subtitle representation - smaller rotating sphere
    const subtitleGeometry = new THREE.SphereGeometry(0.8, 32, 32);
    const subtitleMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        metalness: 0.6,
        roughness: 0.3,
        transparent: true,
        opacity: 0.8
    });
    const subtitleMesh = new THREE.Mesh(subtitleGeometry, subtitleMaterial);
    subtitleMesh.position.set(0, 0, -5);
    introScene.add(subtitleMesh);

    // Add some decorative elements
    const decorationGeometry = new THREE.TorusGeometry(1.5, 0.3, 16, 100);
    const decorationMaterial = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        wireframe: true,
        transparent: true,
        opacity: 0.6
    });
    const decorationMesh = new THREE.Mesh(decorationGeometry, decorationMaterial);
    decorationMesh.position.set(0, -1.5, -5);
    introScene.add(decorationMesh);

    // Animate elements
    gsap.from(titleMesh.position, { y: 10, duration: 2, ease: "bounce.out" });
    gsap.from(subtitleMesh.position, { y: -10, duration: 2, ease: "bounce.out", delay: 0.5 });
    gsap.from(decorationMesh.position, { y: -15, duration: 2, ease: "bounce.out", delay: 1 });
    
    gsap.to(titleMesh.rotation, { y: Math.PI * 2, duration: 8, repeat: -1, ease: "none" });
    gsap.to(subtitleMesh.rotation, { x: Math.PI * 2, duration: 6, repeat: -1, ease: "none" });
    gsap.to(decorationMesh.rotation, { z: Math.PI * 2, duration: 10, repeat: -1, ease: "none" });
}

// Start intro animation
function startIntroAnimation() {
    // Camera animation
    introCamera.position.set(0, 0, 10);
    gsap.to(introCamera.position, { z: -15, duration: 8, ease: "power2.inOut" });
    
    // Fade out loading text
    gsap.to('#loading-text', { opacity: 0, duration: 1, delay: 2 });
    
    // Auto transition after 10 seconds
    setTimeout(() => {
        if (!isIntroComplete) {
            completeIntro();
        }
    }, 10000);
}

// Complete intro and show main portfolio
function completeIntro() {
    isIntroComplete = true;
    
    gsap.to('#intro-scene', {
        opacity: 0,
        duration: 1,
        onComplete: () => {
            document.getElementById('intro-scene').style.display = 'none';
            document.getElementById('main-portfolio').classList.remove('hidden');
            initMainPortfolio();
        }
    });
}

// Initialize main portfolio
function initMainPortfolio() {
    initHeroScene();
    initAboutScene();
    initProjectScenes();
    initScrollAnimations();
    initMouseInteractions();
}




// Initialize scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                gsap.from(entry.target, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Initialize mouse interactions
function initMouseInteractions() {
    let mouseMoveTimeout;
    
    document.addEventListener('mousemove', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        // Update camera positions based on mouse
        if (heroCamera) {
            gsap.to(heroCamera.position, {
                x: mouse.x * 2,
                y: mouse.y * 2,
                duration: 1,
                ease: "power2.out"
            });
        }
        
        // Throttle particle creation
        clearTimeout(mouseMoveTimeout);
        mouseMoveTimeout = setTimeout(() => {
            createInteractiveParticles(event.clientX, event.clientY);
        }, 100);
    });
    
    // Add click interactions
    document.addEventListener('click', (event) => {
        // Only create click effect on canvas areas
        if (event.target.tagName === 'CANVAS' || event.target.closest('section')) {
            createClickEffect(event.clientX, event.clientY);
        }
    });
    
    // Add scroll-based animations
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            updateScrollAnimations();
        }, 50);
    });
}

// Create interactive particles on mouse move
function createInteractiveParticles(x, y) {
    if (!heroScene || !THREE) return;
    
    try {
        // Throttle particle creation to avoid performance issues
        if (createInteractiveParticles.lastTime && Date.now() - createInteractiveParticles.lastTime < 100) {
            return;
        }
        createInteractiveParticles.lastTime = Date.now();
        
        // Convert screen coordinates to normalized device coordinates
        const mouseX = (x / window.innerWidth) * 2 - 1;
        const mouseY = -(y / window.innerHeight) * 2 + 1;
        
        // Create temporary particle
        const particleGeometry = new THREE.SphereGeometry(0.1, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: 0x00f5ff,
            transparent: true,
            opacity: 0.8
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(mouseX * 10, mouseY * 10, -5);
        heroScene.add(particle);
        
        // Animate and remove particle
        if (typeof gsap !== 'undefined') {
            gsap.to(particle.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 1,
                ease: "power2.out",
                onComplete: () => {
                    if (heroScene && particle.parent) {
                        heroScene.remove(particle);
                    }
                }
            });
            
            gsap.to(particle.material, {
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        } else {
            // Fallback animation without GSAP
            setTimeout(() => {
                if (heroScene && particle.parent) {
                    heroScene.remove(particle);
                }
            }, 1000);
        }
    } catch (error) {
        console.error('Error creating interactive particles:', error);
    }
}

// Create click effect
function createClickEffect(x, y) {
    if (!heroScene || !THREE) return;
    
    try {
        const mouseX = (x / window.innerWidth) * 2 - 1;
        const mouseY = -(y / window.innerHeight) * 2 + 1;
        
        // Create ripple effect
        for (let i = 0; i < 3; i++) {
            const rippleGeometry = new THREE.RingGeometry(0.1, 0.5, 16);
            const rippleMaterial = new THREE.MeshBasicMaterial({
                color: 0x8b5cf6,
                transparent: true,
                opacity: 0.8,
                side: THREE.DoubleSide
            });
            
            const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
            ripple.position.set(mouseX * 10, mouseY * 10, -5);
            heroScene.add(ripple);
            
            if (typeof gsap !== 'undefined') {
                gsap.to(ripple.scale, {
                    x: 3,
                    y: 3,
                    z: 3,
                    duration: 1,
                    ease: "power2.out",
                    delay: i * 0.1
                });
                
                gsap.to(ripple.material, {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    delay: i * 0.1,
                    onComplete: () => {
                        if (heroScene && ripple.parent) {
                            heroScene.remove(ripple);
                        }
                    }
                });
            } else {
                // Fallback animation
                setTimeout(() => {
                    if (heroScene && ripple.parent) {
                        heroScene.remove(ripple);
                    }
                }, 1000 + i * 100);
            }
        }
    } catch (error) {
        console.error('Error creating click effect:', error);
    }
}

// Update scroll-based animations
function updateScrollAnimations() {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / maxScroll;
    
    // Update camera rotation based on scroll
    if (heroCamera) {
        gsap.to(heroCamera.rotation, {
            x: scrollProgress * Math.PI * 0.1,
            y: scrollProgress * Math.PI * 0.2,
            duration: 0.5,
            ease: "power2.out"
        });
    }
    
    // Update particle systems based on scroll
    updateParticleSystems(scrollProgress);
}

// Update particle systems based on scroll progress
function updateParticleSystems(progress) {
    if (!heroScene) return;
    
    // Find all particle systems and update their properties
    heroScene.traverse((child) => {
        if (child.material && child.material.opacity !== undefined) {
            const targetOpacity = 0.3 + (progress * 0.7);
            gsap.to(child.material, {
                opacity: targetOpacity,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });
}

// Event listeners
function initEventListeners() {
    // Skip intro button
    document.getElementById('skip-intro').addEventListener('click', completeIntro);

    // Mobile menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Floating action buttons
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    const quickContactBtn = document.getElementById('quick-contact');
    if (quickContactBtn) {
        quickContactBtn.addEventListener('click', handleQuickContact);
    }

    const downloadCvBtn = document.getElementById('download-cv');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', handleDownloadCV);
    }

    // Back to top button visibility
    window.addEventListener('scroll', updateBackToTopButton);

    // Window resize
    window.addEventListener('resize', handleResize);
}

// Toggle mobile menu
function toggleMobileMenu() {
    // Implementation for mobile menu toggle
    console.log('Mobile menu toggled');
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Show success message
    gsap.to(e.target, {
        scale: 1.05,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    });
    
    console.log('Form submitted:', data);
    alert('Message sent successfully!');
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle window resize
function handleResize() {
    // Update camera aspect ratios
    if (introCamera) {
        introCamera.aspect = window.innerWidth / window.innerHeight;
        introCamera.updateProjectionMatrix();
        introRenderer.setSize(window.innerWidth, window.innerHeight);
    }
    
    if (heroCamera) {
        heroCamera.aspect = window.innerWidth / window.innerHeight;
        heroCamera.updateProjectionMatrix();
        heroRenderer.setSize(window.innerWidth, window.innerHeight);
    }
}


// Unified animation loop
function startAnimationLoop() {
    function animate() {
        requestAnimationFrame(animate);
        
        try {
            // Render intro scene only if it's visible
            if (introScene && introCamera && introRenderer && !isIntroComplete) {
                introRenderer.render(introScene, introCamera);
            }
            
            // Render hero scene only if main portfolio is visible
            if (heroScene && heroCamera && heroRenderer && isIntroComplete) {
                heroRenderer.render(heroScene, heroCamera);
            }
            
            // Render about scene only when about section is visible
            if (aboutScene && aboutCamera && aboutRenderer && isIntroComplete) {
                aboutRenderer.render(aboutScene, aboutCamera);
            }
            
            // Render project scenes only when they're visible
            projectScenes.forEach(({ scene, camera, renderer }, index) => {
                if (scene && camera && renderer && isIntroComplete) {
                    // Only render if the project is in viewport
                    const projectCanvas = document.getElementById(`project${index + 1}-canvas`);
                    if (projectCanvas && isElementInViewport(projectCanvas)) {
                    renderer.render(scene, camera);
                    }
                }
            });
        } catch (error) {
            console.error('Error in animation loop:', error);
        }
    }
    
    animate();
}

// Check if element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Start animation loops
startAnimationLoop();


// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    } else {
        body.classList.add('light-theme');
        themeIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    }
}

// Notification system
function showNotification(title, message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationTitle = document.getElementById('notification-title');
    const notificationMessage = document.getElementById('notification-message');
    const notificationIcon = document.getElementById('notification-icon');
    
    if (notification && notificationTitle && notificationMessage && notificationIcon) {
        notificationTitle.textContent = title;
        notificationMessage.textContent = message;
        
        // Update icon based on type
        if (type === 'success') {
            notificationIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>';
            notificationIcon.className = 'w-6 h-6 text-green-400';
        } else if (type === 'error') {
            notificationIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
            notificationIcon.className = 'w-6 h-6 text-red-400';
        } else if (type === 'info') {
            notificationIcon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>';
            notificationIcon.className = 'w-6 h-6 text-blue-400';
        }
        
        notification.style.transform = 'translateX(0)';
        
        // Auto hide after 5 seconds
        setTimeout(() => {
            hideNotification();
        }, 5000);
    }
}

function hideNotification() {
    const notification = document.getElementById('notification');
    if (notification) {
        notification.style.transform = 'translateX(100%)';
    }
}

// Create network topology visualization
function createNetworkTopology() {
    if (!heroScene) return;
    
    // Create network nodes with shared geometry
    const nodePositions = [
        { x: -8, y: 3, z: -5 },
        { x: -4, y: 1, z: -8 },
        { x: 0, y: 4, z: -6 },
        { x: 4, y: 2, z: -7 },
        { x: 8, y: 3, z: -5 },
        { x: -6, y: -2, z: -9 },
        { x: 6, y: -1, z: -8 }
    ];
    
    const nodes = [];
    const nodeGeometry = new THREE.SphereGeometry(0.3, 12, 12); // Reduced complexity
    const blueMaterial = new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x001122,
        metalness: 0.8,
        roughness: 0.2
    });
    const purpleMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        emissive: 0x220044,
        metalness: 0.8,
        roughness: 0.2
    });
    
    // Create nodes
    nodePositions.forEach((pos, index) => {
        const nodeMaterial = index % 2 === 0 ? blueMaterial : purpleMaterial;
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(pos.x, pos.y, pos.z);
        heroScene.add(node);
        nodes.push(node);
        
        // Add pulsing animation
        if (typeof gsap !== 'undefined') {
            gsap.to(node.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
                delay: index * 0.2
            });
        }
    });
    
    // Create connections between nodes (reduced connections)
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            if (Math.random() > 0.6) { // 40% chance of connection
                createConnection(nodes[i], nodes[j]);
            }
        }
    }
}

// Create connection between two nodes
function createConnection(node1, node2) {
    const start = node1.position;
    const end = node2.position;
    
    const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(start.x, start.y, start.z),
        new THREE.Vector3(end.x, end.y, end.z)
    ]);
    
    const material = new THREE.LineBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.6
    });
    
    const line = new THREE.Line(geometry, material);
    heroScene.add(line);
    
    // Add flowing data animation
    animateDataFlow(line, start, end);
}

// Animate data flow along connection
function animateDataFlow(line, start, end) {
    const dataPacket = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    dataPacket.position.copy(start);
    heroScene.add(dataPacket);
    
    gsap.to(dataPacket.position, {
        x: end.x,
        y: end.y,
        z: end.z,
        duration: 3,
        repeat: -1,
        ease: "none",
        onComplete: () => {
            dataPacket.position.copy(start);
        }
    });
}

// Create floating data packets
function createDataPackets() {
    if (!heroScene) return;
    
    // Use shared geometry and materials
    const packetGeometry = new THREE.BoxGeometry(0.2, 0.1, 0.1);
    const bluePacketMaterial = new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x001122,
        transparent: true,
        opacity: 0.8
    });
    const purplePacketMaterial = new THREE.MeshStandardMaterial({
        color: 0x8b5cf6,
        emissive: 0x001122,
        transparent: true,
        opacity: 0.8
    });
    
    for (let i = 0; i < 8; i++) { // Reduced count
        const packetMaterial = i % 2 === 0 ? bluePacketMaterial : purplePacketMaterial;
        const packet = new THREE.Mesh(packetGeometry, packetMaterial);
        packet.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
        );
        
        heroScene.add(packet);
        
        // Animate packet movement
        if (typeof gsap !== 'undefined') {
            gsap.to(packet.position, {
                x: packet.position.x + (Math.random() - 0.5) * 20,
                y: packet.position.y + (Math.random() - 0.5) * 20,
                z: packet.position.z + (Math.random() - 0.5) * 20,
                duration: 5 + Math.random() * 5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
            
            // Add rotation
            gsap.to(packet.rotation, {
                y: Math.PI * 2,
                duration: 2,
                repeat: -1,
                ease: "none"
            });
        }
    }
}

// Create fiber optic cable simulation
function createFiberOpticCables() {
    if (!heroScene) return;
    
    // Create main fiber trunk
    const fiberGeometry = new THREE.CylinderGeometry(0.05, 0.05, 25, 8);
    const fiberMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.9,
        roughness: 0.1,
        emissive: 0x001122
    });
    
    const mainFiber = new THREE.Mesh(fiberGeometry, fiberMaterial);
    mainFiber.rotation.z = Math.PI / 2;
    mainFiber.position.set(0, 0, -10);
    heroScene.add(mainFiber);
    
    // Create fiber strands
    for (let i = 0; i < 8; i++) {
        const strandGeometry = new THREE.CylinderGeometry(0.01, 0.01, 20, 6);
        const strandMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(i / 8, 1, 0.5),
            emissive: new THREE.Color().setHSL(i / 8, 1, 0.1),
            metalness: 0.8,
            roughness: 0.2
        });
        
        const strand = new THREE.Mesh(strandGeometry, strandMaterial);
        strand.position.set(
            Math.cos(i * Math.PI / 4) * 0.3,
            Math.sin(i * Math.PI / 4) * 0.3,
            -10
        );
        strand.rotation.z = Math.PI / 2;
        heroScene.add(strand);
        
        // Add light pulse animation
        gsap.to(strand.material, {
            emissiveIntensity: 0.5,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: i * 0.1
        });
    }
}

// Create cybersecurity visualization
function createCybersecurityElements() {
    if (!aboutScene) return;
    
    // Create firewall visualization
    const firewallGeometry = new THREE.BoxGeometry(3, 0.2, 2);
    const firewallMaterial = new THREE.MeshStandardMaterial({
        color: 0xef4444,
        emissive: 0x220000,
        transparent: true,
        opacity: 0.8
    });
    
    const firewall = new THREE.Mesh(firewallGeometry, firewallMaterial);
    firewall.position.set(0, 0, -5);
    aboutScene.add(firewall);
    
    // Create data encryption particles
    for (let i = 0; i < 50; i++) {
        const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
        const particleMaterial = new THREE.MeshBasicMaterial({
            color: 0x10b981,
            transparent: true,
            opacity: 0.7
        });
        
        const particle = new THREE.Mesh(particleGeometry, particleMaterial);
        particle.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        aboutScene.add(particle);
        
        // Animate encryption process
        gsap.to(particle.position, {
            x: (Math.random() - 0.5) * 10,
            y: (Math.random() - 0.5) * 10,
            z: (Math.random() - 0.5) * 10,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            ease: "power2.inOut"
        });
    }
}

// Debug function to test 3D interactions
function debug3DInteractions() {
    console.log('=== 3D Interaction Debug ===');
    console.log('Hero Scene:', heroScene ? 'Loaded' : 'Not loaded');
    console.log('Hero Camera:', heroCamera ? 'Loaded' : 'Not loaded');
    console.log('Hero Renderer:', heroRenderer ? 'Loaded' : 'Not loaded');
    console.log('GSAP:', typeof gsap !== 'undefined' ? 'Loaded' : 'Not loaded');
    console.log('THREE:', typeof THREE !== 'undefined' ? 'Loaded' : 'Not loaded');
    
    // Test simple interaction
    if (heroScene) {
        console.log('Creating test particle...');
        const testGeometry = new THREE.SphereGeometry(0.2, 16, 16);
        const testMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const testMesh = new THREE.Mesh(testGeometry, testMaterial);
        testMesh.position.set(0, 0, -5);
        heroScene.add(testMesh);
        
        // Animate test mesh
        if (typeof gsap !== 'undefined') {
            gsap.to(testMesh.rotation, {
                y: Math.PI * 2,
                duration: 2,
                repeat: -1,
                ease: "none"
            });
            console.log('Test animation started');
        }
    }
}

// Simple mouse interaction test
function testMouseInteraction() {
    console.log('Testing mouse interaction...');
    createInteractiveParticles(window.innerWidth / 2, window.innerHeight / 2);
}

// Enhanced test function
function testAllInteractions() {
    console.log('=== Testing All 3D Interactions ===');
    
    // Test mouse interaction
    console.log('1. Testing mouse particles...');
    createInteractiveParticles(window.innerWidth / 2, window.innerHeight / 2);
    
    // Test click effect
    console.log('2. Testing click ripple...');
    createClickEffect(window.innerWidth / 2, window.innerHeight / 2);
    
    // Test camera movement
    console.log('3. Testing camera movement...');
    if (heroCamera) {
        gsap.to(heroCamera.position, {
            x: 2,
            y: 2,
            duration: 1,
            ease: "power2.out",
            onComplete: () => {
                gsap.to(heroCamera.position, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            }
        });
    }
    
    console.log('All tests completed! Check the 3D scene for effects.');
}

// Scroll to top function
function scrollToTop() {
    // Add visual feedback
    const btn = document.getElementById('back-to-top');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
    
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    
    // Show notification
    showNotification('Back to Top', 'Scrolled to top of page!', 'success');
}

// Handle quick contact
function handleQuickContact() {
    // Add visual feedback
    const btn = document.getElementById('quick-contact');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Scroll to contact section
    scrollToSection('contact');
    
    // Show notification
    showNotification('Quick Contact', 'Scrolled to contact section!', 'info');
}

// Handle download CV
function handleDownloadCV() {
    // Add visual feedback
    const btn = document.getElementById('download-cv');
    if (btn) {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 150);
    }
    
    // Create a temporary link to download CV
    const link = document.createElement('a');
    link.href = '#'; // You can replace this with actual CV URL
    link.download = 'Exaudi_Simon_Mwakitega_CV.pdf';
    
    // For now, show a notification since we don't have an actual CV file
    showNotification('Download CV', 'CV download will be available soon!', 'info');
    
    // You can replace the above with actual CV download:
    // link.click();
}

// Update back to top button visibility
function updateBackToTopButton() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
        }
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.showNotification = showNotification;
window.debug3DInteractions = debug3DInteractions;
window.testMouseInteraction = testMouseInteraction;
window.testAllInteractions = testAllInteractions;
window.scrollToTop = scrollToTop;
window.handleQuickContact = handleQuickContact;
window.handleDownloadCV = handleDownloadCV;
