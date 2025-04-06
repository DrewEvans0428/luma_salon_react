import "./css/Spa.css";
import mermaid_spa from "../images/mermaid_spa.jpg"

function Spa(){
    return(
         <div className="service">
                        <h3>Head Spa Treatments</h3>
                        <div id="headspa-image">
                            <img src={mermaid_spa} alt="placeholder" />
                        </div>
                        <p>
                            Our headspa treatments are new to Luma Salon! It is led by Jenny and she also bases price based on time and what is needed/wanted. Come enjoy these soothing head spas at Luma Salon!
                        </p>
                    </div>
    )
}

export default Spa;