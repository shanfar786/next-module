
// import Sidebar from "../components/sidebar";
import HeaderTwo from "../components/header-two";
import Layout from "../components/layout";
// import BannerOne from "../components/banner-one";
import Sidebar from "../components/sidebar";
import { Container, Row, Col } from "react-bootstrap";


const TripResult = () => {
    return (

        <Layout pageTitle="Airvays">
            <HeaderTwo />
            <Container fluid>
                <Row>
                    <Col xs={4} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col xs={8} id="page-content-wrapper">

                    </Col>
                </Row>

            </Container>




        </Layout>

    );
};

export default TripResult;