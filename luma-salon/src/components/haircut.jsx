import "./css/Haircut.css";
import haircut from "../images/haircut.jpg";

function Haircut(){
    return(
        <div className="service">
            <h3>Hair Cuts</h3>
                <div id="haircut-image">
                    <img src={haircut} alt="placeholder" />
        </div>
            <p>
                All pricing is dependent on the stylist, and how long the haircut might take. Here at Luma Salon we know how to do all types of haircuts no matter the length.
                Some of our haircuts include bobs, pixie cuts, layered cuts, Lobs, and undercuts.
                Hair services are also not limited to  just women, we have many male clients who come in regularly and get all ranges of haircuts.
            </p>
        </div>
    )
}

export default Haircut;