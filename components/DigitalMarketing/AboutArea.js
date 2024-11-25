import React, { Component } from "react";

export default class AboutArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expertise: [
        {
          title: "Agriculture",
          description:
            "Creating sustainable and scalable solutions to enhance productivity and drive innovation in farming and agribusiness.",
          icon: "bx bxs-leaf"
        },
        {
          title: "Financial Services",
          description:
            "Guiding financial institutions and private equity firms through regulatory challenges and investment opportunities.",
          icon: "bx bx-money"
        },
        {
          title: "Government & Private Sector",
          description:
            "Helping public institutions and private companies navigate governance, compliance, and strategic growth.",
          icon: "bx bx-building"
        },
        {
          title: "Travel Logistics & Infrastructure",
          description:
            "Optimizing supply chains, transportation networks, and infrastructure development for global competitiveness.",
          icon: "bx bx-map"
        },
        {
          title: "Tourism & Private Capital",
          description:
            "Maximizing investment potential in tourism and hospitality industries with targeted capital solutions.",
          icon: "bx bx-globe"
        }
      ]
    };
  }

  render() {
    return (
      <div className="about-area">
        <div className="container">
          <div className="section-title text-left">
            <span className="sub-title">About Us</span>
            <h2>Who We Are</h2>
          </div>
        </div>

        <div className="container-fluid">
          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="about-inner-image">
                  <img
                    src="/images/marketing-agency/about-image.jpg"
                    alt="About Us"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-inner-content">
                  <p>
                    Midalta Innovations is a dynamic consulting firm offering
                    specialized services to both public and private sectors.
                    We operate at the intersection of local knowledge and
                    global insight, helping clients navigate the intricacies
                    of rapidly changing markets and industries. Our firm has
                    established itself as a trusted partner for businesses
                    seeking growth, government entities looking for strategic
                    solutions, and investors keen on unlocking opportunities
                    across diverse geographies.
                  </p>
                  <h4>Our Expertise:</h4>
                  <ul className="expertise-grid">
                    {this.state.expertise.map((item, index) => (
                      <li key={index} className="expertise-item">
                        {/* <i className={item.icon}></i> */}
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
