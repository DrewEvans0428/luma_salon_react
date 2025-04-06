import "./css/jen_evans.css";
import jen_evans from "../images/jennifer_evans.jpg";

function Jen_Evans(){
    return(
        <div class="stylist">
                            {/*Jennifer evans Section*/}
                            <section id="jen-evans">
                            <h3>Jennifer Evans</h3>
                            <h4>Owner/Stylist</h4>
                            <div class="image">
                                <img src={jen_evans} alt="placeholder" />
                            </div>
                            <section id="jen-evans-text">
                            <p>
                                Since 2001, I have dedicated my career to enhancing the beauty and confidence of my clients. I began my journey in downtown Charleston, and later relocated
                                to West Ashley. In 2014, Rhonda Reeves and I opened Luma Salon, where I continue to expand my knowledge of hair and build strong relationships with my clients. 
                            </p>
                            <p>
                                I believe that professionalism and dependability are key to a successful client experience. 
                                I prioritize listening to my clients' needs and using my experience to create enjoyable and personalized services.
                            </p>
                            <p>
                                When I'm not behind the chair, I cherish spending quality time with my family and friends, enjoying the simple moments that make life special.
                            </p>
                        </section>
                        </section>
                        </div>
    )
}

export default Jen_Evans;