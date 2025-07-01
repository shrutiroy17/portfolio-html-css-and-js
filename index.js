// Smooth scroll for anchor links
window.addEventListener('DOMContentLoaded', function() {
  // 1. Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Contact form validation
  document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault();
      return;
    }
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      e.preventDefault();
      return;
    }
  });

  // 4. Theme toggle (light/dark mode)
  // (Removed: No longer needed, button and logic deleted)
});
