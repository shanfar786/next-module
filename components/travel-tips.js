import React from "react";
import { Container, Row, Col } from "react-bootstrap";




const TravelTips = () => {
    return (

        <section className="airvays-section travel-background">
            <Container >
                <div className="airvays-section-title">
                    <h2 className="text-center">Travel tips</h2>
                    <div className="line-block"></div>
                    <div className="empty-space"></div>
                </div>
                <Row>

                    <Col lg={4} sm={12} > <div className="ar-travel">
                        
                        <img src="/bali-beach.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div>
                    </Col>
                    <Col lg={4} sm={12}> <div className="ar-travel">
                        <img src="/travel-tip-2.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div></Col>
                    <Col lg={4} sm={12}> <div className="ar-travel">
                        <img src="/travel-tip-3.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div></Col>
                </Row>
            </Container>


        </section>
    );
};
export default TravelTips;
