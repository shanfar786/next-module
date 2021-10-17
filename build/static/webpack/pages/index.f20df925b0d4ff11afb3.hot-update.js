"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header-one.js":
/*!**********************************!*\
  !*** ./components/header-one.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nav_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-links */ "./components/nav-links.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\Shanfar\\Documents\\travelplanner\\components\\header-one.js",
    _this = undefined,
    _s = $RefreshSig$();






var HeaderOne = function HeaderOne() {
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

  var handleScroll = function handleScroll() {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  var changeColor = function changeColor() {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

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
    className: "site-header header-one",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("nav", {
      className: "navbar navbar-expand-lg navbar-light header-navigation stricky  ".concat(sticky === true ? "stricky-fixed" : " "),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "container clearfix",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "logo-box clearfix",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/trip-result",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
              className: "navbar-brand",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
                className: "navbar-logo",
                src: "/logo_white.png",
                alt: "Airvays"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "menu-toggler",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "fa fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "main-navigation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_nav_links__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, _this);
};

_s(HeaderOne, "1SazbpEz+dBLziogpySmuzJ4B4M=");

_c = HeaderOne;
/* harmony default export */ __webpack_exports__["default"] = (HeaderOne);

var _c;

$RefreshReg$(_c, "HeaderOne");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjIwZGY5MjViMGQ0ZmYxMWFmYjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFFQSxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLGtCQUE0QkosK0NBQVEsQ0FBQyxLQUFELENBQXBDO0FBQUEsTUFBT0ssTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBQ0FMLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkTSxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxZQUFsQztBQUNBQyxJQUFBQSxVQUFVO0FBQ1YsV0FBTyxZQUFNO0FBQ1hILE1BQUFBLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNGLFlBQXJDO0FBQ0FDLE1BQUFBLFVBQVU7QUFDWCxLQUhEO0FBSUQsR0FQUSxDQUFUOztBQVVBLE1BQU1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsUUFBSUYsTUFBTSxDQUFDSyxPQUFQLEdBQWlCLEVBQXJCLEVBQXlCO0FBQ3ZCTixNQUFBQSxTQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0QsS0FGRCxNQUVPLElBQUlDLE1BQU0sQ0FBQ0ssT0FBUCxHQUFpQixFQUFyQixFQUF5QjtBQUM5Qk4sTUFBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFPQSxNQUFNTyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUdOLE1BQU0sQ0FBQ0ssT0FBUCxJQUFrQixFQUFyQixFQUF3QjtBQUNwQkUsTUFBQUEsUUFBUSxDQUFDLElBQUQsQ0FBUjtBQUNILEtBRkQsTUFFSztBQUNEQSxNQUFBQSxRQUFRLENBQUMsS0FBRCxDQUFSO0FBQ0g7QUFDSixHQU5DOztBQVFBLE1BQU1KLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsUUFBSUssWUFBWSxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixDQUFuQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLGVBQXZCLENBQWxCO0FBQ0EsUUFBSUMsT0FBTyxHQUFHSixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWQ7QUFDQUQsSUFBQUEsV0FBVyxDQUFDVixnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFVYSxDQUFWLEVBQWE7QUFDakRBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBRixNQUFBQSxPQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0QsS0FIRDtBQUlBVCxJQUFBQSxZQUFZLENBQUNVLE9BQWIsQ0FBcUIsVUFBQ0MsZUFBRCxFQUFxQjtBQUN4Q0EsTUFBQUEsZUFBZSxDQUFDbEIsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVtQixLQUFWLEVBQWlCO0FBQ3pELFlBQUlDLE9BQU8sR0FDVEQsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxhQUFwQixDQUFrQ0EsYUFBbEMsQ0FBZ0RDLFFBQWhELENBQXlELENBQXpELENBREY7QUFFQUosUUFBQUEsS0FBSyxDQUFDTCxjQUFOO0FBQ0FNLFFBQUFBLE9BQU8sQ0FBQ0wsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRCxPQUxEO0FBTUQsS0FQRDtBQVFELEdBaEJEOztBQWtCQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBQSwyQkFDRTtBQUNFLGVBQVMsNEVBQXFFbkIsTUFBTSxLQUFLLElBQVgsR0FBa0IsZUFBbEIsR0FBb0MsR0FBekcsQ0FEWDtBQUFBLDZCQUlFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxjQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLGNBQWI7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsYUFBZjtBQUE2QixtQkFBRyxFQUFDLGlCQUFqQztBQUFtRCxtQkFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBdkVEOztHQUFNRDs7S0FBQUE7QUF5RU4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXItb25lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmF2TGlua3MgZnJvbSBcIi4vbmF2LWxpbmtzXCI7XG5cbmNvbnN0IEhlYWRlck9uZSA9ICgpID0+IHtcbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIG1vYmlsZU1lbnUoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIG1vYmlsZU1lbnUoKTtcbiAgICB9O1xuICB9KTtcbiAgXG4gIFxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNzApIHtcbiAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgNzApIHtcbiAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA4MCl7XG4gICAgICAgIHNldENvbG9yKHRydWUpXG4gICAgfWVsc2V7XG4gICAgICAgIHNldENvbG9yKGZhbHNlKVxuICAgIH1cbn1cblxuICBjb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGxldCBzdWJNZW51Q29sc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1uYXYtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZpZ2F0aW9uXCIpO1xuICAgIG1lbnVUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWVudUJveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIHN1Yk1lbnVDb2xzZS5mb3JFYWNoKChzdWJNZW51Q29sc2VCdG4pID0+IHtcbiAgICAgIHN1Yk1lbnVDb2xzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBzdWJNZW51ID1cbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInNpdGUtaGVhZGVyIGhlYWRlci1vbmVcIj5cbiAgICAgIDxuYXZcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGhlYWRlci1uYXZpZ2F0aW9uIHN0cmlja3kgICR7c3RpY2t5ID09PSB0cnVlID8gXCJzdHJpY2t5LWZpeGVkXCIgOiBcIiBcIlxuICAgICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3ggY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHJpcC1yZXN1bHRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJuYXZiYXItbG9nb1wiIHNyYz1cIi9sb2dvX3doaXRlLnBuZ1wiIGFsdD1cIkFpcnZheXNcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm1lbnUtdG9nZ2xlclwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPE5hdkxpbmtzIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlck9uZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIk5hdkxpbmtzIiwiSGVhZGVyT25lIiwic3RpY2t5Iiwic2V0U3RpY2t5Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsIm1vYmlsZU1lbnUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsImNoYW5nZUNvbG9yIiwic2V0Q29sb3IiLCJzdWJNZW51Q29sc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51VG9nZ2xlciIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51Qm94IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsInN1Yk1lbnVDb2xzZUJ0biIsImV2ZW50Iiwic3ViTWVudSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9