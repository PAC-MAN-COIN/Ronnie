// main.js

document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Lazy loading images (if any have the class "lazy-load")
  const lazyImages = document.querySelectorAll('.lazy-load');

  const lazyLoad = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.classList.remove('lazy-load');
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lazyLoad(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  lazyImages.forEach((img) => observer.observe(img));
});
