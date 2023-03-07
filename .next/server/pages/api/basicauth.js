"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/basicauth";
exports.ids = ["pages/api/basicauth"];
exports.modules = {

/***/ "(api)/./pages/api/basicauth.ts":
/*!********************************!*\
  !*** ./pages/api/basicauth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(_, res) {\n    res.setHeader(\"WWW-authenticate\", 'Basic realm=\"Secure Area\"');\n    res.statusCode = 401;\n    res.end(`Auth Required.`);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmFzaWNhdXRoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFZSxTQUFTQSxRQUFRQyxDQUFpQixFQUFFQyxHQUFvQixFQUFFO0lBQ3ZFQSxJQUFJQyxTQUFTLENBQUMsb0JBQW9CO0lBQ2xDRCxJQUFJRSxVQUFVLEdBQUc7SUFDakJGLElBQUlHLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC8uL3BhZ2VzL2FwaS9iYXNpY2F1dGgudHM/MDg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKF86IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICByZXMuc2V0SGVhZGVyKFwiV1dXLWF1dGhlbnRpY2F0ZVwiLCAnQmFzaWMgcmVhbG09XCJTZWN1cmUgQXJlYVwiJyk7XG4gIHJlcy5zdGF0dXNDb2RlID0gNDAxO1xuICByZXMuZW5kKGBBdXRoIFJlcXVpcmVkLmApO1xufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJfIiwicmVzIiwic2V0SGVhZGVyIiwic3RhdHVzQ29kZSIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/basicauth.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/basicauth.ts"));
module.exports = __webpack_exports__;

})();