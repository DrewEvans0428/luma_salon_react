import "./css/Coloring.css";
import coloring from "../images/coloring.jpg";

function Coloring(){
    return(
        <div className="service">
                        <h3>Color Treatments</h3>
                        <div id="color-image">
                            <img src={coloring} alt="placeholder" />
                        </div>
                        <p>
                            Our coloring treatments normally take a little longer than other services. some of our coloring services
                            consist of highlights, lowlights, base color, and gloss. Highlights are used to add lighter shades to hair,
                            they can be any color. Lowlights are subtle highlights that add dimension and depth to your hair color,
                            theyre unlike normal highlights as they are more subtle than highlights.
                        </p>
                    </div>
    )
}

export default Coloring;