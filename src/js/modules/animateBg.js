// 0. Imports
import { elements } from "./DOMelements";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import { CustomEase } from "gsap/CustomEase.js";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CustomEase);
// 1. Selectors
const { background, cards } = elements;
const newTl = gsap.timeline({
  scrollTrigger: {
    trigger: background,
    start: "top center",
    end: "center center",
  },
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: background,
    start: "top center",
    end: "top top",
    // markers: true,
  },
});
// 2. Actions

newTl.from(background, {
  scaleX: 0,
  duration: 1.05,
  ease: "power2.out",
});

tl.from(cards, {
  opacity: 0,
  y: 32,
  duration: 0.3,
  clearProps: "all",
});
