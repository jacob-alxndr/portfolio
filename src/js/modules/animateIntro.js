// 0. Imports
import { elements } from "./DOMelements";
import { gsap } from "gsap";
// 1. Selectors
const { intro, introText } = elements;
const tl = gsap.timeline();
tl.from(introText, { y: "-100vh", ease: "Power4.easeInOut", duration: 1.5 })
  .to(introText, { y: "100vh", ease: "Power4.easeInOut", duration: 1 })
  .to(intro, {
    scaleY: 0,
    transformOrigin: "top",
    ease: "Power4.easeInOut",
    duration: 0.5,
  });
