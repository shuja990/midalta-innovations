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
                <p>Address: 250 Park Ave 7th Floor, New York, NY 10177</p>
                <p>Phone: <a href="tel:1-855-Midalta">1-855-Midalta</a></p>
                <p>Email: <a href="mailto:newyork@midalta.com">newyork@midalta.com</a></p>
              </div>

              {/* Caribbean Office */}
              <div className="office">
                <h3>Cayman Islands Office</h3>
                <p>Address: 20 Genesis Close, George Town, Grand Cayman, KY1-1208</p>
                <p>Phone: <a href="tel:1-855-Midalta">1-855-Midalta</a></p>
                <p>Email: <a href="mailto:caymanislands@midalta.com">caymanislands@midalta.com</a></p>
              </div>

              {/* East Africa Office */}
              <div className="office">
                <h3>Singapore Office</h3>
                <p>Address: 51 Changi Business Park Central 2 Singapore 486066</p>
                <p>Phone: <a href="tel:1-855-Midalta">1-855-Midalta</a></p>
                <p>Email: <a href="mailto:singapore@midalta.com">singapore@midalta.com</a></p>
              </div>
            </div>

            <Link href="/contact">
              <a className="default-btn text-center">
                Contact Us
              </a>
            </Link>
          </div>
        </div>

        {/* Shape Images */}
        {/* <div className="shape10">
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
        </div> */}
      </section>
    );
  }
}

export default FreeTrialArea;
