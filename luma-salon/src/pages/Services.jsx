import "./css/Services.css";
import Header from "../components/Header";
import Footer from "../components/footer";
import Coloring from "../components/Coloring";
import Haircut from "../components/haircut";
import Spa from "../components/Spa";
import Waxing from "../components/Waxing";
//import ServicesPlan from "../components/ServicesPlan";
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
            <Haircut />
            <Waxing />
            <Coloring />
            <Spa />
        </div>
        <hr />
        <Footer />
        </>
    )
}

export default Services;