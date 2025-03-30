import "./css/Services.css";
import Header from "../components/Header";
import Footer from "../components/footer";
import haircut from "../images/haircut.jpg";
import waxing from "../images/waxing.jpg";
import coloring from "../images/coloring.jpg";
import mermaid_spa from "../images/mermaid_spa.jpg"

function Services() {
    return (
        <>
        <Header />
        <section id="services-content"></section>
        <section class="page-title">
            <h2 id="service-page-description">What we have to offer:</h2>
            <hr />
        </section>
        <div className="services-area">
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
            <div className="service">
                <h3>Head Spa Treatments</h3>
                <div id="headspa-image">
                    <img src={mermaid_spa} alt="placeholder" />
                </div>
                <p>
                    Our headspa treatments are new to Luma Salon! It is led by Jenny and she also bases price based on time and what is needed/wanted. Come enjoy these soothing head spas at Luma Salon!
                </p>
            </div>
        </div>
        <hr />
        <Footer />
        </>
    )
}

export default Services;