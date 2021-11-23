import Layout from "../components/layout"
import HeaderTwo from "../components/header-two"
import Link from "next/link"
import { Container,Row,Button,Col } from "react-bootstrap"

export default function Custom404() {
  return (
  
  <Layout pageTitle="404">
  <HeaderTwo />
  <section className="airvays-section">
                <div className="container">
                    <Container className="help-cont">
                        <div className="row error-section ">
                            <Row>
                                <Col xs={12} lg={6} sm={12} className="error-center">
                                    <div className="container-md sm-box error-box">
                                     <h4 >404</h4>
                                     <p>The page you are looking for might be removed or temporarily not available</p>
                                     <Button href="/travel-planner" className="explore-btn">Explore more </Button>
                                  </div>
                                  </Col>
                                <Col lg={4} sm={12} className="ar-center d-md-block d-sm-none">
                                 <div className="help-sec2">
                                        <img src="/Group 1881.png" alt="Picture of the author"
                                            objectFit="none"
                                        /></div>
      </Col>
    </Row></div>
  </Container>
  </div>
  </section>
  <style jsx>{`
        .help-cont {
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
  </Layout>
  )
}