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

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n//Protege rutas con autenticación usando la función auth como middleware.\n// borramos el as middleware que tenia\n// ERA ASI export { auth as middleware } from \"@/auth\"\n// PERO NOS SALDRIA ERROR PORQUE NECESITA IMPORTAR LO SIGUIENTE Y YA NO EXPORTAR\n\n// EXPORTAMOS POR DEFECTO LA FUNCION QUE ES EL \"auth\" \n// Y DENTRO DE ESE \"auth\" CREAMOS UNA FUNCION ASINCRONA\n// DONDE VAMOS A PONER NUESTRA LOGICA EXTRA PARA PROTEGER NUESTRA RUTA\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCxnRkFBZ0Y7QUFDbkQ7QUFFN0Isc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsaUVBQWVBLDJDQUFJQSxDQUFDLE9BQU1DLE9BRTFCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1Byb3RlZ2UgcnV0YXMgY29uIGF1dGVudGljYWNpw7NuIHVzYW5kbyBsYSBmdW5jacOzbiBhdXRoIGNvbW8gbWlkZGxld2FyZS5cclxuLy8gYm9ycmFtb3MgZWwgYXMgbWlkZGxld2FyZSBxdWUgdGVuaWFcclxuLy8gRVJBIEFTSSBleHBvcnQgeyBhdXRoIGFzIG1pZGRsZXdhcmUgfSBmcm9tIFwiQC9hdXRoXCJcclxuLy8gUEVSTyBOT1MgU0FMRFJJQSBFUlJPUiBQT1JRVUUgTkVDRVNJVEEgSU1QT1JUQVIgTE8gU0lHVUlFTlRFIFkgWUEgTk8gRVhQT1JUQVJcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIlxyXG5cclxuLy8gRVhQT1JUQU1PUyBQT1IgREVGRUNUTyBMQSBGVU5DSU9OIFFVRSBFUyBFTCBcImF1dGhcIiBcclxuLy8gWSBERU5UUk8gREUgRVNFIFwiYXV0aFwiIENSRUFNT1MgVU5BIEZVTkNJT04gQVNJTkNST05BXHJcbi8vIERPTkRFIFZBTU9TIEEgUE9ORVIgTlVFU1RSQSBMT0dJQ0EgRVhUUkEgUEFSQSBQUk9URUdFUiBOVUVTVFJBIFJVVEFcclxuZXhwb3J0IGRlZmF1bHQgYXV0aChhc3luYyhyZXEpID0+e1xyXG5cclxufSlcclxuIl0sIm5hbWVzIjpbImF1dGgiLCJyZXEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});