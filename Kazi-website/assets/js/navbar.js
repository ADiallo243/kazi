const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.site-header');
const navItems = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    menuToggle.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
  });
}

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    if (navLinks && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      menuToggle.textContent = '☰';
    }
  });
});
