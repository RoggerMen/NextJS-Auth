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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n//Protege rutas con autenticación usando la función auth como middleware.\n// borramos el as middleware que tenia\n// ERA ASI export { auth as middleware } from \"@/auth\"\n// PERO SALE ERROR PORQUE NECESITA IMPORTAR LO SIGUIENTE Y YANO EXPORTAR\n\n// EXPORTAMOS POR DEFECTO LA FUNCION QUE ES EL \"auth\" \n// Y DENTRO DE ESE \"auth\" CREAMOS UNA FUNCION ASINCRONA\n// DONDE VAMOS A PONER NUESTRA LOGICA EXTRA PARA PROTEGER NUESTRA RUTA\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCx3RUFBd0U7QUFDM0M7QUFFN0Isc0RBQXNEO0FBQ3RELHVEQUF1RDtBQUN2RCxzRUFBc0U7QUFDdEUsaUVBQWVBLDJDQUFJQSxDQUFDLE9BQU1DLE9BRTFCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1Byb3RlZ2UgcnV0YXMgY29uIGF1dGVudGljYWNpw7NuIHVzYW5kbyBsYSBmdW5jacOzbiBhdXRoIGNvbW8gbWlkZGxld2FyZS5cclxuLy8gYm9ycmFtb3MgZWwgYXMgbWlkZGxld2FyZSBxdWUgdGVuaWFcclxuLy8gRVJBIEFTSSBleHBvcnQgeyBhdXRoIGFzIG1pZGRsZXdhcmUgfSBmcm9tIFwiQC9hdXRoXCJcclxuLy8gUEVSTyBTQUxFIEVSUk9SIFBPUlFVRSBORUNFU0lUQSBJTVBPUlRBUiBMTyBTSUdVSUVOVEUgWSBZQU5PIEVYUE9SVEFSXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcclxuXHJcbi8vIEVYUE9SVEFNT1MgUE9SIERFRkVDVE8gTEEgRlVOQ0lPTiBRVUUgRVMgRUwgXCJhdXRoXCIgXHJcbi8vIFkgREVOVFJPIERFIEVTRSBcImF1dGhcIiBDUkVBTU9TIFVOQSBGVU5DSU9OIEFTSU5DUk9OQVxyXG4vLyBET05ERSBWQU1PUyBBIFBPTkVSIE5VRVNUUkEgTE9HSUNBIEVYVFJBIFBBUkEgUFJPVEVHRVIgTlVFU1RSQSBSVVRBXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgoYXN5bmMocmVxKSA9PntcclxuXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJhdXRoIiwicmVxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});