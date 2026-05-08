document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a');

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (
      href &&
      !href.startsWith('#') &&
      !href.startsWith('mailto:') &&
      !href.startsWith('tel:') &&
      !link.hasAttribute('target')
    ) {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        document.body.classList.add('fade-out');

        setTimeout(() => {
          window.location.href = href;
        }, 120);
      });
    }
  });
});
