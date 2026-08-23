document.addEventListener('DOMContentLoaded', () => {

  // 1. Render all sections
  const R = window.PortfolioRenderer;
  if (R) {
    R.renderSkills('skills-grid');
    R.renderFeaturedProjects('featured-projects-container');
    R.renderOtherProjects('other-projects-container');
    R.renderCertifications('certifications-grid');
    R.renderAchievements('achievements-grid');
    R.renderTestimonials('testimonials-grid');
    R.renderGallery('gallery-grid');
    R.renderSocialLinks('contact-social-links', true);
    R.renderSocialLinks('footer-social-links', false);
  }

  // 2. Typewriter
  const data = window.portfolioData;
  if (window.initTypewriter && data?.developer?.roles) {
    window.initTypewriter('#typewriter', data.developer.roles, { typingSpeed: 80, deletingSpeed: 45, pauseTime: 2200 });
  }

  // 3. Nav logic
  const siteNav = document.getElementById('site-nav');
  const navBurger = document.getElementById('nav-burger');
  const navDrawer = document.getElementById('nav-drawer');
  const drawerClose = document.getElementById('drawer-close');
  let isScrollLocked = false;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      siteNav?.classList.add('scrolled');
    } else {
      siteNav?.classList.remove('scrolled');
    }
  });

  function closeNav() {
    navBurger?.classList.remove('is-open');
    navDrawer?.classList.remove('is-open');
    navBurger?.setAttribute('aria-expanded', 'false');
    navDrawer?.setAttribute('aria-hidden', 'true');
    if (isScrollLocked) {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      isScrollLocked = false;
    }
  }

  navBurger?.addEventListener('click', () => {
    const isOpen = navBurger.classList.toggle('is-open');
    navDrawer?.classList.toggle('is-open');
    navBurger.setAttribute('aria-expanded', isOpen);
    navDrawer?.setAttribute('aria-hidden', !isOpen);

    if (isOpen) {
      isScrollLocked = true;
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      closeNav();
    }
  });

  drawerClose?.addEventListener('click', closeNav);

  const allLinks = document.querySelectorAll('.nav-link, .drawer-link');
  allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        closeNav();
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          window.scrollTo({
            top: targetEl.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observerOpts = { root: null, rootMargin: '0px', threshold: 0.5 };
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        allLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOpts);

  sections.forEach(sec => navObserver.observe(sec));

  // 4. Scroll reveal
  const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .clip-reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 5. Modal
  if (window.Modal?.initModal) window.Modal.initModal();

  // 6. Achievement filter — re-query cards after render so dynamic DOM is ready
  const achFilters = document.querySelectorAll('.ach-filter');
  achFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      achFilters.forEach(f => f.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      // Re-query each time so dynamically rendered cards are included
      document.querySelectorAll('.ach-card').forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 7. Gallery
  if (window.initGallery) window.initGallery();

  // 8. Contact form
  // 8. Contact form
  const contactForm = document.getElementById('contact-form');
  const inputName = document.getElementById('form-name');
  const inputEmail = document.getElementById('form-email');
  const inputMessage = document.getElementById('form-message');
  const inputSubject = document.getElementById('form-subject');
  const btnSubmit = document.getElementById('form-submit');
  const formSuccess = document.getElementById('form-success');

  contactForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    [inputName, inputEmail, inputMessage].forEach(input => {
      if (!input) return;

      if (!input.value.trim()) {
        input.style.borderColor = '#EF4444';
        isValid = false;
      } else {
        input.style.borderColor = '';
      }
    });

    if (!isValid) return;

    const originalText = btnSubmit?.textContent;

    if (btnSubmit) {
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Sending...';
    }

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        contactForm.reset();

        if (formSuccess) {
          formSuccess.removeAttribute('hidden');

          setTimeout(() => {
            formSuccess.setAttribute('hidden', 'true');
          }, 5000);
        }
      } else {
        throw new Error('Form submission failed.');
      }

    } catch (error) {
      alert('Sorry, your message could not be sent. Please try again or email me directly.');
    } finally {
      if (btnSubmit) {
        btnSubmit.disabled = false;
        btnSubmit.textContent = originalText || 'Send Message';
      }
    }
  });
  // 9. Back to top
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop?.classList.add('visible');
    } else {
      backToTop?.classList.remove('visible');
    }
  }, { passive: true });

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 10. Footer year
  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

});
