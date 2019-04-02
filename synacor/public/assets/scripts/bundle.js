/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/constants.js":
/*!**********************************!*\
  !*** ./src/scripts/constants.js ***!
  \**********************************/
/*! exports provided: URL, WEATHERURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WEATHERURL\", function() { return WEATHERURL; });\nvar URL = \"https://weathersync.herokuapp.com/ip\";\nvar WEATHERURL = \"https://weathersync.herokuapp.com/weather\";\n\n//# sourceURL=webpack:///./src/scripts/constants.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/scripts/constants.js\");\n\n\nvar cityEl = document.querySelector(\".city\");\nvar tempEl = document.querySelector(\".temperature\");\nvar iconEl = document.querySelector(\".icon\");\nvar adjectiveEl = document.querySelector(\".adjective\");\nvar ICONURL = \"http://openweathermap.org/img/w/\";\nObject(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getIP\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"URL\"]).then(function (data) {\n  Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"getWeather\"])(_constants__WEBPACK_IMPORTED_MODULE_1__[\"WEATHERURL\"], data).then(function (res) {\n    cityEl.textContent = \"\".concat(res.name);\n    tempEl.textContent = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"convertToDegrees\"])(res.main.temp);\n    adjectiveEl.textContent = res.weather[0].description;\n    iconEl.innerHTML = \"<img src=\\\"\".concat(ICONURL).concat(res.weather[0].icon, \".png\\\" />\");\n  });\n});\n\n//# sourceURL=webpack:///./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/*! exports provided: getIP, getWeather, convertToDegrees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIP\", function() { return getIP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeather\", function() { return getWeather; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertToDegrees\", function() { return convertToDegrees; });\nvar title = document.querySelector(\".title\");\nvar temp = document.querySelector(\".temp-wrapper\");\nvar getIP = function getIP(url) {\n  var body = fetch(url).then(function (res) {\n    return res.json();\n  }).catch(function (err) {\n    console.log(\"error in getIP: \", err);\n    title.textContent = \"oh snap theres been an error!\";\n    title.classList.add(\"error\");\n    temp.classList.add(\"error\");\n  });\n  return body;\n};\nvar getWeather = function getWeather(url) {\n  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  var latitude = data.latitude,\n      longitude = data.longitude;\n  var body = fetch(\"\".concat(url, \"/\").concat(latitude, \",\").concat(longitude)).then(function (res) {\n    return res.json();\n  }).catch(function (error) {\n    console.log(\"error in getWeather: \", error);\n    title.textContent = \"oh snap theres been an error!\";\n    title.classList.add(\"error\");\n    temp.classList.add(\"error\");\n  });\n  return body;\n};\nvar convertToDegrees = function convertToDegrees(kelvin) {\n  var temp = Math.round((kelvin - 273.15) * 9 / 5 + 32);\n  return temp;\n};\n\n//# sourceURL=webpack:///./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi ./src/scripts/main.js ./src/styles/main.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/scripts/main.js */\"./src/scripts/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/styles/main.scss */\"./src/styles/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/scripts/main.js_./src/styles/main.scss?");

/***/ })

/******/ });