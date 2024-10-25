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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n//Protege rutas con autenticación usando la función auth como middleware.\n// borramos el as middleware que tenia\n// ERA ASI export { auth as middleware } from \"@/auth\"\n// PERO NOS SALDRIA ERROR PORQUE NECESITA IMPORTAR LO SIGUIENTE Y YA NO EXPORTAR\n// Y IMPORTAMOS ESE \"auth\" DE EL ARCHIVO \"auth.ts\" donde sale los metodos signIn, signOut\n\n// EXPORTAMOS POR DEFECTO LA FUNCION QUE ES EL \"auth\" \n// Y DENTRO DE ESE \"auth\" CREAMOS UNA FUNCION ASINCRONA\n// DONDE VAMOS A PONER NUESTRA LOGICA EXTRA PARA PROTEGER NUESTRA RUTA\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5RUFBeUU7QUFDekUsc0NBQXNDO0FBQ3RDLHNEQUFzRDtBQUN0RCxnRkFBZ0Y7QUFDaEYseUZBQXlGO0FBQzVEO0FBRTdCLHNEQUFzRDtBQUN0RCx1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLGlFQUFlQSwyQ0FBSUEsQ0FBQyxPQUFNQyxPQUUxQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Qcm90ZWdlIHJ1dGFzIGNvbiBhdXRlbnRpY2FjacOzbiB1c2FuZG8gbGEgZnVuY2nDs24gYXV0aCBjb21vIG1pZGRsZXdhcmUuXHJcbi8vIGJvcnJhbW9zIGVsIGFzIG1pZGRsZXdhcmUgcXVlIHRlbmlhXHJcbi8vIEVSQSBBU0kgZXhwb3J0IHsgYXV0aCBhcyBtaWRkbGV3YXJlIH0gZnJvbSBcIkAvYXV0aFwiXHJcbi8vIFBFUk8gTk9TIFNBTERSSUEgRVJST1IgUE9SUVVFIE5FQ0VTSVRBIElNUE9SVEFSIExPIFNJR1VJRU5URSBZIFlBIE5PIEVYUE9SVEFSXHJcbi8vIFkgSU1QT1JUQU1PUyBFU0UgXCJhdXRoXCIgREUgRUwgQVJDSElWTyBcImF1dGgudHNcIiBkb25kZSBzYWxlIGxvcyBtZXRvZG9zIHNpZ25Jbiwgc2lnbk91dFxyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvYXV0aFwiXHJcblxyXG4vLyBFWFBPUlRBTU9TIFBPUiBERUZFQ1RPIExBIEZVTkNJT04gUVVFIEVTIEVMIFwiYXV0aFwiIFxyXG4vLyBZIERFTlRSTyBERSBFU0UgXCJhdXRoXCIgQ1JFQU1PUyBVTkEgRlVOQ0lPTiBBU0lOQ1JPTkFcclxuLy8gRE9OREUgVkFNT1MgQSBQT05FUiBOVUVTVFJBIExPR0lDQSBFWFRSQSBQQVJBIFBST1RFR0VSIE5VRVNUUkEgUlVUQVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoKGFzeW5jKHJlcSkgPT57XHJcblxyXG59KVxyXG4iXSwibmFtZXMiOlsiYXV0aCIsInJlcSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});