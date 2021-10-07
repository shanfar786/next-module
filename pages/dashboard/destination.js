import HeaderTwo from "../../components/header-two";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";




function Destination() {
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
                        <div className="showcontent">
                            <Container>
                                <h2 className="showcontent-heading">About destination</h2>
                                <Row>

                                    <Col xs={6}>
                                        <div className="showcontent">

                                            <div>
                                                <Row>

                                                    <Col xs={4}>
                                                        <p>Safety<i className="far fa-question-circle"></i></p></Col>
                                                    <Col xs={6}>  <ProgressBar now={60} /></Col>
                                                    <Col xs={2}><p>56&#63; </p></Col>
                                                    <Col xs={4}>
                                                        <p>Sight seeing<i className="far fa-question-circle"></i></p></Col>
                                                    <Col xs={6}>  <ProgressBar now={40} /></Col>
                                                    <Col xs={2}><p>56</p></Col>
                                                    <Col xs={4}>
                                                        <p>Food culture<i className="far fa-question-circle"></i></p></Col>
                                                    <Col xs={6}>  <ProgressBar now={65} /></Col>
                                                    <Col xs={2}><p>56</p></Col>
                                                    <Col xs={4}>
                                                        <p>Shopping<i className="far fa-question-circle"></i></p></Col>
                                                    <Col xs={6}>  <ProgressBar now={70} /></Col>
                                                    <Col xs={2}><p>56</p></Col>
                                                    <Col xs={4}>
                                                        <p>Night life<i className="far fa-question-circle"></i></p></Col>
                                                    <Col xs={6}>  <ProgressBar now={50} /></Col>
                                                    <Col xs={2}><p>56</p></Col>
                                                </Row></div>


                                        </div>
                                    </Col>
                                    <Col Xs={6}>
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15380.511975738762!2d73.80301827803933!3d15.477545977979831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc0db2f977b03%3A0xd609133f181e989d!2sMiramar%2C%20Panaji%2C%20Goa!5e0!3m2!1sen!2sin!4v1628961953819!5m2!1sen!2sin" />
                                    </Col>
                                </Row>
                                <div>
                                    <h6>DISCLAIMER</h6>
                                    <p>Scores for all the categories are derived based on the data from our supplier APIs and it may not be accurate to the real condition.</p>
                                </div>
                            </Container>
                        </div>
                    </Col>
                </Row>

            </Container>
        </Layout>
    );
};

export default Destination;
