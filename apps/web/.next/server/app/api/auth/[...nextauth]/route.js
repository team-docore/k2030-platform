/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_dohyeonkim_k2030_platform_apps_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/Users/dohyeonkim/k2030-platform/apps/web/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _Users_dohyeonkim_k2030_platform_apps_web_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTUuMy4xX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xX19yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1hcHAtbG9hZGVyL2luZGV4LmpzP25hbWU9YXBwJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZS50cyZhcHBEaXI9JTJGVXNlcnMlMkZkb2h5ZW9ua2ltJTJGazIwMzAtcGxhdGZvcm0lMkZhcHBzJTJGd2ViJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmRvaHllb25raW0lMkZrMjAzMC1wbGF0Zm9ybSUyRmFwcHMlMkZ3ZWImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZG9oeWVvbmtpbS9rMjAzMC1wbGF0Zm9ybS9hcHBzL3dlYi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZG9oeWVvbmtpbS9rMjAzMC1wbGF0Zm9ybS9hcHBzL3dlYi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/../../../node_modules/.pnpm/next-auth@4.24.11_next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUlRO0FBRXpDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTyIsInNvdXJjZXMiOlsiL1VzZXJzL2RvaHllb25raW0vazIwMzAtcGxhdGZvcm0vYXBwcy93ZWIvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IEpXVCB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07ICJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/../../../node_modules/.pnpm/next-auth@4.24.11_next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _supabaseClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supabaseClient */ \"(rsc)/./lib/supabaseClient.ts\");\n\n\nconst authOptions = {\n    debug: true,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"select_account\",\n                    access_type: \"offline\",\n                    response_type: \"code\",\n                    scope: \"openid email profile\"\n                }\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/auth/signin\",\n        error: \"/auth/error\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: 'lax',\n                path: '/',\n                secure: \"development\" === 'production'\n            }\n        },\n        callbackUrl: {\n            name: `next-auth.callback-url`,\n            options: {\n                sameSite: 'lax',\n                path: '/',\n                secure: \"development\" === 'production'\n            }\n        },\n        csrfToken: {\n            name: 'next-auth.csrf-token',\n            options: {\n                httpOnly: true,\n                sameSite: 'lax',\n                path: '/',\n                secure: \"development\" === 'production'\n            }\n        }\n    },\n    callbacks: {\n        async signIn ({ user }) {\n            if (user?.email) {\n                const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.from('users').select('status').eq('email', user.email).single();\n                if (data) {\n                    if (data.status === '정지') {\n                        return `/auth/error?error=${encodeURIComponent('회원정지 중입니다. 관리자에게 문의하세요.')}`;\n                    }\n                    if (data.status === '탈퇴') {\n                        return `/auth/error?error=${encodeURIComponent('탈퇴회원입니다. 동일 이메일로 재가입 불가합니다.')}`;\n                    }\n                }\n                await _supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.from('users').upsert([\n                    {\n                        email: user.email,\n                        name: user.name\n                    }\n                ], {\n                    onConflict: 'email'\n                });\n            }\n            return true;\n        },\n        async session ({ session, token }) {\n            console.log('🔍 [auth.ts] session callback 시작:', {\n                session,\n                token\n            });\n            if (session?.user?.email) {\n                const { data, error } = await _supabaseClient__WEBPACK_IMPORTED_MODULE_1__.supabase.from('users').select('is_admin').eq('email', session.user.email).single();\n                console.log('🔍 [auth.ts] supabase 조회 결과:', {\n                    data,\n                    error\n                });\n                if (data) {\n                    session.user = {\n                        ...session.user,\n                        isAdmin: data.is_admin\n                    };\n                    console.log('🔍 [auth.ts] 세션 업데이트 후:', session);\n                }\n            }\n            return session;\n        },\n        async jwt ({ token, account }) {\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        }\n    },\n    events: {\n        async signIn (message) {\n            console.log('🔍 [NextAuth] signIn event:', message);\n        },\n        async signOut (message) {\n            console.log('🔍 [NextAuth] signOut event:', message);\n        },\n        async createUser (message) {\n            console.log('🔍 [NextAuth] createUser event:', message);\n        },\n        async updateUser (message) {\n            console.log('🔍 [NextAuth] updateUser event:', message);\n        },\n        async linkAccount (message) {\n            console.log('🔍 [NextAuth] linkAccount event:', message);\n        },\n        async session (message) {\n            console.log('🔍 [NextAuth] session event:', message);\n        }\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0Q7QUFHWjtBQUVyQyxNQUFNRSxjQUErQjtJQUMxQ0MsT0FBTztJQUNQQyxXQUFXO1FBQ1RKLHNFQUFjQSxDQUFDO1lBQ2JLLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsZUFBZTtnQkFDYkMsUUFBUTtvQkFDTkMsUUFBUTtvQkFDUkMsYUFBYTtvQkFDYkMsZUFBZTtvQkFDZkMsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7S0FDRDtJQUNEQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFNBQVM7UUFDUEMsVUFBVTtRQUNWQyxRQUFRLEtBQUssS0FBSyxLQUFLO0lBQ3pCO0lBQ0FDLFNBQVM7UUFDUEMsY0FBYztZQUNaQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDL0JDLFNBQVM7Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVF4QixrQkFBeUI7WUFDbkM7UUFDRjtRQUNBeUIsYUFBYTtZQUNYTixNQUFNLENBQUMsc0JBQXNCLENBQUM7WUFDOUJDLFNBQVM7Z0JBQ1BFLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVF4QixrQkFBeUI7WUFDbkM7UUFDRjtRQUNBMEIsV0FBVztZQUNUUCxNQUFNO1lBQ05DLFNBQVM7Z0JBQ1BDLFVBQVU7Z0JBQ1ZDLFVBQVU7Z0JBQ1ZDLE1BQU07Z0JBQ05DLFFBQVF4QixrQkFBeUI7WUFDbkM7UUFDRjtJQUNGO0lBQ0EyQixXQUFXO1FBQ1QsTUFBTWYsUUFBTyxFQUFFZ0IsSUFBSSxFQUFpQjtZQUNsQyxJQUFJQSxNQUFNQyxPQUFPO2dCQUNmLE1BQU0sRUFBRUMsSUFBSSxFQUFFakIsS0FBSyxFQUFFLEdBQUcsTUFBTWxCLHFEQUFRQSxDQUNuQ29DLElBQUksQ0FBQyxTQUNMQyxNQUFNLENBQUMsVUFDUEMsRUFBRSxDQUFDLFNBQVNMLEtBQUtDLEtBQUssRUFDdEJLLE1BQU07Z0JBQ1QsSUFBSUosTUFBTTtvQkFDUixJQUFJQSxLQUFLSyxNQUFNLEtBQUssTUFBTTt3QkFDeEIsT0FBTyxDQUFDLGtCQUFrQixFQUFFQyxtQkFBbUIsNEJBQTRCO29CQUM3RTtvQkFDQSxJQUFJTixLQUFLSyxNQUFNLEtBQUssTUFBTTt3QkFDeEIsT0FBTyxDQUFDLGtCQUFrQixFQUFFQyxtQkFBbUIsZ0NBQWdDO29CQUNqRjtnQkFDRjtnQkFDQSxNQUFNekMscURBQVFBLENBQ1hvQyxJQUFJLENBQUMsU0FDTE0sTUFBTSxDQUFDO29CQUNOO3dCQUNFUixPQUFPRCxLQUFLQyxLQUFLO3dCQUNqQlYsTUFBTVMsS0FBS1QsSUFBSTtvQkFDakI7aUJBQ0QsRUFBRTtvQkFBRW1CLFlBQVk7Z0JBQVE7WUFDN0I7WUFDQSxPQUFPO1FBQ1Q7UUFDQSxNQUFNeEIsU0FBUSxFQUFFQSxPQUFPLEVBQUV5QixLQUFLLEVBQW9DO1lBQ2hFQyxRQUFRQyxHQUFHLENBQUMscUNBQXFDO2dCQUFFM0I7Z0JBQVN5QjtZQUFNO1lBRWxFLElBQUl6QixTQUFTYyxNQUFNQyxPQUFPO2dCQUN4QixNQUFNLEVBQUVDLElBQUksRUFBRWpCLEtBQUssRUFBRSxHQUFHLE1BQU1sQixxREFBUUEsQ0FDbkNvQyxJQUFJLENBQUMsU0FDTEMsTUFBTSxDQUFDLFlBQ1BDLEVBQUUsQ0FBQyxTQUFTbkIsUUFBUWMsSUFBSSxDQUFDQyxLQUFLLEVBQzlCSyxNQUFNO2dCQUVUTSxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDO29CQUFFWDtvQkFBTWpCO2dCQUFNO2dCQUUxRCxJQUFJaUIsTUFBTTtvQkFDUmhCLFFBQVFjLElBQUksR0FBRzt3QkFDYixHQUFHZCxRQUFRYyxJQUFJO3dCQUNmYyxTQUFTWixLQUFLYSxRQUFRO29CQUN4QjtvQkFDQUgsUUFBUUMsR0FBRyxDQUFDLDJCQUEyQjNCO2dCQUN6QztZQUNGO1lBQ0EsT0FBT0E7UUFDVDtRQUNBLE1BQU04QixLQUFJLEVBQUVMLEtBQUssRUFBRU0sT0FBTyxFQUEyQztZQUNuRSxJQUFJQSxTQUFTO2dCQUNYTixNQUFNTyxXQUFXLEdBQUdELFFBQVFFLFlBQVk7WUFDMUM7WUFDQSxPQUFPUjtRQUNUO0lBQ0Y7SUFDQVMsUUFBUTtRQUNOLE1BQU1wQyxRQUFPcUMsT0FBTztZQUFJVCxRQUFRQyxHQUFHLENBQUMsK0JBQStCUTtRQUFVO1FBQzdFLE1BQU1DLFNBQVFELE9BQU87WUFBSVQsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ1E7UUFBVTtRQUMvRSxNQUFNRSxZQUFXRixPQUFPO1lBQUlULFFBQVFDLEdBQUcsQ0FBQyxtQ0FBbUNRO1FBQVU7UUFDckYsTUFBTUcsWUFBV0gsT0FBTztZQUFJVCxRQUFRQyxHQUFHLENBQUMsbUNBQW1DUTtRQUFVO1FBQ3JGLE1BQU1JLGFBQVlKLE9BQU87WUFBSVQsUUFBUUMsR0FBRyxDQUFDLG9DQUFvQ1E7UUFBVTtRQUN2RixNQUFNbkMsU0FBUW1DLE9BQU87WUFBSVQsUUFBUUMsR0FBRyxDQUFDLGdDQUFnQ1E7UUFBVTtJQUNqRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2h5ZW9ua2ltL2syMDMwLXBsYXRmb3JtL2FwcHMvd2ViL2xpYi9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBdXRoT3B0aW9ucyB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCB7IEpXVCB9IGZyb20gXCJuZXh0LWF1dGgvand0XCI7XG5pbXBvcnQgeyBTZXNzaW9uLCBBY2NvdW50IH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuL3N1cGFiYXNlQ2xpZW50JztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGRlYnVnOiB0cnVlLFxuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcInNlbGVjdF9hY2NvdW50XCIsXG4gICAgICAgICAgYWNjZXNzX3R5cGU6IFwib2ZmbGluZVwiLFxuICAgICAgICAgIHJlc3BvbnNlX3R5cGU6IFwiY29kZVwiLFxuICAgICAgICAgIHNjb3BlOiBcIm9wZW5pZCBlbWFpbCBwcm9maWxlXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pLFxuICBdLFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvYXV0aC9zaWduaW5cIixcbiAgICBlcnJvcjogXCIvYXV0aC9lcnJvclwiLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xuICB9LFxuICBjb29raWVzOiB7XG4gICAgc2Vzc2lvblRva2VuOiB7XG4gICAgICBuYW1lOiBgbmV4dC1hdXRoLnNlc3Npb24tdG9rZW5gLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY2FsbGJhY2tVcmw6IHtcbiAgICAgIG5hbWU6IGBuZXh0LWF1dGguY2FsbGJhY2stdXJsYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY3NyZlRva2VuOiB7XG4gICAgICBuYW1lOiAnbmV4dC1hdXRoLmNzcmYtdG9rZW4nLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciB9OiB7IHVzZXI6IGFueSB9KSB7XG4gICAgICBpZiAodXNlcj8uZW1haWwpIHtcbiAgICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAuZnJvbSgndXNlcnMnKVxuICAgICAgICAgIC5zZWxlY3QoJ3N0YXR1cycpXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIHVzZXIuZW1haWwpXG4gICAgICAgICAgLnNpbmdsZSgpO1xuICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgIGlmIChkYXRhLnN0YXR1cyA9PT0gJ+ygleyngCcpIHtcbiAgICAgICAgICAgIHJldHVybiBgL2F1dGgvZXJyb3I/ZXJyb3I9JHtlbmNvZGVVUklDb21wb25lbnQoJ+2ajOybkOygleyngCDspJHsnoXri4jri6QuIOq0gOumrOyekOyXkOqyjCDrrLjsnZjtlZjshLjsmpQuJyl9YDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAn7YOI7Ye0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGAvYXV0aC9lcnJvcj9lcnJvcj0ke2VuY29kZVVSSUNvbXBvbmVudCgn7YOI7Ye07ZqM7JuQ7J6F64uI64ukLiDrj5nsnbwg7J2066mU7J2866GcIOyerOqwgOyehSDrtojqsIDtlanri4jri6QuJyl9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgc3VwYWJhc2VcbiAgICAgICAgICAuZnJvbSgndXNlcnMnKVxuICAgICAgICAgIC51cHNlcnQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sIHsgb25Db25mbGljdDogJ2VtYWlsJyB9KTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH06IHsgc2Vzc2lvbjogU2Vzc2lvbjsgdG9rZW46IEpXVCB9KSB7XG4gICAgICBjb25zb2xlLmxvZygn8J+UjSBbYXV0aC50c10gc2Vzc2lvbiBjYWxsYmFjayDsi5zsnpE6JywgeyBzZXNzaW9uLCB0b2tlbiB9KTtcbiAgICAgIFxuICAgICAgaWYgKHNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlXG4gICAgICAgICAgLmZyb20oJ3VzZXJzJylcbiAgICAgICAgICAuc2VsZWN0KCdpc19hZG1pbicpXG4gICAgICAgICAgLmVxKCdlbWFpbCcsIHNlc3Npb24udXNlci5lbWFpbClcbiAgICAgICAgICAuc2luZ2xlKCk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZygn8J+UjSBbYXV0aC50c10gc3VwYWJhc2Ug7KGw7ZqMIOqysOqzvDonLCB7IGRhdGEsIGVycm9yIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgICAgICAuLi5zZXNzaW9uLnVzZXIsXG4gICAgICAgICAgICBpc0FkbWluOiBkYXRhLmlzX2FkbWluXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb25zb2xlLmxvZygn8J+UjSBbYXV0aC50c10g7IS47IWYIOyXheuNsOydtO2KuCDtm4Q6Jywgc2Vzc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIGFjY291bnQgfTogeyB0b2tlbjogSldUOyBhY2NvdW50OiBBY2NvdW50IHwgbnVsbCB9KSB7XG4gICAgICBpZiAoYWNjb3VudCkge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzX3Rva2VuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gIH0sXG4gIGV2ZW50czoge1xuICAgIGFzeW5jIHNpZ25JbihtZXNzYWdlKSB7IGNvbnNvbGUubG9nKCfwn5SNIFtOZXh0QXV0aF0gc2lnbkluIGV2ZW50OicsIG1lc3NhZ2UpOyB9LFxuICAgIGFzeW5jIHNpZ25PdXQobWVzc2FnZSkgeyBjb25zb2xlLmxvZygn8J+UjSBbTmV4dEF1dGhdIHNpZ25PdXQgZXZlbnQ6JywgbWVzc2FnZSk7IH0sXG4gICAgYXN5bmMgY3JlYXRlVXNlcihtZXNzYWdlKSB7IGNvbnNvbGUubG9nKCfwn5SNIFtOZXh0QXV0aF0gY3JlYXRlVXNlciBldmVudDonLCBtZXNzYWdlKTsgfSxcbiAgICBhc3luYyB1cGRhdGVVc2VyKG1lc3NhZ2UpIHsgY29uc29sZS5sb2coJ/CflI0gW05leHRBdXRoXSB1cGRhdGVVc2VyIGV2ZW50OicsIG1lc3NhZ2UpOyB9LFxuICAgIGFzeW5jIGxpbmtBY2NvdW50KG1lc3NhZ2UpIHsgY29uc29sZS5sb2coJ/CflI0gW05leHRBdXRoXSBsaW5rQWNjb3VudCBldmVudDonLCBtZXNzYWdlKTsgfSxcbiAgICBhc3luYyBzZXNzaW9uKG1lc3NhZ2UpIHsgY29uc29sZS5sb2coJ/CflI0gW05leHRBdXRoXSBzZXNzaW9uIGV2ZW50OicsIG1lc3NhZ2UpOyB9LFxuICB9LFxufTsgIl0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwic3VwYWJhc2UiLCJhdXRoT3B0aW9ucyIsImRlYnVnIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiYXV0aG9yaXphdGlvbiIsInBhcmFtcyIsInByb21wdCIsImFjY2Vzc190eXBlIiwicmVzcG9uc2VfdHlwZSIsInNjb3BlIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsIm1heEFnZSIsImNvb2tpZXMiLCJzZXNzaW9uVG9rZW4iLCJuYW1lIiwib3B0aW9ucyIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXRoIiwic2VjdXJlIiwiY2FsbGJhY2tVcmwiLCJjc3JmVG9rZW4iLCJjYWxsYmFja3MiLCJ1c2VyIiwiZW1haWwiLCJkYXRhIiwiZnJvbSIsInNlbGVjdCIsImVxIiwic2luZ2xlIiwic3RhdHVzIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXBzZXJ0Iiwib25Db25mbGljdCIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImlzQWRtaW4iLCJpc19hZG1pbiIsImp3dCIsImFjY291bnQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsImV2ZW50cyIsIm1lc3NhZ2UiLCJzaWduT3V0IiwiY3JlYXRlVXNlciIsInVwZGF0ZVVzZXIiLCJsaW5rQWNjb3VudCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabaseClient.ts":
/*!*******************************!*\
  !*** ./lib/supabaseClient.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   supabase: () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"(rsc)/../../../node_modules/.pnpm/@supabase+supabase-js@2.49.4/node_modules/@supabase/supabase-js/dist/module/index.js\");\n\nconst supabaseUrl = \"https://ixqsfzuwqnsujphdwvjo.supabase.co\";\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4cXNmenV3cW5zdWpwaGR3dmpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYzNzcyMTMsImV4cCI6MjA2MTk1MzIxM30.qmLjugw1dS0IyZT5u49Ae6FLOBROXDZqfQyDYtGxdEA\";\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2VDbGllbnQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUQ7QUFFckQsTUFBTUMsY0FBY0MsMENBQW9DO0FBQ3hELE1BQU1HLGtCQUFrQkgsa05BQXlDO0FBRTFELE1BQU1LLFdBQVdQLG1FQUFZQSxDQUFDQyxhQUFhSSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy9kb2h5ZW9ua2ltL2syMDMwLXBsYXRmb3JtL2FwcHMvd2ViL2xpYi9zdXBhYmFzZUNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xuXG5jb25zdCBzdXBhYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCE7XG5jb25zdCBzdXBhYmFzZUFub25LZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSE7XG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KTsgIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabaseClient.ts\n");

/***/ }),

/***/ "(ssr)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \****************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/next-auth@4.24.11_next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react-dom@18.3.1_react@18.3.1__react@18.3.1","vendor-chunks/@babel+runtime@7.27.1","vendor-chunks/tr46@0.0.3","vendor-chunks/@supabase+auth-js@2.69.1","vendor-chunks/@supabase+realtime-js@2.11.2","vendor-chunks/@supabase+postgrest-js@1.19.4","vendor-chunks/@supabase+node-fetch@2.6.15","vendor-chunks/whatwg-url@5.0.0","vendor-chunks/@supabase+storage-js@2.7.1","vendor-chunks/@supabase+supabase-js@2.49.4","vendor-chunks/@supabase+functions-js@2.4.4","vendor-chunks/webidl-conversions@3.0.1","vendor-chunks/jose@4.15.9","vendor-chunks/openid-client@5.7.1","vendor-chunks/oauth@0.9.15","vendor-chunks/object-hash@2.2.0","vendor-chunks/preact@10.26.6","vendor-chunks/uuid@8.3.2","vendor-chunks/yallist@4.0.0","vendor-chunks/preact-render-to-string@5.2.6_preact@10.26.6","vendor-chunks/lru-cache@6.0.0","vendor-chunks/cookie@0.7.2","vendor-chunks/oidc-token-hash@5.1.0","vendor-chunks/@panva+hkdf@1.2.1"], () => (__webpack_exec__("(rsc)/../../../node_modules/.pnpm/next@15.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fdohyeonkim%2Fk2030-platform%2Fapps%2Fweb&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();