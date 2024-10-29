import React, { Component } from 'react';
import Link from 'next/link';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
            <div className="contact-info-content">
                <h3>Contact us by Phone Number or Email Address</h3>

                <h2>
                    <span className="number">855-Midalta</span>
                    <span className="or">OR</span>
                    <span className="email">info@midalta.com</span>
                </h2>
{/* 
                <ul className="social">
                    <li>
                        <Link href="#">
                            <a href="https://twitter.com/MidaltaNYC" target="_blank"><i className="bx bxl-twitter"></i></a>
                        </Link>
                    </li>
                 
                    <li>
                        <Link href="#">
                            <a href="https://www.facebook.com/MidaltaInnovation/" target="_blank"><i className='bx bxl-facebook'></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a href="https://www.linkedin.com/company/midalta-innovations/" target="_blank"><i className="bx bxl-linkedin"></i></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a  href="https://www.instagram.com/midaltainnovation/" target="_blank"><i className="bx bxl-instagram"></i></a>
                        </Link>
                    </li>
                </ul> */}
            </div>
        </div>
        );
    }
}

export default ContactInfo;