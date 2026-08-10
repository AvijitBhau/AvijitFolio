window.Modal = (function() {
  let modalOverlay, modalImg, modalClose, firstFocusable, lastFocusable;
  let previousActiveElement;

  function initModal() {
    modalOverlay = document.getElementById('modal-overlay');
    modalImg = document.getElementById('modal-img');
    modalClose = document.getElementById('modal-close');
    
    if (!modalOverlay || !modalImg || !modalClose) return;

    modalClose.addEventListener('click', closeModal);
    
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
      }
      
      // Focus trap
      if (e.key === 'Tab' && modalOverlay.classList.contains('active')) {
        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    });
  }

  function openModal(imgSrc, title) {
    if (!modalOverlay || !modalImg) return;
    
    previousActiveElement = document.activeElement;
    
    modalImg.src = imgSrc;
    modalImg.alt = title || 'Certificate';
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Setup focus trap
    const focusableElements = modalOverlay.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length > 0) {
      firstFocusable = focusableElements[0];
      lastFocusable = focusableElements[focusableElements.length - 1];
      setTimeout(() => firstFocusable.focus(), 100);
    }
  }

  function closeModal() {
    if (!modalOverlay) return;
    
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear src after transition to avoid flicker
    setTimeout(() => {
      if (modalImg) modalImg.src = '';
    }, 300);

    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }

  return { openModal, closeModal, initModal };
})();
