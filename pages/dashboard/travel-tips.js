import HeaderTwo from "../../components/header-two";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import React, { useState } from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";



function TravelTips() {
    const [readMore, setReadMore] = useState(false);
    const extraContent = <div>
        <Row>
            <Col xs={6}>
                <h4>10 ways to pack your bags..</h4>
                <div className="attraction-img">
                    <img src="/bali-beach.png" alt="bali-beach" /></div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </Col>
            <Col xs={6}>
                <h4>10 ways to pack your bags..</h4>
                <div className="attraction-img">
                    <img src="/bali-beach.png" alt="bali-beach" /></div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
            </Col></Row>
    </div>
    // const linkName = readMore ? 'Read Less << ' : 'Read More >> ' 
    return (

        <Layout pageTitle="Airvays">
            <HeaderTwo />
            <Container >
                <div className="result-main"></div>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        <Container>
                            <div className="showcontent">
                                <h2 className="showcontent-heading">Travel tips for you !</h2>
                                <div>

                                    <Row>
                                        <Col xs={6}>
                                            <h4>10 ways to pack your bags..</h4>
                                            <div className="attraction-img">
                                                <img src="/bali-beach.png" alt="bali-beach" /></div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                        </Col>
                                        <Col xs={6}>
                                            <h4>10 ways to pack your bags..</h4>
                                            <div className="attraction-img">
                                                <img src="/bali-beach.png" alt="bali-beach" /></div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                        </Col>
                                        <Col xs={6}>
                                            <h4>10 ways to pack your bags..</h4>
                                            <div className="attraction-img">
                                                <img src="/bali-beach.png" alt="bali-beach" /></div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                        </Col>
                                        <Col xs={6}>
                                            <h4>10 ways to pack your bags..</h4>
                                            <div className="attraction-img">
                                                <img src="/bali-beach.png" alt="bali-beach" /></div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                        </Col>
                                        <Col >
                                            {readMore && extraContent} </Col>

                                    </Row> <Button variant="primary" onClick={() => { setReadMore(!readMore) }}>Readmore</Button>

                                    <div className="ip">

                                        {/* <Button variant="primary" onClick={() => { setReadMore(!readMore) }}>Readmore</Button> */}

                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container >
        </Layout >
    );
};
export default TravelTips;
