document.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.nav-container');

    // Toggle expanded class on click for mobile devices
    navContainer.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navContainer.classList.toggle('expanded');
        }
    });

    // Close nav when a link is clicked on mobile
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Short delay to allow click to register before collapsing
                setTimeout(() => {
                    navContainer.classList.remove('expanded');
                }, 150);
            }
        });
    });

    // Intersection observer for fade-in animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation initial state to sections
    const animatedElements = document.querySelectorAll('.section-title, .service-card, .review-card, .contact-wrapper');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(element);
    });

    // Active state for navigation based on scroll position
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.style.color = ''; // Reset color
            if (link.getAttribute('href').includes(current)) {
                link.style.color = 'var(--accent)';
            }
        });
    });

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use OS preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme == 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (currentTheme == 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
        });
    }

    // Auto-scroll and Indicators for carousel
    const reviewsSlider = document.querySelector('.reviews-slider');
    const indicators = document.querySelectorAll('.indicator');
    
    if (reviewsSlider && indicators.length > 0) {
        let isHovered = false;
        let isDown = false;
        let startX;
        let scrollLeft;
        
        reviewsSlider.addEventListener('mouseenter', () => isHovered = true);
        
        reviewsSlider.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent native dragging which stops mouse events
            isDown = true;
            isHovered = true;
            reviewsSlider.style.scrollSnapType = 'none';
            reviewsSlider.style.cursor = 'grabbing';
            startX = e.pageX - reviewsSlider.offsetLeft;
            scrollLeft = reviewsSlider.scrollLeft;
        });
        
        reviewsSlider.addEventListener('mouseleave', () => {
            isDown = false;
            isHovered = false;
            reviewsSlider.style.scrollSnapType = '';
            reviewsSlider.style.cursor = '';
        });
        
        reviewsSlider.addEventListener('mouseup', () => {
            isDown = false;
            reviewsSlider.style.scrollSnapType = '';
            reviewsSlider.style.cursor = '';
        });
        
        reviewsSlider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - reviewsSlider.offsetLeft;
            const walk = (x - startX) * 1.5;
            reviewsSlider.scrollLeft = scrollLeft - walk;
        });

        const updateIndicators = () => {
            const scrollStep = reviewsSlider.clientWidth + 30;
            let currentIndex = Math.round(reviewsSlider.scrollLeft / scrollStep);
            if (currentIndex >= indicators.length) currentIndex = indicators.length - 1;
            
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIndex);
            });
        };

        reviewsSlider.addEventListener('scroll', updateIndicators);

        indicators.forEach((ind, index) => {
            ind.addEventListener('click', () => {
                const scrollStep = reviewsSlider.clientWidth + 30;
                reviewsSlider.scrollTo({
                    top: 0,
                    left: index * scrollStep,
                    behavior: 'smooth'
                });
            });
        });

        setInterval(() => {
            if (!isHovered) {
                const scrollStep = reviewsSlider.clientWidth + 30;
                let nextScroll = reviewsSlider.scrollLeft + scrollStep;
                
                // If we reach the end, loop back to the start
                // We use scrollWidth - clientWidth to check if we can't scroll further
                if (nextScroll > reviewsSlider.scrollWidth - reviewsSlider.clientWidth + 10) {
                    nextScroll = 0;
                }
                
                reviewsSlider.scrollTo({
                    top: 0,
                    left: nextScroll,
                    behavior: 'smooth'
                });
            }
        }, 4000); // Scroll every 4 seconds
    }
});
