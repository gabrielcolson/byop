module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/404.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/404.tsx":
/*!***********************!*\
  !*** ./pages/404.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page404; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blitz */ \"blitz\");\n/* harmony import */ var blitz__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blitz__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/loufi/Documents/Epitech/Paas/byop/api/.blitz/caches/dev/pages/404.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n // ------------------------------------------------------\n// This page is rendered if a route match is not found\n// ------------------------------------------------------\n\nfunction Page404() {\n  const statusCode = 404;\n  const title = \"This page could not be found\";\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(blitz__WEBPACK_IMPORTED_MODULE_1__[\"Head\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, statusCode, \": \", title)), __jsx(blitz__WEBPACK_IMPORTED_MODULE_1__[\"ErrorComponent\"], {\n    statusCode: statusCode,\n    title: title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy80MDQudHN4PzA1ZGMiXSwibmFtZXMiOlsiUGFnZTQwNCIsInN0YXR1c0NvZGUiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0NBRUE7QUFDQTtBQUNBOztBQUNlLFNBQVNBLE9BQVQsR0FBbUI7QUFDaEMsUUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLDhCQUFkO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dELFVBREgsUUFDaUJDLEtBRGpCLENBREYsQ0FERixFQU1FLE1BQUMsb0RBQUQ7QUFBZ0IsY0FBVSxFQUFFRCxVQUE1QjtBQUF3QyxTQUFLLEVBQUVDLEtBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGO0FBVUQiLCJmaWxlIjoiLi9wYWdlcy80MDQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZCwgRXJyb3JDb21wb25lbnQgfSBmcm9tIFwiYmxpdHpcIlxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRoaXMgcGFnZSBpcyByZW5kZXJlZCBpZiBhIHJvdXRlIG1hdGNoIGlzIG5vdCBmb3VuZFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlNDA0KCkge1xuICBjb25zdCBzdGF0dXNDb2RlID0gNDA0XG4gIGNvbnN0IHRpdGxlID0gXCJUaGlzIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kXCJcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7c3RhdHVzQ29kZX06IHt0aXRsZX1cbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxFcnJvckNvbXBvbmVudCBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSB0aXRsZT17dGl0bGV9IC8+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/404.tsx\n");

/***/ }),

/***/ "blitz":
/*!************************!*\
  !*** external "blitz" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"blitz\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJibGl0elwiPzZiNmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmxpdHouanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibGl0elwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///blitz\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });