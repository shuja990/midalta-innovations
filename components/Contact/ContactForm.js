import React, { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'

const alertContent = () => {
    MySwal.fire({
        title: 'Congratulations!',
        text: 'Your message was successfully send and will back to you soon',
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    })
}

// Form initial state
const INITIAL_STATE = {
    name: "",
    email: "",
    number: "",
    subject: "",
    text: ""
};

const ContactForm = () => {
    const [contact, setContact] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setContact(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const url = `${baseUrl}/api/contact`;
            const { name, email, number, subject, text } = contact;
            const payload = { name, email, number, subject, text };
            const response = await axios.post(url, payload);
            setContact(INITIAL_STATE);
            alertContent();
        } catch (error) {
        }
    };

    return (
        <div className="contact-form">
        <h3>Contact</h3>

        <form id="contactForm">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Your Phone" required />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                        <input type="text" name="msg_subject" id="msg_subject" className="form-control"  placeholder="Your Subject" required />
                    </div>
                </div>

                <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                        <textarea name="message" className="form-control" id="message" rows="6" placeholder="Your Message"></textarea>
                    </div>
                </div>

                <div className="col-lg-12 col-md-12 text-center">
                    <button type="submit" className="default-btn">
                        <i className='bx bxs-paper-plane'></i> 
                            Send Message 
                        <span></span>
                    </button>
                </div>
            </div>
        </form>
    </div>
    )
}

export default ContactForm;