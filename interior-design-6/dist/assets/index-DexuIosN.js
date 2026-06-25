(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&f(d)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const j={services:[{id:"residential",title:"Residential Sanctuary",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>',description:"Complete architectural and interior transformation of luxury apartments, estates, and vacation residences.",features:["Spatial layout redesign & 3D visualization","Curated high-end material selection","Lighting architecture & acoustics design","Procurement and turnkey site styling"],price:"$15,000",period:"project base"},{id:"commercial",title:"Elite Commercial",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" /></svg>',description:"Sophisticated spatial solutions for boutique hotels, executive offices, galleries, and high-end retail venues.",features:["Corporate brand identity translation","High-traffic spatial layouts","Acoustic and ergonomic optimization","Collaborative project management"],price:"$25,000",period:"project base"},{id:"bespoke",title:"Bespoke Curation",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-3.078 0L3 18.228V9a1.5 1.5 0 011.5-1.5h15A1.5 1.5 0 0121 9v9.228l-3.452-2.106a3 3 0 00-3.078 0L9.53 16.122zM10.56 9.75h2.88M9 9.75h.008v.008H9V9.75zm6 0h.008v.008H15V9.75z" /></svg>',description:"Exclusive commissioning of custom furniture pieces, lighting sculpture collections, and fine art curations.",features:["Custom furniture sketches & design blueprints","Collaboration with master woodworkers & sculptors","Fine art vetting, sourcing, and placement","Premium textile and antique selection"],price:"$8,500",period:"curation package"}],portfolio:[{id:"cobalt-bedroom",title:"The Cobalt Bedroom Suite",category:"residential",location:"Manhattan, NY",scale:"380 sq. ft.",materials:"Linen, Velvet, Cobalt Accents",duration:"3 Months",description:"A warm and inviting residential bedroom utilizing deep cobalt accents and organic linens, designed for ultimate comfort and rest.",image:"assets/photos/3.jpg"},{id:"atelier-dining",title:"The Atelier Dining Suite",category:"commercial",location:"Studio Shades HQ",scale:"1,200 sq. ft.",materials:"Natural Oak, Multi-toned Steel",description:"A creative commercial dining setup inside the Studio Shades atelier, featuring modern chairs of varied colors surrounding an oak table.",image:"assets/photos/4.jpg"},{id:"blush-lounge",title:"The Blush Lounge",category:"residential",location:"Milan, Italy",scale:"750 sq. ft.",materials:"Bouclé, Rose Gold, Travertine",description:"A soft, contemporary living area styled with pink and white accents, balancing curved bouclé seating with travertine tables.",image:"assets/photos/5.jpg"},{id:"sculptural-chairs",title:"The Sculptural Chairs",category:"bespoke",location:"Paris, France",scale:"N/A",materials:"Bentwood, Bouclé, Walnut",duration:"2 Months",description:"Bespoke curation of two distinct accent chairs selected to frame a minimalist corner, exploring the intersection of mid-century and modern forms.",image:"assets/photos/2.jpg"},{id:"textile-sanctuary",title:"The Textile Sanctuary",category:"bespoke",location:"Kyoto, Japan",scale:"N/A",materials:"Organic Cotton, Wool, Natural Dyes",duration:"4 Months",description:"Bespoke textile curation highlighting a stacked installation of soft, hand-dyed organic mattresses of varied colors.",image:"assets/photos/1.jpg"},{id:"rug-gallery",title:"The Rug Gallery",category:"bespoke",location:"London, UK",scale:"1,800 sq. ft.",materials:"Jute, Silk, Hand-knotted Wool",duration:"6 Months",description:"An exclusive collection of vertically rolled custom rugs, showcasing varied textures, weaves, and natural dye colors.",image:"assets/photos/8.jpg"}],testimonials:[{quote:"Beautiful collection!! I needed curtains and sofa material.... Was a really tough choice amongst all the amazing designs... Must visit store.. Thank u Deepa and team!",author:"Ms. Manisha",project:"Google Maps"},{quote:"I loved the vibe of the experience center, attention to detail and customer service! Finally, an interior design studio that is reliable & up for the challenge. Thank you so much for making the interiors exactly what I imagined… grateful.",author:"Mr. Ambar",project:"Google Maps"},{quote:"Studio shades did excellent work for me at my new home. They have a wide variety of catalogues to choose from. Their finishing and tailoring is very good. Highly recommend them ! Thank you Deepa for all the guidance and patience you had with us. You have a great team!!",author:"Ms. Meghana",project:"Google Maps"},{quote:"Great experience!!! Loved my tapestry, all thanks to Deepa's expertise and insight!! I am very happy and content with the end result!!",author:"Ms. Meena",project:"Google Maps"},{quote:"Was very happy I chose Studio shades, Deepa took a lot of effort and time to curate a collection for our home, was very happy with the variety and selection. Thank you Deepa!!!!",author:"Ms. Lara",project:"Google Maps"},{quote:"Thanks Deepa for being so dedicated and working tirelessly  in making my house look so beautiful. Lovely collection of all home decor under one roof.",author:"Ms. Eva",project:"Google Maps"}],credentials:[{year:"2025",title:"Residential Project of the Year",issuer:"AD Spain Design Awards"},{year:"2024",title:"Best Boutique Commercial Space",issuer:"Elle Decor Awards"},{year:"2023",title:"Pinnacle Excellence in Curation",issuer:"Luxury Living Expo"},{year:"2021",title:"Emerging Designer Award",issuer:"Milan Design Week"}]};window.AppData=j;const q=(()=>{const g=new WeakMap,e=t=>{const o=t.checkValidity();t.classList.toggle("user-invalid-fallback",!o),t.classList.toggle("user-valid-fallback",o),o?t.removeAttribute("aria-invalid"):t.setAttribute("aria-invalid","true");const d=t.closest(".field-group");d&&d.classList.toggle("has-error-fallback",!o)},n=t=>{var d;const o=t.target;if(t.type==="reset"){const w=o.elements||[];for(const L of w)g.delete(L),L.classList.remove("user-invalid-fallback"),L.classList.remove("user-valid-fallback"),L.removeAttribute("aria-invalid"),(d=L.closest(".field-group"))==null||d.classList.remove("has-error-fallback");return}if(o.checkValidity){if(t.type==="input"||t.type==="change"){const w=g.get(o)||{hasInteracted:!1,hasBlurred:!1};w.hasInteracted=!0,g.set(o,w),w.hasBlurred&&e(o)}else if(t.type==="blur"){const w=g.get(o)||{hasInteracted:!1,hasBlurred:!1};w.hasBlurred=!0,g.set(o,w),w.hasInteracted&&e(o)}}};return{init:(t=document)=>{if(CSS.supports("selector(:has(*))")&&CSS.supports("selector(:user-invalid)")){t.addEventListener("blur",d=>{d.target.checkValidity&&(d.target.checkValidity()?d.target.removeAttribute("aria-invalid"):d.target.setAttribute("aria-invalid","true"))},!0),t.addEventListener("input",d=>{d.target.hasAttribute("aria-invalid")&&d.target.checkValidity&&d.target.checkValidity()&&d.target.removeAttribute("aria-invalid")});return}t.addEventListener("blur",n,!0),t.addEventListener("input",n),t.addEventListener("change",n),t.addEventListener("reset",n,!0)}}})();window.UserInvalidFallback=q;class I{constructor(){this.appRoot=document.getElementById("app-root"),this.navLinks=document.querySelectorAll(".nav-link"),this.routes={"":()=>this.renderHome(),"#home":()=>this.renderHome(),"#services":()=>this.renderServices(),"#portfolio":()=>this.renderPortfolio(),"#about":()=>this.renderAbout(),"#contact":()=>this.renderContact()},window.addEventListener("hashchange",()=>this.handleRouting())}init(){this.handleRouting()}handleRouting(){const e=window.location.hash||"#home",n=this.routes[e]||(()=>this.renderNotFound());this.updateActiveNav(e),document.startViewTransition?document.startViewTransition(()=>{n()}).finished.finally(()=>{this.postRenderCleanup(e)}):(n(),this.postRenderCleanup(e))}postRenderCleanup(e){var t,o;window.scrollTo(0,0),(t=document.querySelector(".mobile-nav-drawer"))==null||t.classList.remove("open"),(o=document.querySelector(".mobile-drawer-overlay"))==null||o.classList.remove("open"),document.body.classList.remove("hamburger-open");const n=document.querySelector(".view-container h1, .view-container h2"),f=document.querySelector(".view-container");n?(n.setAttribute("tabindex","-1"),n.focus()):f&&(f.setAttribute("tabindex","-1"),f.focus()),window.AppBootstrapper&&window.AppBootstrapper.onPageRendered(e)}updateActiveNav(e){const n=e===""?"#home":e;this.navLinks.forEach(f=>{f.getAttribute("href")===n?f.classList.add("active"):f.classList.remove("active")})}renderHome(){this.appRoot.innerHTML=`
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
                ${window.AppData.testimonials.map((e,n)=>`
                  <div class="testimonial-slide">
                    <p class="testimonial-quote">${e.quote}</p>
                    <span class="testimonial-author">${e.author}</span>
                    <span class="testimonial-author-title">${e.project}</span>
                  </div>
                `).join("")}
              </div>

              <div class="testimonial-controls">
                ${window.AppData.testimonials.map((e,n)=>`
                  <button class="testimonial-dot ${n===0?"active":""}" data-index="${n}" aria-label="Go to testimonial slide ${n+1}"></button>
                `).join("")}
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
    `}renderServices(){this.appRoot.innerHTML=`
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
              ${window.AppData.services.map(e=>`
                <div class="service-card reveal-on-scroll">
                  <div class="service-icon">${e.icon}</div>
                  <h3>${e.title}</h3>
                  <p>${e.description}</p>
                  <ul class="service-features">
                    ${e.features.map(n=>`<li>${n}</li>`).join("")}
                  </ul>
                  <div class="service-price">
                    ${e.price} <span>/ ${e.period}</span>
                  </div>
                </div>
              `).join("")}
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
    `}renderPortfolio(){this.appRoot.innerHTML=`
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
              ${window.AppData.portfolio.map(e=>`
                <div class="portfolio-item reveal-on-scroll" data-id="${e.id}" data-category="${e.category}">
                  <img class="portfolio-item-img" src="${e.image}" alt="${e.title}">
                  <div class="portfolio-item-overlay">
                    <span class="portfolio-item-tag">${e.category}</span>
                    <h3 class="portfolio-item-title">${e.title}</h3>
                    <div class="portfolio-item-meta">${e.location}  |  ${e.scale}</div>
                  </div>
                </div>
              `).join("")}
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
    `}renderAbout(){this.appRoot.innerHTML=`
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
                <img src="assets/photos/9.jpg" alt="The entrance board of Studio Shades with the name of the founder" style="object-position: center; width: 100%; height: 100%; object-fit: cover;">
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
                <span class="profile-designer-title">Principal Architect</span>
              </div>
            </div>

            <div class="profile-manifesto-text reveal-on-scroll reveal-delay-1">
              <span class="hero-tagline">Principal Manifesto</span>
              <h3>The Founder</h3>
              <blockquote>"From the first sketch to final styling, we bring your vision to life with a seamless, end-to-end interior design journey tailored just for you."</blockquote>
              <p>From curtains and blinds to upholstery, mattresses, rugs, and flooring, Studio Shades brings quality, comfort, and finish together in one place</p>
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
              ${window.AppData.credentials.map((e,n)=>`
                <div class="award-card reveal-on-scroll reveal-delay-${n%4}">
                  <span class="award-year">${e.year}</span>
                  <h4 class="award-title">${e.title}</h4>
                  <span class="award-issuer">${e.issuer}</span>
                </div>
              `).join("")}
            </div>
          </div>
        </section>
      </div>
    `}renderContact(){this.appRoot.innerHTML=`
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
    `}renderNotFound(){this.appRoot.innerHTML=`
      <div class="view-container text-center" style="text-align: center; padding: var(--space-huge) 0;">
        <h1 style="font-size: 4rem; color: var(--accent-gold);">404</h1>
        <h2>Atelier Lost</h2>
        <p style="margin-bottom: var(--space-xl); color: var(--text-muted);">The space layout you are looking for does not exist.</p>
        <a href="#home" class="btn btn-primary">Return Sanctuary</a>
      </div>
    `}}window.AppRouter=I;const M=(()=>{let g=null;const e=()=>{f(),t(),o()},n=i=>{g&&(clearInterval(g),g=null),i==="#home"||i===""?w():i==="#services"||(i==="#portfolio"?L():i==="#contact"&&T()),d()},f=()=>{const i=document.querySelector(".app-header"),r=()=>{window.scrollY>50?i.classList.add("scrolled"):i.classList.remove("scrolled")};window.addEventListener("scroll",r,{passive:!0}),r()},t=()=>{const i=document.querySelector(".mobile-nav-toggle"),r=document.querySelector(".mobile-nav-drawer"),s=document.querySelector(".mobile-drawer-overlay"),h=document.querySelectorAll(".mobile-nav-drawer .nav-link"),c=()=>{const u=r.classList.contains("open");r.classList.toggle("open",!u),s.classList.toggle("open",!u),document.body.classList.toggle("hamburger-open",!u)};i==null||i.addEventListener("click",c),s==null||s.addEventListener("click",c),h.forEach(u=>u.addEventListener("click",c))},o=()=>{if(!("IntersectionObserver"in window)){document.querySelectorAll(".reveal-on-scroll").forEach(s=>{s.classList.add("revealed")});return}const i={root:null,rootMargin:"0px",threshold:.1},r=new IntersectionObserver((s,h)=>{s.forEach(c=>{c.isIntersecting&&(c.target.classList.add("revealed"),h.unobserve(c.target))})},i);window.scrollRevealObserver=r},d=()=>{const i=window.scrollRevealObserver,r=document.querySelectorAll(".reveal-on-scroll");i?r.forEach(s=>i.observe(s)):r.forEach(s=>s.classList.add("revealed"))},w=()=>{const i=document.getElementById("testimonial-track"),r=document.querySelectorAll(".testimonial-dot");if(i&&r.length>0){let s=0;const h=r.length,c=b=>{s=b,i.style.transform=`translateX(-${s*100}%)`,r.forEach((S,x)=>{S.classList.toggle("active",x===s)})};r.forEach(b=>{b.addEventListener("click",S=>{const x=parseInt(S.currentTarget.getAttribute("data-index"));c(x),v()})});const u=()=>{g=setInterval(()=>{let b=(s+1)%h;c(b)},6e3)},v=()=>{g&&(clearInterval(g),u())};u()}if(!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")){const s=document.getElementById("horizontal-scroller"),h=s?s.querySelectorAll(".entry"):[],c=()=>{const u=s.getBoundingClientRect();h.forEach(v=>{const b=v.getBoundingClientRect(),S=b.left+b.width/2,x=u.left+u.width/2,C=Math.abs(S-x),z=u.width,A=Math.max(.6,1-C/z*.4);v.style.scale=A,v.style.opacity=A})};s&&h.length&&(s.addEventListener("scroll",c,{passive:!0}),window.addEventListener("resize",c,{passive:!0}),c())}},L=()=>{const i=document.querySelectorAll(".filter-btn"),r=document.querySelectorAll(".portfolio-item"),s=document.getElementById("lightbox-modal"),h=document.getElementById("lightbox-close"),c=document.getElementById("modal-img"),u=document.getElementById("modal-tag"),v=document.getElementById("modal-title"),b=document.getElementById("modal-desc"),S=document.getElementById("modal-location"),x=document.getElementById("modal-scale"),C=document.getElementById("modal-materials"),z=document.getElementById("modal-duration");let A=null;if(!r.length)return;i.forEach(a=>{a.addEventListener("click",l=>{const p=l.currentTarget.getAttribute("data-filter");i.forEach(y=>y.classList.remove("active")),l.currentTarget.classList.add("active"),r.forEach(y=>{const E=y.getAttribute("data-category");p==="all"||E===p?(y.style.display="block",setTimeout(()=>{y.style.opacity="1",y.style.transform="scale(1)"},50)):(y.style.opacity="0",y.style.transform="scale(0.95)",setTimeout(()=>{y.style.display="none"},300))})})});const k=a=>{const l=window.AppData.portfolio.find(p=>p.id===a);l&&(c.src=l.image,c.alt=l.title,u.textContent=l.category,v.textContent=l.title,b.textContent=l.description,S.textContent=l.location,x.textContent=l.scale,C.textContent=l.materials,z.textContent=l.duration,s.style.display="flex",setTimeout(()=>{s.classList.add("open")},20),h.focus(),document.body.style.overflow="hidden")},m=()=>{s.classList.remove("open"),setTimeout(()=>{s.style.display="none",document.body.style.overflow="",A&&A.focus()},300)};r.forEach(a=>{a.setAttribute("tabindex","0");const l=p=>{A=p.currentTarget;const y=p.currentTarget.getAttribute("data-id");k(y)};a.addEventListener("click",l),a.addEventListener("keydown",p=>{(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),l(p))})}),h==null||h.addEventListener("click",m),s==null||s.addEventListener("click",a=>{a.target===s&&m()}),window.addEventListener("keydown",a=>{a.key==="Escape"&&(s!=null&&s.classList.contains("open"))&&m()})},T=()=>{const i=document.getElementById("consultation-wizard"),r=document.querySelectorAll(".wizard-step-section"),s=document.querySelectorAll(".progress-step"),h=document.getElementById("wizard-progress-bar"),c=document.getElementById("wizard-prev"),u=document.getElementById("wizard-next");if(!i||!r.length)return;window.UserInvalidFallback&&window.UserInvalidFallback.init(i);let v=1;const b=r.length,S=()=>{r.forEach(a=>{const p=parseInt(a.getAttribute("data-step"))===v;a.classList.toggle("active",p),a.style.display=p?"flex":"none"}),v===1?(c.style.visibility="hidden",u.textContent="Continue"):v===b?(c.style.visibility="visible",u.textContent="Send Request"):(c.style.visibility="visible",u.textContent="Continue"),s.forEach(a=>{const l=parseInt(a.getAttribute("data-step"));a.classList.remove("active","completed"),l===v?a.classList.add("active"):l<v&&a.classList.add("completed")});const k=(v-1)/(b-1)*100;h&&(h.style.width=`${k}%`);const m=document.querySelector(`.wizard-step-section[data-step="${v}"] .wizard-step-title`);m&&(m.setAttribute("tabindex","-1"),m.focus())},x=()=>{if(v<b)v++,S();else{const k=i.querySelectorAll('.wizard-step-section[data-step="3"] .input-field');let m=!0;if(k.forEach(a=>{const l=a.checkValidity();a.classList.toggle("user-invalid-fallback",!l);const p=a.closest(".field-group");p&&p.classList.toggle("has-error-fallback",!l),l||(a.setAttribute("aria-invalid","true"),m=!1)}),m)z();else{const a=i.querySelector(".input-field:invalid");a==null||a.focus()}}},C=()=>{v>1&&(v--,S())},z=()=>{var p,y,E,B;const k=(p=i.querySelector('input[name="space_scope"]:checked'))==null?void 0:p.value,m=(y=i.querySelector('input[name="aesthetic"]:checked'))==null?void 0:y.value,a=(E=document.getElementById("contact-name"))==null?void 0:E.value,l=(B=document.getElementById("contact-email"))==null?void 0:B.value;console.log("Studio Shades Consultation Request Submitted:",{spaceScope:k,aesthetic:m,name:a,email:l}),document.startViewTransition?document.startViewTransition(()=>A(a)):A(a)},A=k=>{var a;const m=document.querySelector(".wizard-progress");m&&(m.style.display="none"),i.innerHTML=`
        <div class="wizard-success">
          <div class="success-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>Consultation Initiated</h3>
          <p>Thank you, ${k}. Our design atelier has received your spatial brief for a <strong>${((a=i.querySelector('input[name="space_scope"]:checked'))==null?void 0:a.value)||"bespoke"}</strong> project. We will contact you at your email address within 24 hours.</p>
          <a href="#home" class="btn btn-primary">Return to Sanctuary</a>
        </div>
      `};u.addEventListener("click",x),c.addEventListener("click",C),i.addEventListener("submit",k=>k.preventDefault())};return{init:e,onPageRendered:n}})();window.AppBootstrapper=M;document.addEventListener("DOMContentLoaded",()=>{M.init(),window.AppRouter&&new window.AppRouter().init()});
