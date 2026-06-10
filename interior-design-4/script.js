document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for scroll reveals
    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Stop observing once revealed
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    } else {
        // If reduced motion is preferred, reveal everything immediately
        document.querySelectorAll('.reveal').forEach(el => {
            el.classList.add('revealed');
        });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            menuToggle.textContent = isActive ? 'CLOSE' : 'MENU';
        });
    }

    // 3. Portfolio Filter Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden');
                        // Small timeout to allow display:block to apply before changing opacity
                        setTimeout(() => {
                            item.style.opacity = '1';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        // Wait for transition to finish before display:none
                        setTimeout(() => {
                            if (item.style.opacity === '0') {
                                item.classList.add('hidden');
                            }
                        }, 400); // matches CSS transition duration
                    }
                });
            });
        });
    }

    // 4. Contact Form Pseudo-Submit
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Basic validation check (just checking if any required-looking fields are empty could be nice, but not strictly requested)
            const formControls = document.querySelectorAll('.form-control');
            let isValid = true;
            
            formControls.forEach(ctrl => {
                if (!ctrl.value.trim() && ctrl.tagName !== 'SELECT') {
                    isValid = false;
                }
            });

            if (isValid) {
                submitBtn.textContent = 'Message Received';
                submitBtn.style.opacity = '0.7';
                submitBtn.style.pointerEvents = 'none';
            } else {
                submitBtn.textContent = 'Please fill all fields';
                setTimeout(() => {
                    submitBtn.textContent = 'Send Message';
                }, 2000);
            }
        });
    }
});
