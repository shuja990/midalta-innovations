import React, { Component } from "react";
import { FaHome, FaHandPointUp, FaUserFriends } from "react-icons/fa";

class SectorDetailsContent extends Component {
    render() {
        const { data } = this.props;

        return (
            <section className="services-area ptb-100">
                <div className="container">
                    <div className="row">
                        {/* Subtitle and Description */}
                        <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
                            <div className="about-content">
                                <h2 className="sub-title">{data.subtitle}</h2>
                                <p style={{ whiteSpace: "pre-line" }}>{data.description}</p>
                            </div>
                        </div>

                        {/* Perspectives */}
                        {data.perspectives && (
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
                                <h3 className="mb-4">Our Perspectives:</h3>
                                <div className="row">
                                    {data.perspectives.map((item, index) => (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="single-feature">
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Subsections */}
                        {data.subSections &&
                            data.subSections.map((section, index) => (
                                <div
                                    className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4"
                                    key={index}
                                >
                                    <div className="about-content">
                                        <h2 className="sub-title">{section.title}</h2>
                                        <p style={{ whiteSpace: "pre-line" }}>
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        {/* Approach */}
                        {data.approach && (
                            <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
                                <h3 className="mb-4">Our Approach:</h3>
                                <div className="row">
                                    {data.approach.map((item, index) => (
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="single-feature">
                                                {/* You can replace icons as needed */}
                                                {/* <FaHome
                                                    style={{
                                                        width: "35px",
                                                        height: "35px",
                                                        marginBottom: "15px",
                                                        color: "#0c62fb",
                                                    }}
                                                /> */}
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Image */}
                        {data.image && (
                            <div className="col-lg-12 col-md-12">
                                <div className="about-image">
                                    <img src={data.image} alt={data.title} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default SectorDetailsContent;
