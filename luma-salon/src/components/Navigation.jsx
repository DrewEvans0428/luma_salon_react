import {Outlet, Link} from "react-router-dom";
import { useState } from "react";
import './css/Navigation.css';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        console.log(menuOpen);
    }

    return (
        <div>
        <div className="hamburger-menu" onClick={toggleMenu} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        <nav id="main-nav">
                <ul id="nav-items" className = {menuOpen? "": "hide-small"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Stylist">Stylists</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Consultation">Consultations</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
            </div>
    );
};

export default Navigation;