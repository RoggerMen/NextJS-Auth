"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/auth.ts":
/*!*********************!*\
  !*** ./src/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n//Define la lógica de autenticación (proveedores, funciones signIn, signOut, etc.).\n\n// ESTE ES EL PROVEEDOR QUE NOSOTROS ESTAMOS USANDO \n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        // AQUI NOSOTROS TENEMOS QUE CREAR EL INICIO DE SESION DE LA AUTENTICACION CON CREDENTIALS\n        // LE VAMOS A ESTAR DICIENDO QUE VAMOS A RECIBIR EL \"email\" y \"contraseña\"\n        // \n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {},\n                password: {}\n            },\n            authorize: async(credentia)\n        })\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUZBQW1GO0FBRW5EO0FBQ2hDLG9EQUFvRDtBQUNNO0FBRW5ELE1BQU0sRUFBRUUsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO0lBRTFETSxXQUFXO1FBQ1gsMEZBQTBGO1FBQzFGLDBFQUEwRTtRQUMxRSxHQUFHO1FBQ0RMLDJFQUFXQSxDQUFDO1lBQ1ZNLGFBQVk7Z0JBQ1pDLE9BQU0sQ0FBQztnQkFDUEMsVUFBVSxDQUFDO1lBQ1g7WUFDQUMsV0FBV0MsTUFBT0M7UUFDcEI7S0FDRDtBQUNILEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgudHM/NjJkOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0RlZmluZSBsYSBsw7NnaWNhIGRlIGF1dGVudGljYWNpw7NuIChwcm92ZWVkb3JlcywgZnVuY2lvbmVzIHNpZ25Jbiwgc2lnbk91dCwgZXRjLikuXHJcblxyXG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXHJcbi8vIEVTVEUgRVMgRUwgUFJPVkVFRE9SIFFVRSBOT1NPVFJPUyBFU1RBTU9TIFVTQU5ETyBcclxuaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgeyBoYW5kbGVycywgc2lnbkluLCBzaWduT3V0LCBhdXRoIH0gPSBOZXh0QXV0aCh7XHJcblxyXG4gIHByb3ZpZGVyczogW1xyXG4gIC8vIEFRVUkgTk9TT1RST1MgVEVORU1PUyBRVUUgQ1JFQVIgRUwgSU5JQ0lPIERFIFNFU0lPTiBERSBMQSBBVVRFTlRJQ0FDSU9OIENPTiBDUkVERU5USUFMU1xyXG4gIC8vIExFIFZBTU9TIEEgRVNUQVIgRElDSUVORE8gUVVFIFZBTU9TIEEgUkVDSUJJUiBFTCBcImVtYWlsXCIgeSBcImNvbnRyYXNlw7FhXCJcclxuICAvLyBcclxuICAgIENyZWRlbnRpYWxzKHtcclxuICAgICAgY3JlZGVudGlhbHM6e1xyXG4gICAgICBlbWFpbDp7fSxcclxuICAgICAgcGFzc3dvcmQ6IHt9LFxyXG4gICAgICB9LFxyXG4gICAgICBhdXRob3JpemU6IGFzeW5jIChjcmVkZW50aWEpXHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiYXN5bmMiLCJjcmVkZW50aWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ })

});