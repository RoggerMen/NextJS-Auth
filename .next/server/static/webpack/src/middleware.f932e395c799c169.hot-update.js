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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n//Protege rutas con autenticación usando la función auth como middleware.\n// borramos el as middleware que tenia\n// ERA ASI export { auth as middleware } from \"@/auth\"\n// PERO NOS SALDRIA ERROR PORQUE NECESITA IMPORTAR LO SIGUIENTE Y YA NO EXPORTAR\n// Y IMPORTAMOS ESE \"auth\" DE EL ARCHIVO \"auth.ts\" donde sale los metodos signIn, signOut, etc\n\n\n// EXPORTAMOS POR DEFECTO LA FUNCION QUE ES EL \"auth\" \n// Y DENTRO DE ESE \"auth\" CREAMOS UNA FUNCION ASINCRONA\n// DONDE VAMOS A PONER NUESTRA LOGICA EXTRA PARA PROTEGER NUESTRA RUTA\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{\n    // \"pathname\" va almacenar la ruta a la que se esta intentando ingresar\n    // ESO ES LO QUE MANEJA EL \"middleware\"\n    // Y LA OBTENEMOS DE \"req.nextUrl.pathname\"\n    // \"pathname\" LO QUE CONTIENE ES LA RUTA A LA QUE APUNTAMOS A IR O NAVEGAR\n    const pathname = req.nextUrl.pathname;\n    // CON ESTOS VEMOS COMO FUNCIONA OSEA COMO NOS DA LA RUTA\n    //console.log(pathname);\n    // LE COLOCAMOS ESTO PARA QUE TODO FUNCIONE BIEN\n    //return NextResponse.next();\n    // DECLARAMOS \"session\" Y OBTENEMOS LA \"session\" de \"next auth\"\n    const session = await (0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)();\n    // ESTO ES PARA PROTEGER CUANDO YA EL USUARIO ESTA DENTRO DE LA PAGINA DESPUES DE \"INICIAR SESION\" Y CUANDO EN LA RUTA DEL NAVEGADOR PONGA \"/login\" O \"/register\" YA NO LOS PERMITA IR A ESAS PAGINAS PORQUE YA ESTAN DENTRO AUNTENTICADOS Y SOLO PODRIAN VERLO SI \"CIERRAN SESION\"\n    // ACA LE DECIMOS QUE SI LA \"session\" EXISTE Y LA RUTA EN LA QUE YO ESTOY ACTUALMENTE ES \"/login\"\n    // O SI LA RUTA EN LA QUE YO ESTOY ES \"/register\"\n    // A ESTO LE COLOCAMOS parentesis\"()\" pathname == \"/login\" || pathname == \"/register\"\n    // PARA QUE REALICE LA VALIDACION EN CONJUNTA \n    // ENTONCES SI ES ALGUNA DE ESAS 2 Y LA \"session\" EXISTE\n    // YO QUIERO QUE ME REDIRIJAS A UNA NUEVA \"url\" QUE VA A SER EL INICIO(/) \n    // Y VAS A TOMAR DE REFERENCIA LA \"url\" QUE VIENE DE LA SOLICITUD DEL async(req)\n    if (session && (pathname == \"/login\" || pathname == \"/register\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL(\"/\", req.url));\n    }\n    // ESTO ES PARA PROTEGER LA RUTA PROTEGIDA CUANDO EL USUARIO AUN NO INICIO SESION Y QUIERE VULNERAR COLOCANDO UNA RUTA QUE SOLO USUARIOS AUTENTICADOS PUEDEN ENTRAR A VER EL CONTENIDO DE ESA PAGINA\n    if (!session && pathname === \"\") // ESTO ES PARA QUE CONTINUE TODO BIEN\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQXlFO0FBQ3pFLHNDQUFzQztBQUN0QyxzREFBc0Q7QUFDdEQsZ0ZBQWdGO0FBQ2hGLDhGQUE4RjtBQUNqRTtBQUNjO0FBRTNDLHNEQUFzRDtBQUN0RCx1REFBdUQ7QUFDdkQsc0VBQXNFO0FBQ3RFLGlFQUFlQSwyQ0FBSUEsQ0FBQyxPQUFNRTtJQUN0Qix1RUFBdUU7SUFDdkUsdUNBQXVDO0lBQ3ZDLDJDQUEyQztJQUMzQywwRUFBMEU7SUFDMUUsTUFBTUMsV0FBV0QsSUFBSUUsT0FBTyxDQUFDRCxRQUFRO0lBQ3JDLHlEQUF5RDtJQUN6RCx3QkFBd0I7SUFDeEIsZ0RBQWdEO0lBQ2hELDZCQUE2QjtJQUU3QiwrREFBK0Q7SUFDL0QsTUFBTUUsVUFBVSxNQUFNTCwyQ0FBSUE7SUFFMUIsbVJBQW1SO0lBRW5SLGlHQUFpRztJQUNqRyxpREFBaUQ7SUFDakQscUZBQXFGO0lBQ3JGLDhDQUE4QztJQUM5Qyx3REFBd0Q7SUFDeEQsMEVBQTBFO0lBQzFFLGdGQUFnRjtJQUNoRixJQUFHSyxXQUFZRixDQUFBQSxZQUFZLFlBQVlBLFlBQVksV0FBVSxHQUFHO1FBQzVELE9BQU9GLHFEQUFZQSxDQUFDSyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLTCxJQUFJTSxHQUFHO0lBQ3JEO0lBRUEsb01BQW9NO0lBQ3BNLElBQUcsQ0FBQ0gsV0FBV0YsYUFBYSxJQUU1QixzQ0FBc0M7SUFDdEMsT0FBT0YscURBQVlBLENBQUNRLElBQUk7QUFFNUIsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy9Qcm90ZWdlIHJ1dGFzIGNvbiBhdXRlbnRpY2FjacOzbiB1c2FuZG8gbGEgZnVuY2nDs24gYXV0aCBjb21vIG1pZGRsZXdhcmUuXHJcbi8vIGJvcnJhbW9zIGVsIGFzIG1pZGRsZXdhcmUgcXVlIHRlbmlhXHJcbi8vIEVSQSBBU0kgZXhwb3J0IHsgYXV0aCBhcyBtaWRkbGV3YXJlIH0gZnJvbSBcIkAvYXV0aFwiXHJcbi8vIFBFUk8gTk9TIFNBTERSSUEgRVJST1IgUE9SUVVFIE5FQ0VTSVRBIElNUE9SVEFSIExPIFNJR1VJRU5URSBZIFlBIE5PIEVYUE9SVEFSXHJcbi8vIFkgSU1QT1JUQU1PUyBFU0UgXCJhdXRoXCIgREUgRUwgQVJDSElWTyBcImF1dGgudHNcIiBkb25kZSBzYWxlIGxvcyBtZXRvZG9zIHNpZ25Jbiwgc2lnbk91dCwgZXRjXHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCJcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG4vLyBFWFBPUlRBTU9TIFBPUiBERUZFQ1RPIExBIEZVTkNJT04gUVVFIEVTIEVMIFwiYXV0aFwiIFxyXG4vLyBZIERFTlRSTyBERSBFU0UgXCJhdXRoXCIgQ1JFQU1PUyBVTkEgRlVOQ0lPTiBBU0lOQ1JPTkFcclxuLy8gRE9OREUgVkFNT1MgQSBQT05FUiBOVUVTVFJBIExPR0lDQSBFWFRSQSBQQVJBIFBST1RFR0VSIE5VRVNUUkEgUlVUQVxyXG5leHBvcnQgZGVmYXVsdCBhdXRoKGFzeW5jKHJlcSkgPT57XHJcbiAgICAvLyBcInBhdGhuYW1lXCIgdmEgYWxtYWNlbmFyIGxhIHJ1dGEgYSBsYSBxdWUgc2UgZXN0YSBpbnRlbnRhbmRvIGluZ3Jlc2FyXHJcbiAgICAvLyBFU08gRVMgTE8gUVVFIE1BTkVKQSBFTCBcIm1pZGRsZXdhcmVcIlxyXG4gICAgLy8gWSBMQSBPQlRFTkVNT1MgREUgXCJyZXEubmV4dFVybC5wYXRobmFtZVwiXHJcbiAgICAvLyBcInBhdGhuYW1lXCIgTE8gUVVFIENPTlRJRU5FIEVTIExBIFJVVEEgQSBMQSBRVUUgQVBVTlRBTU9TIEEgSVIgTyBOQVZFR0FSXHJcbiAgICBjb25zdCBwYXRobmFtZSA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lO1xyXG4gICAgLy8gQ09OIEVTVE9TIFZFTU9TIENPTU8gRlVOQ0lPTkEgT1NFQSBDT01PIE5PUyBEQSBMQSBSVVRBXHJcbiAgICAvL2NvbnNvbGUubG9nKHBhdGhuYW1lKTtcclxuICAgIC8vIExFIENPTE9DQU1PUyBFU1RPIFBBUkEgUVVFIFRPRE8gRlVOQ0lPTkUgQklFTlxyXG4gICAgLy9yZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuXHJcbiAgICAvLyBERUNMQVJBTU9TIFwic2Vzc2lvblwiIFkgT0JURU5FTU9TIExBIFwic2Vzc2lvblwiIGRlIFwibmV4dCBhdXRoXCJcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XHJcblxyXG4gICAgLy8gRVNUTyBFUyBQQVJBIFBST1RFR0VSIENVQU5ETyBZQSBFTCBVU1VBUklPIEVTVEEgREVOVFJPIERFIExBIFBBR0lOQSBERVNQVUVTIERFIFwiSU5JQ0lBUiBTRVNJT05cIiBZIENVQU5ETyBFTiBMQSBSVVRBIERFTCBOQVZFR0FET1IgUE9OR0EgXCIvbG9naW5cIiBPIFwiL3JlZ2lzdGVyXCIgWUEgTk8gTE9TIFBFUk1JVEEgSVIgQSBFU0FTIFBBR0lOQVMgUE9SUVVFIFlBIEVTVEFOIERFTlRSTyBBVU5URU5USUNBRE9TIFkgU09MTyBQT0RSSUFOIFZFUkxPIFNJIFwiQ0lFUlJBTiBTRVNJT05cIlxyXG5cclxuICAgIC8vIEFDQSBMRSBERUNJTU9TIFFVRSBTSSBMQSBcInNlc3Npb25cIiBFWElTVEUgWSBMQSBSVVRBIEVOIExBIFFVRSBZTyBFU1RPWSBBQ1RVQUxNRU5URSBFUyBcIi9sb2dpblwiXHJcbiAgICAvLyBPIFNJIExBIFJVVEEgRU4gTEEgUVVFIFlPIEVTVE9ZIEVTIFwiL3JlZ2lzdGVyXCJcclxuICAgIC8vIEEgRVNUTyBMRSBDT0xPQ0FNT1MgcGFyZW50ZXNpc1wiKClcIiBwYXRobmFtZSA9PSBcIi9sb2dpblwiIHx8IHBhdGhuYW1lID09IFwiL3JlZ2lzdGVyXCJcclxuICAgIC8vIFBBUkEgUVVFIFJFQUxJQ0UgTEEgVkFMSURBQ0lPTiBFTiBDT05KVU5UQSBcclxuICAgIC8vIEVOVE9OQ0VTIFNJIEVTIEFMR1VOQSBERSBFU0FTIDIgWSBMQSBcInNlc3Npb25cIiBFWElTVEVcclxuICAgIC8vIFlPIFFVSUVSTyBRVUUgTUUgUkVESVJJSkFTIEEgVU5BIE5VRVZBIFwidXJsXCIgUVVFIFZBIEEgU0VSIEVMIElOSUNJTygvKSBcclxuICAgIC8vIFkgVkFTIEEgVE9NQVIgREUgUkVGRVJFTkNJQSBMQSBcInVybFwiIFFVRSBWSUVORSBERSBMQSBTT0xJQ0lUVUQgREVMIGFzeW5jKHJlcSlcclxuICAgIGlmKHNlc3Npb24gJiYgKHBhdGhuYW1lID09IFwiL2xvZ2luXCIgfHwgcGF0aG5hbWUgPT0gXCIvcmVnaXN0ZXJcIikpe1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9cIiwgcmVxLnVybCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEVTVE8gRVMgUEFSQSBQUk9URUdFUiBMQSBSVVRBIFBST1RFR0lEQSBDVUFORE8gRUwgVVNVQVJJTyBBVU4gTk8gSU5JQ0lPIFNFU0lPTiBZIFFVSUVSRSBWVUxORVJBUiBDT0xPQ0FORE8gVU5BIFJVVEEgUVVFIFNPTE8gVVNVQVJJT1MgQVVURU5USUNBRE9TIFBVRURFTiBFTlRSQVIgQSBWRVIgRUwgQ09OVEVOSURPIERFIEVTQSBQQUdJTkFcclxuICAgIGlmKCFzZXNzaW9uICYmIHBhdGhuYW1lID09PSBcIlwiKVxyXG5cclxuICAgIC8vIEVTVE8gRVMgUEFSQSBRVUUgQ09OVElOVUUgVE9ETyBCSUVOXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiYXV0aCIsIk5leHRSZXNwb25zZSIsInJlcSIsInBhdGhuYW1lIiwibmV4dFVybCIsInNlc3Npb24iLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});