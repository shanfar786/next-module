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
                lineNumber: 59,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
            className: "menu-toggler",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: "fa fa-bars"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: "main-navigation",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_nav_links_two__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaGVscC5jNmUwNzQ2MDEwOTZlMTMyOTlmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1LLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsa0JBQTRCSiwrQ0FBUSxDQUFDLEtBQUQsQ0FBcEM7QUFBQSxNQUFPSyxNQUFQO0FBQUEsTUFBZUMsU0FBZjs7QUFDQUwsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2RNLElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLFlBQWxDO0FBQ0FDLElBQUFBLFVBQVU7QUFDVixXQUFPLFlBQU07QUFDWEgsTUFBQUEsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ0YsWUFBckM7QUFDQUMsTUFBQUEsVUFBVTtBQUNYLEtBSEQ7QUFJRCxHQVBRLENBQVQ7O0FBVUEsTUFBTUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN6QixRQUFJRixNQUFNLENBQUNLLE9BQVAsR0FBaUIsRUFBckIsRUFBeUI7QUFDdkJOLE1BQUFBLFNBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUMsTUFBTSxDQUFDSyxPQUFQLEdBQWlCLEVBQXJCLEVBQXlCO0FBQzlCTixNQUFBQSxTQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQU9BLE1BQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBR04sTUFBTSxDQUFDSyxPQUFQLElBQWtCLEVBQXJCLEVBQXdCO0FBQ3BCRSxNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUVLO0FBQ0RBLE1BQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKLEdBTkM7O0FBUUEsTUFBTUosVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFJSyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQW5CO0FBQ0EsUUFBSUMsV0FBVyxHQUFHRixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbEI7QUFDQSxRQUFJQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixrQkFBdkIsQ0FBZDtBQUNBRCxJQUFBQSxXQUFXLENBQUNWLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQVVhLENBQVYsRUFBYTtBQUNqREEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRCxLQUhEO0FBSUFULElBQUFBLFlBQVksQ0FBQ1UsT0FBYixDQUFxQixVQUFDQyxlQUFELEVBQXFCO0FBQ3hDQSxNQUFBQSxlQUFlLENBQUNsQixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBVW1CLEtBQVYsRUFBaUI7QUFDekQsWUFBSUMsT0FBTyxHQUNURCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JDLGFBQXBCLENBQWtDQSxhQUFsQyxDQUFnREMsUUFBaEQsQ0FBeUQsQ0FBekQsQ0FERjtBQUVBSixRQUFBQSxLQUFLLENBQUNMLGNBQU47QUFDQU0sUUFBQUEsT0FBTyxDQUFDTCxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QjtBQUNELE9BTEQ7QUFNRCxLQVBEO0FBUUQsR0FoQkQ7O0FBaUJBLHNCQUNFO0FBQVEsYUFBUyxFQUFDLHdCQUFsQjtBQUFBLDJCQUNFO0FBQ0UsZUFBUyxxRUFBOERuQixNQUFNLEtBQUssSUFBWCxHQUFrQixlQUFsQixHQUFvQyxHQUFsRyxDQURYO0FBQUEsNkJBSUU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLG1CQUFmO0FBQUEsa0NBQ0UsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsY0FBYjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxhQUFmO0FBQTZCLG1CQUFHLEVBQUMsaUJBQWpDO0FBQW1ELG1CQUFHLEVBQUM7QUFBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBTUU7QUFBUSxxQkFBUyxFQUFDLGNBQWxCO0FBQUEsbUNBQ0U7QUFBTSx1QkFBUyxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQVlFO0FBQUssbUJBQVMsRUFBQyxpQkFBZjtBQUFBLGlDQUNFLDhEQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F0RUQ7O0dBQU1EOztLQUFBQTtBQXdFTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci10d28uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBOYXZMaW5rc1R3byBmcm9tIFwiLi9uYXYtbGlua3MtdHdvXCI7XG5cbmNvbnN0IEhlYWRlclR3byA9ICgpID0+IHtcbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIG1vYmlsZU1lbnUoKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICAgIG1vYmlsZU1lbnUoKTtcbiAgICB9O1xuICB9KTtcbiAgXG4gIFxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNzApIHtcbiAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZIDwgNzApIHtcbiAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBjaGFuZ2VDb2xvciA9ICgpID0+IHtcbiAgICBpZih3aW5kb3cuc2Nyb2xsWSA+PSA4MCl7XG4gICAgICAgIHNldENvbG9yKHRydWUpXG4gICAgfWVsc2V7XG4gICAgICAgIHNldENvbG9yKGZhbHNlKVxuICAgIH1cbn1cblxuICBjb25zdCBtb2JpbGVNZW51ID0gKCkgPT4ge1xuICAgIGxldCBzdWJNZW51Q29sc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnN1Yi1uYXYtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudVRvZ2dsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtdG9nZ2xlclwiKTtcbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1uYXZpZ2F0aW9uXCIpO1xuICAgIG1lbnVUb2dnbGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbWVudUJveC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgIH0pO1xuICAgIHN1Yk1lbnVDb2xzZS5mb3JFYWNoKChzdWJNZW51Q29sc2VCdG4pID0+IHtcbiAgICAgIHN1Yk1lbnVDb2xzZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGxldCBzdWJNZW51ID1cbiAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsxXTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3ViTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWhlYWRlciBoZWFkZXItdHdvXCI+XG4gICAgICA8bmF2XG4gICAgICAgIGNsYXNzTmFtZT17YG5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBoZWFkZXItbmF2aWdhdGlvbiA9ICR7c3RpY2t5ID09PSB0cnVlID8gXCJzdHJpY2t5LWZpeGVkXCIgOiBcIiBcIlxuICAgICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbGVhcmZpeFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1ib3ggY2xlYXJmaXhcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibmF2YmFyLWxvZ29cIiBzcmM9XCIvbG9nb193aGl0ZS5wbmdcIiBhbHQ9XCJBaXJ2YXlzXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtZW51LXRvZ2dsZXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxOYXZMaW5rc1R3byAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJUd287XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJOYXZMaW5rc1R3byIsIkhlYWRlclR3byIsInN0aWNreSIsInNldFN0aWNreSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVTY3JvbGwiLCJtb2JpbGVNZW51IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNjcm9sbFkiLCJjaGFuZ2VDb2xvciIsInNldENvbG9yIiwic3ViTWVudUNvbHNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudVRvZ2dsZXIiLCJxdWVyeVNlbGVjdG9yIiwibWVudUJveCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImZvckVhY2giLCJzdWJNZW51Q29sc2VCdG4iLCJldmVudCIsInN1Yk1lbnUiLCJjdXJyZW50VGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==