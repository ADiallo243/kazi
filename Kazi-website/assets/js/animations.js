const revealElements = document.querySelectorAll(
  '.section, .statement-section, .pro-cta, .final-cta, .explore-cta, .about-cta, .contact-cta, .categories-cta, .profile-contact',
);

if (revealElements.length > 0) {
  revealElements.forEach((element) => {
    element.classList.add('reveal');
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');

          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
}
