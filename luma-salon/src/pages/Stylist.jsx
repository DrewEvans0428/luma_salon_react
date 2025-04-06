import "./css/Stylist.css";
import Header from "../components/Header";
import Footer from "../components/footer";
import Jen_Evans from "../components/Jen_evans";
import Ronda_Reeves from "../components/Ronda_Reeves";

function Stylist(){
    return(
    <>
    <Header />
    <section id="stylists-content">
        <section class="page-title">
            <hr />
        </section>
            <div class="stylist-container">
                <Jen_Evans />
                {/*Rhonda Reeves section*/}
                <Ronda_Reeves />
            </div>
            <hr />
        </section>
    <Footer />
    </>
    )
}

export default Stylist;