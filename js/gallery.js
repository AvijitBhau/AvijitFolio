/**
 * gallery.js
 * Gallery lightbox with prev/next navigation, keyboard support, and focus trapping.
 */

window.initGallery = function () {
  'use strict';

  const lightbox = document.getElementById('gallery-lightbox');
  if (!lightbox) return;

  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const closeBtn = document.getElementById('lightbox-close');

  if (!lightboxImg) return;

  let galleryItems = [];
  let currentIndex = 0;
  let previousActiveElement = null;

  // ─── Setup click listeners on gallery items ─────────────────────────────
  function setupGalleryItems() {
    galleryItems = Array.from(document.querySelectorAll('.gallery-item'));

    galleryItems.forEach((item, index) => {
      // Remove any previously bound listeners by cloning
      const clone = item.cloneNode(true);
      item.parentNode.replaceChild(clone, item);

      clone.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(index);
      });

      // Keyboard support for tabbed items
      clone.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });
    });

    // Re-query after clone replacement
    galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
  }

  // ─── Update lightbox image/caption ──────────────────────────────────────
  function updateContent() {
    const item = galleryItems[currentIndex];
    if (!item) return;

    const img = item.querySelector('img');
    // Try data attributes first (set by renderer), then DOM elements
    const src = item.dataset.src || (img ? img.src : '');
    const caption = item.dataset.caption || '';
    const captionEl = item.querySelector('.gallery-item-caption');
    const captionText = caption || (captionEl ? captionEl.textContent.trim() : '');

    lightboxImg.src = src;
    lightboxImg.alt = captionText || `Gallery image ${currentIndex + 1}`;

    if (lightboxCaption) {
      lightboxCaption.textContent = captionText;
    }
  }

  // ─── Open / close ────────────────────────────────────────────────────────
  function openLightbox(index) {
    currentIndex = index;
    previousActiveElement = document.activeElement;

    updateContent();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Focus close button for keyboard users
    requestAnimationFrame(() => {
      if (closeBtn) closeBtn.focus();
    });
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    if (previousActiveElement) {
      previousActiveElement.focus();
    }
  }

  // ─── Navigation ──────────────────────────────────────────────────────────
  function showNext() {
    if (!galleryItems.length) return;
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateContent();
  }

  function showPrev() {
    if (!galleryItems.length) return;
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateContent();
  }

  // ─── Event listeners ─────────────────────────────────────────────────────
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        showNext();
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        showPrev();
        break;
    }
  });

  // ─── Expose for dynamic re-render ────────────────────────────────────────
  window.refreshGalleryListeners = setupGalleryItems;

  // Initialize
  setupGalleryItems();
};
