import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/footer";
import home_image from "../images/slideshow/home-image.jpg";
import SlideShow from "../components/SlideShow";

function Home() {
    return(
        <>
        <section id="home-content">
        <section className="page-title">
            {/*Places horizontal Line*/}
            <hr />
        <h3>746 Saint Andrews Blvd, Charleston, SC</h3>
        </section>
       <SlideShow />
        <p id="home-text">
            Luma Salon is a premier beauty destination located in West Ashley, just minutes from downtown Charleston and James Island. 
            We specialize in hair color and haircutting, offering services that range from simple touch-ups to complete transformations.
        </p>
        <p id="home-text">
            At Luma Salon, we pride ourselves on delivering expert hair care and excellent customer service in an intimate and inviting suite-style setting.
        </p>
        <hr />
    </section>
        <Footer />
        </>
    );
}

export default Home;