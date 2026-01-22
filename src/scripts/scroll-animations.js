export const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // anima solo una vez
      }
    });
  },
  {
    threshold: 0.15, // % visible para disparar
  }
);

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelectorAll('.animate-on-scroll')
    .forEach((el) => observer.observe(el));
});
