"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _components_header_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/header-one */ "./components/header-one.js");
/* harmony import */ var _components_banner_one__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/banner-one */ "./components/banner-one.js");
/* harmony import */ var _components_pop_destinations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/pop-destinations */ "./components/pop-destinations.js");
/* harmony import */ var _components_subscribe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/subscribe */ "./components/subscribe.js");
/* harmony import */ var _components_travel_tips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/travel-tips */ "./components/travel-tips.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Shanfar\\Documents\\travelplanner\\pages\\index.js",
    _this = undefined;

// import React from "react";










var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_0__.default, {
      pageTitle: "Airvays",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_header_one__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_banner_one__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_pop_destinations__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_subscribe__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_travel_tips__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjc2NzQ1MzQzZjQ4MGNkMGRkMzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQSxJQUFNTyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsdURBQUQ7QUFBUSxlQUFTLEVBQUMsU0FBbEI7QUFBQSw4QkFDRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFJRSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsZUFLRSw4REFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFPRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFhRCxDQWREOztLQUFNQTtBQWdCTiwrREFBZUEsSUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IEhlYWRlck9uZSBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXItb25lXCI7XG5pbXBvcnQgQmFubmVyT25lIGZyb20gXCIuLi9jb21wb25lbnRzL2Jhbm5lci1vbmVcIjtcbmltcG9ydCBQb3BEZXN0aW5hdGlvbnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcG9wLWRlc3RpbmF0aW9uc1wiO1xuaW1wb3J0IFN1YnNjcmliZSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdWJzY3JpYmVcIjtcbmltcG9ydCBUcmF2ZWxUaXBzIGZyb20gXCIuLi9jb21wb25lbnRzL3RyYXZlbC10aXBzXCI7XG5cbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCI7XG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBwYWdlVGl0bGU9XCJBaXJ2YXlzXCI+XG4gICAgICAgIDxIZWFkZXJPbmUgLz5cbiAgICAgICAgPEJhbm5lck9uZSAvPlxuICAgICAgICA8UG9wRGVzdGluYXRpb25zIC8+XG4gICAgICAgIDxTdWJzY3JpYmUgLz5cbiAgICAgICAgPFRyYXZlbFRpcHMgLz5cblxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZGVyT25lIiwiQmFubmVyT25lIiwiUG9wRGVzdGluYXRpb25zIiwiU3Vic2NyaWJlIiwiVHJhdmVsVGlwcyIsIkZvb3RlciIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9