// Mobile nav toggle
const nav = document.querySelector('nav');
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => nav.classList.toggle('open'));

// Close mobile nav when a link is clicked
document.querySelectorAll('.nav-links a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});
