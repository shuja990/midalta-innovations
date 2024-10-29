import React, { Component } from "react";
import {
  FaHome,
  FaEye,
  FaHandPointUp,
  FaSun,
  FaUserFriends,
  FaRegHeart,
} from "react-icons/fa";

class FeaturesStyleOne extends Component {
  render() {
    return (
      <section className="pt-100 pb-70 p-4 m-4">
        <div className="features-custom">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <p>OUR EMPLOYEE EXPERIENCE</p>
            <h2 className="col-lg-10">
              Pursue An Exciting Career and Extensively Enjoy Your Life
            </h2>
          </div>
          <div>
            <div
              className="col-lg-4 col-md-12 col-sm-12 feature-custom"
              style={{ marginBottom: "50px" }}
            >
              <div
                className="col-lg-12"
                style={{ display: "flex", margin: "5px" }}
              >
                <FaHome
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Work where you live</h4>
                  <p>
                    Grow as an expert and a leader. We offer flexible learning
                    options on hundreds of topics, from public speaking to Agile
                    project management, and we pay for certifications in the
                    world's top technology platforms.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-12"
                style={{ display: "flex", margin: "5px" }}
              >
                <FaHandPointUp
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Choose your career</h4>
                  <p>
                    Build a career that gets you excited about coming to work
                    every day—whether that's as an individual contributor or a
                    People Leader. When you love and value what you do, it never
                    feels like work but a motivation to become the best you.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-12"
                style={{ display: "flex", margin: "5px" }}
              >
                <FaUserFriends
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Find the fun</h4>
                  <p>
                    Celebrate with your team or explore your interests with
                    Midalta Innovationers. There's something for everyone, from
                    book clubs and speaking events to annual resort retreats.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 feature-custom">
              <div
                className="col-lg-12 "
                style={{ display: "flex", margin: "5px" }}
              >
                <FaEye
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Feed your curiosity</h4>
                  <p>
                    Put your suitcase away. At Midalta Innovation, you can work
                    with clients in the city you call home and make a difference
                    every day for one person or millions.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-12"
                style={{ display: "flex", margin: "5px" }}
              >
                <FaSun
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Cultivate well-being</h4>
                  <p>
                    Put your suitcase away. At Midalta Innovation, you can work
                    with clients in the city you call home and make a difference
                    every day for one person or millions.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-12"
                style={{ display: "flex", margin: "5px" }}
              >
                <FaRegHeart
                  className="col-lg-3"
                  style={{
                    width: "35px",
                    height: "35px",
                    margin: "15px",
                    color: "#0c62fb",
                  }}
                />
                <div className="col-lg-9">
                  <h4>Love your workspace</h4>
                  <p>
                    Our modern offices are designed to feel inspiring and
                    inviting. Free snacks, lounge spaces, and close to all the
                    action—and best lunch spots—in your city.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesStyleOne;
