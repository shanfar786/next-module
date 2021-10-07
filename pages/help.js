import { Container, Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import HeaderTwo from "../components/header-two";
import Footer from "../components/footer";
const Help = () => {
    return (
        <>
            <HeaderTwo />
            <section className="airvays-section">
                <div className="container">
                    <Container className="help-cont">
                        <div className="row form-section">
                            <Row>
                                <Col xs={6} lg={6} sm={12}>
                                    <div className="container-md">
                                        <h2 className="help-head">Contact Us </h2>
                                        <p className="ar-hlp-p">Fill the below details for any enquiry on booking.</p>
                                        <div className="ar-empty"></div>
                                        <Form acceptCharset="UTF-8"
                                            method="POST"
                                            enctype="multipart/form-data"
                                            id="ajaxForm">
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="name" placeholder="Jane" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control type="email" placeholder="name@example.com" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Label>Message</Form.Label>
                                                <Form.Control as="textarea" rows={6} placeholder="Your Query…" />
                                            </Form.Group>
                                            <Button type="submit" class="btn btn-primary">Submit Details</Button>
                                        </Form>
                                    </div>
                                </Col>
                                <Col xs={6} lg={6} sm={12}>
                                    <div className="help-sec2">
                                        <img src="/Group 1881.png" alt="Picture of the author"
                                            objectFit="none"
                                        /></div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>

            </section>
            <Footer />
            <style jsx>{`
        .container {
            min-height: 80vh;
            
            display: block;
           margin-top:auto;
           margin-bottom:auto;
            justify-content: center;
            vertical-align: middle;
            align-items: center
        }
        @media (min-width: 1200px)
        .container {
            max-width: 85%;
                }
                }
       
      `}</style>
        </>

    );
};

export default Help;
