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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n//Define la lógica de autenticación (proveedores, funciones signIn, signOut, etc.).\n\n// ESTE ES EL PROVEEDOR QUE NOSOTROS ESTAMOS USANDO \n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        // AQUI NOSOTROS TENEMOS QUE CREAR EL INICIO DE SESION DE LA AUTENTICACION CON CREDENTIALS\n        // LE VAMOS A ESTAR DICIENDO QUE VAMOS A RECIBIR EL \"email\" y \"contraseña\"\n        // \n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {},\n                password: {}\n            }\n        })\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUZBQW1GO0FBRW5EO0FBQ2hDLG9EQUFvRDtBQUNNO0FBRW5ELE1BQU0sRUFBRUUsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO0lBRTFETSxXQUFXO1FBQ1gsMEZBQTBGO1FBQzFGLDBFQUEwRTtRQUMxRSxHQUFHO1FBQ0RMLDJFQUFXQSxDQUFDO1lBQ1ZNLGFBQVk7Z0JBQ1pDLE9BQU0sQ0FBQztnQkFDUEMsVUFBVSxDQUFDO1lBQ1g7UUFDRjtLQUVEO0FBQ0gsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXV0aC50cz82MmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vRGVmaW5lIGxhIGzDs2dpY2EgZGUgYXV0ZW50aWNhY2nDs24gKHByb3ZlZWRvcmVzLCBmdW5jaW9uZXMgc2lnbkluLCBzaWduT3V0LCBldGMuKS5cclxuXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuLy8gRVNURSBFUyBFTCBQUk9WRUVET1IgUVVFIE5PU09UUk9TIEVTVEFNT1MgVVNBTkRPIFxyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcclxuXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgLy8gQVFVSSBOT1NPVFJPUyBURU5FTU9TIFFVRSBDUkVBUiBFTCBJTklDSU8gREUgU0VTSU9OIERFIExBIEFVVEVOVElDQUNJT04gQ09OIENSRURFTlRJQUxTXHJcbiAgLy8gTEUgVkFNT1MgQSBFU1RBUiBESUNJRU5ETyBRVUUgVkFNT1MgQSBSRUNJQklSIEVMIFwiZW1haWxcIiB5IFwiY29udHJhc2XDsWFcIlxyXG4gIC8vIFxyXG4gICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICBjcmVkZW50aWFsczp7XHJcbiAgICAgIGVtYWlsOnt9LFxyXG4gICAgICBwYXNzd29yZDoge30sXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgKSxcclxuICBdLFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHMiLCJoYW5kbGVycyIsInNpZ25JbiIsInNpZ25PdXQiLCJhdXRoIiwicHJvdmlkZXJzIiwiY3JlZGVudGlhbHMiLCJlbWFpbCIsInBhc3N3b3JkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ })

});