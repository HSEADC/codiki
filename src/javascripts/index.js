import "./stylesheets/style.css";
console.log("hey");
// document.addEventListener("DOMContentLoaded", function () {
//   const parallaxContainer = document.querySelector(".zagluska-img");
//   const parallaxItems = document.querySelectorAll(".parallax-item");

//   let containerCenterX = 0;
//   let containerCenterY = 0;

//   function updateContainerSize() {
//     const rect = parallaxContainer.getBoundingClientRect();
//     containerCenterX = rect.left + rect.width / 2;
//     containerCenterY = rect.top + rect.height / 2;
//   }

//   function handleMouseMove(e) {
//     const mouseX = e.clientX;
//     const mouseY = e.clientY;

//     const moveX = mouseX - containerCenterX;
//     const moveY = mouseY - containerCenterY;

//     parallaxItems.forEach((item) => {
//       const depth = parseFloat(item.getAttribute("data-depth"));
//       const rotation = parseFloat(item.getAttribute("data-rotation"));

//       // Уменьшаем смещение
//       const offsetX = moveX * depth * 0.3;
//       const offsetY = moveY * depth * 0.3;

//       // Уменьшаем вращение
//       const rotateX = (moveY / window.innerHeight) * 5 * rotation;
//       const rotateY = (moveX / window.innerWidth) * 5 * rotation;

//       item.style.transform = `
//                 translate(${offsetX}px, ${offsetY}px)
//                 rotateX(${rotateX}deg)
//                 rotateY(${rotateY}deg)
//             `;
//     });
//   }

//   function initParallax() {
//     updateContainerSize();
//     window.addEventListener("resize", updateContainerSize);
//     window.addEventListener("mousemove", handleMouseMove);

//     parallaxItems.forEach((item) => {
//       item.style.transition = "transform 0.15s ease-out";
//     });
//   }

//   initParallax();
// });
