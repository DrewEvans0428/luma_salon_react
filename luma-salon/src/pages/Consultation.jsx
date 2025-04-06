import './css/Consultation.css';
import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

function Consultation() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0506e354-7e3a-4b83-8ba7-a1c32879aad6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
}
    return (
        <>
       <Header />
        <section id="Consultation-content">
        <section className="page-title">
            <hr />
        </section>
        <div id="consultation-container">
            <form id="consultation-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <label for="stylist">Stylist:</label>
                    <select id="selct-stylist" name="stylist" required>
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
                    <input type="date" id="date" name="Date" required/>
                </div>
                <button id="consultation-button" type="submit">Submit Consultation</button>

                <div id='result'>
                    <p>{result}</p>
                </div>
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