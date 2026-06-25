/* Main Application Logic & Component Bootstrapper */

const AppBootstrapper = (() => {
  let testimonialInterval = null;

  const init = () => {
    setupHeaderScroll();
    setupMobileNav();
    setupScrollReveal();
  };

  // Called by AppRouter after the DOM is updated on a route switch
  const onPageRendered = (hash) => {
    // Clear any active intervals/listeners from prior views
    if (testimonialInterval) {
      clearInterval(testimonialInterval);
      testimonialInterval = null;
    }

    // Page-specific initializers
    if (hash === "#home" || hash === "") {
      initHome();
    } else if (hash === "#services") {
      initServices();
    } else if (hash === "#portfolio") {
      initPortfolio();
    } else if (hash === "#contact") {
      initContact();
    }

    // Trigger scroll reveal checker for the newly rendered elements
    triggerScrollReveal();
  };

  /* ==========================================
     GLOBAL COMPONENT CONTROLLERS
     ========================================== */

  // Header background scale and blur on scroll
  const setupHeaderScroll = () => {
    const header = document.querySelector(".app-header");

    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger immediately in case page is refreshed while scrolled down
  };

  // Hamburger drawer controller
  const setupMobileNav = () => {
    const toggle = document.querySelector(".mobile-nav-toggle");
    const drawer = document.querySelector(".mobile-nav-drawer");
    const overlay = document.querySelector(".mobile-drawer-overlay");
    const links = document.querySelectorAll(".mobile-nav-drawer .nav-link");

    const toggleDrawer = () => {
      const isOpen = drawer.classList.contains("open");
      drawer.classList.toggle("open", !isOpen);
      overlay.classList.toggle("open", !isOpen);
      document.body.classList.toggle("hamburger-open", !isOpen);
    };

    toggle?.addEventListener("click", toggleDrawer);
    overlay?.addEventListener("click", toggleDrawer);
    links.forEach((link) => link.addEventListener("click", toggleDrawer));
  };

  // Scroll Reveal Animations
  const setupScrollReveal = () => {
    if (!("IntersectionObserver" in window)) {
      // Fallback: make all reveal elements visible immediately
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          obs.unobserve(entry.target); // Animates once
        }
      });
    }, observerOptions);

    window.scrollRevealObserver = observer;
  };

  const triggerScrollReveal = () => {
    const observer = window.scrollRevealObserver;
    const elements = document.querySelectorAll(".reveal-on-scroll");

    if (observer) {
      elements.forEach((el) => observer.observe(el));
    } else {
      elements.forEach((el) => el.classList.add("revealed"));
    }
  };

  /* ==========================================
     PAGE-SPECIFIC INITIALIZERS
     ========================================== */

  // HOME: Testimonial Carousel
  const initHome = () => {
    const track = document.getElementById("testimonial-track");
    const dots = document.querySelectorAll(".testimonial-dot");

    // Autoplay & Slide indicators
    if (track && dots.length > 0) {
      let currentIndex = 0;
      const totalSlides = dots.length;

      const goToSlide = (index) => {
        currentIndex = index;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        dots.forEach((dot, idx) => {
          dot.classList.toggle("active", idx === currentIndex);
        });
      };

      // Dot navigation
      dots.forEach((dot) => {
        dot.addEventListener("click", (e) => {
          const index = parseInt(e.currentTarget.getAttribute("data-index"));
          goToSlide(index);
          resetAutoplay();
        });
      });

      // Autoplay loop
      const startAutoplay = () => {
        testimonialInterval = setInterval(() => {
          let nextIndex = (currentIndex + 1) % totalSlides;
          goToSlide(nextIndex);
        }, 6000);
      };

      const resetAutoplay = () => {
        if (testimonialInterval) {
          clearInterval(testimonialInterval);
          startAutoplay();
        }
      };

      startAutoplay();
    }

    // Scroll-driven animation fallback for horizontal scroller
    if (
      !CSS.supports("(animation-timeline: view()) and (animation-range: entry)")
    ) {
      const scroller = document.getElementById("horizontal-scroller");
      const entries = scroller ? scroller.querySelectorAll(".entry") : [];

      const tick = () => {
        const scrollerRect = scroller.getBoundingClientRect();
        entries.forEach((entry) => {
          const entryRect = entry.getBoundingClientRect();
          const entryCenter = entryRect.left + entryRect.width / 2;
          const scrollerCenter = scrollerRect.left + scrollerRect.width / 2;
          const distanceFromCenter = Math.abs(entryCenter - scrollerCenter);
          const maxDistance = scrollerRect.width;

          // Calculate progress: 1 at center, 0.6 at edge
          const ratio = Math.max(
            0.6,
            1 - (distanceFromCenter / maxDistance) * 0.4,
          );

          entry.style.scale = ratio;
          entry.style.opacity = ratio;
        });
      };

      if (scroller && entries.length) {
        scroller.addEventListener("scroll", tick, { passive: true });
        window.addEventListener("resize", tick, { passive: true });
        tick();
      }
    }
  };

  // SERVICES: Dynamic Investment Calculator
  const initServices = () => {
    // Calculator removed
  };

  // PORTFOLIO: Filters and Lightbox Modal
  const initPortfolio = () => {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    // Lightbox elements
    const lightbox = document.getElementById("lightbox-modal");
    const closeBtn = document.getElementById("lightbox-close");
    const modalImg = document.getElementById("modal-img");
    const modalTag = document.getElementById("modal-tag");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");

    const modalLoc = document.getElementById("modal-location");
    const modalScale = document.getElementById("modal-scale");
    const modalMaterials = document.getElementById("modal-materials");
    const modalDuration = document.getElementById("modal-duration");

    let lastClickedItem = null;

    if (!items.length) return;

    // Filter portfolio items
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const filter = e.currentTarget.getAttribute("data-filter");

        filterBtns.forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        items.forEach((item) => {
          const category = item.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
              item.style.transform = "scale(1)";
            }, 50);
          } else {
            item.style.opacity = "0";
            item.style.transform = "scale(0.95)";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });

    // Lightbox modal trigger
    const openLightbox = (projectId) => {
      const data = window.AppData.portfolio.find((p) => p.id === projectId);
      if (!data) return;

      modalImg.src = data.image;
      modalImg.alt = data.title;
      modalTag.textContent = data.category;
      modalTitle.textContent = data.title;
      modalDesc.textContent = data.description;

      modalLoc.textContent = data.location;
      modalScale.textContent = data.scale;
      modalMaterials.textContent = data.materials;
      modalDuration.textContent = data.duration;

      lightbox.style.display = "flex";
      // Wait for layout write, then add class for transition
      setTimeout(() => {
        lightbox.classList.add("open");
      }, 20);

      // Focus close button for accessibility
      closeBtn.focus();

      // Lock scroll behind modal
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("open");

      setTimeout(() => {
        lightbox.style.display = "none";
        document.body.style.overflow = "";

        // Return focus to the triggering element
        if (lastClickedItem) {
          lastClickedItem.focus();
        }
      }, 300);
    };

    items.forEach((item) => {
      // Make elements keyboard accessible
      item.setAttribute("tabindex", "0");

      const triggerOpen = (e) => {
        lastClickedItem = e.currentTarget;
        const id = e.currentTarget.getAttribute("data-id");
        openLightbox(id);
      };

      item.addEventListener("click", triggerOpen);
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          triggerOpen(e);
        }
      });
    });

    closeBtn?.addEventListener("click", closeLightbox);

    // Close modal on clicking backdrop
    lightbox?.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // ESC key close listener
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox?.classList.contains("open")) {
        closeLightbox();
      }
    });
  };

  // CONTACT: 3-Step Consultation Wizard
  const initContact = () => {
    const wizardForm = document.getElementById("consultation-wizard");
    const sections = document.querySelectorAll(".wizard-step-section");
    const progressSteps = document.querySelectorAll(".progress-step");
    const progressBar = document.getElementById("wizard-progress-bar");

    const btnPrev = document.getElementById("wizard-prev");
    const btnNext = document.getElementById("wizard-next");

    if (!wizardForm || !sections.length) return;

    // Initialize custom validation triggers
    if (window.UserInvalidFallback) {
      window.UserInvalidFallback.init(wizardForm);
    }

    let currentStep = 1;
    const maxSteps = sections.length;

    const updateWizardUI = () => {
      // 1. Toggle sections visibility and active class
      sections.forEach((sec) => {
        const stepNum = parseInt(sec.getAttribute("data-step"));
        const isActive = stepNum === currentStep;
        sec.classList.toggle("active", isActive);
        sec.style.display = isActive ? "flex" : "none";
      });

      // 2. Toggle buttons state
      if (currentStep === 1) {
        btnPrev.style.visibility = "hidden";
        btnNext.textContent = "Continue";
      } else if (currentStep === maxSteps) {
        btnPrev.style.visibility = "visible";
        btnNext.textContent = "Send Request";
      } else {
        btnPrev.style.visibility = "visible";
        btnNext.textContent = "Continue";
      }

      // 3. Update Progress Tracker indicators
      progressSteps.forEach((step) => {
        const stepNum = parseInt(step.getAttribute("data-step"));
        step.classList.remove("active", "completed");

        if (stepNum === currentStep) {
          step.classList.add("active");
        } else if (stepNum < currentStep) {
          step.classList.add("completed");
        }
      });

      // 4. Update progress bar lines
      const percentage = ((currentStep - 1) / (maxSteps - 1)) * 100;
      if (progressBar) {
        progressBar.style.width = `${percentage}%`;
      }

      // Accessibility focus management for step change
      const activeSectionTitle = document.querySelector(
        `.wizard-step-section[data-step="${currentStep}"] .wizard-step-title`,
      );
      if (activeSectionTitle) {
        activeSectionTitle.setAttribute("tabindex", "-1");
        activeSectionTitle.focus();
      }
    };

    const handleNextClick = () => {
      if (currentStep < maxSteps) {
        // Step 1 & 2 have radio cards, valid by default as one is pre-checked
        currentStep++;
        updateWizardUI();
      } else {
        // Step 3 holds fields needing text validation
        const fields = wizardForm.querySelectorAll(
          '.wizard-step-section[data-step="3"] .input-field',
        );
        let allValid = true;

        fields.forEach((field) => {
          const isValid = field.checkValidity();

          // Force error fallback styling for validation display
          field.classList.toggle("user-invalid-fallback", !isValid);
          const parent = field.closest(".field-group");
          if (parent) {
            parent.classList.toggle("has-error-fallback", !isValid);
          }
          if (!isValid) {
            field.setAttribute("aria-invalid", "true");
            allValid = false;
          }
        });

        if (allValid) {
          submitConsultationForm();
        } else {
          // Focus first invalid field
          const firstInvalid = wizardForm.querySelector(".input-field:invalid");
          firstInvalid?.focus();
        }
      }
    };

    const handlePrevClick = () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    };

    const submitConsultationForm = () => {
      // Gather inputs
      const spaceScope = wizardForm.querySelector(
        'input[name="space_scope"]:checked',
      )?.value;
      const aesthetic = wizardForm.querySelector(
        'input[name="aesthetic"]:checked',
      )?.value;
      const name = document.getElementById("contact-name")?.value;
      const email = document.getElementById("contact-email")?.value;

      console.log("Studio Shades Consultation Request Submitted:", {
        spaceScope,
        aesthetic,
        name,
        email,
      });

      // Animate success screen conversion
      if (document.startViewTransition) {
        document.startViewTransition(() => renderSuccessScreen(name));
      } else {
        renderSuccessScreen(name);
      }
    };

    const renderSuccessScreen = (clientName) => {
      // Hide wizard progress track
      const progressTrack = document.querySelector(".wizard-progress");
      if (progressTrack) progressTrack.style.display = "none";

      wizardForm.innerHTML = `
        <div class="wizard-success">
          <div class="success-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3>Consultation Initiated</h3>
          <p>Thank you, ${clientName}. Our design atelier has received your spatial brief for a <strong>${wizardForm.querySelector('input[name="space_scope"]:checked')?.value || "bespoke"}</strong> project. We will contact you at your email address within 24 hours.</p>
          <a href="#home" class="btn btn-primary">Return to Sanctuary</a>
        </div>
      `;
    };

    // Attach button actions
    btnNext.addEventListener("click", handleNextClick);
    btnPrev.addEventListener("click", handlePrevClick);

    // Prevent standard form submission behavior
    wizardForm.addEventListener("submit", (e) => e.preventDefault());
  };

  return {
    init,
    onPageRendered,
  };
})();

// Assign to window for routing hooks
window.AppBootstrapper = AppBootstrapper;

// Boot application when base DOM structure is ready
document.addEventListener("DOMContentLoaded", () => {
  AppBootstrapper.init();

  // Start router
  if (window.AppRouter) {
    const router = new window.AppRouter();
    router.init();
  }
});
