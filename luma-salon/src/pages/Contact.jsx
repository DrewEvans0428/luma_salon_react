import './css/Contact.css';
import Header from '../components/Header';
import Footer from '../components/footer';

function Contact () {
    return (
        <>
        <Header />
        <h1>Contact/About Us</h1>
        <h2>Leave Reviews and Learn About Us</h2>
    <hr />
        <div id="contact-content">
        <section class="page-title">
        </section>
        <hr />
        <form id="contact-form">
            <h3>Feel free to leave comments!</h3>
            <div className="contact-inputs">
                {/*Used aside to try and get elements on the side*/}
                <aside>Name: </aside>
                {/*Used input data types from w3schools*/}
                <input type="text" placeholder="Please Enter" />
            </div>
            <div className="contact-inputs">
                <aside>Phone Number: </aside>
                <input type="tel" placeholder="(123)-456-7890" />
            </div>
            <div className="contact-inputs">
                <aside>Email:</aside>
                <input type="email" placeholder="Johndoe@gmail.com" />
            </div>
            <div className="contact-inputs">
                <aside>Feedback: </aside>
                <input type="text" placeholder="Lorem ipsum odor amet, consectetuer adipiscing elit. Amet torquent netus vitae iaculis risus sapien fringilla. 
                                                Erat torquent faucibus nascetur praesent mattis. Lacus hac eu dignissim dictum dis. Cras nisl dui at tristique 
                                                lobortis himenaeos. Magna montes cursus varius neque ultricies. Lobortis vehicula aptent fames rhoncus; arcu curabitur sem." />
            </div>
            <button id="contact-button" type="submit">Submit</button>
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
