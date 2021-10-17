import React from "react";
// import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const PopDestinations = () =>   {
    return (
            <section className="airvays-section">
                <Container >
                    <div className="airvays-section-title">
                        <h2 >Popular Destinations</h2>
                        <div className="line-block"></div>
                    </div>
                    <Row className="pop-box">
                        <Col lg={7} sm={12}>
                        <div className="img-popdes">
                            <img src="/Group 682.png"  />
                            {/* <div class="img-content">

                                        <p>New Zealand</p>
                                    </div> */}
                                    </div> 
                        </Col>
                        
                        <Col lg={5} sm={12}>
                        <img src="/Group 681.png" />
                        </Col>
                        <Col lg={4} sm={12}>
                        <img src="/Group 683.png" />
                        </Col>
                        <Col lg={4} sm={12}>
                        <img src="/Group 683.png" />
                        </Col>
                        <Col lg={4} sm={12}>
                        <img src="/Group 683.png" />
                        </Col>
                    </Row>
                   
                 
                           
                   
                </Container >


            </section>
        
        );
    
  }
  export default PopDestinations;