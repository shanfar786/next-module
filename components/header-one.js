import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "./nav-links";

const HeaderOne = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
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
    subMenuColse.forEach((subMenuColseBtn) => {
      subMenuColseBtn.addEventListener("click", function (event) {
        let subMenu =
          event.currentTarget.parentElement.parentElement.children[1];
        event.preventDefault();
        subMenu.classList.toggle("active");
      });
    });
  };

  return (
    <header className="site-header header-one">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky  ${sticky === true ? "stricky-fixed" : " "
          }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <Link href="/trip-result">
              <a className="navbar-brand">
                <img className="navbar-logo" src="/logo_white.png" alt="Airvays" />
              </a>
            </Link>
            <button className="menu-toggler">
              <span className="fa fa-bars"></span>
            </button>
          </div>

          <div className="main-navigation">
            <NavLinks />
          </div>

        </div>
      </nav>
    </header>
  );
};

export default HeaderOne;
