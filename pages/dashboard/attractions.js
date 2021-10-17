import HeaderTwo from "../../components/header-two";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { Container, Row, Col } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";




function Attractions() {
    return (

        <Layout pageTitle="Airvays">
            <HeaderTwo />
            <Container >
                <div className="result-main"></div>
                <Row>
                    <Col lg={2} sm={12} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col lg={10} sm={12} id="page-content-wrapper">

                        <Container>
                            <div className="showcontent">
                                <h2 className="showcontent-heading">What to do ?</h2>
                                <p className="text-justify">View All</p>

                                <Row>
                                    <Col xs={6}> <div className="attraction-part">
                                        <Row>

                                            <Col><h2>Bali beach</h2></Col>
                                            <Col><p>Click to view</p></Col>
                                        </Row>
                                        <div className="attraction-img">
                                            <img src="/bali-beach.png" alt="bali-beach" /></div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                    </div>
                                    </Col>
                                    <Col xs={6}><div className="attraction-part">
                                        <Row>
                                            <div><h2>Bali beach</h2></div>

                                        </Row>
                                        <div className="attraction-img">
                                            <img src="/bali-beach.png" alt="bali-beach" /></div>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                    </div>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="attraction-part">
                                            <Row>
                                                <Col><h2>Bali beach</h2></Col>
                                                <Col><p>Click to view</p></Col>
                                            </Row>
                                            <div className="attraction-img">
                                                <img src="/bali-beach.png" alt="bali-beach" /></div>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};
export default Attractions;
