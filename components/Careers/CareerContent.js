import React, { Component } from "react";

class AboutContent extends Component {
  render() {
    return (
      <section className="about-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <p>
                  WHAT MAKES MIDALTA INNOVATION DIFFERENT – A CUT ABOVE THE REST
                </p>
                <h2 className="sub-title">
                  With Midalta Innovation, our clients are always #1!
                </h2>
                At Midalta Innovation, we offer variety, fulfillment, and
                balance. We love working with our companies, ensuring that they
                keep up with the latest technology while flexing their skills
                across industries—enjoy the comfort of true rest while your
                business flourishes.
                <br />
                We attract the best in the business. People from enterprises,
                consultancies, agencies, and startups—are all drawn to building
                a career that's both exciting and sustainable.
                <p>INCLUSION AND DIVERSITY</p>
              <h4>
                We're committed to creating a safe, diverse, and inclusive work
                environment.
              </h4>
              <p>
                This means we strive at all times to encourage open
                conversation, hire diverse talent, and continually listen and
                learn from one another.
              </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/withmidalta.jpeg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutContent;
