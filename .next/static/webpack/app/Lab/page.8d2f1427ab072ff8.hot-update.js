"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Lab/page",{

/***/ "(app-pages-browser)/./app/components/ExpandedLogs.tsx":
/*!*****************************************!*\
  !*** ./app/components/ExpandedLogs.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n// components/ExpandedLogs.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nconst ExpandedLogs = (param)=>{\n    let { isOpen, imageUrl, onClose } = param;\n    if (!isOpen) return null;\n    const logsString = localStorage.getItem(\"\".concat(imageUrl, \"-logs\"));\n    let logs;\n    if (logsString !== null) {\n        try {\n            logs = JSON.parse(logsString);\n        } catch (error) {\n            console.error(\"Error parsing logs: \", error);\n            logs = null;\n        }\n    } else {\n        logs = null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur\",\n        onClick: onClose,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 w-[800px] h-[800px]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-[#ffffff]\",\n                        children: logs ? JSON.stringify(logs, null, 2) : \"No logs found\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\components\\\\ExpandedLogs.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\components\\\\ExpandedLogs.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"absolute top-4 right-4 text-white text-2xl\",\n                    onClick: onClose,\n                    \"aria-label\": \"Close\",\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\components\\\\ExpandedLogs.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\components\\\\ExpandedLogs.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\components\\\\ExpandedLogs.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ExpandedLogs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExpandedLogs);\nvar _c;\n$RefreshReg$(_c, \"ExpandedLogs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0V4cGFuZGVkTG9ncy50c3giLCJtYXBwaW5ncyI6Ijs7QUFBQSw4QkFBOEI7O0FBWTlCLE1BQU1BLGVBQTRDO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUM5RSxJQUFJLENBQUNGLFFBQVEsT0FBTztJQUVwQixNQUFNRyxhQUFhQyxhQUFhQyxPQUFPLENBQUMsR0FBWSxPQUFUSixVQUFTO0lBQ3BELElBQUlLO0lBQ0osSUFBSUgsZUFBZSxNQUFNO1FBQ3ZCLElBQUk7WUFDRkcsT0FBT0MsS0FBS0MsS0FBSyxDQUFDTDtRQUNwQixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7WUFDdENILE9BQU87UUFDVDtJQUNGLE9BQU87UUFDTEEsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVU7UUFDVkMsU0FBU1g7a0JBRVQsNEVBQUNTO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0U7d0JBQUVGLFdBQVU7a0NBQWtCTixPQUFPQyxLQUFLUSxTQUFTLENBQUNULE1BQU0sTUFBTSxLQUFLOzs7Ozs7Ozs7Ozs4QkFJeEUsOERBQUNVO29CQUFPSixXQUFVO29CQUE2Q0MsU0FBU1g7b0JBQVNlLGNBQVc7OEJBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTVHO0tBakNNbEI7QUFtQ04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvRXhwYW5kZWRMb2dzLnRzeD8wMGQ0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvRXhwYW5kZWRMb2dzLnRzeFxyXG4ndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbnRlcmZhY2UgRXhwYW5kZWRMb2dzUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBpbWFnZVVybDogc3RyaW5nO1xyXG5cclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5jb25zdCBFeHBhbmRlZExvZ3M6IFJlYWN0LkZDPEV4cGFuZGVkTG9nc1Byb3BzPiA9ICh7IGlzT3BlbiwgaW1hZ2VVcmwsIG9uQ2xvc2UgfSkgPT4ge1xyXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgY29uc3QgbG9nc1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke2ltYWdlVXJsfS1sb2dzYCk7XHJcbiAgbGV0IGxvZ3M7XHJcbiAgaWYgKGxvZ3NTdHJpbmcgIT09IG51bGwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGxvZ3MgPSBKU09OLnBhcnNlKGxvZ3NTdHJpbmcpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBsb2dzOiAnLCBlcnJvcik7XHJcbiAgICAgIGxvZ3MgPSBudWxsO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBsb2dzID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ibGFjayBiZy1vcGFjaXR5LTUwIGJhY2tkcm9wLWZpbHRlciBiYWNrZHJvcC1ibHVyXCJcclxuICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjRDlEOUQ5XS8xMCByb3VuZGVkLVsxNnB4XSBzaGFkb3ctMnhsIHAtNSB3LVs4MDBweF0gaC1bODAwcHhdXCI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsjZmZmZmZmXVwiPntsb2dzID8gSlNPTi5zdHJpbmdpZnkobG9ncywgbnVsbCwgMikgOiAnTm8gbG9ncyBmb3VuZCd9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQ2xvc2UgYnV0dG9uICovfVxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgcmlnaHQtNCB0ZXh0LXdoaXRlIHRleHQtMnhsXCIgb25DbGljaz17b25DbG9zZX0gYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV4cGFuZGVkTG9ncztcclxuIl0sIm5hbWVzIjpbIkV4cGFuZGVkTG9ncyIsImlzT3BlbiIsImltYWdlVXJsIiwib25DbG9zZSIsImxvZ3NTdHJpbmciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG9ncyIsIkpTT04iLCJwYXJzZSIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwIiwic3RyaW5naWZ5IiwiYnV0dG9uIiwiYXJpYS1sYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/ExpandedLogs.tsx\n"));

/***/ })

});