import LayoutTwo from "../../components/layout-two";
// import { Container } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { Renderer } from "marked";
import Link from "next/link";

function Attractions(){
    
    // const country = useSelector(state => state.country);
    // const city = useSelector(state => state.city);
    // const geoCode = useSelector(state => state.location);
    // // const [attData, setAttData] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         let attRes = await fetch('https://dev-api-travel-planner.airvays.com/v2/fetch_attraction_details', {
    //             method: 'post',
    //             header: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 "city": city,
    //                 "country": country,
    //                 "geo_details": geoCode
    //             })
    //         });
            // if(attRes.ok){
            //     let attJson = await attRes.json();
            //     setAttData(attJson.data.attractive_places);
            // }else{
            //     console.log(attRes);
            // }
    //     }
    //     fetchData();
    // }, [])

    return (
        <LayoutTwo pageTitle="Attractions">
               <div className="showcontent">
                      <h2 className="showcontent-heading">What to do ?</h2>
                      <hr  style={{ color: '#33BBFF', backgroundColor: '#33BBFF', height: 3, width: 40, textAlign :'left', margin : '0 0 10px 0',borderRadius: 6  }} />
                        {/* {attData ? attData.map((att, index) => {
                            return (<div key={index}>
                              <h5>{att.name}</h5>
                             <p>{att.description}</p>
                            </div>)
                           }) : <div>No attraction details available for {city}, {country}</div>
                           } */}
                         <div className='blog-grid-container'>
                         <Link href="/attractions/sample-page">
                        <div className="attra-grid">
                            <h5>Bali beach</h5>
                       <img src="/bali-beach.png" alt=" " onClick="" />
                       <div>
                           <p className="attra-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                       </div>
                        </div>
                        </Link>
                        <Link href="/attractions/sample-page">
                        <div className="attra-grid">
                            <h5>Bali beach</h5>
                       <img src="/bali-beach.png" alt=" " onClick="" />
                       <div>
                           <p className="attra-content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.</p>
                       </div>
                        </div>
                        </Link>
                        </div>

                         </div>
                       
        </LayoutTwo>
    );

};

export default Attractions;
