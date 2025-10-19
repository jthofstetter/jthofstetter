/*
  animations.js
  Contains:
  1) Typewriter effect for the introduction
  2) Scroll-in effect for projects, knowledge rows, and job blocks
*/

/* 1) Typewriter effect */
const introMessage =
  "Hi, I'm Jannik — AI developer crafting document intelligence, financial decision pipelines, and human-centered automation.";
const typingSpeed = 42;

let introductionTextElement;
let introCursor;
let typedText = "";
let charIndex = 0;

function typeIntroduction() {
  if (charIndex >= introMessage.length) {
    introCursor.style.display = "none";
    return;
  }

  typedText += introMessage.charAt(charIndex);
  introductionTextElement.textContent = typedText;
  charIndex++;
  setTimeout(typeIntroduction, typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  introductionTextElement = document.getElementById("introduction-text");
  introCursor = document.getElementById("intro-cursor");
  typeIntroduction();
});

/* 2) Scroll effect for projects, knowledge rows, and job blocks */
function handleScrollAnimation() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Project cards
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("in-view");
    } else {
      card.classList.remove("in-view");
    }
  });

  // Special knowledge rows
  const knowledgeRows = document.querySelectorAll(".knowledge-row");
  knowledgeRows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top;
    if (rowTop < triggerBottom) {
      row.classList.add("in-view");
    } else {
      row.classList.remove("in-view");
    }
  });

  // Job blocks
  const jobBlocks = document.querySelectorAll(".job-block");
  jobBlocks.forEach((block) => {
    const blockTop = block.getBoundingClientRect().top;
    if (blockTop < triggerBottom) {
      block.classList.add("in-view");
    } else {
      block.classList.remove("in-view");
    }
  });
}

window.addEventListener("scroll", handleScrollAnimation);
handleScrollAnimation();
