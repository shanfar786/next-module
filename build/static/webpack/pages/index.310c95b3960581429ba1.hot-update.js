"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/nav-links.js":
/*!*********************************!*\
  !*** ./components/nav-links.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Shanfar_Documents_travelplanner_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form */ "./components/form.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Shanfar\\Documents\\travelplanner\\components\\nav-links.js",
    _s = $RefreshSig$();





 // import { Link as ScrollLink } from "react-scroll";



function NavLinks() {
  _s();

  var changeColor = function changeColor() {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false),
      _React$useState2 = (0,C_Users_Shanfar_Documents_travelplanner_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_React$useState, 2),
      modalOpen = _React$useState2[0],
      setModalOpen = _React$useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("ul", {
    className: "one-page-scroll-menu navigation-box",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: "Explore"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/help",
        children: "Help"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: "Travel tips"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/",
        children: "Blog"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
      variant: "light",
      className: "head-btn",
      onClick: function onClick() {
        return setModalOpen(!modalOpen);
      },
      children: "Signup"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.Modal, {
      toggle: function toggle() {
        return setModalOpen(!modalOpen);
      },
      isOpen: modalOpen,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: " modal-header",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.Button, {
          "aria-label": "Close",
          className: " close",
          type: "button",
          onClick: function onClick() {
            return setModalOpen(!modalOpen);
          },
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("span", {
            "aria-hidden": true,
            children: "\xD7"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_6__.ModalBody, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_form__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(NavLinks, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");

_c = NavLinks;
;
/* harmony default export */ __webpack_exports__["default"] = (NavLinks);

var _c;

$RefreshReg$(_c, "NavLinks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzEwYzk1YjM5NjA1ODE0MjliYTEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7Ozs7QUFFQSxTQUFTTyxRQUFULEdBQW9CO0FBQUE7O0FBRWxCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBR0MsTUFBTSxDQUFDQyxPQUFQLElBQWtCLEVBQXJCLEVBQXdCO0FBQ3BCQyxNQUFBQSxRQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0gsS0FGRCxNQUVLO0FBQ0RBLE1BQUFBLFFBQVEsQ0FBQyxLQUFELENBQVI7QUFDSDtBQUNKLEdBTkM7O0FBUUEsd0JBQWtDWCxxREFBQSxDQUFlLEtBQWYsQ0FBbEM7QUFBQTtBQUFBLE1BQU9hLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0Esc0JBQ0U7QUFBSSxhQUFTLEVBQUMscUNBQWQ7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFTRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEYsZUFhRTtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFvQkUsOERBQUMsbURBQUQ7QUFBUSxhQUFPLEVBQUMsT0FBaEI7QUFBd0IsZUFBUyxFQUFDLFVBQWxDO0FBQTZDLGFBQU8sRUFBRTtBQUFBLGVBQU1BLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsT0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUF1QkUsOERBQUMsNkNBQUQ7QUFBTyxZQUFNLEVBQUU7QUFBQSxlQUFNQyxZQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFsQjtBQUFBLE9BQWY7QUFBK0MsWUFBTSxFQUFFQSxTQUF2RDtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBRUUsOERBQUMsbURBQUQ7QUFDRSx3QkFBVyxPQURiO0FBRUUsbUJBQVMsRUFBQyxRQUZaO0FBR0UsY0FBSSxFQUFDLFFBSFA7QUFJRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsV0FKWDtBQUFBLGlDQU1FO0FBQU0sMkJBQWEsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUUsOERBQUMsaURBQUQ7QUFBQSwrQkFFRSw4REFBQywwQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtERDs7R0E3RFFOOztLQUFBQTtBQTZEUjtBQUVELCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LWxpbmtzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSBcInJlYWN0c3RyYXBcIjtcbmltcG9ydCBGb3JtIGZyb20gXCIuL2Zvcm1cIjtcbi8vIGltcG9ydCB7IExpbmsgYXMgU2Nyb2xsTGluayB9IGZyb20gXCJyZWFjdC1zY3JvbGxcIjtcblxuZnVuY3Rpb24gTmF2TGlua3MoKSB7XG5cbiAgY29uc3QgY2hhbmdlQ29sb3IgPSAoKSA9PiB7XG4gICAgaWYod2luZG93LnNjcm9sbFkgPj0gODApe1xuICAgICAgICBzZXRDb2xvcih0cnVlKVxuICAgIH1lbHNle1xuICAgICAgICBzZXRDb2xvcihmYWxzZSlcbiAgICB9XG59XG5cbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwib25lLXBhZ2Utc2Nyb2xsLW1lbnUgbmF2aWdhdGlvbi1ib3hcIj5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICBFeHBsb3JlPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9oZWxwXCI+XG4gICAgICAgICAgSGVscDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgVHJhdmVsIHRpcHM8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG5cblxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwibGlnaHRcIiBjbGFzc05hbWU9XCJoZWFkLWJ0blwiIG9uQ2xpY2s9eygpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKX0+XG4gICAgICAgIFNpZ251cFxuICAgICAgPC9CdXR0b24+XG4gICAgICA8TW9kYWwgdG9nZ2xlPXsoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbil9IGlzT3Blbj17bW9kYWxPcGVufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbW9kYWwtaGVhZGVyXCI+XG5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGNsb3NlXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPXt0cnVlfT7Dlzwvc3Bhbj5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNb2RhbEJvZHk+XG5cbiAgICAgICAgICA8Rm9ybSAvPlxuICAgICAgICA8L01vZGFsQm9keT5cblxuICAgICAgPC9Nb2RhbD5cblxuXG5cbiAgICA8L3VsPlxuXG5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2TGlua3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQnV0dG9uIiwiTW9kYWwiLCJNb2RhbEJvZHkiLCJNb2RhbEZvb3RlciIsIkZvcm0iLCJOYXZMaW5rcyIsImNoYW5nZUNvbG9yIiwid2luZG93Iiwic2Nyb2xsWSIsInNldENvbG9yIiwidXNlU3RhdGUiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iXSwic291cmNlUm9vdCI6IiJ9