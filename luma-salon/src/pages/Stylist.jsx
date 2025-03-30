import "./css/Stylist.css";
import Header from "../components/Header";
import Footer from "../components/footer";

function Stylist(){
    return(
    <>
    <Header />
    <section id="stylists-content">
        <section class="page-title">
            <hr />
        </section>
            <div class="stylist-container">
                <div class="stylist">
                    {/*Jennifer evans Section*/}
                    <section id="jen-evans">
                    <h3>Jennifer Evans</h3>
                    <h4>Owner/Stylist</h4>
                    <div class="image">
                        <img src="images/jennifer_evans.jpg" alt="placeholder" />
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
                {/*Rhonda Reeves section*/}
                <div class="stylist">
                    <section id="reeves">
                    <h3>Rhonda Reeves</h3>
                    <h4>Owner/Stylist</h4>
                    <div class="image">
                        <img src="images/thumbnail_IMG_6222.jpg" alt="placeholder" />
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
            </div>
            <hr />
        </section>
    <Footer />
    </>
    )
}

export default Stylist;