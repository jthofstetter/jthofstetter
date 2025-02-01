/* 
  animations.js
  Enthält:
  1) Typewriter-Effekt für Vorstellung
  2) Scroll-Effekt für Projekte, Kenntnisse und Job-Blöcke
*/

/* 1) Typewriter-Effekt */
const introSteps = [
  "H","i",","," ",
  "m","y"," ","n","a","m","e"," ","i","s"," ",
  "J","a","z","BKSP","BKSP","a","n","n","i","k",",",
  " ","I","'","m"," ","1","9"," ","y","e","a","r","s"," ","o","l","d",",",
  " ","a","n","d"," ","v","e","r","y"," ",
  "e","n","t","h","u","s","i","a","BKSP","BKSP","BKSP","s","i","a","s","t","i","c"," ",
  "a","b","o","u","t"," ","A","I",".",
  " ","I"," ","l","o","v","e"," ","c","o","d","i","n","g"," ",
  "a","n","d"," ","e","x","p","l","o","r","i","n","g"," ",
  "n","e","w"," ","t","e","c","h","n","o","l","o","g","i","e","s",".",
  "WAIT",
  " ","H","o","p","e"," ","y","o","u"," ","e","n","j","o","y"," ","m","y"," ","s","i","t","e","!"
];

// Geschwindigkeiten
const typingSpeed = 50;
const erasingSpeed = 20;
const waitTime = 500;

let currentStepIndex = 0;
let introductionTextElement;
let introCursor;
let typedText = "";

function typeIntroduction() {
  if (currentStepIndex >= introSteps.length) {
    // Alle Schritte abgearbeitet: Cursor ausblenden
    introCursor.style.display = "none";
    return;
  }

  const currentStep = introSteps[currentStepIndex];

  if (currentStep === "BKSP") {
    typedText = typedText.slice(0, -1);
    introductionTextElement.textContent = typedText;
    currentStepIndex++;
    setTimeout(typeIntroduction, erasingSpeed);

  } else if (currentStep === "WAIT") {
    currentStepIndex++;
    setTimeout(typeIntroduction, waitTime);

  } else {
    typedText += currentStep;
    introductionTextElement.textContent = typedText;
    currentStepIndex++;
    setTimeout(typeIntroduction, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  introductionTextElement = document.getElementById("introduction-text");
  introCursor = document.getElementById("intro-cursor");
  typeIntroduction(); // Startet die Typewriter-Animation
});


/* 2) Scroll-Effekt für Projekte, Kenntnisse und Job-Blöcke */
function handleScrollAnimation() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  // Projektkarten
  const projectCards = document.querySelectorAll(".project-card");
  projectCards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("in-view");
    } else {
      card.classList.remove("in-view");
    }
  });

  // Besondere Kenntnisse (jede .knowledge-row)
  const knowledgeRows = document.querySelectorAll(".knowledge-row");
  knowledgeRows.forEach((row) => {
    const rowTop = row.getBoundingClientRect().top;
    if (rowTop < triggerBottom) {
      row.classList.add("in-view");
    } else {
      row.classList.remove("in-view");
    }
  });

  // Job-Blöcke
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
