import { config } from './config.js';
import { content } from './content.js';

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        anchors: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else if (systemDark) {
        htmlElement.setAttribute('data-theme', 'dark');
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // 3. Populate Basic Info
    document.title = `${config.brandName} | Interior Design`;
    document.getElementById('brand-logo').textContent = config.brandName;
    document.getElementById('footer-brand').textContent = "S & T";
    document.getElementById('footer-location').textContent = config.location;
    document.getElementById('footer-phone').textContent = config.phone;
    document.getElementById('footer-email').textContent = config.email;
    
    const socialLink = document.getElementById('footer-social');
    socialLink.href = config.social.instagram;

    // 4. Populate Hero & Philosophy Content
    document.getElementById('hero-subheading').textContent = content.hero.subheading;
    
    const servicesGrid = document.getElementById('services-grid');
    content.services.forEach((service, index) => {
        const num = String(index + 1).padStart(2, '0');
        const html = `
            <div class="philosophy-item reveal">
                <span class="philosophy-number">${num}</span>
                <div class="philosophy-img"><img src="${service.icon}" alt="${service.title}" style="width: 60%; height: auto; opacity: 0.8;"></div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        servicesGrid.insertAdjacentHTML('beforeend', html);
    });

    // 5. Populate Pricing (What We're Known For)
    const pricingGrid = document.getElementById('pricing-grid');
    document.getElementById('pricing-note').textContent = content.pricing.note;
    content.pricing.packages.forEach((pkg, index) => {
        const html = `
            <div class="service-row reveal">
                <div class="service-name">${pkg.name}</div>
                <div class="service-details">${pkg.features.join(' / ')}</div>
                <div class="service-price">${pkg.price}</div>
            </div>
        `;
        pricingGrid.insertAdjacentHTML('beforeend', html);
    });

    // 6. Fetch and Render Instagram Posts (Prioritize Images)
    try {
        const response = await fetch('data/raw/posts.json');
        if (response.ok) {
            const posts = await response.json();
            
            // Filter images vs videos
            const imagePosts = posts.filter(p => !p.is_video && p.local_media_path);
            const videoPosts = posts.filter(p => p.is_video && p.local_media_path);
            
            // Hero Media: Use the first high-quality image, fallback to video
            const heroMediaContainer = document.getElementById('hero-media-container');
            const heroPost = imagePosts[0] || videoPosts[0] || posts[0];
            
            if (heroPost && heroPost.local_media_path) {
                if (heroPost.is_video) {
                    heroMediaContainer.innerHTML = `<video src="${heroPost.local_media_path}" autoplay muted loop playsinline></video>`;
                } else {
                    heroMediaContainer.innerHTML = `<img src="${heroPost.local_media_path}" alt="Interior Design">`;
                }
            }

            // Featured Project Media
            const featuredMediaContainer = document.getElementById('featured-media-container');
            const featuredPost = imagePosts[1] || imagePosts[0];
            if (featuredPost) {
                featuredMediaContainer.innerHTML = `<img src="${featuredPost.local_media_path}" alt="Featured Project">`;
            }

            // Process Section Media
            const processMediaContainer = document.getElementById('process-media-container');
            const processPost = imagePosts[2] || imagePosts[0];
            if (processPost) {
                processMediaContainer.innerHTML = `<img src="${processPost.local_media_path}" alt="Process">`;
            }

            // Populate Gallery (max 3 items for layout symmetry like the reference)
            const galleryGrid = document.getElementById('gallery-grid');
            // We want mostly images!
            const galleryPosts = imagePosts.slice(3, 6);
            
            galleryPosts.forEach((post) => {
                const html = `
                    <div class="gallery-item reveal" onclick="window.open('${post.url}', '_blank')">
                        <img src="${post.local_media_path}" alt="Interior Project" loading="lazy">
                        <div class="gallery-caption">
                            <span>Instagram Project</span>
                            <span>❤️ ${post.likes}</span>
                        </div>
                    </div>
                `;
                galleryGrid.insertAdjacentHTML('beforeend', html);
            });
        }
    } catch (e) {
        console.error("Could not load gallery data:", e);
    }

    // 7. Form Submission Override
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = encodeURIComponent(config.whatsappMessage);
        const url = `https://wa.me/${config.phone.replace(/[^0-9]/g, '')}?text=${text}`;
        window.open(url, '_blank');
        contactForm.reset();
        alert("Thanks! Your message is ready to be sent via WhatsApp.");
    });

    // 8. Scroll Events (Header & Reveal Animations)
    const header = document.getElementById('header');
    const reveals = document.querySelectorAll('.reveal');

    const handleScroll = () => {
        // Header background
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Reveal elements
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    setTimeout(handleScroll, 100);
});
