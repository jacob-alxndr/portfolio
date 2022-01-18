// // 0. Imports
// import { elements } from "./DOMelements";

// // 1. Selectors
// const { cardContainers, cards } = elements;
// let currentX = 0;
// let currentY = 0;

// // 2. Functions
// const normalize = (value, min, max) => (10 * (value - min)) / (max - min);

// let isMouseInside = false;

// // 3. Actions
// cardContainers.forEach((container) => {
//   const card = container.querySelector(".card");

//   const frame = {
//     positionY: 0,
//     positionX: 0,
//     x: container.getBoundingClientRect().x,
//     y: container.getBoundingClientRect().y,
//     width: container.getBoundingClientRect().width,
//     height: container.getBoundingClientRect().height,
//     top: container.getBoundingClientRect().top,
//     right: container.getBoundingClientRect().right,
//   };

//   console.log(frame);
//   function updateAxis(e) {
//     isMouseInside = true;
//     animate();
//     currentX = e.pageX;
//     currentY = e.pageY;
//   }
//   function removeAnimation(e) {
//     isMouseInside = false;
//     card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   }

//   function animate() {
//     if (isMouseInside) {
//       //X
//       frame.positionX = normalize(
//         currentX,
//         frame.x + frame.width / 2,
//         frame.right
//       );
//       //Y
//       frame.positionY = normalize(
//         currentY,
//         frame.y + frame.height / 2,
//         frame.top
//       );
//       card.style.transform = `rotateY(${frame.positionX.toFixed(
//         0
//       )}deg) rotateX(${frame.positionY.toFixed(0)}deg)`;

//       //animate frame

//       requestAnimationFrame(animate);
//       // console.log(frame.x, frame.top, frame.positionX);
//     } else {
//       return false;
//     }
//   }

//   container.addEventListener("mousemove", updateAxis);
//   container.addEventListener("mouseout", removeAnimation);
// });
