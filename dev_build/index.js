/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/images/accurate.webp":
/*!**********************************!*\
  !*** ./src/images/accurate.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/567d146190b668fe7796.webp";

/***/ }),

/***/ "./src/images/comp.webp":
/*!******************************!*\
  !*** ./src/images/comp.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/deabaa37a7db71328404.webp";

/***/ }),

/***/ "./src/images/construction.webp":
/*!**************************************!*\
  !*** ./src/images/construction.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/899290fc4440aa49b11d.webp";

/***/ }),

/***/ "./src/images/creative.webp":
/*!**********************************!*\
  !*** ./src/images/creative.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/7e699f162b9288c62dfc.webp";

/***/ }),

/***/ "./src/images/eco.webp":
/*!*****************************!*\
  !*** ./src/images/eco.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/66e26fbddafd88e206a3.webp";

/***/ }),

/***/ "./src/images/education.webp":
/*!***********************************!*\
  !*** ./src/images/education.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0801c91f2867e3c6397c.webp";

/***/ }),

/***/ "./src/images/finance.webp":
/*!*********************************!*\
  !*** ./src/images/finance.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/c025164ec89f2b660a11.webp";

/***/ }),

/***/ "./src/images/humanitarian.webp":
/*!**************************************!*\
  !*** ./src/images/humanitarian.webp ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/55bba355fd0b6e1e4543.webp";

/***/ }),

/***/ "./src/images/it.webp":
/*!****************************!*\
  !*** ./src/images/it.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/0f89d13af1a5ea411444.webp";

/***/ }),

/***/ "./src/images/marketing.webp":
/*!***********************************!*\
  !*** ./src/images/marketing.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/ee3061cc7b467fdee93a.webp";

/***/ }),

/***/ "./src/images/medicine.webp":
/*!**********************************!*\
  !*** ./src/images/medicine.webp ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/91b34843427e98bac45b.webp";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _images_it_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/it.webp */ "./src/images/it.webp");
/* harmony import */ var _images_marketing_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/marketing.webp */ "./src/images/marketing.webp");
/* harmony import */ var _images_creative_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/creative.webp */ "./src/images/creative.webp");
/* harmony import */ var _images_medicine_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/medicine.webp */ "./src/images/medicine.webp");
/* harmony import */ var _images_finance_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/finance.webp */ "./src/images/finance.webp");
/* harmony import */ var _images_accurate_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/accurate.webp */ "./src/images/accurate.webp");
/* harmony import */ var _images_humanitarian_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/humanitarian.webp */ "./src/images/humanitarian.webp");
/* harmony import */ var _images_construction_webp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/construction.webp */ "./src/images/construction.webp");
/* harmony import */ var _images_education_webp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/education.webp */ "./src/images/education.webp");
/* harmony import */ var _images_eco_webp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/eco.webp */ "./src/images/eco.webp");
/* harmony import */ var _images_comp_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/comp.webp */ "./src/images/comp.webp");

console.log('hey');











var images = {
  it: _images_it_webp__WEBPACK_IMPORTED_MODULE_1__,
  marketing: _images_marketing_webp__WEBPACK_IMPORTED_MODULE_2__,
  creative: _images_creative_webp__WEBPACK_IMPORTED_MODULE_3__,
  medicine: _images_medicine_webp__WEBPACK_IMPORTED_MODULE_4__,
  finance: _images_finance_webp__WEBPACK_IMPORTED_MODULE_5__,
  accurate: _images_accurate_webp__WEBPACK_IMPORTED_MODULE_6__,
  humanitarian: _images_humanitarian_webp__WEBPACK_IMPORTED_MODULE_7__,
  construction: _images_construction_webp__WEBPACK_IMPORTED_MODULE_8__,
  education: _images_education_webp__WEBPACK_IMPORTED_MODULE_9__,
  eco: _images_eco_webp__WEBPACK_IMPORTED_MODULE_10__
};
document.addEventListener('DOMContentLoaded', function () {
  var categories = document.querySelectorAll('.cat-item');
  var banner = document.getElementById('banner-bg');
  var bannerImage = document.querySelector('.banner-image');
  var bannerTitle = document.getElementById('banner-title');
  var bannerDesc = document.getElementById('banner-desc');
  var bannerSteps = document.getElementById('banner-steps');
  var defaultImageSrc = _images_comp_webp__WEBPACK_IMPORTED_MODULE_11__; // Используем импортированную картинку
  var defaultTitle = bannerTitle.innerHTML;
  categories.forEach(function (item) {
    item.addEventListener('mouseenter', function () {
      var imgKey = this.getAttribute('data-img');
      var color = this.getAttribute('data-color');
      var title = this.getAttribute('data-title');
      var desc = this.getAttribute('data-desc');
      this.style.color = color;
      banner.style.background = color;
      if (images[imgKey]) {
        bannerImage.src = images[imgKey];
        bannerImage.classList.add('zoom-active');
      }
      if (bannerSteps) bannerSteps.style.display = 'none';
      if (bannerDesc) {
        bannerDesc.style.display = 'block';
        bannerDesc.textContent = desc;
      }
      if (bannerTitle) bannerTitle.textContent = title;
    });
    item.addEventListener('mouseleave', function () {
      this.style.color = '';
      banner.style.background = '';
      bannerImage.src = defaultImageSrc;
      bannerImage.classList.remove('zoom-active');
      if (bannerSteps) bannerSteps.style.display = 'block';
      if (bannerDesc) bannerDesc.style.display = 'none';
      if (bannerTitle) bannerTitle.innerHTML = defaultTitle;
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixHQUFHLEdBQUdsQyxNQUFNLENBQUMyQixNQUFNLENBQUM7UUFDaENWLFdBQVcsQ0FBQ2tCLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQztNQUM1QztNQUlBLElBQUdmLFdBQVcsRUFBRUEsV0FBVyxDQUFDVyxLQUFLLENBQUNLLE9BQU8sR0FBRyxNQUFNO01BRWxELElBQUdqQixVQUFVLEVBQUU7UUFDWEEsVUFBVSxDQUFDWSxLQUFLLENBQUNLLE9BQU8sR0FBRyxPQUFPO1FBQ2xDakIsVUFBVSxDQUFDa0IsV0FBVyxHQUFHUCxJQUFJO01BQ2pDO01BRUEsSUFBR1osV0FBVyxFQUFFQSxXQUFXLENBQUNtQixXQUFXLEdBQUdSLEtBQUs7SUFDbkQsQ0FBQyxDQUFDO0lBR0ZKLElBQUksQ0FBQ2QsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFlBQVc7TUFDM0MsSUFBSSxDQUFDb0IsS0FBSyxDQUFDSCxLQUFLLEdBQUcsRUFBRTtNQUNyQmQsTUFBTSxDQUFDaUIsS0FBSyxDQUFDQyxVQUFVLEdBQUcsRUFBRTtNQUM1QmhCLFdBQVcsQ0FBQ2lCLEdBQUcsR0FBR1osZUFBZTtNQUVqQ0wsV0FBVyxDQUFDa0IsU0FBUyxDQUFDSSxNQUFNLENBQUMsYUFBYSxDQUFDO01BQzNDLElBQUdsQixXQUFXLEVBQUVBLFdBQVcsQ0FBQ1csS0FBSyxDQUFDSyxPQUFPLEdBQUcsT0FBTztNQUNuRCxJQUFHakIsVUFBVSxFQUFFQSxVQUFVLENBQUNZLEtBQUssQ0FBQ0ssT0FBTyxHQUFHLE1BQU07TUFDaEQsSUFBR2xCLFdBQVcsRUFBRUEsV0FBVyxDQUFDSyxTQUFTLEdBQUdELFlBQVk7SUFDeEQsQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iMjRkczA4Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iMjRkczA4L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2IyNGRzMDgvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYjI0ZHMwOC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXHJcblxyXG5jb25zb2xlLmxvZygnaGV5JylcclxuXHJcblxyXG5pbXBvcnQgaXRJbWcgZnJvbSAnLi4vaW1hZ2VzL2l0LndlYnAnO1xyXG5pbXBvcnQgbWFya2V0aW5nSW1nIGZyb20gJy4uL2ltYWdlcy9tYXJrZXRpbmcud2VicCc7XHJcbmltcG9ydCBjcmVhdGl2ZUltZyBmcm9tICcuLi9pbWFnZXMvY3JlYXRpdmUud2VicCc7XHJcbmltcG9ydCBtZWRpY2luZUltZyBmcm9tICcuLi9pbWFnZXMvbWVkaWNpbmUud2VicCc7XHJcbmltcG9ydCBmaW5hbmNlSW1nIGZyb20gJy4uL2ltYWdlcy9maW5hbmNlLndlYnAnO1xyXG5pbXBvcnQgYWNjdXJhdGVJbWcgZnJvbSAnLi4vaW1hZ2VzL2FjY3VyYXRlLndlYnAnO1xyXG5pbXBvcnQgaHVtYW5pdGFyaWFuSW1nIGZyb20gJy4uL2ltYWdlcy9odW1hbml0YXJpYW4ud2VicCc7XHJcbmltcG9ydCBjb25zdHJ1Y3Rpb25JbWcgZnJvbSAnLi4vaW1hZ2VzL2NvbnN0cnVjdGlvbi53ZWJwJztcclxuaW1wb3J0IGVkdWNhdGlvbkltZyBmcm9tICcuLi9pbWFnZXMvZWR1Y2F0aW9uLndlYnAnO1xyXG5pbXBvcnQgZWNvSW1nIGZyb20gJy4uL2ltYWdlcy9lY28ud2VicCc7XHJcbmltcG9ydCBjb21wdXRlckltZyBmcm9tICcuLi9pbWFnZXMvY29tcC53ZWJwJztcclxuXHJcblxyXG5jb25zdCBpbWFnZXMgPSB7XHJcbiAgICBpdDogaXRJbWcsXHJcbiAgICBtYXJrZXRpbmc6IG1hcmtldGluZ0ltZyxcclxuICAgIGNyZWF0aXZlOiBjcmVhdGl2ZUltZyxcclxuICAgIG1lZGljaW5lOiBtZWRpY2luZUltZyxcclxuICAgIGZpbmFuY2U6IGZpbmFuY2VJbWcsXHJcbiAgICBhY2N1cmF0ZTogYWNjdXJhdGVJbWcsXHJcbiAgICBodW1hbml0YXJpYW46IGh1bWFuaXRhcmlhbkltZyxcclxuICAgIGNvbnN0cnVjdGlvbjogY29uc3RydWN0aW9uSW1nLFxyXG4gICAgZWR1Y2F0aW9uOiBlZHVjYXRpb25JbWcsXHJcbiAgICBlY286IGVjb0ltZ1xyXG59O1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0LWl0ZW0nKTtcclxuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXItYmcnKTtcclxuICAgIGNvbnN0IGJhbm5lckltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhbm5lci1pbWFnZScpO1xyXG5cclxuXHJcbiAgICBjb25zdCBiYW5uZXJUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYW5uZXItdGl0bGUnKTtcclxuICAgIGNvbnN0IGJhbm5lckRlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFubmVyLWRlc2MnKTtcclxuICAgIGNvbnN0IGJhbm5lclN0ZXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhbm5lci1zdGVwcycpO1xyXG5cclxuXHJcbiAgICBjb25zdCBkZWZhdWx0SW1hZ2VTcmMgPSBjb21wdXRlckltZzsgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwg0LjQvNC/0L7RgNGC0LjRgNC+0LLQsNC90L3Rg9GOINC60LDRgNGC0LjQvdC60YNcclxuICAgIGNvbnN0IGRlZmF1bHRUaXRsZSA9IGJhbm5lclRpdGxlLmlubmVySFRNTDtcclxuXHJcbiAgICBjYXRlZ29yaWVzLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW1nS2V5ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1nJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29sb3InKTtcclxuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmdldEF0dHJpYnV0ZSgnZGF0YS10aXRsZScpO1xyXG4gICAgICAgICAgICBjb25zdCBkZXNjID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVzYycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuY29sb3IgPSBjb2xvcjtcclxuXHJcblxyXG4gICAgICAgICAgICBiYW5uZXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpbWFnZXNbaW1nS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgYmFubmVySW1hZ2Uuc3JjID0gaW1hZ2VzW2ltZ0tleV07XHJcbiAgICAgICAgICAgICAgICBiYW5uZXJJbWFnZS5jbGFzc0xpc3QuYWRkKCd6b29tLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmKGJhbm5lclN0ZXBzKSBiYW5uZXJTdGVwcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgaWYoYmFubmVyRGVzYykge1xyXG4gICAgICAgICAgICAgICAgYmFubmVyRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgICAgIGJhbm5lckRlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihiYW5uZXJUaXRsZSkgYmFubmVyVGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmNvbG9yID0gJyc7XHJcbiAgICAgICAgICAgIGJhbm5lci5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XHJcbiAgICAgICAgICAgIGJhbm5lckltYWdlLnNyYyA9IGRlZmF1bHRJbWFnZVNyYztcclxuXHJcbiAgICAgICAgICAgIGJhbm5lckltYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ3pvb20tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGlmKGJhbm5lclN0ZXBzKSBiYW5uZXJTdGVwcy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgaWYoYmFubmVyRGVzYykgYmFubmVyRGVzYy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBpZihiYW5uZXJUaXRsZSkgYmFubmVyVGl0bGUuaW5uZXJIVE1MID0gZGVmYXVsdFRpdGxlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn0pOyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiaXRJbWciLCJtYXJrZXRpbmdJbWciLCJjcmVhdGl2ZUltZyIsIm1lZGljaW5lSW1nIiwiZmluYW5jZUltZyIsImFjY3VyYXRlSW1nIiwiaHVtYW5pdGFyaWFuSW1nIiwiY29uc3RydWN0aW9uSW1nIiwiZWR1Y2F0aW9uSW1nIiwiZWNvSW1nIiwiY29tcHV0ZXJJbWciLCJpbWFnZXMiLCJpdCIsIm1hcmtldGluZyIsImNyZWF0aXZlIiwibWVkaWNpbmUiLCJmaW5hbmNlIiwiYWNjdXJhdGUiLCJodW1hbml0YXJpYW4iLCJjb25zdHJ1Y3Rpb24iLCJlZHVjYXRpb24iLCJlY28iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYXRlZ29yaWVzIiwicXVlcnlTZWxlY3RvckFsbCIsImJhbm5lciIsImdldEVsZW1lbnRCeUlkIiwiYmFubmVySW1hZ2UiLCJxdWVyeVNlbGVjdG9yIiwiYmFubmVyVGl0bGUiLCJiYW5uZXJEZXNjIiwiYmFubmVyU3RlcHMiLCJkZWZhdWx0SW1hZ2VTcmMiLCJkZWZhdWx0VGl0bGUiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwiaXRlbSIsImltZ0tleSIsImdldEF0dHJpYnV0ZSIsImNvbG9yIiwidGl0bGUiLCJkZXNjIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwic3JjIiwiY2xhc3NMaXN0IiwiYWRkIiwiZGlzcGxheSIsInRleHRDb250ZW50IiwicmVtb3ZlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=