import './css/Contact.css';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/footer';

function Contact () {
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
      };
    return (
        <>
        <Header />
    <hr />
        <div id="contact-content">
        <section class="page-title">
        </section>
        <hr />
        <form id="contact-form" onSubmit={onSubmit}>
            <h3>Feel free to leave comments!</h3>
            <div className="contact-inputs">
                {/*Used aside to try and get elements on the side*/}
                <aside>Name: </aside>
                {/*Used input data types from w3schools*/}
                <input type="text" placeholder="Please Enter" name="Name" required/>
            </div>
            <div className="contact-inputs">
                <aside>Phone Number: </aside>
                <input type="tel" placeholder="(123)-456-7890" name="Phone" required/>
            </div>
            <div className="contact-inputs">
                <aside>Email:</aside>
                <input type="email" placeholder="Johndoe@gmail.com" name="email"required/>
            </div>
            <div className="contact-inputs">
                <aside>Feedback: </aside>
                <input type="text" placeholder="Lorem ipsum odor amet, consectetuer adipiscing elit. Amet torquent netus vitae iaculis risus sapien fringilla. 
                                                Erat torquent faucibus nascetur praesent mattis. Lacus hac eu dignissim dictum dis. Cras nisl dui at tristique 
                                                lobortis himenaeos. Magna montes cursus varius neque ultricies. Lobortis vehicula aptent fames rhoncus; arcu curabitur sem." 
                                                name="Email"
                                                required/>
            </div>
            <button id="contact-button" type="submit">Submit</button>
            <span>{result}</span>
        </form>
        <hr />
        <div id="about">
            <h2>About Us</h2>
            <p id="about-text">Jennifer and Ronda opened up Luma salon in 2014. When opening it was their first time running their own business. From opening day, there has been alot of successes that have arised.
                Jen and Ronda have learned the ins and outs of the business and how to build amazing relationships with clients. We are located at 746 Saint Andrews Blvd, Charleston, SC. Our cell phone # is (843)-297-4807.
            </p>
        </div>
    </div>
    <hr />
    <Footer />
    </>
    );
}

export default Contact;
