import React from 'react';
import Link from 'next/link';

const GlobalReachAndWhyChooseUs = () => {
    return (
        <section className="global-reach-area ptb-100 bg-light">
            <div className="container">
                <div className="row">
                    {/* Our Global Reach Section */}
                    <div className="col-lg-6">
                        <div className="content">
                            <h2>Our Global Reach</h2>
                            <p>
                                With offices and experts in <strong>New York</strong>,
                                the <strong>Caribbean</strong>, and <strong>East Africa</strong>,
                                Midalta Innovations is strategically positioned to serve a wide
                                array of clients across diverse geographic regions. Our global
                                expertise enables us to bring unique perspectives and localized
                                strategies that empower businesses and governments alike.
                            </p>
                            <div className="locations">
                                <ul>
                                    <li>
                                        <i className="bx bx-globe"></i> New York
                                    </li>
                                    <li>
                                        <i className="bx bx-globe"></i> Caribbean
                                    </li>
                                    <li>
                                        <i className="bx bx-globe"></i> East Africa
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Image Section for Global Reach */}
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img src="/images/home-saas/feature5.png" alt="Global Reach" />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    {/* Why Choose Us Section */}
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img src="/images/home-saas/feature5.png" alt="Why Choose Us" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="content">
                            <h2>Why Choose Us</h2>
                            <p>
                                Midalta Innovations is a trusted advisor for organizations
                                aiming to drive growth, foster innovation, and remain resilient
                                in an increasingly complex world. We combine deep industry
                                expertise with hands-on experience, providing solutions that
                                are both visionary and practical.
                            </p>
                            <Link href="/about-us">
                                <a className="default-btn black-btn">
                                    Learn More
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalReachAndWhyChooseUs;
