import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const TIP_DATA = [
    {
        // image: blogImage1,
        title: "Pre and post launch mobile app marketing pitfalls to avoid",
        text:
            "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
        link: "/blog-details"
    },
    {
        title: "Pre2 and post launch mobile app marketing pitfalls to avoid",
        text:
            "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
        link: "/blog-details"
    },
    {
        title: "Pre and post launch mobile app marketing pitfalls to avoid",
        text:
            "There are many variations of passages of available but majority have alteration in some by inject humour or random words.",
        link: "/blog-details"
    }
];

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

                    <Col> <div className="ar-travel">
                        <img src="/bali-beach.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div>
                    </Col>
                    <Col> <div className="ar-travel">
                        <img src="/travel-tip-2.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div></Col>
                    <Col> <div className="ar-travel">
                        <img src="/travel-tip-3.png" />
                        <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, nonumy.</h3>
                    </div></Col>
                </Row>
            </Container>


        </section>
    );
};
export default TravelTips;
