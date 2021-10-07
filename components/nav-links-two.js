import React from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";
// import { Link as ScrollLink } from "react-scroll";

const NavLinksTwo = () => {
  return (
    <ul className="one-page-scroll-menu navigation-box">
      <li>
        <Link href="/">
          Explore</Link>
      </li>
      <li>
        <Link href="/">
          Help</Link>
      </li>
      <li>
        <Link href="/">
          Travel tips</Link>
      </li>
      <li >
        <Link href="/">
          Blog
        </Link>
      </li>


      <Button variant="light" className="head-btn">
        <Link href="/">
          Signup
        </Link>
      </Button>



    </ul>



  );
};

export default NavLinksTwo;
