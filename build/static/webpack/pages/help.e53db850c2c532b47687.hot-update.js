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

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      color = _useState2[0],
      setColor = _useState2[1];

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
                lineNumber: 47,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "menu-toggler",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "fa fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "main-navigation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_nav_links_two__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(HeaderTwo, "WXtGjcmK5iJYsqFpuPWDLMwHGN0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC5lNTNkYjg1MGMyYzUzMmI0NzY4Ny5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsa0JBQTRCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQSxtQkFBMEJOLCtDQUFRLENBQUMsS0FBRCxDQUFsQztBQUFBLE1BQU9PLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBUCxFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDZFEsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0MsWUFBbEM7QUFDQUMsSUFBQUEsVUFBVTtBQUNWLFdBQU8sWUFBTTtBQUNYSCxNQUFBQSxNQUFNLENBQUNJLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRixZQUFyQztBQUNBQyxNQUFBQSxVQUFVO0FBQ1gsS0FIRDtBQUlELEdBUFEsQ0FBVDs7QUFXQSxNQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCLFFBQUlFLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBbkI7QUFDQSxRQUFJQyxXQUFXLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixlQUF2QixDQUFsQjtBQUNBLFFBQUlDLE9BQU8sR0FBR0osUUFBUSxDQUFDRyxhQUFULENBQXVCLGtCQUF2QixDQUFkO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ1AsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBVVUsQ0FBVixFQUFhO0FBQ2pEQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUYsTUFBQUEsT0FBTyxDQUFDRyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QjtBQUNELEtBSEQ7QUFJQVQsSUFBQUEsWUFBWSxDQUFDVSxPQUFiLENBQXFCLFVBQUNDLGVBQUQsRUFBcUI7QUFDeENBLE1BQUFBLGVBQWUsQ0FBQ2YsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVnQixLQUFWLEVBQWlCO0FBQ3pELFlBQUlDLE9BQU8sR0FDVEQsS0FBSyxDQUFDRSxhQUFOLENBQW9CQyxhQUFwQixDQUFrQ0EsYUFBbEMsQ0FBZ0RDLFFBQWhELENBQXlELENBQXpELENBREY7QUFFQUosUUFBQUEsS0FBSyxDQUFDTCxjQUFOO0FBQ0FNLFFBQUFBLE9BQU8sQ0FBQ0wsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRCxPQUxEO0FBTUQsS0FQRDtBQVFELEdBaEJEOztBQWtCQSxzQkFDRTtBQUFRLGFBQVMsRUFBQyx3QkFBbEI7QUFBQSwyQkFDRTtBQUNFLGVBQVMscUVBQThEbEIsTUFBTSxLQUFLLElBQVgsR0FBa0IsZUFBbEIsR0FBb0MsR0FBbEcsQ0FEWDtBQUFBLDZCQUlFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxtQkFBZjtBQUFBLGtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxHQUFYO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFDLGNBQWI7QUFBQSxxQ0FDRTtBQUFLLHlCQUFTLEVBQUMsYUFBZjtBQUE2QixtQkFBRyxFQUFDLGlCQUFqQztBQUFtRCxtQkFBRyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU1FO0FBQVEscUJBQVMsRUFBQyxjQUFsQjtBQUFBLG1DQUNFO0FBQU0sdUJBQVMsRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFZRTtBQUFLLG1CQUFTLEVBQUMsaUJBQWY7QUFBQSxpQ0FDRSw4REFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBMUREOztHQUFNRDs7S0FBQUE7QUE0RE4sK0RBQWVBLFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXItdHdvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTmF2TGlua3NUd28gZnJvbSBcIi4vbmF2LWxpbmtzLXR3b1wiO1xuXG5jb25zdCBIZWFkZXJUd28gPSAoKSA9PiB7XG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgbW9iaWxlTWVudSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgICAgbW9iaWxlTWVudSgpO1xuICAgIH07XG4gIH0pO1xuXG4gXG5cbiAgY29uc3QgbW9iaWxlTWVudSA9ICgpID0+IHtcbiAgICBsZXQgc3ViTWVudUNvbHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zdWItbmF2LXRvZ2dsZXJcIik7XG4gICAgbGV0IG1lbnVUb2dnbGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LXRvZ2dsZXJcIik7XG4gICAgbGV0IG1lbnVCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbmF2aWdhdGlvblwiKTtcbiAgICBtZW51VG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1lbnVCb3guY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICB9KTtcbiAgICBzdWJNZW51Q29sc2UuZm9yRWFjaCgoc3ViTWVudUNvbHNlQnRuKSA9PiB7XG4gICAgICBzdWJNZW51Q29sc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBsZXQgc3ViTWVudSA9XG4gICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMV07XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHN1Yk1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWhlYWRlciBoZWFkZXItdHdvXCI+XG4gICAgICA8bmF2XG4gICAgICAgIGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBoZWFkZXItbmF2aWdhdGlvbiA9ICR7c3RpY2t5ID09PSB0cnVlID8gXCJzdHJpY2t5LWZpeGVkXCIgOiBcIiBcIlxuICAgICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3ggY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ29cIiBzcmM9XCIvbG9nb193aGl0ZS5wbmdcIiBhbHQ9XCJBaXJ2YXlzXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rc1R3byAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUd287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJOYXZMaW5rc1R3byIsIkhlYWRlclR3byIsInN0aWNreSIsInNldFN0aWNreSIsImNvbG9yIiwic2V0Q29sb3IiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlU2Nyb2xsIiwibW9iaWxlTWVudSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdWJNZW51Q29sc2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW51VG9nZ2xlciIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51Qm94IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsInN1Yk1lbnVDb2xzZUJ0biIsImV2ZW50Iiwic3ViTWVudSIsImN1cnJlbnRUYXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9