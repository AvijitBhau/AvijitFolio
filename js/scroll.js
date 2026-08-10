window.initScrollReveal = function() {
  const reveals = document.querySelectorAll('.reveal, .stagger-children');
  if (reveals.length === 0) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    reveals.forEach(el => {
      if (el.classList.contains('stagger-children')) {
        Array.from(el.children).forEach(child => child.classList.add('visible'));
      }
      el.classList.add('visible');
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        
        if (target.classList.contains('stagger-children')) {
          const children = Array.from(target.children);
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('visible');
            }, index * 100);
          });
        } else {
          target.classList.add('visible');
        }
        
        observer.unobserve(target); // Only reveal once
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
};
