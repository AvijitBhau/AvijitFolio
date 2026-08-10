window.initTypewriter = function(selector, roles, options = {}) {
  const el = document.querySelector(selector);
  if (!el || !roles || roles.length === 0) return;

  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    el.textContent = roles[0];
    return;
  }

  const typingSpeed = options.typingSpeed || 80;
  const deletingSpeed = options.deletingSpeed || 50;
  const pauseTime = options.pauseTime || 2000;

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    el.textContent = currentRole.substring(0, charIndex);

    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      typeSpeed = pauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500; // brief pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  // Start typewriter
  setTimeout(type, 1000); // Initial delay
};
