import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

const PopDestinations = () => {
    return (
        <>
            <section className="airvays-section">
                <Container >
                    <div className="airvays-section-title">
                        <h2 >Popular Destinations</h2>
                        <div className="line-block"></div>
                    </div>
                    <div className="airvays-img-dest">
                        <Row >
                            <Col xs={7} lg={7} md={6} sm={12} className="img-col-dest">
                                <Link href="/dashboard/your-trip-score">
                                    <div href="#" className="img-popdes">

                                        <img href="#" src="/Group 682.png" />
                                        <div class="img-content">

                                            <p>Giraffe Manor, Nairobi, Kenya</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                            <Col xs={5} lg={5} md={6} sm={12} className="img-col-dest">
                                <Link href="/dashboard/your-trip-score">
                                    <div className="img-popdes-1">
                                        <img src="/Group 681.png" />
                                        <div class="img-content">

                                            <p>Costa Rica</p>
                                        </div>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="airvays-img-dest">
                        <Row >
                            <Col lg={4} md={6} sm={12} className="img-col-dest">
                                <div className="img-popdes-1">
                                    <img src="/Group 683.png" />
                                    <div class="img-content">

                                        <p>New Zealand</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12} className="img-col-dest">
                                <div className="img-popdes-1">
                                    <img src="/Group 684.png" />
                                    <div class="img-content">
                                        <p>Paris, France</p>
                                    </div>
                                </div> </Col >
                            <Col lg={4} md={6} sm={12} className="img-col-dest">
                                <div className="img-popdes-1">
                                    <img src="/Group 685.png" />
                                    <div class="img-content">
                                        <p>Egypt</p>
                                    </div>
                                </div></Col>
                        </Row>
                    </div>
                </Container >


            </section>
        </>
    );
};
export default PopDestinations;
