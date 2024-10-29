import React, { Component } from 'react';
import Link from 'next/link';

class IndustriesWeServe extends Component {
    render() {
        return (
            <section className="services-area ptb-100 bg-f4f6fc">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-image">
                            <div className="image">
                                <img src="/images/home-saas/feature5.png" alt="Industries We Serve" />
                            </div>
                        </div>

                        <div className="services-content it-service-content">
                            <div className="content">
                                <div className="fun-facts-inner-content">
                                    <h2>Industries We Serve</h2>
                                    <p>
                                        At <strong>Midalta Innovations</strong>, we offer tailored consulting services
                                        to a range of industries, ensuring each client benefits from sector-specific
                                        insights and strategies.
                                    </p>
                                    <ul>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Agriculture & Agri-business
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Financial Services & Private Capital
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Government & Public Sector
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Travel Logistics & Infrastructure
                                        </li>
                                        <li>
                                            <i className="bx bx-badge-check"></i>
                                            Tourism & Hospitality
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape9">
                    <img src="/images/shape/shape9.png" alt="shape" />
                </div>
            </section>
        );
    }
}

export default IndustriesWeServe;
