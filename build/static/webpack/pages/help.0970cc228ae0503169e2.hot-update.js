"use strict";
self["webpackHotUpdate_N_E"]("pages/help",{

/***/ "./components/header-two.js":
/*!**********************************!*\
  !*** ./components/header-two.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_links_two__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-links-two */ "./components/nav-links-two.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Shanfar\\Documents\\travelplanner\\components\\header-two.js",
    _this = undefined,
    _s = $RefreshSig$();






var HeaderTwo = function HeaderTwo() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      sticky = _useState[0],
      setSticky = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return function () {
      window.removeEventListener("scroll", handleScroll);
      mobileMenu();
    };
  });

  var mobileMenu = function mobileMenu() {
    var subMenuColse = document.querySelectorAll(".sub-nav-toggler");
    var menuToggler = document.querySelector(".menu-toggler");
    var menuBox = document.querySelector(".main-navigation");
    menuToggler.addEventListener("click", function (e) {
      e.preventDefault();
      menuBox.classList.toggle("active");
    });
    subMenuColse.forEach(function (subMenuColseBtn) {
      subMenuColseBtn.addEventListener("click", function (event) {
        var subMenu = event.currentTarget.parentElement.parentElement.children[1];
        event.preventDefault();
        subMenu.classList.toggle("active");
      });
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("header", {
    className: "site-header header-two",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      className: "navbar navbar-expand-lg navbar-light header-navigation = ".concat(sticky === true ? "stricky-fixed" : " "),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container clearfix",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "logo-box clearfix",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              className: "navbar-brand",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                className: "navbar-logo",
                src: "/logo_white.png",
                alt: "Airvays"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "menu-toggler",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "fa fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "main-navigation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_nav_links_two__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(HeaderTwo, "1SazbpEz+dBLziogpySmuzJ4B4M=");

_c = HeaderTwo;
/* harmony default export */ __webpack_exports__["default"] = (HeaderTwo);

var _c;

$RefreshReg$(_c, "HeaderTwo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC4wOTcwY2MyMjhhZTA1MDMxNjllMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsa0JBQTRCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFHQUwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RNLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDO0FBQ0FDLElBQUFBLFVBQVU7QUFDVixXQUFPLFlBQU07QUFDWEgsTUFBQUEsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7QUFDQUMsTUFBQUEsVUFBVTtBQUNYLEtBSEQ7QUFJRCxHQVBRLENBQVQ7O0FBV0EsTUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJRSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQW5CO0FBQ0EsUUFBSUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxRQUFJQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBZDtBQUNBRCxJQUFBQSxXQUFXLENBQUNQLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVVVLENBQVYsRUFBYTtBQUNqREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRCxLQUhEO0FBSUFULElBQUFBLFlBQVksQ0FBQ1UsT0FBYixDQUFxQixVQUFDQyxlQUFELEVBQXFCO0FBQ3hDQSxNQUFBQSxlQUFlLENBQUNmLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxVQUFVZ0IsS0FBVixFQUFpQjtBQUN6RCxZQUFJQyxPQUFPLEdBQ1RELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkMsYUFBcEIsQ0FBa0NBLGFBQWxDLENBQWdEQyxRQUFoRCxDQUF5RCxDQUF6RCxDQURGO0FBRUFKLFFBQUFBLEtBQUssQ0FBQ0wsY0FBTjtBQUNBTSxRQUFBQSxPQUFPLENBQUNMLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0QsT0FMRDtBQU1ELEtBUEQ7QUFRRCxHQWhCRDs7QUFrQkEsc0JBQ0U7QUFBUSxhQUFTLEVBQUMsd0JBQWxCO0FBQUEsMkJBQ0U7QUFDRSxlQUFTLHFFQUE4RGhCLE1BQU0sS0FBSyxJQUFYLEdBQWtCLGVBQWxCLEdBQW9DLEdBQWxHLENBRFg7QUFBQSw2QkFJRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMsbUJBQWY7QUFBQSxrQ0FDRSw4REFBQyxrREFBRDtBQUFNLGdCQUFJLEVBQUMsR0FBWDtBQUFBLG1DQUNFO0FBQUcsdUJBQVMsRUFBQyxjQUFiO0FBQUEscUNBQ0U7QUFBSyx5QkFBUyxFQUFDLGFBQWY7QUFBNkIsbUJBQUcsRUFBQyxpQkFBakM7QUFBbUQsbUJBQUcsRUFBQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFRLHFCQUFTLEVBQUMsY0FBbEI7QUFBQSxtQ0FDRTtBQUFNLHVCQUFTLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUU7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsaUNBQ0UsOERBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQTNERDs7R0FBTUQ7O0tBQUFBO0FBNkROLCtEQUFlQSxTQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaGVhZGVyLXR3by5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5hdkxpbmtzVHdvIGZyb20gXCIuL25hdi1saW5rcy10d29cIjtcblxuY29uc3QgSGVhZGVyVHdvID0gKCkgPT4ge1xuICBjb25zdCBbc3RpY2t5LCBzZXRTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICBtb2JpbGVNZW51KCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgICBtb2JpbGVNZW51KCk7XG4gICAgfTtcbiAgfSk7XG5cbiBcblxuICBjb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGxldCBzdWJNZW51Q29sc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1uYXYtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZpZ2F0aW9uXCIpO1xuICAgIG1lbnVUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWVudUJveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIHN1Yk1lbnVDb2xzZS5mb3JFYWNoKChzdWJNZW51Q29sc2VCdG4pID0+IHtcbiAgICAgIHN1Yk1lbnVDb2xzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBzdWJNZW51ID1cbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNpdGUtaGVhZGVyIGhlYWRlci10d29cIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGhlYWRlci1uYXZpZ2F0aW9uID0gJHtzdGlja3kgPT09IHRydWUgPyBcInN0cmlja3ktZml4ZWRcIiA6IFwiIFwiXG4gICAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNsZWFyZml4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWJveCBjbGVhcmZpeFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXZiYXItbG9nb1wiIHNyYz1cIi9sb2dvX3doaXRlLnBuZ1wiIGFsdD1cIkFpcnZheXNcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnUtdG9nZ2xlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPE5hdkxpbmtzVHdvIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclR3bztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIk5hdkxpbmtzVHdvIiwiSGVhZGVyVHdvIiwic3RpY2t5Iiwic2V0U3RpY2t5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsIm1vYmlsZU1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3ViTWVudUNvbHNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudVRvZ2dsZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudUJveCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvckVhY2giLCJzdWJNZW51Q29sc2VCdG4iLCJldmVudCIsInN1Yk1lbnUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==