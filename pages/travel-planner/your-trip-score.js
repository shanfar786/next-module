import LayoutTwo from "../../components/layout-two";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

import { locationActions } from "../../store";
import { useDispatch, useSelector } from "react-redux";

const percentage = 66;
const percentage_1 = 0;
const percentage_2 = 46;
const percentage_3 = 56;


function YourTripScore(props) {
    const dispatch = useDispatch();
    const geoDetails = useSelector(state => state);
    const[tripScore, setScore] = useState([])
    useEffect(()=>{
        async function fetchGeo(){
            let response = await fetch('https://dev-api-travel-planner.airvays.com/v2/get_location_coordinates?city_name='+ geoDetails["city"]);
            if(response.ok){
                let jsonData = await response.json();
                dispatch(locationActions.changeGeo(jsonData.data.location_details))
                let scoreRes = await fetch('https://dev-api-travel-planner.airvays.com/v2/get_scores_for_a_city', {
                    method: 'post',
                    body: JSON.stringify({
                        "city": geoDetails["city"],
                        "country": geoDetails["country"],
                        "geo_details": jsonData.data.location_details
                    })
                });
                if(scoreRes.ok){
                    let scoreJson = await scoreRes.json();
                    setScore(scoreJson.data);
                }else{
                    console.log(scoreRes);
                }
            }else{
                console.log(response);
            }
        }
        fetchGeo();
    }, [])
    return (
        <LayoutTwo pageTitle="Your-trip-score">
                      <div className="showcontent ">
                        <h2 className="showcontent-heading">Your trip score</h2>
                        <hr  style={{ color: '#33BBFF', backgroundColor: '#33BBFF', height: 3, width: 40, textAlign :'left', margin : '0 0 10px 0',borderRadius: 6  }} />
                            {tripScore && <div className="covid-box">
                                <Row>
                                    <Col xs={{ span: 12, order: 2 }} lg={{ span: 6, order: 1 }} >
                                        <div className="row-covid">
                                            <Row>
                                                <Col xs={9} lg={9} >
                                                    <div className="data-covid-box">
                                                        <h6>Covid-19</h6>
                                                        <p>covid-19 score on the scale of 0 - 100</p>
                                                    </div>
                                                </Col>
                                                <Col xs={3} lg={3}  className="mb-circle"  className="mb-circle">
                                                    {/* <div style={{ paddingRight: 30 }}>{props.children}</div> */}
                                                    <div label="Default" className="percentage-1 align-middle" align="center">
                                                        <CircularProgressbar className="circularProgressbar-sm" value={percentage} text={`${percentage}%`} />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>
                                            <div className="row-covid">
                                                <Row>
                                                    <Col xs={9} lg={9}>
                                                        <div className="data-covid-box">
                                                            <h6>Covid-19</h6>
                                                            <p>covid-19 score on the scale of 0 - 100</p>
                                                        </div>

                                                    </Col>
                                                    <Col xs={3} lg={3}  className="mb-circle">
                                                        {/* <div style={{ paddingRight: 30 }}>{props.children}</div> */}
                                                        <div label="Default" className="percentage-1">
                                                            <CircularProgressbar className="circularProgressbar-sm" value={percentage_1} text={`${percentage_1}%`} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                            <div className="row-covid">
                                                <Row>
                                                    <Col xs={9} lg={9}>
                                                        <div className="data-covid-box">
                                                            <h6>Covid-19</h6>
                                                            <p>covid-19 score on the scale of 0 - 100</p>
                                                        </div>

                                                    </Col>
                                                    <Col xs={3} lg={3}  className="mb-circle">
                                                        {/* <div style={{ paddingRight: 30 }}>{props.children}</div> */}
                                                        <div label="Default" className="percentage-1">
                                                            <CircularProgressbar className="circularProgressbar-sm" value={percentage_2} text={`${percentage_2}%`} />
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </Col>
                                        <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 2 }} >
                                            <div className="ov-score">
                                                <div className="ov-score-2">
                                                    <p className="text-center">Overall Score</p>
                                                    <div label="Default" className="percentage text-center" >
                                                        <CircularProgressbar value={percentage_3} text={`${percentage_3}%`} />
                                                    </div>
                                                    <p className="text-center">Your overall trip to Bali looks Great.</p>
                                                    <div>
                                                        <p><img  src="https://img.icons8.com/ios/25/000000/food-bar.png" />Great food culture</p>
                                                        <p><img src="https://img.icons8.com/ios/25/000000/point-of-interest.png" />1000+ activities & attraction</p>
                                                        <p><img src="https://img.icons8.com/ios/25/000000/health-graph.png" />Covid-19 cases are decreasing</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            }
                            {!tripScore &&
                                <Col>
                                    No Trip score available for {geoDetails["country"] +', '+ geoDetails['city']}
                                </Col>
                            }
                            <div className="disclamier">
                                <h6>DISCLAIMER</h6>
                                <p>Scores for Covid-19, Destination and Activities are derived based on the data from our supplier APIs and it may not be accurate to the real condition.</p>
                            </div>
                        </div>
                   
        </LayoutTwo>
    );
};

export default YourTripScore;
