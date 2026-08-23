window.initNav = function() {
  const nav = document.getElementById('nav');
  const hamburger = document.querySelector('.nav-hamburger');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const sections = document.querySelectorAll('section[id]');

  if (!nav) return;

  // Scroll style for nav
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  function toggleMobileMenu() {
    if (!hamburger || !navMobile) return;
    const isActive = navMobile.classList.toggle('active');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive);
    
    if (isActive) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden'; // lock body scroll
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
  }

  if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMobileMenu();
      }
    });
  }

  // Close mobile menu on click outside
  document.addEventListener('click', (e) => {
    if (navMobile && navMobile.classList.contains('active') && !nav.contains(e.target)) {
      toggleMobileMenu();
    }
  });

  // Smooth scroll and active state updates
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          if (navMobile && navMobile.classList.contains('active')) {
            toggleMobileMenu();
          }
          const offsetTop = targetSection.offsetTop - nav.offsetHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Active section highlighting
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px', // Trigger when section is in top part of viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });
};
