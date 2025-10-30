document.addEventListener('DOMContentLoaded', function () {
  var parallaxContainer = document.querySelector('.zagluska-img');
  var parallaxItems = document.querySelectorAll('.parallax-item');
  var containerCenterX = 0;
  var containerCenterY = 0;
  function updateContainerSize() {
    var rect = parallaxContainer.getBoundingClientRect();
    containerCenterX = rect.left + rect.width / 2;
    containerCenterY = rect.top + rect.height / 2;
  }
  function handleMouseMove(e) {
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var moveX = mouseX - containerCenterX;
    var moveY = mouseY - containerCenterY;
    parallaxItems.forEach(function (item) {
      var depth = parseFloat(item.getAttribute('data-depth')) || 0.1;
      var rotation = parseFloat(item.getAttribute('data-rotation')) || 0.2;

      // Уменьшаем смещение
      var offsetX = moveX * depth * 0.3;
      var offsetY = moveY * depth * 0.3;

      // Уменьшаем вращение
      var rotateX = moveY / window.innerHeight * 5 * rotation;
      var rotateY = moveX / window.innerWidth * 5 * rotation;
      item.style.transform = "\n                translate(".concat(offsetX, "px, ").concat(offsetY, "px)\n                rotateX(").concat(rotateX, "deg)\n                rotateY(").concat(rotateY, "deg)\n            ");
    });
  }
  function initParallax() {
    updateContainerSize();
    window.addEventListener('resize', updateContainerSize);
    window.addEventListener('mousemove', handleMouseMove);
    parallaxItems.forEach(function (item) {
      item.style.transition = 'transform 0.15s ease-out';
    });
  }
  initParallax();
});