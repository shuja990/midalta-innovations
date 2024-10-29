import React, { Component } from "react";
import Link from "next/link";

class FreeTrialArea extends Component {
  render() {
    return (
      <section className="contact-us-area ptb-100 bg-f4f5fe">
        <div className="container">
          <div className="contact-us-content">
            <h2>Ready to Elevate Your Business?</h2>
            <p>
              Contact <strong>Midalta Innovations</strong> to explore how we can 
              collaborate to solve your most pressing challenges.
            </p>

            <div className="offices">
              {/* New York Office */}
              <div className="office">
                <h3>New York Office</h3>
                <p>Address: [Address]</p>
                <p>Phone: [Phone Number]</p>
                <p>Email: <a href="mailto:[Email Address]">[Email Address]</a></p>
              </div>

              {/* Caribbean Office */}
              <div className="office">
                <h3>Caribbean Office</h3>
                <p>Address: [Address]</p>
                <p>Phone: [Phone Number]</p>
                <p>Email: <a href="mailto:[Email Address]">[Email Address]</a></p>
              </div>

              {/* East Africa Office */}
              <div className="office">
                <h3>East Africa Office</h3>
                <p>Address: [Address]</p>
                <p>Phone: [Phone Number]</p>
                <p>Email: <a href="mailto:[Email Address]">[Email Address]</a></p>
              </div>
            </div>

            <Link href="/contact">
              <a className="default-btn">
                Contact Us
                <span></span>
              </a>
            </Link>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape10">
          <img src="/images/shape/shape10.png" alt="shape" />
        </div>
        <div className="shape11">
          <img src="/images/shape/shape7.png" alt="shape" />
        </div>
        <div className="shape12">
          <img src="/images/shape/shape11.png" alt="shape" />
        </div>
        <div className="shape13">
          <img src="/images/shape/shape12.png" alt="shape" />
        </div>
      </section>
    );
  }
}

export default FreeTrialArea;
