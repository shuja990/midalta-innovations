import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <h2 className="sub-title">
                  Learn About Our People, Values, Commitment, and More
                </h2>
                <p>
                  Discover who we are, what we stand for, and how we work to create sustainable impact. At Midalta Innovations, we believe in building relationships based on trust, delivering tangible results, and fostering innovation across diverse industries.
                </p>
                <h2 className="sub-title">
                  About Us Overview
                </h2>
                <p>
                  Midalta Innovations is a consulting firm focused on driving transformation and growth in agriculture, financial services, metal and mining, oil & gas, government, travel logistics, infrastructure, tourism, and private capital. With deep roots in New York, the Caribbean, and  Africa, we deliver solutions tailored to the unique challenges of each region. Our hands-on approach, combined with our strategic insights, allows us to solve the most pressing issues facing our clients today.
                </p>

              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/AboutUs.jpeg" alt="image" />
              </div>
            </div>
            <h2 className="mt-4">
              WHO WE ARE
            </h2>
            <p>
              Midalta Innovations was founded to address the growing demand for tailored, region-specific consulting services that combine global standards with local expertise. We are consultants, innovators, and strategic partners who guide our clients through complex challenges, from regulatory hurdles to market expansion. Our core strength lies in our ability to bring together a diverse, talented team with extensive knowledge in key industries and regions.
            </p>
            <h2 className="mt-4">
              Our Leadership
            </h2>
            <p>
              Our leadership team comprises seasoned experts with decades of experience in management consulting, finance, infrastructure, and industry-specific roles across the USA,  Africa, and the Caribbean. Their vision and guidance are key to delivering the strategic insights and practical solutions that our clients depend on. We pride ourselves on cultivating leadership that is both locally informed and globally minded, ensuring we can tackle challenges from multiple perspectives.
            </p>
            <h3>Purpose, Mission & Values</h3>
            <p>
              At Midalta Innovations, our purpose is to empower businesses and governments to thrive in an ever-changing world. Our mission is to provide practical, innovative, and sustainable solutions that drive growth and resilience across key sectors. Our values include:
            </p>
            <ul>
              <li>
                <h4>Integrity:</h4>
                <p>
                  We uphold the highest standards of ethics and transparency.
                </p>
              </li>
              <li>
                <h4>Collaboration:</h4>
                <p>
                  We believe in building strong partnerships with clients and stakeholders to achieve shared goals.
                </p>
              </li>
              <li>
                <h4>Sustainability:</h4>
                <p>
                  We are committed to creating solutions that benefit both our clients and the environment.
                </p>
              </li>
              <li>
                <h4>Innovation:</h4>
                <p>
                  We strive to be at the forefront of industry trends, continuously adapting our services to meet evolving needs.
                </p>
              </li>

            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
