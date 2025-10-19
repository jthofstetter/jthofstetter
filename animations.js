/* animations.js
 * Lightweight interactivity helpers for the portfolio.
 */

function setupTypewriter() {
  const textTarget = document.getElementById('introduction-text');
  const cursor = document.getElementById('intro-cursor');

  if (!textTarget || !cursor) {
    return;
  }

  const message =
    "Hi, my name is Jannik, I'm 19 years old, and very enthusiastic about AI. I love coding and exploring new technologies. Hope you enjoy my site!";
  let index = 0;
  const typingDelay = 45;

  const type = () => {
    if (index <= message.length) {
      textTarget.textContent = message.slice(0, index);
      index += 1;
      setTimeout(type, typingDelay);
    } else {
      cursor.style.display = 'none';
    }
  };

  setTimeout(type, 350);
}

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
    { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
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
    const maxShift = 1;
    const shift = Math.min(window.scrollY / 1200, maxShift);
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
  setupTypewriter();
  setupRevealAnimations();
  setupBackgroundParallax();
});
