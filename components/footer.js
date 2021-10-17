import React from "react";
// import logoImage from "../assets/images/logo-1-1.png";
import { Container } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <footer className="site-footer">

        <div className="container">
          <div className="inner-container">
            <div className="row">
              <div className="col-lg-4 col-sm-12" >
                <div className="footer-widget">
                  <a href="index.html">
                    <img src="/airvays_logo-01.png" className="footer_logo" alt="Awesome Image" />
                  </a>
                  <div className="footer-para">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et.</p>
                  </div>
                  </div>
                <div className="footer-widget">


                  <div className="social-block">
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>

                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>

                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6" >
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Company</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div  className="col-sm-6 col-lg-3">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Explore</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Trip planner</a>
                    </li>
                    <li>
                      <a href="#">Travel tips</a>
                    </li>

                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h3>Places</h3>
                  </div>
                  <ul className="links-list">
                    <li>
                      <a href="#">Bali</a>
                    </li>
                    <li>
                      <a href="#">Maldives</a>
                    </li>
                    <li>
                      <a href="#">Paris</a>
                    </li>
                    <li>
                      <a href="#">Montenegro</a>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>

      <div className="bottom-footer text-center">
        <Container>
          <p>
            &copy; 2021 All Rights Reserved |<a href="#">Airvays.com</a>
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
