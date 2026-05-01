const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-media, .section-head, .menu-card, .split .panel, .info-grid .panel, .contact-wrap"
);

revealTargets.forEach((block) => {
  block.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealTargets.forEach((block) => observer.observe(block));
} else {
  revealTargets.forEach((block) => block.classList.add("show"));
}
