// scripts.js – ForgeSite Studio build
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle with slide animation
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main-nav');

  if (burger && nav) {
    burger.addEventListener('click', () => {
      nav.style.display = 'block';
      // Use setTimeout to ensure display: block is applied before adding active class
      setTimeout(() => {
        nav.classList.toggle('active');
      }, 10);
      
      // If closing, wait for animation then hide
      if (nav.classList.contains('active')) {
        nav.classList.remove('active');
        setTimeout(() => {
          nav.style.display = 'none';
        }, 300);
      }
    });
  }

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (lightbox && lightboxImg && lightboxCaption && closeBtn) {
    galleryItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        lightboxImg.src = item.href;
        lightboxImg.alt = item.querySelector('img').alt;
        lightboxCaption.textContent = item.dataset.caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Close with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});