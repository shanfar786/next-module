exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 8137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header_two)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
;// CONCATENATED MODULE: ./components/nav-links-two.js




 // import { Link as ScrollLink } from "react-scroll";

const NavLinksTwo = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
    className: "one-page-scroll-menu navigation-box",
    children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Explore"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Help"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Travel tips"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Blog"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
      variant: "light",
      className: "head-btn",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        children: "Signup"
      })
    })]
  });
};

/* harmony default export */ const nav_links_two = (NavLinksTwo);
;// CONCATENATED MODULE: ./components/header-two.js






const HeaderTwo = () => {
  const {
    0: sticky,
    1: setSticky
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
    mobileMenu();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mobileMenu();
    };
  });

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  const mobileMenu = () => {
    let subMenuColse = document.querySelectorAll(".sub-nav-toggler");
    let menuToggler = document.querySelector(".menu-toggler");
    let menuBox = document.querySelector(".main-navigation");
    menuToggler.addEventListener("click", function (e) {
      e.preventDefault();
      menuBox.classList.toggle("active");
    });
    subMenuColse.forEach(subMenuColseBtn => {
      subMenuColseBtn.addEventListener("click", function (event) {
        let subMenu = event.currentTarget.parentElement.parentElement.children[1];
        event.preventDefault();
        subMenu.classList.toggle("active");
      });
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "site-header header-two",
    children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
      className: `navbar navbar-expand-lg navbar-light header-navigation = ${sticky === true ? "stricky-fixed" : " "}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "container clearfix",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "logo-box clearfix",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "navbar-brand",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "navbar-logo",
                src: "/logo_white.png",
                alt: "Airvays"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("button", {
            className: "menu-toggler",
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "fa fa-bars"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "main-navigation",
          children: /*#__PURE__*/jsx_runtime_.jsx(nav_links_two, {})
        })]
      })
    })
  });
};

/* harmony default export */ const header_two = (HeaderTwo);

/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;