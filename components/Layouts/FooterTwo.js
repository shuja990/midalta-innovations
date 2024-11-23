import React, { Component } from 'react';
import Link from 'next/link';
import FreeTrialArea from '../Common/FreeTrialArea';
class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <React.Fragment>
                <FreeTrialArea />
            <footer className="footer-area">
                <div className="divider"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/images/whit-logo.png" alt="image" style={{position:"unset !important"}}/>
                                    </a>
                                </div>
                                <p>Midalta Innovation is a leading strategy and innovation firm. For nearly 10 years, we’ve helped create new businesses and reinvent existing ones. Midalta has partnered with the world’s most admired companies to help crack their biggest growth challenges and respond quickly to pressing market issues.</p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Company</h3>

                                <ul className="services-list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/careers">
                                            <a>Careers</a>
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>

                                <ul className="support-list">
                                   
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Info</h3>

                                <ul className="footer-contact-info">
                                    {/* <li>Location: <span>6th Floor, Elegant Tower, York, USA</span></li> */}
                                    <li>Email: <span>info@midalta.com</span></li>
                                    <li>Phone: <span>855-Midalta</span></li>
                                </ul>
                                {/* <ul className="social">
                                <li>
                                        <Link  href="#">
                                            <a href="https://www.linkedin.com/company/midalta-innovations/" target="_blank">
                                                <i className="bx bxl-linkedin"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="https://www.instagram.com/midaltainnovation/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="https://www.facebook.com/MidaltaInnovation/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a href="https://twitter.com/MidaltaNYC" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    
                                </ul> */}
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>Copyright @{currentYear} Midalta Innovation.</p>
                    </div>
                </div>
            </footer>
            </React.Fragment>
        );
    }
}

export default Footer;