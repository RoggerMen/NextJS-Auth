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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n//Define la lógica de autenticación (proveedores, funciones signIn, signOut, etc.).\n\n// ESTE ES EL PROVEEDOR QUE NOSOTROS ESTAMOS USANDO \n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        // AQUI NOSOTROS TENEMOS QUE CREAR EL INICIO DE SESION DE LA AUTENTICACION CON CREDENTIALS\n        // LE VAMOS A ESTAR DICIENDO QUE VAMOS A RECIBIR EL \"email\" y \"contraseña\"\n        // \n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {},\n                password: {}\n            },\n            authorize: async (credentials)=>{}\n        })\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUZBQW1GO0FBRW5EO0FBQ2hDLG9EQUFvRDtBQUNNO0FBRW5ELE1BQU0sRUFBRUUsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO0lBRTFETSxXQUFXO1FBQ1gsMEZBQTBGO1FBQzFGLDBFQUEwRTtRQUMxRSxHQUFHO1FBQ0RMLDJFQUFXQSxDQUFDO1lBQ1ZNLGFBQVk7Z0JBQ1pDLE9BQU0sQ0FBQztnQkFDUEMsVUFBVSxDQUFDO1lBQ1g7WUFDQUMsV0FBVyxPQUFPSCxlQUVsQjtRQUNGO0tBQ0Q7QUFDSCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hdXRoLnRzPzYyZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9EZWZpbmUgbGEgbMOzZ2ljYSBkZSBhdXRlbnRpY2FjacOzbiAocHJvdmVlZG9yZXMsIGZ1bmNpb25lcyBzaWduSW4sIHNpZ25PdXQsIGV0Yy4pLlxyXG5cclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIlxyXG4vLyBFU1RFIEVTIEVMIFBST1ZFRURPUiBRVUUgTk9TT1RST1MgRVNUQU1PUyBVU0FORE8gXHJcbmltcG9ydCBDcmVkZW50aWFscyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgaGFuZGxlcnMsIHNpZ25Jbiwgc2lnbk91dCwgYXV0aCB9ID0gTmV4dEF1dGgoe1xyXG5cclxuICBwcm92aWRlcnM6IFtcclxuICAvLyBBUVVJIE5PU09UUk9TIFRFTkVNT1MgUVVFIENSRUFSIEVMIElOSUNJTyBERSBTRVNJT04gREUgTEEgQVVURU5USUNBQ0lPTiBDT04gQ1JFREVOVElBTFNcclxuICAvLyBMRSBWQU1PUyBBIEVTVEFSIERJQ0lFTkRPIFFVRSBWQU1PUyBBIFJFQ0lCSVIgRUwgXCJlbWFpbFwiIHkgXCJjb250cmFzZcOxYVwiXHJcbiAgLy8gXHJcbiAgICBDcmVkZW50aWFscyh7XHJcbiAgICAgIGNyZWRlbnRpYWxzOntcclxuICAgICAgZW1haWw6e30sXHJcbiAgICAgIHBhc3N3b3JkOiB7fSxcclxuICAgICAgfSxcclxuICAgICAgYXV0aG9yaXplOiBhc3luYyAoY3JlZGVudGlhbHMpID0+e1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIiwiYXV0aG9yaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ })

});