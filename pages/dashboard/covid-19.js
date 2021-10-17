import HeaderTwo from "../../components/header-two";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState } from 'react';

const percentage = 66;


function Covid19() {
    const [readMore, setReadMore] = useState(false);
    const covidcontent =  <div>
                <div >
                    <div>
                        <p>Can you enter?</p>
                        <p>Travellers arriving from or transiting through India, South Africa, China, Iran, Brazil, Ireland, the United Kingdom and the European Schengen Area countries of Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Monaco, San Marin and Vatican City within 14 days of their planned arrival in the US are barred from entry. Exemptions: https://travel.state.gov/content/travel/en/News/visas-news/presidential-proclamation-coronavirus.html Rules: https://www.cdc.gov/coronavirus/2019-ncov/travelers/from-other-countries.html</p>
                    </div>
                    <div>
                        <p>What are the required documents?</p>
                        <p>Arriving travellers must complete a passenger locator form within 24 hours of arrival. Travel Document: https://travel.state.gov/content/travel/en/News/visas-news/presidential-proclamation-coronavirus.html Health Document: https://www.cdc.gov/coronavirus/2019-ncov/travelers/from-other-countries.html</p>
                    </div>
                    <div>
                        <p>Testing required?</p>
                        <p>All passengers on inbound international flights – including US citizens and fully vaccinated people – must present a negative COVID-19 test result Rules: https://travel.state.gov/content/travel/en/News/visas-news/presidential-proclamation-coronavirus.html</p>
                    </div>
                    <div>
                        <p>Do I need to quarantine ?</p>
                        <p>International travellers are not required to quarantine upon arrival. However, the CDC recommends that travellers stay home and self-quarantine for 7 days after arrival. Travellers should take a test again 3-5 days after arrival; if a test is not available or results are delayed, travellers are recommended to stay home and self-quarantine for a total of 10 days after travelling. Rules: https://travel.state.gov/content/travel/en/News/visas-news/presidential-proclamation-coronavirus.html</p>
                    </div>
                    <div>
                        <p>What are the area restrictions ?</p>
                        <p>A nightly nationwide curfew is in effect from 21:00-06:00 local time until further notice.</p>
                    </div>
                    <div>
                        <p>Is there any contact tracing requirements ?</p>
                        <p>There is no national contact tracing app. Local authorities have developed or are developing optional platforms through Apple’s Exposure Notification API in multiple states, including Alabama, Arizona, California, Colorado, Delaware, Maryland, Michigan, Nevada, New York, North Carolina, North Dakota, Oregon, Pennsylvania, South Carolina, Virginia Washington and Wyoming, the District of Columbia, and territories, including Guam and Puerto Rico.</p>
                    </div>
                    <div>
                        <p>Mask requirements ?</p>
                        <p>Some states and territories require residents to wear masks while out in public. Violators may be subject to fines and be denied entry to businesses and use of public transport. Most states and territories have voluntary measures or measures restricted to specific venues and municipalities.</p> <p>Enforcement varies widely and is not consistently enforced below the federal level. Masks must be worn in federal government buildings as well as on inter-state transport, including at airports and onboard flights, trains, planes, intercity buses and ferries until at least 13 September.</p>
                    </div>
                    <div>
                        <p>For further information visit</p>
                        <p>https://www.cdc.gov/coronavirus/2019-ncov/index.html</p>
                        <p>https://www.helsenorge.no/en/coronavirus</p>
                    </div>
                </div >
            </div>

    return (

        <Layout pageTitle="Airvays">
            <HeaderTwo />
            <Container >
                <div class="result-main"></div>
                <Row>
                    <Col lg={2} sm={12} id="sidebar-wrapper">
                        <Sidebar />
                    </Col>
                    <Col lg={10} sm={12} id="page-content-wrapper">
                        <Container>
                            <div class="showcontent">
                                <h2 class="showcontent-heading">Covid-19</h2>
                                <h3>This route is closed.</h3>

                                <div className="covid19-box">
                                    <h4>Bali</h4>
                                    <div className="line-block">
                                        <p> Partially Open</p>
                                        <p> Disease risk level</p>
                                        <p className="cont-highlight"> High</p>
                                    </div>
                                    <div className="covid-place-desc">
                                        <p>Authorities imposed international travel restrictions from late February 2020</p>
                                        <p>Covid-19 Statistics</p>
                                    </div>
                                    <div className="case-table">
                                        <table >
                                            <tr>
                                                <td style={{ width: "150px" }}>Confirmed Cases</td>
                                                <td style={{ width: "150px" }}>Active Cases</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>184</td>
                                                <td>62,100</td>
                                                <td>-26.69% (last 7 days)</td>
                                            </tr>

                                        </table>
                                        <p> Last reviewed on 24 May 2021, 10:40AM UTC</p>
                                    </div>
                                    <div>
                                        <h6> Hotspots</h6>
                                        <p> Minnesota, Michigan, Pennsylvania, New Jersey, Delaware, New York, Connecticut, Rhode Island, New Hampshire, Vermont, Massachusetts</p>
                                    </div>
                                    <div>
                                        <h6>Area restrictions</h6>
                                        <p>Lockdown</p>
                                        <p>A nightly nationwide curfew is in effect from 21:00-06:00 local time until further notice.</p>
                                        <p>Last reviewed on 24 May 2021, 10:40AM UTC</p>
                                    </div>
                                    <div>
                                        <h6>Local Requirements</h6>

                                        <table>
                                            <tr>
                                                <td>Emil</td>
                                                <td>Tobias</td>
                                                <td>Linus</td>
                                            </tr>
                                        </table>
                                        <Button className="btn " onClick={() => { setReadMore(!readMore) }}>Read more</Button>
                                      <div >  {readMore && covidcontent}</div>
                                    </div>
                                    <div>

                                    </div>
                                </div>

                                <div className="disclaimer">
                                    <h6>DISCLAIMER</h6>
                                    <p>We update our information every 24hrs from travel advisories and government websites. Due to the ever-changing nature of the Covid-19 situation, please remember to check the links provided and your local airlines before you travel. We use Google Translate for quick and timely translations, please excuse any errors. Thank you.</p>
                                </div>
                            </div>
                        </Container>
                    </Col>
                </Row>



            </Container >
            




        </Layout >

    );
};

export default Covid19;
