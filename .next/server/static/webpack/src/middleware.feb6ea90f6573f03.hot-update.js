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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(middleware)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(middleware)/./node_modules/next-auth/providers/credentials.js\");\n//Define la lógica de autenticación (proveedores, funciones signIn, signOut, etc.).\n\n// ESTE ES EL PROVEEDOR QUE NOSOTROS ESTAMOS USANDO \n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    providers: [\n        // AQUI NOSOTROS TENEMOS QUE CREAR EL INICIO DE SESION DE LA AUTENTICACION CON CREDENTIALS\n        // LE VAMOS A ESTAR DICIENDO QUE VAMOS A RECIBIR EL \"email\" y \"contraseña\"\n        // \n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            credentials: {\n                email: {},\n                password: {}\n            }\n        })\n    ]\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsbUZBQW1GO0FBRW5EO0FBQ2hDLG9EQUFvRDtBQUNNO0FBRW5ELE1BQU0sRUFBRUUsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFLEdBQUdMLHFEQUFRQSxDQUFDO0lBRTFETSxXQUFXO1FBQ1gsMEZBQTBGO1FBQzFGLDBFQUEwRTtRQUMxRSxHQUFHO1FBQ0RMLDJFQUFXQSxDQUFDO1lBQ1ZNLGFBQVk7Z0JBQ1pDLE9BQU0sQ0FBQztnQkFDUEMsVUFBVSxDQUFDO1lBQ1g7UUFDRjtLQUNEO0FBQ0gsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXV0aC50cz82MmQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vRGVmaW5lIGxhIGzDs2dpY2EgZGUgYXV0ZW50aWNhY2nDs24gKHByb3ZlZWRvcmVzLCBmdW5jaW9uZXMgc2lnbkluLCBzaWduT3V0LCBldGMuKS5cclxuXHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcclxuLy8gRVNURSBFUyBFTCBQUk9WRUVET1IgUVVFIE5PU09UUk9TIEVTVEFNT1MgVVNBTkRPIFxyXG5pbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcclxuXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgLy8gQVFVSSBOT1NPVFJPUyBURU5FTU9TIFFVRSBDUkVBUiBFTCBJTklDSU8gREUgU0VTSU9OIERFIExBIEFVVEVOVElDQUNJT04gQ09OIENSRURFTlRJQUxTXHJcbiAgLy8gTEUgVkFNT1MgQSBFU1RBUiBESUNJRU5ETyBRVUUgVkFNT1MgQSBSRUNJQklSIEVMIFwiZW1haWxcIiB5IFwiY29udHJhc2XDsWFcIlxyXG4gIC8vIFxyXG4gICAgQ3JlZGVudGlhbHMoe1xyXG4gICAgICBjcmVkZW50aWFsczp7XHJcbiAgICAgIGVtYWlsOnt9LFxyXG4gICAgICBwYXNzd29yZDoge30sXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gIF0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFscyIsImhhbmRsZXJzIiwic2lnbkluIiwic2lnbk91dCIsImF1dGgiLCJwcm92aWRlcnMiLCJjcmVkZW50aWFscyIsImVtYWlsIiwicGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/auth.ts\n");

/***/ }),

/***/ "(middleware)/./node_modules/@auth/core/providers/credentials.js":
/*!**********************************************************!*\
  !*** ./node_modules/@auth/core/providers/credentials.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Credentials)\n/* harmony export */ });\n/**\n * The Credentials provider allows you to handle signing in with arbitrary credentials,\n * such as a username and password, domain, or two factor authentication or hardware device (e.g. YubiKey U2F / FIDO).\n *\n * It is intended to support use cases where you have an existing system you need to authenticate users against.\n *\n * It comes with the constraint that users authenticated in this manner are not persisted in the database,\n * and consequently that the Credentials provider can only be used if JSON Web Tokens are enabled for sessions.\n *\n * :::caution\n * The functionality provided for credentials-based authentication is intentionally limited to discourage the use of passwords due to the inherent security risks of the username-password model.\n *\n * OAuth providers spend significant amounts of money, time, and engineering effort to build:\n *\n * - abuse detection (bot-protection, rate-limiting)\n * - password management (password reset, credential stuffing, rotation)\n * - data security (encryption/salting, strength validation)\n *\n * and much more for authentication solutions. It is likely that your application would benefit from leveraging these battle-tested solutions rather than try to rebuild them from scratch.\n *\n * If you'd still like to build password-based authentication for your application despite these risks, Auth.js gives you full control to do so.\n *\n * :::\n *\n * See the [callbacks documentation](/reference/core#authconfig#callbacks) for more information on how to interact with the token. For example, you can add additional information to the token by returning an object from the `jwt()` callback:\n *\n * ```ts\n * callbacks: {\n *   async jwt({ token, user, account, profile, isNewUser }) {\n *     if (user) {\n *       token.id = user.id\n *     }\n *     return token\n *   }\n * }\n * ```\n *\n * @example\n * ```ts\n * import { Auth } from \"@auth/core\"\n * import Credentials from \"@auth/core/providers/credentials\"\n *\n * const request = new Request(\"https://example.com\")\n * const response = await AuthHandler(request, {\n *   providers: [\n *     Credentials({\n *       credentials: {\n *         username: { label: \"Username\" },\n *         password: {  label: \"Password\", type: \"password\" }\n *       },\n *       async authorize({ request }) {\n *         const response = await fetch(request)\n *         if(!response.ok) return null\n *         return await response.json() ?? null\n *       }\n *     })\n *   ],\n *   secret: \"...\",\n *   trustHost: true,\n * })\n * ```\n * @see [Username/Password Example](https://authjs.dev/getting-started/authentication/credentials)\n */\nfunction Credentials(config) {\n    return {\n        id: \"credentials\",\n        name: \"Credentials\",\n        type: \"credentials\",\n        credentials: {},\n        authorize: () => null,\n        // @ts-expect-error\n        options: config,\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL0BhdXRoL2NvcmUvcHJvdmlkZXJzL2NyZWRlbnRpYWxzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQ0FBMEM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDLHdCQUF3QjtBQUN4QixVQUFVO0FBQ1YsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGF1dGgvY29yZS9wcm92aWRlcnMvY3JlZGVudGlhbHMuanM/ZjcwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBDcmVkZW50aWFscyBwcm92aWRlciBhbGxvd3MgeW91IHRvIGhhbmRsZSBzaWduaW5nIGluIHdpdGggYXJiaXRyYXJ5IGNyZWRlbnRpYWxzLFxuICogc3VjaCBhcyBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZCwgZG9tYWluLCBvciB0d28gZmFjdG9yIGF1dGhlbnRpY2F0aW9uIG9yIGhhcmR3YXJlIGRldmljZSAoZS5nLiBZdWJpS2V5IFUyRiAvIEZJRE8pLlxuICpcbiAqIEl0IGlzIGludGVuZGVkIHRvIHN1cHBvcnQgdXNlIGNhc2VzIHdoZXJlIHlvdSBoYXZlIGFuIGV4aXN0aW5nIHN5c3RlbSB5b3UgbmVlZCB0byBhdXRoZW50aWNhdGUgdXNlcnMgYWdhaW5zdC5cbiAqXG4gKiBJdCBjb21lcyB3aXRoIHRoZSBjb25zdHJhaW50IHRoYXQgdXNlcnMgYXV0aGVudGljYXRlZCBpbiB0aGlzIG1hbm5lciBhcmUgbm90IHBlcnNpc3RlZCBpbiB0aGUgZGF0YWJhc2UsXG4gKiBhbmQgY29uc2VxdWVudGx5IHRoYXQgdGhlIENyZWRlbnRpYWxzIHByb3ZpZGVyIGNhbiBvbmx5IGJlIHVzZWQgaWYgSlNPTiBXZWIgVG9rZW5zIGFyZSBlbmFibGVkIGZvciBzZXNzaW9ucy5cbiAqXG4gKiA6OjpjYXV0aW9uXG4gKiBUaGUgZnVuY3Rpb25hbGl0eSBwcm92aWRlZCBmb3IgY3JlZGVudGlhbHMtYmFzZWQgYXV0aGVudGljYXRpb24gaXMgaW50ZW50aW9uYWxseSBsaW1pdGVkIHRvIGRpc2NvdXJhZ2UgdGhlIHVzZSBvZiBwYXNzd29yZHMgZHVlIHRvIHRoZSBpbmhlcmVudCBzZWN1cml0eSByaXNrcyBvZiB0aGUgdXNlcm5hbWUtcGFzc3dvcmQgbW9kZWwuXG4gKlxuICogT0F1dGggcHJvdmlkZXJzIHNwZW5kIHNpZ25pZmljYW50IGFtb3VudHMgb2YgbW9uZXksIHRpbWUsIGFuZCBlbmdpbmVlcmluZyBlZmZvcnQgdG8gYnVpbGQ6XG4gKlxuICogLSBhYnVzZSBkZXRlY3Rpb24gKGJvdC1wcm90ZWN0aW9uLCByYXRlLWxpbWl0aW5nKVxuICogLSBwYXNzd29yZCBtYW5hZ2VtZW50IChwYXNzd29yZCByZXNldCwgY3JlZGVudGlhbCBzdHVmZmluZywgcm90YXRpb24pXG4gKiAtIGRhdGEgc2VjdXJpdHkgKGVuY3J5cHRpb24vc2FsdGluZywgc3RyZW5ndGggdmFsaWRhdGlvbilcbiAqXG4gKiBhbmQgbXVjaCBtb3JlIGZvciBhdXRoZW50aWNhdGlvbiBzb2x1dGlvbnMuIEl0IGlzIGxpa2VseSB0aGF0IHlvdXIgYXBwbGljYXRpb24gd291bGQgYmVuZWZpdCBmcm9tIGxldmVyYWdpbmcgdGhlc2UgYmF0dGxlLXRlc3RlZCBzb2x1dGlvbnMgcmF0aGVyIHRoYW4gdHJ5IHRvIHJlYnVpbGQgdGhlbSBmcm9tIHNjcmF0Y2guXG4gKlxuICogSWYgeW91J2Qgc3RpbGwgbGlrZSB0byBidWlsZCBwYXNzd29yZC1iYXNlZCBhdXRoZW50aWNhdGlvbiBmb3IgeW91ciBhcHBsaWNhdGlvbiBkZXNwaXRlIHRoZXNlIHJpc2tzLCBBdXRoLmpzIGdpdmVzIHlvdSBmdWxsIGNvbnRyb2wgdG8gZG8gc28uXG4gKlxuICogOjo6XG4gKlxuICogU2VlIHRoZSBbY2FsbGJhY2tzIGRvY3VtZW50YXRpb25dKC9yZWZlcmVuY2UvY29yZSNhdXRoY29uZmlnI2NhbGxiYWNrcykgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gaG93IHRvIGludGVyYWN0IHdpdGggdGhlIHRva2VuLiBGb3IgZXhhbXBsZSwgeW91IGNhbiBhZGQgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiB0byB0aGUgdG9rZW4gYnkgcmV0dXJuaW5nIGFuIG9iamVjdCBmcm9tIHRoZSBgand0KClgIGNhbGxiYWNrOlxuICpcbiAqIGBgYHRzXG4gKiBjYWxsYmFja3M6IHtcbiAqICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XG4gKiAgICAgaWYgKHVzZXIpIHtcbiAqICAgICAgIHRva2VuLmlkID0gdXNlci5pZFxuICogICAgIH1cbiAqICAgICByZXR1cm4gdG9rZW5cbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQGV4YW1wbGVcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBBdXRoIH0gZnJvbSBcIkBhdXRoL2NvcmVcIlxuICogaW1wb3J0IENyZWRlbnRpYWxzIGZyb20gXCJAYXV0aC9jb3JlL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiXG4gKlxuICogY29uc3QgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiKVxuICogY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBBdXRoSGFuZGxlcihyZXF1ZXN0LCB7XG4gKiAgIHByb3ZpZGVyczogW1xuICogICAgIENyZWRlbnRpYWxzKHtcbiAqICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gKiAgICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIlVzZXJuYW1lXCIgfSxcbiAqICAgICAgICAgcGFzc3dvcmQ6IHsgIGxhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiB9XG4gKiAgICAgICB9LFxuICogICAgICAgYXN5bmMgYXV0aG9yaXplKHsgcmVxdWVzdCB9KSB7XG4gKiAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocmVxdWVzdClcbiAqICAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSByZXR1cm4gbnVsbFxuICogICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpID8/IG51bGxcbiAqICAgICAgIH1cbiAqICAgICB9KVxuICogICBdLFxuICogICBzZWNyZXQ6IFwiLi4uXCIsXG4gKiAgIHRydXN0SG9zdDogdHJ1ZSxcbiAqIH0pXG4gKiBgYGBcbiAqIEBzZWUgW1VzZXJuYW1lL1Bhc3N3b3JkIEV4YW1wbGVdKGh0dHBzOi8vYXV0aGpzLmRldi9nZXR0aW5nLXN0YXJ0ZWQvYXV0aGVudGljYXRpb24vY3JlZGVudGlhbHMpXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWRlbnRpYWxzKGNvbmZpZykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBcImNyZWRlbnRpYWxzXCIsXG4gICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcbiAgICAgICAgdHlwZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgICBjcmVkZW50aWFsczoge30sXG4gICAgICAgIGF1dGhvcml6ZTogKCkgPT4gbnVsbCxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBvcHRpb25zOiBjb25maWcsXG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/@auth/core/providers/credentials.js\n");

/***/ }),

/***/ "(middleware)/./node_modules/next-auth/providers/credentials.js":
/*!*********************************************************!*\
  !*** ./node_modules/next-auth/providers/credentials.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _auth_core_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _auth_core_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/core/providers/credentials */ \"(middleware)/./node_modules/@auth/core/providers/credentials.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbm9kZV9tb2R1bGVzL25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscy5qcz8xMjI3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gXCJAYXV0aC9jb3JlL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCJAYXV0aC9jb3JlL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./node_modules/next-auth/providers/credentials.js\n");

/***/ })

});