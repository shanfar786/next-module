import LayoutTwo from "../../components/layout-two";
import { ProgressBar } from "react-bootstrap";

function AttractionsDetails(){
    return (
        <LayoutTwo pageTitle="attaration-title">
            <div className="showcontent">
                      <h2 className="showcontent-heading">What to do ?</h2>
                      <hr  style={{ color: '#33BBFF', backgroundColor: '#33BBFF', height: 3, width: 40, textAlign :'left', margin : '0 0 10px 0',borderRadius: 6  }} />
                       
                       <div className="ar-place-details">
                    <h3 >Seminyak Beach</h3>
                    <p>Buzzing resort beach with clubs & bars</p>
                    <h5>About</h5>
                    <p>The Prado Museum in Madrid, discover masterpieces by Velázquez, Goya, Mantegna, Raphael, Tintoretto and access all temporary exhibitions.</p>
                    <h5>Rating</h5>
                      <div className="atta-percentage">
                               <p>Safety</p>
                                <ProgressBar className="attra-progress"now={60} />
                                <p>60 </p>
                      </div>
                      <h5>Location map</h5>
                      {/* <div>

                      </div> */}
                      <div className="disclaimer">
                        <h6>DISCLAIMER</h6>
                        <p>Scores for Covid-19, Destination and Activities are derived based on the data from our supplier APIs and it may not be accurate to the real condition.</p>
                     </div>
                      
                    </div>
                    </div>
                    </LayoutTwo>
                    
    )
}
export default AttractionsDetails;