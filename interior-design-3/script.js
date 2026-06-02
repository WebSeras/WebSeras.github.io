document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Logic
  const menuButton = document.querySelector('[data-testid="button-mobile-menu"]');
  if (menuButton) {
    const isSubdir = window.location.pathname.includes('/projects/') && !window.location.pathname.endsWith('/projects.html');
    const linkPrefix = isSubdir ? '../' : '';
    
    // Inject mobile menu container
    const header = document.querySelector('header');
    const mobileMenuHtml = `
      <div id="mobile-nav" class="md:hidden overflow-hidden border-t border-border bg-background transition-all duration-300" style="height: 0; opacity: 0; pointer-events: none;">
        <nav class="container mx-auto px-6 py-8 flex flex-col gap-6">
          <a href="${linkPrefix}index.html" class="text-xl font-serif text-foreground hover:text-primary transition-colors duration-200">Home</a>
          <a href="${linkPrefix}about.html" class="text-xl font-serif text-foreground hover:text-primary transition-colors duration-200">About</a>
          <a href="${linkPrefix}projects.html" class="text-xl font-serif text-foreground hover:text-primary transition-colors duration-200">Projects</a>
          <a href="${linkPrefix}services.html" class="text-xl font-serif text-foreground hover:text-primary transition-colors duration-200">Services</a>
          <a href="${linkPrefix}contact.html" class="text-xl font-serif text-foreground hover:text-primary transition-colors duration-200">Contact</a>
        </nav>
      </div>
    `;
    
    header.insertAdjacentHTML('beforeend', mobileMenuHtml);
    const mobileNav = document.getElementById('mobile-nav');
    let isOpen = false;

    menuButton.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        mobileNav.style.height = 'auto';
        mobileNav.style.opacity = '1';
        mobileNav.style.pointerEvents = 'auto';
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      } else {
        mobileNav.style.height = '0';
        mobileNav.style.opacity = '0';
        mobileNav.style.pointerEvents = 'none';
        menuButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
      }
    });
  }

  // Theme Toggle Logic
  const themeButton = document.querySelector('[data-testid="button-theme-toggle"]');
  if (themeButton) {
    themeButton.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      if (isDark) {
        themeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
      } else {
        themeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>';
      }
    });
    
    // Check initial theme
    if (localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      themeButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>';
    }
  }
});

  // Scroll Reveal Animation (replacing Framer Motion FadeIn)
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Apply transition
        entry.target.style.transition = 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
        
        // Remove initial hidden state
        entry.target.style.opacity = '1';
        if (entry.target.style.transform) {
          entry.target.style.transform = 'none';
        }
        
        // Stop observing once revealed
        revealObserver.unobserve(entry.target);
      }
    });
  }, { 
    threshold: 0.1,
    rootMargin: '-50px 0px' 
  });

  // Find all elements that were initially hidden by Framer Motion (opacity: 0)
  document.querySelectorAll('[style]').forEach(el => {
    if (el.style.opacity === '0' || el.style.opacity === 0) {
      revealObserver.observe(el);
    }
  });
