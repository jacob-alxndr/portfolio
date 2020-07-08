// 0. Imports
import { elements } from "./DOMelements";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
// 1. Selectors
const { background } = elements;
const newTl = gsap.timeline({
  scrollTrigger: {
    trigger: background,
    start: "center bottom",
    end: "center center",
  },
});
// 2. Actions
newTl.from(background, { scaleX: 0, duration: 1.5, ease: "Power4.easeOut" });
