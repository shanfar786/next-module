"use strict";
self["webpackHotUpdate_N_E"]("pages/dashboard/your-trip-score",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Shanfar\\Documents\\travelplanner\\components\\layout.js",
    _this = undefined,
    _s = $RefreshSig$();






var Layout = function Layout(_ref) {
  _s();

  var pageTitle = _ref.pageTitle,
      children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      scrollTop = _useState[0],
      setScrollTop = _useState[1];

  var handleScrollTop = function handleScrollTop() {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("scroll", handleScrollTop);
    return function () {
      window.removeEventListener("scroll", handleScrollTop);
    };
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("title", {
        children: pageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
        src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
        integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
        src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js",
        integrity: "sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
        integrity: "sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("script", {
        src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
        integrity: "sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ",
        crossorigin: "anonymous"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "page-wrapper",
      id: "wrapper",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), scrollTop === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_scroll__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "wrapper",
      smooth: true,
      duration: 500,
      className: "scroll-to-top",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("i", {
        className: "fa fa-angle-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Layout, "1jnx1QVw4t6zMpBdtnjdtGOSzGw=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkL3lvdXItdHJpcC1zY29yZS4yYjU0ZTY0OGVhYjQ2MThiYmI5My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1NLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFDMUMsa0JBQWtDUCwrQ0FBUSxDQUFDLEtBQUQsQ0FBMUM7QUFBQSxNQUFPUSxTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUVBLE1BQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixRQUFJQyxNQUFNLENBQUNDLE9BQVAsR0FBaUIsRUFBckIsRUFBeUI7QUFDdkJILE1BQUFBLFlBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEVBQXJCLEVBQXlCO0FBQzlCSCxNQUFBQSxZQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Q7QUFDRixHQU5EOztBQVFBUixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFUsSUFBQUEsTUFBTSxDQUFDRSxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0gsZUFBbEM7QUFDQSxXQUFPLFlBQU07QUFDWEMsTUFBQUEsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0osZUFBckM7QUFDRCxLQUZEO0FBR0QsR0FMUSxDQUFUO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUEsa0JBQVFKO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUU7QUFDTixXQUFHLEVBQUMsWUFERTtBQUVOLFlBQUksRUFBQyx1RUFGQztBQUdOLGlCQUFTLEVBQUMseUVBSEo7QUFJTixtQkFBVyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGLGVBV0Y7QUFBUSxXQUFHLEVBQUMsa0RBQVo7QUFBK0QsaUJBQVMsRUFBQyx5RUFBekU7QUFBbUosbUJBQVcsRUFBQztBQUEvSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEUsZUFZRjtBQUFRLFdBQUcsRUFBQywyRUFBWjtBQUF3RixpQkFBUyxFQUFDLHlFQUFsRztBQUE0SyxtQkFBVyxFQUFDO0FBQXhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRSxlQWFGO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDLDhFQUE1QjtBQUEyRyxpQkFBUyxFQUFDLHlFQUFySDtBQUErTCxtQkFBVyxFQUFDO0FBQTNNO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRSxlQWNGO0FBQVEsV0FBRyxFQUFDLDRFQUFaO0FBQXlGLGlCQUFTLEVBQUMseUVBQW5HO0FBQTZLLG1CQUFXLEVBQUM7QUFBekw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBaUJFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBOEIsUUFBRSxFQUFDLFNBQWpDO0FBQUEsZ0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpCRixFQW9CR0MsU0FBUyxLQUFLLElBQWQsZ0JBQ0MsOERBQUMsOENBQUQ7QUFDRSxRQUFFLEVBQUMsU0FETDtBQUVFLFlBQU0sRUFBRSxJQUZWO0FBR0UsY0FBUSxFQUFFLEdBSFo7QUFJRSxlQUFTLEVBQUMsZUFKWjtBQUFBLDZCQU1FO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsR0FTRyxJQTdCTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtDRCxDQW5ERDs7R0FBTUg7O0tBQUFBO0FBcUROLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbGF5b3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBMaW5rIGFzIFNjcm9sbExpbmsgfSBmcm9tIFwicmVhY3Qtc2Nyb2xsXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IExheW91dCA9ICh7IHBhZ2VUaXRsZSwgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2Nyb2xsVG9wLCBzZXRTY3JvbGxUb3BdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbFRvcCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPiA3MCkge1xuICAgICAgc2V0U2Nyb2xsVG9wKHRydWUpO1xuICAgIH0gZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPCA3MCkge1xuICAgICAgc2V0U2Nyb2xsVG9wKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGxUb3ApO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGxUb3ApO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxuLz5cblxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jb2RlLmpxdWVyeS5jb20vanF1ZXJ5LTMuMi4xLnNsaW0ubWluLmpzXCIgaW50ZWdyaXR5PVwic2hhMzg0LUtKM28yREt0SWt2WUlLM1VFTnptTTdLQ2tSci9yRTkvUXBnNmFBWkdKd0ZETVZOQS9HcEdGRjkzaFhwRzVLa05cIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiPjwvc2NyaXB0PlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvcG9wcGVyLmpzLzEuMTIuMy91bWQvcG9wcGVyLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC12RkpYdVNKcGhST0lyQm56N3lvN29CNDFtS2ZjOEp6UVppQ3E0TkNjZUxFYU80SUh3aWNLd3BKZjljOUlwRmdoXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIj48L3NjcmlwdD5cbiAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMi9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtUHNIOFI3MkpRM1NPZGhWaTN1eGZ0bWFXNlZjNTFNS2IwcTVQMnJSVXBQdnJzenVFNFcxcG92SFlnVHBCZnNoYlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIvPlxuICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4wLjAtYmV0YS4yL2pzL2Jvb3RzdHJhcC5taW4uanNcIiBpbnRlZ3JpdHk9XCJzaGEzODQtYWxwQnBraDFQRk9lcGNjWVZZREI0ZG81VW5iS3lzWDVXWlhtM1h4UHFlNWlLVGZVS2pOa0NrOVNhVnVFWmZsSlwiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCI+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiIGlkPVwid3JhcHBlclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzY3JvbGxUb3AgPT09IHRydWUgPyAoXG4gICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgdG89XCJ3cmFwcGVyXCJcbiAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJzY3JvbGwtdG8tdG9wXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgICBcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIlNjcm9sbExpbmsiLCJIZWFkIiwiTGF5b3V0IiwicGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJzY3JvbGxUb3AiLCJzZXRTY3JvbGxUb3AiLCJoYW5kbGVTY3JvbGxUb3AiLCJ3aW5kb3ciLCJzY3JvbGxZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9