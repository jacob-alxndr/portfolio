// 0. Imports
import { elements } from "./DOMelements";

// 1. Selectors
const { cards } = elements;

//2. Actions
cards.forEach((card) =>
  card.addEventListener("mouseup", function() {
    card.blur();
  })
);
