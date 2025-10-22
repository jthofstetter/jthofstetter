/* animations.js
 * Minimal animation helpers for the portfolio layout.
 */

function setupRevealAnimations() {
  const elements = Array.from(document.querySelectorAll('.reveal-on-scroll'));
  if (!elements.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('in-view'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    { threshold: 0.25, rootMargin: '0px 0px -12% 0px' }
  );

  elements.forEach((element) => observer.observe(element));
}

function setupBackgroundParallax() {
  const root = document.documentElement;
  if (!root) {
    return;
  }

  let ticking = false;

  const updateShift = () => {
    const maxShift = 1.1;
    const shift = Math.min(window.scrollY / 900, maxShift);
    root.style.setProperty('--scroll-shift', shift.toFixed(3));
    ticking = false;
  };

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateShift);
      ticking = true;
    }
  };

  updateShift();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

window.addEventListener('DOMContentLoaded', () => {
  setupRevealAnimations();
  setupBackgroundParallax();
});
