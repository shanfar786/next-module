import HeaderTwo from "../../components/header-two";
import React from "react";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { Container } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../../components/footer";

const percentage = 66;
const percentage_1 = 0;
const percentage_2 = 46;
const percentage_3 = 56;


function YourTripScore() {
    return (
            <>
        <Layout pageTitle="Airvays">
            <HeaderTwo />
            <Container >
                <div class="result-main">
                <div className="row">
                    <div className="col-lg-2 col-sm-12" >
                        <div id="sidebar">
                        <Sidebar /></div>
                    </div>
                    <div className="col-lg-10 col-sm-12"  id="page-content">
                        <Container>
                            <div class="showcontent ">
                                <h2 class="showcontent-heading">Your trip score</h2>
                                <div class="covid-box">
                                    <div className="row">
                                        <div className="col-lg-6 col-sm-12 " >
                                            <div class="row-covid">
                                                <div className="row">

                                                    <div className="col-9 ">
                                                        <div class="data-covid-box">
                                                            <h6>Covid-19</h6>
                                                            <p>covid-19 score on the scale of 0 - 100</p>
                                                        </div>

                                                    </div>
                                                    <div className="col-3 ar-center">
                                                    
                                                        <div label="Default" class="percentage-1 align-middle" align="center">
                                                            <CircularProgressbar class="circularProgressbar-sm" value={percentage} text={`${percentage}%`} />
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="row-covid">
                                                <div className="row">
                                                    <div className="col-9 ">
                                                        <div class="data-covid-box">
                                                            <h6>Covid-19</h6>
                                                            <p>covid-19 score on the scale of 0 - 100</p>
                                                        </div>

                                                    </div>
                                                    <div className="col-3 ">
                                                       
                                                        <div label="Default" class="percentage-1">
                                                            <CircularProgressbar class="circularProgressbar-sm" value={percentage_1} text={`${percentage_1}%`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row-covid">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <div class="data-covid-box">
                                                            <h6>Covid-19</h6>
                                                            <p>covid-19 score on the scale of 0 - 100</p>
                                                        </div>

                                                    </div>
                                                    <div className="col-3 ar-center">
                                                        {/* <div style={{ paddingRight: 30 }}>{props.children}</div> */}
                                                        <div label="Default" class="percentage-1">
                                                            <CircularProgressbar class="circularProgressbar-sm" value={percentage_2} text={`${percentage_2}%`} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-6 col-sm-12 order-sm-2" >
                                            <div class="ov-score"><div class="ov-score-2">
                                                <p class="text-center">Overall Score</p>
                                                <div label="Default" class="percentage text-center " >
                                                    <CircularProgressbar value={percentage_3} text={`${percentage_3}%`} />

                                                </div>
                                                <p class="text-center">Your overall trip to Bali looks Great.</p>
                                                <div>
                                                    <p><img src="https://img.icons8.com/ios/25/000000/food-bar.png" />Great food culture</p>
                                                    <p><img src="https://img.icons8.com/ios/25/000000/point-of-interest.png" />1000+ activities & attraction</p>
                                                    <p><img src="https://img.icons8.com/ios/25/000000/health-graph.png" />Covid-19 cases are decreasing</p>
                                                </div>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                                <p>DISCLAIMER</p>
                                <p>Scores for Covid-19, Destination and Activities are derived based on the data from our supplier APIs and it may not be accurate to the real condition.</p>
                            </div>
                           
                        </Container>
                    </div>
                </div>

                </div>
            </Container>
            
          

       

        </Layout>
        <Footer />
        </>

    );
};

export default YourTripScore;
