/* animations.js
 * Provides lightweight scroll-in animations for feature cards and project tiles.
 */

function setupScrollAnimations() {
  const selectors = [
    '.reveal-on-scroll',
    '.project-card',
    '.knowledge-row',
    '.job-block'
  ];
  const observed = [];
  const seen = new Set();

  selectors.forEach((selector) => {
    document.querySelectorAll(selector).forEach((element) => {
      if (!seen.has(element)) {
        observed.push(element);
        seen.add(element);
      }
    });
  });

  if (!observed.length) {
    return;
  }

  const handleScrollAnimation = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;

    observed.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      if (top < triggerBottom) {
        element.classList.add('in-view');
      } else {
        element.classList.remove('in-view');
      }
    });
  };

  handleScrollAnimation();
  window.addEventListener('scroll', handleScrollAnimation, { passive: true });
}

document.addEventListener('DOMContentLoaded', setupScrollAnimations);
