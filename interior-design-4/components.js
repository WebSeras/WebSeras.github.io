class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="site-header">
                <a href="/" class="logo"><span class="logo-icon"></span>CASA ELAN</a>
                <button class="menu-toggle" aria-label="Toggle Navigation">MENU</button>
                <nav class="nav-links">
                    <a href="/" class="nav-link">Home</a>
                    <a href="portfolio" class="nav-link">Portfolio</a>
                    <a href="contact" class="nav-link">Contact</a>
                </nav>
            </header>
        `;
        this.setupMenuLogic();
    }

    setupMenuLogic() {
        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');
        const header = this.querySelector('.site-header');
        const path = window.location.pathname;
        let currentPage = path.split('/').pop();
        if (currentPage === '') currentPage = '/';

        this.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            let linkPage = link.getAttribute('href');

            if (linkPage === currentPage || (path === '/' && linkPage === '/')) {
                link.classList.add('active');
            }
        });

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                const isActive = navLinks.classList.contains('active');
                menuToggle.textContent = isActive ? 'CLOSE' : 'MENU';
                if (header) header.classList.toggle('menu-open', isActive);
            });
        }

        // Handle the scroll effect for this specific navbar
        if (header) {
            const onScroll = () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            };
            window.addEventListener('scroll', onScroll);
            onScroll(); // Run initially
        }
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-nav">
                    <a href="index">Home</a> • 
                    <a href="index#services">Services</a> • 
                    <a href="portfolio">Portfolio</a> • 
                    <a href="contact">Contact</a>
                </div>
                <hr class="footer-divider">
                <div class="footer-meta-row">
                    <span style = "text-align: left">Studio 12, Mahalaxmi<br>Mumbai, India</span>
                    <span style = "text-align: center" class="font-utility uppercase">Interiors of Quiet Distinction</span>
                    <span style = "text-align: right">&copy; 2026 Casa Elan.<br>All rights reserved.</span>
                </div>
                <div class="footer-wordmark font-display">CASA ELAN</div>
            </footer>
        `;
    }
}

customElements.define('c-navbar', Navbar);
customElements.define('c-footer', Footer);
