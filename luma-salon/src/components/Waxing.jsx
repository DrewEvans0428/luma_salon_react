import "./css/Waxing.css";
import waxing from "../images/waxing.jpg";

function Waxing() {
    return(
        <div className="service">
                        <h3>Facial Waxings</h3>
                        <div id="waxing-image">
                            <img src={waxing} alt="placeholder" />
                        </div>
                        <p>
                            Facial Waxings are also dependent on the stylist. They are normally a cheaper option as theyre normally pretty quick.
                            This normally consists of an eyebrow touchup, using hot was and a waxing strip. This service is offered to both male and female clients.
                        </p>
                    </div>
    )
}

export default Waxing;