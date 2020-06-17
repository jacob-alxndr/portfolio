// 0. Imports
import { elements } from "./DOMelements";
import { gsap } from "gsap";
// 1. Selectors
const { words } = elements;
words.forEach((word) => {
  const HTML = [...word.textContent]
    .map((char) => `<span class='letter'>${char}</span>`)
    .join("");
  word.innerHTML = HTML;
});

// 2. Actions
gsap.to(".letter", {
  duration: 1,
  y: 4,
  stagger: { amount: -0.3, repeat: -1, yoyo: true },
  ease: "power1.inOut",
});
