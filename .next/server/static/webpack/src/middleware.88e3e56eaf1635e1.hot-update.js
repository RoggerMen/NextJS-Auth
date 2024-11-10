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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{\n    const pathname = req.nextUrl.pathname;\n    const session = await (0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)();\n    if (session && (pathname == \"/login\" || pathname == \"/register\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL(\"/\", req.url));\n    }\n    if (!session && pathname === \"/protected\") {\n        //QUIERO QUE NO ME DEJES ENTRAR Y QUE LO REDIRIJAS A UNA NUEVA \"url\" QUE VA A SER \"/login\"\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL(\"/login\", req.url));\n    }\n    // ESTO ES PARA QUE CONTINUE TODO BIEN\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZCO0FBQ2M7QUFFM0MsaUVBQWVBLDJDQUFJQSxDQUFDLE9BQU1FO0lBQ3RCLE1BQU1DLFdBQVdELElBQUlFLE9BQU8sQ0FBQ0QsUUFBUTtJQUNyQyxNQUFNRSxVQUFVLE1BQU1MLDJDQUFJQTtJQUcxQixJQUFHSyxXQUFZRixDQUFBQSxZQUFZLFlBQVlBLFlBQVksV0FBVSxHQUFHO1FBQzVELE9BQU9GLHFEQUFZQSxDQUFDSyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLTCxJQUFJTSxHQUFHO0lBQ3JEO0lBRUEsSUFBRyxDQUFDSCxXQUFXRixhQUFhLGNBQWE7UUFDckMsMEZBQTBGO1FBQzFGLE9BQU9GLHFEQUFZQSxDQUFDSyxRQUFRLENBQUMsSUFBSUMsSUFBSSxVQUFVTCxJQUFJTSxHQUFHO0lBQzFEO0lBRUEsc0NBQXNDO0lBQ3RDLE9BQU9QLHFEQUFZQSxDQUFDUSxJQUFJO0FBRTVCLEVBQUUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS50cz9kMTk5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCJAL2F1dGhcIlxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGgoYXN5bmMocmVxKSA9PntcbiAgICBjb25zdCBwYXRobmFtZSA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lO1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG5cblxuICAgIGlmKHNlc3Npb24gJiYgKHBhdGhuYW1lID09IFwiL2xvZ2luXCIgfHwgcGF0aG5hbWUgPT0gXCIvcmVnaXN0ZXJcIikpe1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoXCIvXCIsIHJlcS51cmwpKTtcbiAgICB9XG5cbiAgICBpZighc2Vzc2lvbiAmJiBwYXRobmFtZSA9PT0gXCIvcHJvdGVjdGVkXCIpe1xuICAgICAgICAvL1FVSUVSTyBRVUUgTk8gTUUgREVKRVMgRU5UUkFSIFkgUVVFIExPIFJFRElSSUpBUyBBIFVOQSBOVUVWQSBcInVybFwiIFFVRSBWQSBBIFNFUiBcIi9sb2dpblwiXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9sb2dpblwiLCByZXEudXJsKSk7XG4gICAgfVxuXG4gICAgLy8gRVNUTyBFUyBQQVJBIFFVRSBDT05USU5VRSBUT0RPIEJJRU5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcblxufSk7XG4iXSwibmFtZXMiOlsiYXV0aCIsIk5leHRSZXNwb25zZSIsInJlcSIsInBhdGhuYW1lIiwibmV4dFVybCIsInNlc3Npb24iLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});