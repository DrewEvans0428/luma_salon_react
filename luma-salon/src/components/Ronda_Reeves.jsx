import "./css/ronda_reeves.css";
import ronda_reeves from "../images/ronda_reeves.jpg";

function Ronda_Reeves() {
    return(
         <div class="stylist">
                            <section id="reeves">
                            <h3>Rhonda Reeves</h3>
                            <h4>Owner/Stylist</h4>
                            <div class="image">
                                <img src={ronda_reeves} alt="placeholder" />
                            </div>
                            
                            <p>
                               Born and raised in Charleston, I have been in the cosmetics industry for over 25 years as a hair stylist, business owner, and instructor.
                               The experiences I have gained while being behind the chair, and the relationships I have built with clients, is what keeps me passionate about my career.
                            </p>
                            <p>
                               I love sharing my knowledge and serving as a mentor to new stylists entering the industry. In 2014, Jennifer Evans and I opened Luma Salon, where we strive to make 
                               everyone who walks in our door feel like a family.
                            </p>
                            <p>
                                In my free time, I love spending time with my family and friends, and enjoying all that Charleston has to offer.
                            </p>
                        </section>
                        </div>
    )
}

export default Ronda_Reeves;