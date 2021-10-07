import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import logoImage from "../assets/images/logo-1-1.png";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">

        <Container>
          <div className="inner-container">
            <Row>
              <Col lg={4} md={6} sm={12}>
                <div className="footer-widget">
                  <a href="index.html">
                    <img src="/airvays_logo-01.png" className="footer_logo" alt="Awesome Image" />
                  </a>
                  <div className="footer-para">
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt et.</p>
                  </div></div>
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
              </Col>
              <Col lg={3} md={6} sm={12}>
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
              </Col>
              <Col lg={3} md={6} sm={12}>
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
              </Col>
              <Col lg={2} md={6} sm={12}>
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
              </Col>

            </Row>
          </div>
        </Container>
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
