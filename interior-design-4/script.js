document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 0. Initialize Lenis for Smooth Scrolling
    const lenis = new Lenis({
        anchors: true,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const targetId = this.getAttribute('href')
            lenis.scrollTo(targetId, {
                duration: 1.5,
                immediate: false
            })
        })
    })

    // Connect GSAP ScrollTrigger to Lenis if GSAP exists
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        });
        gsap.ticker.lagSmoothing(0)
    }

    // 1. Header scroll effect
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
    }

    // 2. Custom Cursor
    if (window.matchMedia('(pointer: fine)').matches && !prefersReducedMotion) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const renderCursor = () => {
            cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);
    }

    // 3. GSAP Reveals and Parallax
    function initGSAPReveals() {
        if (prefersReducedMotion || typeof gsap === 'undefined') {
            document.querySelectorAll('.reveal, hr.hairline').forEach(el => el.classList.add('revealed'));
            return;
        }

        gsap.utils.toArray('.reveal, hr.hairline').forEach(elem => {
            // Check if already has a trigger
            if (ScrollTrigger.getById(elem)) return;

            ScrollTrigger.create({
                trigger: elem,
                id: String(Math.random()),
                start: "top 85%",
                onEnter: () => elem.classList.add('revealed'),
                once: true
            });
        });

        // Parallax
        // gsap.utils.toArray('.page-header-bg, .hero-bg').forEach(bg => {
        //     if (bg.parentElement && !ScrollTrigger.getById(bg)) {
        //         gsap.to(bg, {
        //             yPercent: 30,
        //             ease: "none",
        //             scrollTrigger: {
        //                 trigger: bg.parentElement,
        //                 id: String(Math.random()),
        //                 start: "top top",
        //                 end: "bottom top",
        //                 scrub: true
        //             }
        //         });
        //     }
        // });
    }

    // Initialize initial elements
    initGSAPReveals();

    // Initialize Swiper Carousel from JSON
    const homeSwiperWrapper = document.getElementById('home-swiper-wrapper');
    if (homeSwiperWrapper) {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => {
                homeSwiperWrapper.innerHTML = '';
                const slidesData = data.slice(0, 3); // Max 3 slides
                slidesData.forEach(item => {
                    const slide = document.createElement('a');
                    slide.className = 'swiper-slide';
                    slide.href = 'portfolio.html';
                    slide.style.display = 'block';
                    slide.innerHTML = `
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/800x1000/4A443A/F0EBE1?text=Image'">
                        <div class="slide-meta top-right">
                            <h3 class="font-display italic text-h2">${item.title}</h3>
                            <p class="font-utility uppercase text-xs">${item.location}</p>
                        </div>
                    `;
                    // Add page transition logic directly to the new slide link
                    slide.addEventListener('click', (e) => {
                        e.preventDefault();
                        document.body.classList.add('page-exit');
                        setTimeout(() => window.location.href = slide.href, 400);
                    });
                    homeSwiperWrapper.appendChild(slide);
                });

                // Initialize Swiper Carousel after injection
                if (typeof Swiper !== 'undefined') {
                    new Swiper('.custom-swiper', {
                        autoplay: {
                            delay: 2500,
                            disableOnInteraction: false,
                        },
                        speed: prefersReducedMotion ? 0 : 800,
                        effect: prefersReducedMotion ? 'fade' : 'slide',
                        loop: true,
                        direction: 'horizontal',
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                            renderBullet: function (index, className) {
                                return '<span class="' + className + '">' + (index + 1) + "</span>";
                            },
                        },
                    });
                }
            })
            .catch(err => console.error('Error loading swiper items:', err));
    }

    // 4. Typewriter Effect
    const heroSubtext = document.querySelector('.hero-subtext');
    if (heroSubtext && !prefersReducedMotion) {
        const text = heroSubtext.textContent;
        heroSubtext.textContent = '';
        let i = 0;

        const typeChar = () => {
            if (i < text.length) {
                heroSubtext.textContent += text.charAt(i);
                i++;
                const delay = Math.random() * (60 - 30) + 30; // 30-60ms
                setTimeout(typeChar, delay);
            }
        };
        setTimeout(typeChar, 800); // Wait for initial hero text reveals
    }

    // 5. Page Transitions
    document.querySelectorAll('.nav-link, .cta-button, .logo').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            if (!target || target.startsWith('#') || target.startsWith('javascript')) return;

            // Only intercept if it's an internal page
            if (link.hostname === window.location.hostname || !link.hostname) {
                e.preventDefault();
                document.body.classList.add('page-exit');
                setTimeout(() => {
                    window.location.href = target;
                }, 400);
            }
        });
    });

    // 7. Portfolio Filter Logic
    function setupPortfolioFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        if (filterBtns.length > 0 && portfolioItems.length > 0) {
            filterBtns.forEach(btn => {
                const newBtn = btn.cloneNode(true);
                btn.parentNode.replaceChild(newBtn, btn);

                newBtn.addEventListener('click', () => {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    newBtn.classList.add('active');

                    const filterValue = newBtn.getAttribute('data-filter');

                    document.querySelectorAll('.portfolio-item').forEach(item => {
                        const itemCategory = item.getAttribute('data-category');
                        if (filterValue === 'all' || itemCategory === filterValue) {
                            item.classList.remove('hidden');
                            setTimeout(() => item.style.opacity = '1', 50);
                        } else {
                            item.style.opacity = '0';
                            setTimeout(() => {
                                if (item.style.opacity === '0') item.classList.add('hidden');
                            }, 400);
                        }
                    });

                    // Refresh ScrollTrigger since layout changed
                    setTimeout(() => {
                        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
                    }, 450);
                });
            });
        }
    }

    // 8. Load Portfolio Items from JSON
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        fetch('portfolio.json')
            .then(res => res.json())
            .then(data => {
                document.querySelectorAll('.grid-col').forEach(col => col.innerHTML = '');

                let colcade;
                if (typeof Colcade !== 'undefined') {
                    colcade = new Colcade('.portfolio-grid', {
                        columns: '.grid-col',
                        items: '.portfolio-item'
                    });
                }

                const itemsArray = [];
                data.forEach((item) => {
                    const article = document.createElement('article');
                    article.className = `portfolio-item reveal`;
                    article.setAttribute('data-category', item.category);

                    article.innerHTML = `
                        <div class="portfolio-img-wrapper">
                            <img src="${item.image}" alt="${item.title}" onerror="this.src='https://placehold.co/800x1000/4A443A/F0EBE1?text=Image'">
                            <div class="portfolio-overlay">
                                <h3 class="portfolio-name font-display italic">${item.title}</h3>
                                <p class="font-utility text-xs uppercase">${item.location}</p>
                            </div>
                        </div>
                    `;
                    itemsArray.push(article);
                });

                if (colcade) {
                    colcade.append(itemsArray);
                } else {
                    itemsArray.forEach(item => portfolioGrid.appendChild(item));
                }

                // Wait for images to load before refreshing ScrollTrigger
                Promise.all(itemsArray.map(item => {
                    return new Promise((resolve) => {
                        const img = item.querySelector('img');
                        if (img.complete) {
                            resolve();
                        } else {
                            img.addEventListener('load', resolve);
                            img.addEventListener('error', resolve);
                        }
                    });
                })).then(() => {
                    if (typeof ScrollTrigger !== 'undefined') {
                        ScrollTrigger.refresh();
                        initGSAPReveals(); // Init triggers for the new items
                    }
                    setupPortfolioFilters();
                });
            })
            .catch(err => console.error('Error loading portfolio.json:', err));
    } else {
        setupPortfolioFilters();
    }

    // 9. Contact Form WhatsApp Logic
    const waBtn = document.getElementById('wa-btn');
    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const name = document.getElementById('contact-name').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !message) {
                waBtn.textContent = 'Please fill all fields';
                setTimeout(() => waBtn.textContent = 'Contact via WhatsApp', 2000);
            } else {
                const text = encodeURIComponent(`Hello, I am ${name}. ${message}`);
                window.open(`https://wa.me/12125550194?text=${text}`, '_blank');
            }
        });
    }
});
