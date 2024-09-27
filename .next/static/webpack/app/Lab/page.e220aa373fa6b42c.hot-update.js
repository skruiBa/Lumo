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

/***/ "(app-pages-browser)/./app/Lab/page.tsx":
/*!**************************!*\
  !*** ./app/Lab/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_CustomTextArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CustomTextArea */ \"(app-pages-browser)/./app/components/CustomTextArea.tsx\");\n/* harmony import */ var _components_GenerateButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GenerateButton */ \"(app-pages-browser)/./app/components/GenerateButton.tsx\");\n/* harmony import */ var _components_PageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PageCard */ \"(app-pages-browser)/./app/components/PageCard.tsx\");\n/* harmony import */ var _components_CustomSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CustomSlider */ \"(app-pages-browser)/./app/components/CustomSlider.tsx\");\n/* harmony import */ var _components_CustomCheckBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CustomCheckBox */ \"(app-pages-browser)/./app/components/CustomCheckBox.tsx\");\n/* harmony import */ var _components_HoverImage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HoverImage */ \"(app-pages-browser)/./app/components/HoverImage.tsx\");\n/* harmony import */ var _components_ToastPopup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ToastPopup */ \"(app-pages-browser)/./app/components/ToastPopup.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// app/Main/page.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction MainPage() {\n    _s();\n    const [imageUrl, setImageUrl] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"\");\n    const [prompt, setPrompt] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"cat eating a pizza in space, neon green\");\n    const [seed, setSeed] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(42);\n    const [randomizeSeed, setRandomizeSeed] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);\n    const [numInferenceSteps, setNumInferenceSteps] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(4);\n    const [toastMessage, setToastMessage] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(null);\n    const [toastColor, setToastColor] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(\"bg-gray-800\");\n    // Stored images & Load stored images from localStorage on initial load\n    const [storedImages, setStoredImages] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_9__.usePathname)(); // Use the usePathname hook\n    // Update stored images whenever the page is loaded or navigated to\n    const updateStoredImages = ()=>{\n        const images = JSON.parse(localStorage.getItem(\"storedImages\") || \"[]\");\n        console.log(\"Loaded images from localStorage:\", images); // Debugging line\n        setStoredImages(images);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{\n        updateStoredImages(); // Run on mount and on route change\n    }, [\n        pathname\n    ]);\n    const handleGenerateImage = async ()=>{\n        setToastMessage(\"Generating picture, please wait!\"); // Show error message\n        setToastColor(\"bg-yellow-600\");\n        try {\n            const response = await fetch(\"/api/generate-image\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    prompt,\n                    seed,\n                    num_inference_steps: numInferenceSteps,\n                    randomize_seed: randomizeSeed\n                })\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to generate image\");\n            }\n            const result = await response.json();\n            const url = result.data[0].url;\n            const logs = {\n                input: result.requestMessage,\n                results: result.data[0]\n            };\n            localStorage.setItem(\"\".concat(url, \"-logs\"), JSON.stringify(logs));\n            console.log(localStorage.getItem(\"\".concat(url, \"-logs\")));\n            setImageUrl(url);\n            // Update the stored images list and save to localStorage\n            const updatedImages = [\n                url,\n                ...storedImages\n            ].slice(0, 3); // Keep only the latest 3 images at bottom section\n            setStoredImages(updatedImages);\n            localStorage.setItem(\"storedImages\", JSON.stringify(updatedImages));\n            setToastMessage(\"Image generated successfully!\");\n            setToastColor(\"bg-green-600\");\n        } catch (error) {\n            console.error(error);\n            setToastMessage(\"Error generating image. Please try again later.\");\n            setToastColor(\"bg-red-600\");\n        }\n    };\n    const handleCloseToast = ()=>{\n        setToastMessage(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-10 gap-16 justify-center mt-[16px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: \"500px\",\n                height: \"650px\",\n                className: \"bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 flex flex-col gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#fbeadc]/90 text-[20px] leading-loose \",\n                        children: \"Prompt\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomTextArea__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: \"100%\",\n                        height: \"25%\",\n                        value: prompt,\n                        onChange: (e)=>{\n                            var _e_target;\n                            return setPrompt(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#fbeadc]/90 text-[20px] leading-loose \",\n                        children: \"Seed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: seed,\n                        onChange: (_, value)=>setSeed(value),\n                        min: 0,\n                        max: 100\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#fbeadc]/90 text-[20px] leading-loose \",\n                        children: \"Randomize seed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomCheckBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        checked: randomizeSeed,\n                        onChange: (checked)=>setRandomizeSeed(checked)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[#fbeadc]/90 text-[20px] leading-loose \",\n                        children: \"Number of inference steps\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CustomSlider__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        value: numInferenceSteps,\n                        onChange: (_, value)=>setNumInferenceSteps(value),\n                        min: 1,\n                        max: 50\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-auto flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GenerateButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            text: \"Generate\",\n                            onClick: handleGenerateImage\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PageCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: \"500px\",\n                height: \"650px\",\n                className: \"bg-[#D9D9D9]/10 rounded-[16px] shadow-2xl p-5 flex flex-col gap-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow\",\n                        children: imageUrl ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoverImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: imageUrl,\n                            alt: \"Generated Image\",\n                            width: 680,\n                            height: 680,\n                            className: \"object-cover rounded-lg shadow-lg\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                            lineNumber: 137,\n                            columnNumber: 13\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoverImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            src: storedImages[0],\n                            alt: \"Main Placeholder\",\n                            width: 680,\n                            height: 680\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                            lineNumber: 145,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 135,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-1/4 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-center items-center flex flex-row gap-8\",\n                            children: storedImages.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HoverImage__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    src: img,\n                                    alt: \"Stored image \".concat(index + 1),\n                                    width: 130,\n                                    height: 130\n                                }, index, false, {\n                                    fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                                    lineNumber: 152,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                            lineNumber: 150,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            toastMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ToastPopup__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                message: toastMessage,\n                onClose: handleCloseToast,\n                duration: 3000,\n                color: toastColor\n            }, void 0, false, {\n                fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n                lineNumber: 160,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\programming projects\\\\react-app\\\\app\\\\Lab\\\\page.tsx\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(MainPage, \"DUCfMFIuEcj6vcaZ5K+RTB/aKLM=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_9__.usePathname\n    ];\n});\n_c = MainPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainPage);\nvar _c;\n$RefreshReg$(_c, \"MainPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OzRCQUNSRixXQUFVOzs7OztpREFHWiw4REFBQ3hELDhEQUFVQTs0QkFBQ3FFLEtBQUtqRCxZQUFZLENBQUMsRUFBRTs0QkFBRWtELEtBQUk7NEJBQW1CYixPQUFPOzRCQUFLQyxRQUFROzs7Ozs7Ozs7OztrQ0FJakYsOERBQUNIO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDWnBDLGFBQWFtRCxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ3RCLDhEQUFDekUsOERBQVVBO29DQUFhcUUsS0FBS0c7b0NBQUtGLEtBQUssZ0JBQTBCLE9BQVZHLFFBQVE7b0NBQUtoQixPQUFPO29DQUFLQyxRQUFRO21DQUF2RWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU94QnpELDhCQUNDLDhEQUFDZiw4REFBVUE7Z0JBQUN5RSxTQUFTMUQ7Z0JBQWMyRCxTQUFTckI7Z0JBQWtCc0IsVUFBVTtnQkFBTUMsT0FBTzNEOzs7Ozs7Ozs7Ozs7QUFJN0Y7R0FwSlNiOztRQVlVRCx3REFBV0E7OztLQVpyQkM7QUFzSlQsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL0xhYi9wYWdlLnRzeD8zZmZiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC9NYWluL3BhZ2UudHN4XHJcbid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IEN1c3RvbVRleHRBcmVhIGZyb20gJy4uL2NvbXBvbmVudHMvQ3VzdG9tVGV4dEFyZWEnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvR2VuZXJhdGVCdXR0b24nO1xyXG5pbXBvcnQgUGFnZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlQ2FyZCc7XHJcbmltcG9ydCBDdXN0b21TbGlkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21TbGlkZXInO1xyXG5pbXBvcnQgQ3VzdG9tQ2hlY2tib3ggZnJvbSAnLi4vY29tcG9uZW50cy9DdXN0b21DaGVja0JveCc7XHJcbmltcG9ydCBIb3ZlckltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSG92ZXJJbWFnZSc7XHJcbmltcG9ydCBUb2FzdFBvcHVwIGZyb20gJy4uL2NvbXBvbmVudHMvVG9hc3RQb3B1cCc7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XHJcblxyXG5mdW5jdGlvbiBNYWluUGFnZSgpIHtcclxuICBjb25zdCBbaW1hZ2VVcmwsIHNldEltYWdlVXJsXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvbXB0LCBzZXRQcm9tcHRdID0gdXNlU3RhdGUoJ2NhdCBlYXRpbmcgYSBwaXp6YSBpbiBzcGFjZSwgbmVvbiBncmVlbicpO1xyXG4gIGNvbnN0IFtzZWVkLCBzZXRTZWVkXSA9IHVzZVN0YXRlKDQyKTtcclxuICBjb25zdCBbcmFuZG9taXplU2VlZCwgc2V0UmFuZG9taXplU2VlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbbnVtSW5mZXJlbmNlU3RlcHMsIHNldE51bUluZmVyZW5jZVN0ZXBzXSA9IHVzZVN0YXRlKDQpO1xyXG5cclxuICBjb25zdCBbdG9hc3RNZXNzYWdlLCBzZXRUb2FzdE1lc3NhZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3RvYXN0Q29sb3IsIHNldFRvYXN0Q29sb3JdID0gdXNlU3RhdGU8c3RyaW5nPignYmctZ3JheS04MDAnKTtcclxuXHJcbiAgLy8gU3RvcmVkIGltYWdlcyAmIExvYWQgc3RvcmVkIGltYWdlcyBmcm9tIGxvY2FsU3RvcmFnZSBvbiBpbml0aWFsIGxvYWRcclxuICBjb25zdCBbc3RvcmVkSW1hZ2VzLCBzZXRTdG9yZWRJbWFnZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7IC8vIFVzZSB0aGUgdXNlUGF0aG5hbWUgaG9va1xyXG5cclxuICAvLyBVcGRhdGUgc3RvcmVkIGltYWdlcyB3aGVuZXZlciB0aGUgcGFnZSBpcyBsb2FkZWQgb3IgbmF2aWdhdGVkIHRvXHJcbiAgY29uc3QgdXBkYXRlU3RvcmVkSW1hZ2VzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVkSW1hZ2VzJykgfHwgJ1tdJyk7XHJcbiAgICBjb25zb2xlLmxvZygnTG9hZGVkIGltYWdlcyBmcm9tIGxvY2FsU3RvcmFnZTonLCBpbWFnZXMpOyAvLyBEZWJ1Z2dpbmcgbGluZVxyXG4gICAgc2V0U3RvcmVkSW1hZ2VzKGltYWdlcyk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHVwZGF0ZVN0b3JlZEltYWdlcygpOyAvLyBSdW4gb24gbW91bnQgYW5kIG9uIHJvdXRlIGNoYW5nZVxyXG4gIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZUltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VG9hc3RNZXNzYWdlKCdHZW5lcmF0aW5nIHBpY3R1cmUsIHBsZWFzZSB3YWl0IScpOyAvLyBTaG93IGVycm9yIG1lc3NhZ2VcclxuICAgIHNldFRvYXN0Q29sb3IoJ2JnLXllbGxvdy02MDAnKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvZ2VuZXJhdGUtaW1hZ2UnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsIC8vIFVwZGF0ZSB0byBQT1NUIHJlcXVlc3RcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBwcm9tcHQsXHJcbiAgICAgICAgICBzZWVkLFxyXG4gICAgICAgICAgbnVtX2luZmVyZW5jZV9zdGVwczogbnVtSW5mZXJlbmNlU3RlcHMsXHJcbiAgICAgICAgICByYW5kb21pemVfc2VlZDogcmFuZG9taXplU2VlZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGdlbmVyYXRlIGltYWdlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgIGNvbnN0IHVybCA9IHJlc3VsdC5kYXRhWzBdLnVybDtcclxuICAgICAgY29uc3QgbG9ncyA9IHtcclxuICAgICAgICBpbnB1dDogcmVzdWx0LnJlcXVlc3RNZXNzYWdlLFxyXG4gICAgICAgIHJlc3VsdHM6IHJlc3VsdC5kYXRhWzBdXHJcbiAgICAgIH07XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3VybH0tbG9nc2AsIEpTT04uc3RyaW5naWZ5KGxvZ3MpKTtcclxuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7dXJsfS1sb2dzYCkpO1xyXG5cclxuICAgICAgc2V0SW1hZ2VVcmwodXJsKTtcclxuXHJcbiAgICAgIC8vIFVwZGF0ZSB0aGUgc3RvcmVkIGltYWdlcyBsaXN0IGFuZCBzYXZlIHRvIGxvY2FsU3RvcmFnZVxyXG4gICAgICBjb25zdCB1cGRhdGVkSW1hZ2VzID0gW3VybCwgLi4uc3RvcmVkSW1hZ2VzXS5zbGljZSgwLCAzKTsgLy8gS2VlcCBvbmx5IHRoZSBsYXRlc3QgMyBpbWFnZXMgYXQgYm90dG9tIHNlY3Rpb25cclxuICAgICAgc2V0U3RvcmVkSW1hZ2VzKHVwZGF0ZWRJbWFnZXMpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RvcmVkSW1hZ2VzJywgSlNPTi5zdHJpbmdpZnkodXBkYXRlZEltYWdlcykpO1xyXG5cclxuICAgICAgc2V0VG9hc3RNZXNzYWdlKCdJbWFnZSBnZW5lcmF0ZWQgc3VjY2Vzc2Z1bGx5IScpO1xyXG4gICAgICBzZXRUb2FzdENvbG9yKCdiZy1ncmVlbi02MDAnKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRUb2FzdE1lc3NhZ2UoJ0Vycm9yIGdlbmVyYXRpbmcgaW1hZ2UuIFBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIuJyk7XHJcbiAgICAgIHNldFRvYXN0Q29sb3IoJ2JnLXJlZC02MDAnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVRvYXN0ID0gKCkgPT4ge1xyXG4gICAgc2V0VG9hc3RNZXNzYWdlKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbXgtMTAgZ2FwLTE2IGp1c3RpZnktY2VudGVyIG10LVsxNnB4XVwiPlxyXG4gICAgICB7LyogTGVmdCBzaWRlOiBwcm9tcHQgb3B0aW9ucyAqL31cclxuICAgICAgPFBhZ2VDYXJkXHJcbiAgICAgICAgd2lkdGg9XCI1MDBweFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNjUwcHhcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRDlEOUQ5XS8xMCByb3VuZGVkLVsxNnB4XSBzaGFkb3ctMnhsIHAtNSBmbGV4IGZsZXgtY29sIGdhcC0yXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBQcm9tcHQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjZmJlYWRjXS85MCB0ZXh0LVsyMHB4XSBsZWFkaW5nLWxvb3NlIFwiPlByb21wdDwvZGl2PlxyXG4gICAgICAgIDxDdXN0b21UZXh0QXJlYSB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIyNSVcIiB2YWx1ZT17cHJvbXB0fSBvbkNoYW5nZT17KGUpID0+IHNldFByb21wdChlPy50YXJnZXQ/LnZhbHVlKX0gLz5cclxuXHJcbiAgICAgICAgey8qIFNlZWQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjZmJlYWRjXS85MCB0ZXh0LVsyMHB4XSBsZWFkaW5nLWxvb3NlIFwiPlNlZWQ8L2Rpdj5cclxuICAgICAgICA8Q3VzdG9tU2xpZGVyIHZhbHVlPXtzZWVkfSBvbkNoYW5nZT17KF8sIHZhbHVlKSA9PiBzZXRTZWVkKHZhbHVlIGFzIG51bWJlcil9IG1pbj17MH0gbWF4PXsxMDB9IC8+XHJcblxyXG4gICAgICAgIHsvKiBSYW5kb21pemUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjZmJlYWRjXS85MCB0ZXh0LVsyMHB4XSBsZWFkaW5nLWxvb3NlIFwiPlJhbmRvbWl6ZSBzZWVkPC9kaXY+XHJcbiAgICAgICAgPEN1c3RvbUNoZWNrYm94IGNoZWNrZWQ9e3JhbmRvbWl6ZVNlZWR9IG9uQ2hhbmdlPXsoY2hlY2tlZCkgPT4gc2V0UmFuZG9taXplU2VlZChjaGVja2VkKX0gLz5cclxuXHJcbiAgICAgICAgey8qIEluZmVyZW5jZSBTdGVwcyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyNmYmVhZGNdLzkwIHRleHQtWzIwcHhdIGxlYWRpbmctbG9vc2UgXCI+TnVtYmVyIG9mIGluZmVyZW5jZSBzdGVwczwvZGl2PlxyXG4gICAgICAgIDxDdXN0b21TbGlkZXJcclxuICAgICAgICAgIHZhbHVlPXtudW1JbmZlcmVuY2VTdGVwc31cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoXywgdmFsdWUpID0+IHNldE51bUluZmVyZW5jZVN0ZXBzKHZhbHVlIGFzIG51bWJlcil9XHJcbiAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICBtYXg9ezUwfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHsvKiBHZW5lcmF0ZSBCdXR0b24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBmbGV4IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHRleHQ9XCJHZW5lcmF0ZVwiIG9uQ2xpY2s9e2hhbmRsZUdlbmVyYXRlSW1hZ2V9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUGFnZUNhcmQ+XHJcblxyXG4gICAgICB7LyogSW1hZ2UgU2VjdGlvbiAqL31cclxuICAgICAgPFBhZ2VDYXJkXHJcbiAgICAgICAgd2lkdGg9XCI1MDBweFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNjUwcHhcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLVsjRDlEOUQ5XS8xMCByb3VuZGVkLVsxNnB4XSBzaGFkb3ctMnhsIHAtNSBmbGV4IGZsZXgtY29sIGdhcC0yXCJcclxuICAgICAgPlxyXG4gICAgICAgIHsvKiBUb3Agc2VjdGlvbiwgTGFyZ2UgaW1hZ2UgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICAgIHtpbWFnZVVybCA/IChcclxuICAgICAgICAgICAgPEhvdmVySW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltYWdlVXJsfVxyXG4gICAgICAgICAgICAgIGFsdD1cIkdlbmVyYXRlZCBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezY4MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezY4MH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1sZyBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEhvdmVySW1hZ2Ugc3JjPXtzdG9yZWRJbWFnZXNbMF19IGFsdD1cIk1haW4gUGxhY2Vob2xkZXJcIiB3aWR0aD17NjgwfSBoZWlnaHQ9ezY4MH0gLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIEJvdHRvbSBzZWN0aW9uLCBTdG9yZWQgaW1hZ2VzICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xLzQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXggZmxleC1yb3cgZ2FwLThcIj5cclxuICAgICAgICAgICAge3N0b3JlZEltYWdlcy5tYXAoKGltZywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8SG92ZXJJbWFnZSBrZXk9e2luZGV4fSBzcmM9e2ltZ30gYWx0PXtgU3RvcmVkIGltYWdlICR7aW5kZXggKyAxfWB9IHdpZHRoPXsxMzB9IGhlaWdodD17MTMwfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1BhZ2VDYXJkPlxyXG5cclxuICAgICAgey8qIFNob3cgdGhlIFRvYXN0IGlmIHRoZXJlJ3MgYSBtZXNzYWdlICovfVxyXG4gICAgICB7dG9hc3RNZXNzYWdlICYmIChcclxuICAgICAgICA8VG9hc3RQb3B1cCBtZXNzYWdlPXt0b2FzdE1lc3NhZ2V9IG9uQ2xvc2U9e2hhbmRsZUNsb3NlVG9hc3R9IGR1cmF0aW9uPXszMDAwfSBjb2xvcj17dG9hc3RDb2xvcn0gLz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5QYWdlO1xyXG4iXSwibmFtZXMiOlsiQ3VzdG9tVGV4dEFyZWEiLCJCdXR0b24iLCJQYWdlQ2FyZCIsIkN1c3RvbVNsaWRlciIsIkN1c3RvbUNoZWNrYm94IiwiSG92ZXJJbWFnZSIsIlRvYXN0UG9wdXAiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVBhdGhuYW1lIiwiTWFpblBhZ2UiLCJpbWFnZVVybCIsInNldEltYWdlVXJsIiwicHJvbXB0Iiwic2V0UHJvbXB0Iiwic2VlZCIsInNldFNlZWQiLCJyYW5kb21pemVTZWVkIiwic2V0UmFuZG9taXplU2VlZCIsIm51bUluZmVyZW5jZVN0ZXBzIiwic2V0TnVtSW5mZXJlbmNlU3RlcHMiLCJ0b2FzdE1lc3NhZ2UiLCJzZXRUb2FzdE1lc3NhZ2UiLCJ0b2FzdENvbG9yIiwic2V0VG9hc3RDb2xvciIsInN0b3JlZEltYWdlcyIsInNldFN0b3JlZEltYWdlcyIsInBhdGhuYW1lIiwidXBkYXRlU3RvcmVkSW1hZ2VzIiwiaW1hZ2VzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVHZW5lcmF0ZUltYWdlIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5Iiwic3RyaW5naWZ5IiwibnVtX2luZmVyZW5jZV9zdGVwcyIsInJhbmRvbWl6ZV9zZWVkIiwib2siLCJFcnJvciIsInJlc3VsdCIsImpzb24iLCJ1cmwiLCJkYXRhIiwibG9ncyIsImlucHV0IiwicmVxdWVzdE1lc3NhZ2UiLCJyZXN1bHRzIiwic2V0SXRlbSIsInVwZGF0ZWRJbWFnZXMiLCJzbGljZSIsImVycm9yIiwiaGFuZGxlQ2xvc2VUb2FzdCIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJfIiwibWluIiwibWF4IiwiY2hlY2tlZCIsInRleHQiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibWFwIiwiaW1nIiwiaW5kZXgiLCJtZXNzYWdlIiwib25DbG9zZSIsImR1cmF0aW9uIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Lab/page.tsx\n"));

/***/ })

});