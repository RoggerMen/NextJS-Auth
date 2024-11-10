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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(middleware)/./src/auth.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async (req)=>{\n    const pathname = req.nextUrl.pathname;\n    const session = await (0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)();\n    if (session && (pathname == \"/login\" || pathname == \"/register\")) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL(\"/\", req.url));\n    }\n    if (!session && pathname === \"/protected\") {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.redirect(new URL(\"/login\", req.url));\n    }\n    // ESTO ES PARA QUE CONTINUE TODO BIEN\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.next();\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzZCO0FBQ2M7QUFFM0MsaUVBQWVBLDJDQUFJQSxDQUFDLE9BQU1FO0lBQ3RCLE1BQU1DLFdBQVdELElBQUlFLE9BQU8sQ0FBQ0QsUUFBUTtJQUNyQyxNQUFNRSxVQUFVLE1BQU1MLDJDQUFJQTtJQUcxQixJQUFHSyxXQUFZRixDQUFBQSxZQUFZLFlBQVlBLFlBQVksV0FBVSxHQUFHO1FBQzVELE9BQU9GLHFEQUFZQSxDQUFDSyxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLTCxJQUFJTSxHQUFHO0lBQ3JEO0lBRUEsSUFBRyxDQUFDSCxXQUFXRixhQUFhLGNBQWE7UUFDckMsT0FBT0YscURBQVlBLENBQUNLLFFBQVEsQ0FBQyxJQUFJQyxJQUFJLFVBQVVMLElBQUlNLEdBQUc7SUFDMUQ7SUFFQSxzQ0FBc0M7SUFDdEMsT0FBT1AscURBQVlBLENBQUNRLElBQUk7QUFFNUIsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLnRzP2QxOTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvYXV0aFwiXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXV0aChhc3luYyhyZXEpID0+e1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcmVxLm5leHRVcmwucGF0aG5hbWU7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcblxuXG4gICAgaWYoc2Vzc2lvbiAmJiAocGF0aG5hbWUgPT0gXCIvbG9naW5cIiB8fCBwYXRobmFtZSA9PSBcIi9yZWdpc3RlclwiKSl7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9cIiwgcmVxLnVybCkpO1xuICAgIH1cblxuICAgIGlmKCFzZXNzaW9uICYmIHBhdGhuYW1lID09PSBcIi9wcm90ZWN0ZWRcIil7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTChcIi9sb2dpblwiLCByZXEudXJsKSk7XG4gICAgfVxuXG4gICAgLy8gRVNUTyBFUyBQQVJBIFFVRSBDT05USU5VRSBUT0RPIEJJRU5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcblxufSk7XG4iXSwibmFtZXMiOlsiYXV0aCIsIk5leHRSZXNwb25zZSIsInJlcSIsInBhdGhuYW1lIiwibmV4dFVybCIsInNlc3Npb24iLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});