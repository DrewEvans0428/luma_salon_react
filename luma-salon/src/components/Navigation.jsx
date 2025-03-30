import {Outlet, Link} from "react-router-dom";
import './css/Navigation.css';

function Navigation() {
    return (
        <nav id="main-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Stylist">Stylists</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Consultations">Consultations</Link></li>
                    <li><Link to="/Contact">Contact Us</Link></li>
                </ul>
            </nav>
    );
};

export default Navigation;