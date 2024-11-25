import React, { Component } from 'react';
import Link from 'next/link';

class ServiceRightImageStyle extends Component {
    render() {
        return (
            <section className="services-area bg-right-shape ptb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="services-content it-service-content">
                            <div className="content left-content">
                                <div className="icon">
                                    <img src="/images/icon1.png" alt="image" />
                                </div>
                                <span className="sub-title">Services</span>
                                <h2>Our Consulting Solutions</h2>
                                <p>Midalta Innovations offers a broad range of consulting services that cater to key industries. Whether your organization faces a strategic challenge or requires comprehensive project management, our team is here to provide hands-on, practical solutions.</p>

                                <div className="row">
                                    {[
                                        {
                                            title: "Strategic Advisory",
                                            description: "We offer market insights, growth strategies, and expert guidance to help businesses expand across borders."
                                        },
                                        {
                                            title: "Crisis Management & Compliance",
                                            description: "Midalta specializes in helping organizations navigate regulatory landscapes, ensuring compliance, and managing crises effectively."
                                        },
                                        {
                                            title: "Sustainability & ESG Solutions",
                                            description: "We help businesses incorporate sustainable practices and meet environmental, social, and governance (ESG) goals."
                                        },
                                        {
                                            title: "Project Development & Management",
                                            description: "From inception to completion, we guide large-scale projects in agriculture, mining, infrastructure, and more."
                                        },
                                        {
                                            title: "Investment & Private Capital Services",
                                            description: "Our team connects businesses with private capital for growth, expansion, and new ventures in tourism, agriculture, and energy."
                                        }
                                    ].map(service => (
                                        <div className="col-sm-12">
                                            {/* <div className="feature-box"> */}
                                            <div>
                                                {/* <i className='bx bxs-badge-check'></i> */}
                                                <strong>{service.title}: </strong> {service.description}
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>

                        <div className="services-image">
                            <div className="image">
                                <img src="/images/4022164.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceRightImageStyle;