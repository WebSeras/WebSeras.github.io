/* client-side Hash Router with View Transitions & Accessibility Focus Management */

class AppRouter {
  constructor() {
    this.appRoot = document.getElementById("app-root");
    this.navLinks = document.querySelectorAll(".nav-link");
    this.routes = {
      "": () => this.renderHome(),
      "#home": () => this.renderHome(),
      "#services": () => this.renderServices(),
      "#portfolio": () => this.renderPortfolio(),
      "#about": () => this.renderAbout(),
      "#contact": () => this.renderContact(),
    };

    window.addEventListener("hashchange", () => this.handleRouting());
  }

  init() {
    // Initial routing on page load
    this.handleRouting();
  }

  handleRouting() {
    const hash = window.location.hash || "#home";
    const renderFunc = this.routes[hash] || (() => this.renderNotFound());

    // Update active nav links in header and mobile drawer
    this.updateActiveNav(hash);

    // Apply native View Transitions API if supported
    if (!document.startViewTransition) {
      // Fallback: Just update the DOM immediately
      renderFunc();
      this.postRenderCleanup(hash);
    } else {
      const transition = document.startViewTransition(() => {
        renderFunc();
      });

      transition.finished.finally(() => {
        this.postRenderCleanup(hash);
      });
    }
  }

  postRenderCleanup(hash) {
    // Scroll page to top on page switches
    window.scrollTo(0, 0);

    // Close mobile nav drawer if open
    document.querySelector(".mobile-nav-drawer")?.classList.remove("open");
    document.querySelector(".mobile-drawer-overlay")?.classList.remove("open");
    document.body.classList.remove("hamburger-open");

    // Trigger re-initialization of page-specific actions in app.js
    if (window.AppBootstrapper) {
      window.AppBootstrapper.onPageRendered(hash);
    }
  }

  updateActiveNav(hash) {
    // Normalize hash for checking active link
    const activeHash = hash === "" ? "#home" : hash;
    this.navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === activeHash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  /* ==========================================
     PAGE RENDERING TEMPLATES
     ========================================== */

  renderHome() {
    this.appRoot.innerHTML = `
      <div class="view-container">
        <!-- Hero Section -->
        <section class="home-hero">
          <div class="hero-bg-container">
            <img class="hero-bg-img" src="assets/photos/10.jpg" alt="Window shades closed to reveal the name Studio Shades">
          </div>
          <div class="hero-overlay"></div>
          <div class="container hero-content-container">
            <div class="hero-glass-card reveal-on-scroll">
              <span class="hero-tagline">Elite Interior Architecture</span>
              <h1 class="hero-title">Crafting Spaces<br>Of <span>Luxury & Silence</span></h1>
              <p class="hero-desc">Studio Shades designs bespoke high-end interiors that blend spatial precision, natural light, and premium textures into personal sanctuaries.</p>
              <div class="hero-actions">
                <a href="#portfolio" class="btn btn-primary">Explore Portfolio</a>
                <a href="#contact" class="btn btn-secondary">Book Consultation</a>
              </div>
            </div>
          </div>
          <div class="hero-scroll-indicator" aria-hidden="true">
            <span class="scroll-indicator-text">Scroll Down</span>
            <svg class="scroll-indicator-arrow" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
            </svg>
          </div>
        </section>

        <!-- Philosophy Section -->
        <section class="section-padding">
          <div class="container philosophy-grid">
            <div class="about-collage reveal-on-scroll">
              <div class="about-collage-img collage-primary">
                <img src="assets/photos/6.jpg" alt="Discussion table with yellow and blue accents in the office of Studio Shades">
              </div>
              <div class="about-collage-img collage-secondary">
                <img src="assets/photos/7.jpg" alt="Dining table with white and orange accents in the office of Studio Shades">
              </div>
            </div>
            <div class="philosophy-info reveal-on-scroll reveal-delay-1">
              <span class="hero-tagline">Our Philosophy</span>
              <h3>The Art of Restraint</h3>
              <p>We believe true luxury is quiet. Our approach removes the visual noise of default designs, replacing it with tailored materials, harmonious layout proportions, and intentional shadow details.</p>
              <p>Every piece of furniture we curate, every architectural wall we detail, is selected to align with a unified design language that respects the surrounding environment.</p>
              <div class="philosophy-stats">
                <div class="stat-card">
                  <span class="stat-number">12+</span>
                  <span class="stat-label">Years Crafting</span>
                </div>
                <div class="stat-card">
                  <span class="stat-number">150+</span>
                  <span class="stat-label">Spaces Built</span>
                </div>
                <div class="stat-card">
                  <span class="stat-number">10</span>
                  <span class="stat-label">Design Awards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Horizontal Scroll Signature Spaces Showcase -->
        <section class="section-padding horizontal-showcase-section" style="border-top: var(--border-subtle); border-bottom: var(--border-subtle); background-color: var(--bg-surface);">
          <div class="container reveal-on-scroll">
            <span class="hero-tagline">Spatial Journey</span>
            <h2 class="section-title" style="margin-left: 0;">Signature Spaces</h2>
            <p class="section-subtitle">Scroll horizontally to traverse our physical curation portfolio.</p>
          </div>

          <div class="horizontal-scroller-wrap reveal-on-scroll reveal-delay-1">
            <div class="horizontal-scroller scroller" id="horizontal-scroller">
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/5.jpg" alt="Blush Lounge sofa setup">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">01 / Residential</span>
                  <h4 class="slide-title">The Blush Lounge</h4>
                </div>
              </div>
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/8.jpg" alt="Textured custom rugs rolls">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">02 / Bespoke Curation</span>
                  <h4 class="slide-title">The Rug Gallery</h4>
                </div>
              </div>
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/4.jpg" alt="Atelier dining table and chairs setup">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">03 / Commercial</span>
                  <h4 class="slide-title">The Atelier Dining</h4>
                </div>
              </div>
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/3.jpg" alt="Cozy bedroom with blue accents">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">04 / Residential</span>
                  <h4 class="slide-title">The Cobalt Bedroom</h4>
                </div>
              </div>
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/2.jpg" alt="Two accent chairs of varied design and accents">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">05 / Bespoke Curation</span>
                  <h4 class="slide-title">Sculptural Chairs</h4>
                </div>
              </div>
              <div class="horizontal-slide entry" onclick="window.location.hash='#portfolio'">
                <img class="horizontal-slide-img" src="assets/photos/1.jpg" alt="Stack of hand-dyed organic mattresses">
                <div class="horizontal-slide-overlay"></div>
                <div class="horizontal-slide-content">
                  <span class="slide-tag">06 / Bespoke Curation</span>
                  <h4 class="slide-title">Textile Sanctuary</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Bento Grid Featured Work -->
        <section class="section-padding" style="border-bottom: var(--border-subtle);">
          <div class="container">
            <div class="section-header reveal-on-scroll">
              <span class="hero-tagline">Curated Showcase</span>
              <h2 class="section-title">Featured Projects</h2>
              <p class="section-subtitle">A glimpse into our bespoke residential and commercial commissions.</p>
            </div>

            <div class="bento-grid">
              <div class="bento-card bento-card-wide reveal-on-scroll" onclick="window.location.hash='#portfolio'">
                <img class="bento-card-bg" src="assets/photos/5.jpg" alt="Blush Lounge sofa setup">
                <div class="bento-card-overlay"></div>
                <div class="bento-card-content">
                  <span class="bento-card-tag">Residential</span>
                  <h3 class="bento-card-title">The Blush Lounge</h3>
                  <p class="bento-card-desc">Sleek living area setup with pink and white accents.</p>
                </div>
              </div>
              <div class="bento-card bento-card-tall reveal-on-scroll reveal-delay-1" onclick="window.location.hash='#portfolio'">
                <img class="bento-card-bg" src="assets/photos/8.jpg" alt="Textured custom rugs library rolls">
                <div class="bento-card-overlay"></div>
                <div class="bento-card-content">
                  <span class="bento-card-tag">Bespoke Curation</span>
                  <h3 class="bento-card-title">The Rug Gallery</h3>
                  <p class="bento-card-desc">Custom texture rugs made with natural wool and silk.</p>
                </div>
              </div>
              <div class="bento-card bento-card-tall reveal-on-scroll" onclick="window.location.hash='#portfolio'">
                <img class="bento-card-bg" src="assets/photos/4.jpg" alt="Atelier dining chairs of varied colors">
                <div class="bento-card-overlay"></div>
                <div class="bento-card-content">
                  <span class="bento-card-tag">Commercial</span>
                  <h3 class="bento-card-title">The Atelier Dining Suite</h3>
                  <p class="bento-card-desc">Vibrant multi-colored designer chairs and natural oak dining table.</p>
                </div>
              </div>
              <div class="bento-card bento-card-wide reveal-on-scroll reveal-delay-1" onclick="window.location.hash='#portfolio'">
                <img class="bento-card-bg" src="assets/photos/3.jpg" alt="Cozy bedroom with blue accents">
                <div class="bento-card-overlay"></div>
                <div class="bento-card-content">
                  <span class="bento-card-tag">Residential</span>
                  <h3 class="bento-card-title">The Cobalt Bedroom Suite</h3>
                  <p class="bento-card-desc">A serene and cozy bedroom design featuring custom cobalt blue accents.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Testimonials -->
        <section class="section-padding testimonial-section">
          <div class="container">
            <div class="testimonial-container reveal-on-scroll">
              <div class="testimonial-track" id="testimonial-track">
                ${window.AppData.testimonials
                  .map(
                    (t, idx) => `
                  <div class="testimonial-slide">
                    <p class="testimonial-quote">${t.quote}</p>
                    <span class="testimonial-author">${t.author}</span>
                    <span class="testimonial-author-title">${t.project}</span>
                  </div>
                `,
                  )
                  .join("")}
              </div>

              <div class="testimonial-controls">
                ${window.AppData.testimonials
                  .map(
                    (_, idx) => `
                  <button class="testimonial-dot ${idx === 0 ? "active" : ""}" data-index="${idx}" aria-label="Go to testimonial slide ${idx + 1}"></button>
                `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </section>

        <!-- Conversion CTA -->
        <section class="section-padding">
          <div class="container text-center reveal-on-scroll" style="text-align: center; max-width: 650px;">
            <span class="hero-tagline">Begin Your Space</span>
            <h2 class="section-title">Ready to Sculpt Your Space?</h2>
            <p style="margin-bottom: var(--space-xl); color: var(--text-secondary);">Connect with our principal design team for an initial spatial consult to bring your luxury interior dreams to reality.</p>
            <a href="#contact" class="btn btn-primary">Schedule A Consult</a>
          </div>
        </section>
      </div>
    `;
  }

  renderServices() {
    this.appRoot.innerHTML = `
      <div class="view-container">
        <!-- Hero Header -->
        <header class="page-hero">
          <div class="container">
            <h1 class="page-title">Services & Expertise</h1>
            <p class="page-subtitle">Refining space through structured planning, curated sourcing, and meticulous execution.</p>
          </div>
        </header>

        <!-- Service Cards Grid -->
        <section class="section-padding">
          <div class="container">
            <div class="services-grid">
              ${window.AppData.services
                .map(
                  (s) => `
                <div class="service-card reveal-on-scroll">
                  <div class="service-icon">${s.icon}</div>
                  <h3>${s.title}</h3>
                  <p>${s.description}</p>
                  <ul class="service-features">
                    ${s.features.map((f) => `<li>${f}</li>`).join("")}
                  </ul>
                  <div class="service-price">
                    ${s.price} <span>/ ${s.period}</span>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>

        <!-- Process Timeline -->
        <section class="section-padding" style="background-color: var(--bg-surface); border-top: var(--border-subtle); border-bottom: var(--border-subtle);">
          <div class="container">
            <div class="section-header reveal-on-scroll">
              <span class="hero-tagline">The Design Journey</span>
              <h2 class="section-title">Our Blueprint</h2>
              <p class="section-subtitle">How we sculpt your environment from concept to final reveal.</p>
            </div>

            <div class="timeline">
              <div class="timeline-item reveal-on-scroll">
                <span class="timeline-step">Phase 01</span>
                <h3>Initial Consult</h3>
                <p>A personal meeting to define the scope, aesthetic direction, functional needs, and material sensibilities for your space.</p>
              </div>
              <div class="timeline-item reveal-on-scroll">
                <span class="timeline-step">Phase 02</span>
                <h3>Concept Design</h3>
                <p>We present curated mood boards, textured material palettes, spatial planning drafts, and 3D architectural mockups.</p>
              </div>
              <div class="timeline-item reveal-on-scroll">
                <span class="timeline-step">Phase 03</span>
                <h3>Detailing & Sourcing</h3>
                <p>Precise drafting of technical blueprints, bespoke furniture commissions, lighting specs, and material ordering.</p>
              </div>
              <div class="timeline-item reveal-on-scroll">
                <span class="timeline-step">Phase 04</span>
                <h3>Turnkey Styling</h3>
                <p>Overseeing build contractors, coordinating fine art placement, final detailing, and the dramatic turnkey reveal.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  renderPortfolio() {
    this.appRoot.innerHTML = `
      <div class="view-container">
        <header class="page-hero">
          <div class="container">
            <h1 class="page-title">Gallery</h1>
            <p class="page-subtitle">A collection of custom residential and commercial spaces defined by tactile surfaces and soft light.</p>
          </div>
        </header>

        <section class="section-padding">
          <div class="container">
            <!-- Filter buttons -->
            <div class="portfolio-filters reveal-on-scroll">
              <button class="filter-btn active" data-filter="all">All Projects</button>
              <button class="filter-btn" data-filter="residential">Residential</button>
              <button class="filter-btn" data-filter="commercial">Commercial</button>
            </div>

            <!-- Projects Grid -->
            <div class="portfolio-grid" id="portfolio-grid">
              ${window.AppData.portfolio
                .map(
                  (p) => `
                <div class="portfolio-item reveal-on-scroll" data-id="${p.id}" data-category="${p.category}">
                  <img class="portfolio-item-img" src="${p.image}" alt="${p.title}">
                  <div class="portfolio-item-overlay">
                    <span class="portfolio-item-tag">${p.category}</span>
                    <h3 class="portfolio-item-title">${p.title}</h3>
                    <div class="portfolio-item-meta">${p.location}  |  ${p.scale}</div>
                  </div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>

        <!-- Lightbox Modal -->
        <div class="lightbox-modal" id="lightbox-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="lightbox-content">
            <button class="lightbox-close" id="lightbox-close" aria-label="Close details modal">&times;</button>
            <div class="lightbox-img-container">
              <img class="lightbox-img" id="modal-img" src="" alt="">
            </div>
            <div class="lightbox-details">
              <span class="lightbox-tag" id="modal-tag"></span>
              <h2 class="lightbox-title" id="modal-title"></h2>
              <p class="lightbox-desc" id="modal-desc"></p>

              <div class="lightbox-meta-grid">
                <div class="lightbox-meta-item">
                  <h5>Location</h5>
                  <p id="modal-location"></p>
                </div>
                <div class="lightbox-meta-item">
                  <h5>Space Area</h5>
                  <p id="modal-scale"></p>
                </div>
                <div class="lightbox-meta-item">
                  <h5>Prime Materials</h5>
                  <p id="modal-materials"></p>
                </div>
                <div class="lightbox-meta-item">
                  <h5>Timeline</h5>
                  <p id="modal-duration"></p>
                </div>
              </div>
              <a href="#contact" class="btn btn-primary" style="margin-top: var(--space-xl);">Inquire About Similar Design</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderAbout() {
    this.appRoot.innerHTML = `
      <div class="view-container">
        <header class="page-hero">
          <div class="container">
            <h1 class="page-title">About</h1>
            <p class="page-subtitle">A collective of designers, planners, and curators dedicated to crafting quiet, luxury sanctuaries.</p>
          </div>
        </header>

        <!-- Studio Story -->
        <section class="section-padding">
          <div class="container about-intro-grid">
            <div class="about-text reveal-on-scroll">
              <span class="hero-tagline">Our Origin</span>
              <h3>Architects of Comfort</h3>
              <p>Founded in 2014, Studio Shades emerged from a single pursuit: to rescue high-end interior spaces from generic luxury. We observed that contemporary design often confuses brightness with comfort, and cost with elegance.</p>
              <p>Our focus shifted immediately to the interaction between textures, light, and silence. By coordinating close partnerships with master stone carvers, bespoke wood joiners, and fine art galleries, we offer client designs that represent a personalized signature.</p>
            </div>
            <div class="about-collage reveal-on-scroll">
              <div class="about-collage-img collage-full" style="height: 380px; width: 100%;">
                <img src="assets/photos/11.jpg" alt="The entrance board of Studio Shades with the name of the founder" style="object-position: center; width: 100%; height: 100%; object-fit: cover;">
              </div>
            </div>
          </div>
        </section>

        <!-- Manifesto / Founder Profile -->
        <section class="section-padding profile-manifesto">
          <div class="container profile-grid">
            <div class="profile-frame reveal-on-scroll">
              <div class="profile-frame-inner">
                <div class="profile-avatar-placeholder">D.G.</div>
                <h4 class="profile-designer-name">Deepa Gyanani</h4>
                <span class="profile-designer-title">Founder</span>
              </div>
            </div>

            <div class="profile-manifesto-text reveal-on-scroll reveal-delay-1">
              <span class="hero-tagline">Principal Manifesto</span>
              <h3>The Founder</h3>
              <blockquote>"From the first sketch to final styling, we bring your vision to life with a seamless, end-to-end interior design journey tailored just for you."</blockquote>
              <p>With Deepa Gyanani and her team of design professionals, Studio Shades brings quality, comfort, and finish together in one place</p>
            </div>
          </div>
        </section>

        <!-- Credentials & Awards -->
        <section class="section-padding">
          <div class="container">
            <div class="section-header reveal-on-scroll">
              <span class="hero-tagline">Recognition</span>
              <h2 class="section-title">Design Credentials</h2>
              <p class="section-subtitle">Excellence validated by prestigious international design institutions.</p>
            </div>

            <div class="awards-grid">
              ${window.AppData.credentials
                .map(
                  (c, idx) => `
                <div class="award-card reveal-on-scroll reveal-delay-${idx % 4}">
                  <span class="award-year">${c.year}</span>
                  <h4 class="award-title">${c.title}</h4>
                  <span class="award-issuer">${c.issuer}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </section>
      </div>
    `;
  }

  renderContact() {
    this.appRoot.innerHTML = `
      <div class="view-container">
        <header class="page-hero">
          <div class="container">
            <h1 class="page-title">Contact</h1>
            <p class="page-subtitle">Begin the journey of crafting your bespoke interior space.</p>
          </div>
        </header>

        <section class="section-padding">
          <div class="container wizard-wrapper">

            <!-- Progress Steps -->
            <div class="wizard-progress reveal-on-scroll">
              <div class="wizard-progress-bar" id="wizard-progress-bar"></div>
              <div class="progress-step active" data-step="1">
                1
                <span class="progress-step-label">Space Scope</span>
              </div>
              <div class="progress-step" data-step="2">
                2
                <span class="progress-step-label">Aesthetic</span>
              </div>
              <div class="progress-step" data-step="3">
                3
                <span class="progress-step-label">Details</span>
              </div>
            </div>

            <!-- Form Card -->
            <form class="wizard-form reveal-on-scroll" id="consultation-wizard" novalidate>

              <!-- STEP 1: Space Scope -->
              <div class="wizard-step-section active" data-step="1">
                <div>
                  <h3 class="wizard-step-title">Select Space Scope</h3>
                  <p class="wizard-step-desc">Choose the primary area of your interior commission.</p>
                </div>

                <div class="option-cards-grid">
                  <label class="option-card-label">
                    <input type="radio" name="space_scope" value="penthouse" checked>
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Luxe Penthouse</span>
                      <span class="option-card-desc">High-rise urban residences</span>
                    </div>
                  </label>

                  <label class="option-card-label">
                    <input type="radio" name="space_scope" value="villa">
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 7.5v.008H12.5V7.5h.25zm0 3.75v.008H12.5v-.008h.25zm0 3.75v.008H12.5v-.008h.25zm3.75-7.5v.008h-.25V7.5h.25zm0 3.75v.008h-.25v-.008h.25zm0 3.75v.008h-.25v-.008h.25zm-11.25 0h.008v.008H5.25v-.008zm0-3.75h.008v.008H5.25v-.008zm0-3.75h.008v.008H5.25V7.5z" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Private Villa</span>
                      <span class="option-card-desc">Expansive coastal or country estates</span>
                    </div>
                  </label>

                  <label class="option-card-label">
                    <input type="radio" name="space_scope" value="commercial">
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.015a2.993 2.993 0 002.25 1.015c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 003.75.614m-16.5 0l2.062-7.217A1.5 1.5 0 015.176 1.5h13.648a1.5 1.5 0 011.424 1.033L22.31 9.35" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Commercial Space</span>
                      <span class="option-card-desc">Boutique offices, studios, or retail</span>
                    </div>
                  </label>
                </div>
              </div>

              <!-- STEP 2: Aesthetic Direction -->
              <div class="wizard-step-section" data-step="2">
                <div>
                  <h3 class="wizard-step-title">Select Aesthetic Direction</h3>
                  <p class="wizard-step-desc">Choose a design concept that aligns with your senses.</p>
                </div>

                <div class="option-cards-grid">
                  <label class="option-card-label">
                    <input type="radio" name="aesthetic" value="minimalist" checked>
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9l10.5-3m0 0L18 16.5M19.5 6L9 18M9 18l-3-6.75M9 18L3 12.75" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Warm Minimalist</span>
                      <span class="option-card-desc">Clean lines, travertine stone, and silence</span>
                    </div>
                  </label>

                  <label class="option-card-label">
                    <input type="radio" name="aesthetic" value="brutalist">
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Brutalist Luxury</span>
                      <span class="option-card-desc">Exposed structures, concrete, and rich metals</span>
                    </div>
                  </label>

                  <label class="option-card-label">
                    <input type="radio" name="aesthetic" value="classic">
                    <div class="option-card-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-16.25v14.25" /></svg>
                    </div>
                    <div class="option-card-text-group">
                      <span class="option-card-title">Classic Revival</span>
                      <span class="option-card-desc">Walnut paneling, rich moldings, and library tones</span>
                    </div>
                  </label>
                </div>
              </div>

              <!-- STEP 3: Details & Contact -->
              <div class="wizard-step-section" data-step="3">
                <div>
                  <h3 class="wizard-step-title">Contact & Space Details</h3>
                  <p class="wizard-step-desc">Enter your information. Fields will validate dynamically.</p>
                </div>

                <div class="field-group">
                  <label for="contact-name">Full Name</label>
                  <input type="text" id="contact-name" class="input-field" placeholder="e.g. Eleanor Vance" required minlength="3">
                  <span class="error-msg">Please enter your full name (minimum 3 characters).</span>
                </div>

                <div class="field-group">
                  <label for="contact-email">Email Address</label>
                  <input type="email" id="contact-email" class="input-field" placeholder="e.g. eleanor@example.com" required>
                  <span class="error-msg">Please enter a valid email address.</span>
                </div>

                <div class="field-group">
                  <label for="contact-message">Describe Your Project Scope</label>
                  <textarea id="contact-message" class="input-field" rows="4" placeholder="Briefly share any timeline requests, specific materials, or furniture desires..." required minlength="15"></textarea>
                  <span class="error-msg">Please share details about your project (minimum 15 characters).</span>
                </div>
              </div>

              <!-- Wizard Controls -->
              <div class="wizard-actions">
                <button type="button" class="btn btn-secondary" id="wizard-prev" style="visibility: hidden;">Back</button>
                <button type="button" class="btn btn-primary" id="wizard-next">Continue</button>
              </div>

            </form>
          </div>
        </section>
      </div>
    `;
  }

  renderNotFound() {
    this.appRoot.innerHTML = `
      <div class="view-container text-center" style="text-align: center; padding: var(--space-huge) 0;">
        <h1 style="font-size: 4rem; color: var(--accent-gold);">404</h1>
        <h2>Atelier Lost</h2>
        <p style="margin-bottom: var(--space-xl); color: var(--text-muted);">The space layout you are looking for does not exist.</p>
        <a href="#home" class="btn btn-primary">Return Sanctuary</a>
      </div>
    `;
  }
}

// Export router instance to window
window.AppRouter = AppRouter;
