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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n//Protege rutas con autenticación usando la función auth como middleware.\n// borramos el as middleware que tenia\n// ERA ASI export { auth as middleware } from \"@/auth\"\n// PERO NOS SALDRIA ERROR PORQUE NECESITA IMPORTAR LO SIGUIENTE Y YA NO EXPORTAR\n// Y IMPORTAMOS ESE \"auth\" DE EL ARCHIVO \"auth.ts\" donde sale los metodos signIn, signOut, etc\n\n\n// EXPORTAMOS POR DEFECTO LA FUNCION QUE ES EL \"auth\" \n// Y DENTRO DE ESE \"auth\" CREAMOS UNA FUNCION ASINCRONA\n// DONDE VAMOS A PONER NUESTRA LOGICA EXTRA PARA PROTEGER NUESTRA RUTA\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{\n    // \"pathname\" va almacenar la ruta a la que se esta intentando ingresar\n    // ESO ES LO QUE MANEJA EL \"middleware\"\n    // Y LA OBTENEMOS DE \"req.nextUrl.pathname\"\n    // \"pathname\" LO QUE CONTIENE ES LA RUTA A LA QUE APUNTAMOS A IR O NAVEGAR\n    const pathname = req.nextUrl.pathname;\n    // CON ESTOS VEMOS COMO FUNCIONA OSEA COMO NOS DA LA RUTA\n    //console.log(pathname);\n    // LE COLOCAMOS ESTO PARA QUE TODO FUNCIONE BIEN\n    //return NextResponse.next();\n    // ACA LE DECIMOS QUE SI LA \"session\" EXISTE Y LA RUTA EN LA QUE YO ESTOY ACTUALMENTE ES \"/login\"\n    // O SI LA RUTA EN LA QUE YO ESTOY ES \"/register\"\n    // A ESTO LE COLOCAMOS parentesis\"()\" pathname == \"/login\" || pathname == \"/register\"\n    // PARA QUE REALICE LA VALIDACION EN CONJUNTA \n    // ENTONCES SI ES ALGUNA DE ESAS 2 Y LA \"session\" EXISTE\n    // YO QUIERO QUE ME REDIRIJAS A UNA NUEVA \"url\" QUE VA A SER EL INICIO(/) \n    // Y VAS A TOMAR DE REFERENCIA LA \"url\" QUE VIENE DE LA SOLICITUD DEL async(req)\n    if (session && (pathname == \"/login\" || pathname == \"/register\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect();\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQXlFO0FBQ3pFLHNDQUFzQztBQUN0QyxzREFBc0Q7QUFDdEQsZ0ZBQWdGO0FBQ2hGLDhGQUE4RjtBQUNqRTtBQUNjO0FBRTNDLHNEQUFzRDtBQUN0RCx1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLGlFQUFlQSwyQ0FBSUEsQ0FBQyxPQUFNRTtJQUN0Qix1RUFBdUU7SUFDdkUsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQywwRUFBMEU7SUFDMUUsTUFBTUMsV0FBV0QsSUFBSUUsT0FBTyxDQUFDRCxRQUFRO0lBQ3JDLHlEQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsZ0RBQWdEO0lBQ2hELDZCQUE2QjtJQUU3QixpR0FBaUc7SUFDakcsaURBQWlEO0lBQ2pELHFGQUFxRjtJQUNyRiw4Q0FBOEM7SUFDOUMsd0RBQXdEO0lBQ3hELDBFQUEwRTtJQUMxRSxnRkFBZ0Y7SUFDaEYsSUFBR0UsV0FBWUYsQ0FBQUEsWUFBWSxZQUFZQSxZQUFZLFdBQVUsR0FBRztRQUM1RCxPQUFPRixxREFBWUEsQ0FBQ0ssUUFBUTtJQUNoQztBQUVKLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vUHJvdGVnZSBydXRhcyBjb24gYXV0ZW50aWNhY2nDs24gdXNhbmRvIGxhIGZ1bmNpw7NuIGF1dGggY29tbyBtaWRkbGV3YXJlLlxyXG4vLyBib3JyYW1vcyBlbCBhcyBtaWRkbGV3YXJlIHF1ZSB0ZW5pYVxyXG4vLyBFUkEgQVNJIGV4cG9ydCB7IGF1dGggYXMgbWlkZGxld2FyZSB9IGZyb20gXCJAL2F1dGhcIlxyXG4vLyBQRVJPIE5PUyBTQUxEUklBIEVSUk9SIFBPUlFVRSBORUNFU0lUQSBJTVBPUlRBUiBMTyBTSUdVSUVOVEUgWSBZQSBOTyBFWFBPUlRBUlxyXG4vLyBZIElNUE9SVEFNT1MgRVNFIFwiYXV0aFwiIERFIEVMIEFSQ0hJVk8gXCJhdXRoLnRzXCIgZG9uZGUgc2FsZSBsb3MgbWV0b2RvcyBzaWduSW4sIHNpZ25PdXQsIGV0Y1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvYXV0aFwiXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuLy8gRVhQT1JUQU1PUyBQT1IgREVGRUNUTyBMQSBGVU5DSU9OIFFVRSBFUyBFTCBcImF1dGhcIiBcclxuLy8gWSBERU5UUk8gREUgRVNFIFwiYXV0aFwiIENSRUFNT1MgVU5BIEZVTkNJT04gQVNJTkNST05BXHJcbi8vIERPTkRFIFZBTU9TIEEgUE9ORVIgTlVFU1RSQSBMT0dJQ0EgRVhUUkEgUEFSQSBQUk9URUdFUiBOVUVTVFJBIFJVVEFcclxuZXhwb3J0IGRlZmF1bHQgYXV0aChhc3luYyhyZXEpID0+e1xyXG4gICAgLy8gXCJwYXRobmFtZVwiIHZhIGFsbWFjZW5hciBsYSBydXRhIGEgbGEgcXVlIHNlIGVzdGEgaW50ZW50YW5kbyBpbmdyZXNhclxyXG4gICAgLy8gRVNPIEVTIExPIFFVRSBNQU5FSkEgRUwgXCJtaWRkbGV3YXJlXCJcclxuICAgIC8vIFkgTEEgT0JURU5FTU9TIERFIFwicmVxLm5leHRVcmwucGF0aG5hbWVcIlxyXG4gICAgLy8gXCJwYXRobmFtZVwiIExPIFFVRSBDT05USUVORSBFUyBMQSBSVVRBIEEgTEEgUVVFIEFQVU5UQU1PUyBBIElSIE8gTkFWRUdBUlxyXG4gICAgY29uc3QgcGF0aG5hbWUgPSByZXEubmV4dFVybC5wYXRobmFtZTtcclxuICAgIC8vIENPTiBFU1RPUyBWRU1PUyBDT01PIEZVTkNJT05BIE9TRUEgQ09NTyBOT1MgREEgTEEgUlVUQVxyXG4gICAgLy9jb25zb2xlLmxvZyhwYXRobmFtZSk7XHJcbiAgICAvLyBMRSBDT0xPQ0FNT1MgRVNUTyBQQVJBIFFVRSBUT0RPIEZVTkNJT05FIEJJRU5cclxuICAgIC8vcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcblxyXG4gICAgLy8gQUNBIExFIERFQ0lNT1MgUVVFIFNJIExBIFwic2Vzc2lvblwiIEVYSVNURSBZIExBIFJVVEEgRU4gTEEgUVVFIFlPIEVTVE9ZIEFDVFVBTE1FTlRFIEVTIFwiL2xvZ2luXCJcclxuICAgIC8vIE8gU0kgTEEgUlVUQSBFTiBMQSBRVUUgWU8gRVNUT1kgRVMgXCIvcmVnaXN0ZXJcIlxyXG4gICAgLy8gQSBFU1RPIExFIENPTE9DQU1PUyBwYXJlbnRlc2lzXCIoKVwiIHBhdGhuYW1lID09IFwiL2xvZ2luXCIgfHwgcGF0aG5hbWUgPT0gXCIvcmVnaXN0ZXJcIlxyXG4gICAgLy8gUEFSQSBRVUUgUkVBTElDRSBMQSBWQUxJREFDSU9OIEVOIENPTkpVTlRBIFxyXG4gICAgLy8gRU5UT05DRVMgU0kgRVMgQUxHVU5BIERFIEVTQVMgMiBZIExBIFwic2Vzc2lvblwiIEVYSVNURVxyXG4gICAgLy8gWU8gUVVJRVJPIFFVRSBNRSBSRURJUklKQVMgQSBVTkEgTlVFVkEgXCJ1cmxcIiBRVUUgVkEgQSBTRVIgRUwgSU5JQ0lPKC8pIFxyXG4gICAgLy8gWSBWQVMgQSBUT01BUiBERSBSRUZFUkVOQ0lBIExBIFwidXJsXCIgUVVFIFZJRU5FIERFIExBIFNPTElDSVRVRCBERUwgYXN5bmMocmVxKVxyXG4gICAgaWYoc2Vzc2lvbiAmJiAocGF0aG5hbWUgPT0gXCIvbG9naW5cIiB8fCBwYXRobmFtZSA9PSBcIi9yZWdpc3RlclwiKSl7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdCgpXHJcbiAgICB9XHJcblxyXG59KTtcclxuIl0sIm5hbWVzIjpbImF1dGgiLCJOZXh0UmVzcG9uc2UiLCJyZXEiLCJwYXRobmFtZSIsIm5leHRVcmwiLCJzZXNzaW9uIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});