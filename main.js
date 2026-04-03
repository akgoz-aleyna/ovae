// OVAÉ — main.js

// NAV solid on scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('solid', window.scrollY > 60);
}, { passive: true });

// Mobile burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

// Mark elements for reveal
const targets = [
  '.about-text > *',
  '.about-card-float',
  '.section-header > *',
  '.product-card',
  '.benefit-item',
  '.benefits-left > *',
  '.article-meta > *',
  '.article-title',
  '.article-lead',
  '.article-content > *',
  '.contact-logo',
  '#contact h2',
  '#contact p',
  '.btn-primary.large',
].join(',');

document.querySelectorAll(targets).forEach((el, i) => {
  el.setAttribute('data-r', '');
  if (i % 4 === 1) el.setAttribute('data-delay', '1');
  else if (i % 4 === 2) el.setAttribute('data-delay', '2');
  else if (i % 4 === 3) el.setAttribute('data-delay', '3');
  observer.observe(el);
});
