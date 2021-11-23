import LayoutTwo from "../../components/layout-two";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import constants from '../../constants';

function Covid19(props) {
    const [showMe, setShowMe] = useState(false);
    const country = useSelector(state => state.country);
    const city = useSelector(state => state.city);
    const [covidData, setCovidData] = useState(null);
    const [restrictData, setRestrict] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            let covidRes = await fetch(constants.API_ENDPOINT + '/v2/get_covid_details', {
                method: 'post',
                header: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    country
                })
            });
            if(covidRes.ok){
                let covidJson = await covidRes.json();
                setCovidData(covidJson.data.covid_details);
                setRestrict(covidJson.data.covid_details.areaAccessRestriction);
            }else{
                console.log(covidRes);
            }
        }
        fetchData();
    }, [])
    function Faqairvays(){
        setShowMe(!showMe);
    }
    const linkName=showMe?'Read Less << ':'Read More >> ';
    return (
        <LayoutTwo pageTitle="Airvays">
            {covidData && restrictData && <div className="showcontent" key={city}>
                <h2 className="showcontent-heading">Covid-19</h2>
                <hr  style={{ color: '#33BBFF', backgroundColor: '#33BBFF', height: 3, width: 40, textAlign :'left', margin : '0 0 10px 0',borderRadius: 6  }} />
                <h3>This route is {restrictData.entry.borderBan[1].status}.</h3>
                <div className="covid19-box">
                    <h4>{country}</h4>
                    <div className="line-block">
                        <p> Partially Open</p>
                        <p> Disease risk level</p>
                        <p className="cont-highlight">{covidData.diseaseRiskLevel}</p>
                    </div>
                    <div className="covid-place-desc">
                        <p dangerouslySetInnerHTML={{ __html: covidData.summary }}></p>
                        <p>Covid-19 Statistics</p>
                    </div>
                    <div className="case-table">
                        <table >
                            <tbody>
                                <tr>
                                    <td style={{ width: "150px" }}>Confirmed Cases</td>
                                    <td style={{ width: "150px" }}>Deaths</td>
                                </tr>
                                <tr>
                                    <td>{covidData.diseaseCases.confirmed}</td>
                                    <td>{covidData.diseaseCases.deaths}</td>
                                    <td>-26.69% (last 7 days)</td>
                                </tr>
                            </tbody>
                        </table>
                        <p> Last reviewed on 24 May 2021, 10:40AM UTC</p>
                    </div>
                    <div>
                        <h6>Hotspots</h6>
                        <p dangerouslySetInnerHTML={{ __html: covidData.hotspots }}></p>
                    </div>
                    <div>
                        <h6>Area restrictions</h6>
                        <div className="line-block">
                            <p className="cont-highlight">{restrictData.entry.ban}</p>
                            <p dangerouslySetInnerHTML={{ __html: restrictData.entry.text }}></p>
                            <p>Last reviewed on {restrictData.entry.date}</p>
                        </div>
                    </div>
                    <div>
                        <h6>Local Requirements</h6>
                        <div className="line-block">
                            {restrictData.diseaseTesting.isRequired === 'Yes' && 
                                <p className="cont-highlight m-r-sm">Testing</p>}
                            {restrictData.tracingApplication.isRequired === 'Yes' && 
                                <p className="cont-highlight m-r-sm">Travel Documents</p>}
                            {restrictData.quarantineModality.duration > 0 && 
                                <p className="cont-highlight m-r-sm">Quarantine for {restrictData.quarantineModality.duration} days</p>}
                            {restrictData.mask.isRequired === 'Yes' && 
                                <p className="cont-highlight m-r-sm">Mask</p>}
                            {restrictData.diseaseVaccination.isRequired === 'Yes' && 
                                <p className="cont-highlight m-r-sm">Vaccination</p>}
                        </div>
                        <Button className="btn" onClick={Faqairvays}>Read more</Button>
                        <div style={{display: showMe?"block":"none"}}>
                            <div className="cov-faq-box cov-faq-inner">
                                <div>
                                    <p>Can you enter?</p>
                                    <p>Travellers arriving from or transiting through India, South Africa, China, Iran, Brazil, Ireland, the United Kingdom and the European Schengen Area countries of Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, Switzerland, Monaco, San Marin and Vatican City within 14 days of their planned arrival in the US are barred from entry. Exemptions: https://travel.state.gov/content/travel/en/News/visas-news/presidential-proclamation-coronavirus.html Rules: https://www.cdc.gov/coronavirus/2019-ncov/travelers/from-other-countries.html</p>
                                </div>
                                <div>
                                    <h6>Area restrictions</h6>
                                    {covidData.areaRestrictions.map(resData => {
                                        return (<div>
                                            <p>{resData.restrictionType}</p>
                                            <p dangerouslySetInnerHTML={{ __html: resData.text }}></p>
                                            <p>Last reviewed on {resData.date}</p>
                                        </div>)
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="disclaimer">
                    <h6>DISCLAIMER</h6>
                    <p>We update our information every 24hrs from travel advisories and government websites. Due to the ever-changing nature of the Covid-19 situation, please remember to check the links provided and your local airlines before you travel. We use Google Translate for quick and timely translations, please excuse any errors. Thank you.</p>
                </div>
            </div>}
            {!covidData && <p>No covid details available for {country}</p>}
        </LayoutTwo >
    );
};

export default Covid19;
