import './css/Consultation.css';
import Header from '../components/Header';
import Footer from '../components/footer';

function Consultation() {
    return (
        <>
       <Header />
        <h1>Consultations</h1>
        <h2>How to Get Scheduled</h2>
        <section id="Consultation-content">
        <section className="page-title">
            <hr />
        </section>
        <div id="consultation-container">
            <form id="consultation-form">
                <div className="form-group">
                    <label for="stylist">Stylist:</label>
                    <select id="selct-stylist">
                        {/*--Found how to get dropdown from w3schools using select */}
                        <option>Jennifer Evans</option>
                        <option>Rhonda Reeves</option>
                    </select>
                </div>

                <div className="form-group">
                    <label for="services">Services Needed: </label>
                    <br />
                    <input type="checkbox" id="haircut" name="haircut" value="Haircut" />
                    <label for="haircut"> Haircut </label>
                    <input type="checkbox" id="waxing" name="waxing" value="Waxing" />
                    <label for="waxing"> Waxing </label>
                    <br />
                    <input type="checkbox" id="head-spa" name="head-spa" value="Head-spa" />
                    <label for="head-spa"> Head Spa </label>
                    
                    <input type="checkbox" id="coloring" name="coloring" value="Coloring" />
                    <label for="coloring"> Coloring </label>
                    <br />
                </div>
                <div className="form-group">
                    <aside>Potential Date:</aside>
                    <input type="date" id="date" />
                </div>
                <button id="consultation-button" type="submit">Submit Consultation</button>
            </form>
            {/*Note Section*/}
            <div id="note">
                <h3>Note:</h3>
                <p id="note-text">
                    Not everyone is entitled to appointments or consultations. Please leave your contact below and what services you want done. Jennifer or Ronda will reach back to you when they have the available time.
                    They will contact via phone number so be sure to be on the lookout to get you consultation booked ASAP.
                </p>
            </div>
        </div>
        <hr />
    </section>
    <Footer />

        </>
    )
}

export default Consultation;