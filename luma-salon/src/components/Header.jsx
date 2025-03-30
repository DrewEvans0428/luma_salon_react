import "./css/Header.css";
import Navigation from "./Navigation";

function Header() {
    return(
        <header id="main-header">
            <section class="main-header">
            <div class="hamburger-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <Navigation />
        </section>
        <h1>Luma Salon</h1>
        <h2>Where we build relationships with Clients</h2>
        </header>
    );
};

export default Header;