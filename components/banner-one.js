import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const BannerOne = () => {
  return (
    <section className="banner-style-one" id="banner">
      <center>
        <div >

          <Container >
            <Row >
              <Col xl={12} lg={8}>
                <div className="content-block airvays-search-form">
                  <div className="airvays-content" >
                    <h1>
                      Dream smarter. travel better
                    </h1>
                    <p>Get inspired for your next trip!</p>
                    <Form>
                      <Form.Row>

                        <Col xs={10}>
                          <Form.Control placeholder="Search your Place" />
                        </Col>
                        <Col xs={2}>
                          <button type="button" className="btn btn-search">
                            <span className="ar-search-bar">
                              <svg width="15px" height="15px">
                                <path d="M11.618 9.897l4.224 4.212c.092.09.1.23.02.312l-1.464 1.46c-.08.08-.222.072-.314-.02L9.868 11.66M6.486 10.9c-2.42 0-4.38-1.955-4.38-4.367 0-2.413 1.96-4.37 4.38-4.37s4.38 1.957 4.38 4.37c0 2.412-1.96 4.368-4.38 4.368m0-10.834C2.904.066 0 2.96 0 6.533 0 10.105 2.904 13 6.486 13s6.487-2.895 6.487-6.467c0-3.572-2.905-6.467-6.487-6.467 "></path>
                              </svg></span>
                          </button>
                        </Col>
                      </Form.Row>
                    </Form>

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </center>

    </section>
  );
};

export default BannerOne;
