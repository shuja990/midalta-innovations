import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "next/link";

export default class Featured extends Component {
  render() {
    return (
      <div className="featured-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={50}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img1.jpg"
                    alt="image"
                  />
                  <h3>STRATEGY</h3>
                  <p className="newww">
                    We strongly believe that every business is unique because
                    every business owner has a unique perspective and vision for
                    a company. Once you contact us for our reliable digital
                    marketing and IT services, we will thoroughly analyze your
                    business using effective data analytics tools to design and
                    implement specialized solutions for optimum growth.
                  </p>
                  <Link href="/strategy">
                    <div>
                      <a
                        className="read-more-btn"
                        style={{ marginTop: "10px" }}
                      >
                        Read More <i className="bx bx-right-arrow-alt"></i>
                      </a>
                    </div>
                  </Link>

                  <Link href="/strategy">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-6">
                            <ScrollAnimation animateIn="fadeInUp" delay={100} animateOnce={true}>
                                <div className="single-featured-box">
                                    <img src="/images/marketing-agency/featured-img2.jpg" alt="image" />
                                    <h3>FUTURISM & INNOVATION</h3>
                                    <p className="newww">
                                    New business model & concept development Concept-to-commercialization Product strategy Customer experience strategy Omni-channel commerce Enterprise architecture Digital strategy
                                    </p>
                                    <Link href="/service-details">
                                        <a className="read-more-btn">
                                            Read More <i className='bx bx-right-arrow-alt'></i>
                                        </a>
                                    </Link>

                                    <Link href="/service-details">
                                        <a className="link-btn"></a>
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div> */}
            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={100}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img2.jpg"
                    alt="image"
                  />
                  <h3>TECHNOLOGY</h3>
                  <p className="newww">
                    When you are running a full-fledged business, you cannot
                    keep up with the changing trends due to modern tools and
                    technology. The good thing is that we offer reliable
                    software development, maintenance, and upgradation services
                    to create an impressive digital experience for your
                    customers to maximize sales.
                  </p>
                  <Link href="/technology">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/technology">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-lg-4 col-md-10 col-sm-12">
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={150}
                animateOnce={true}
              >
                <div className="single-featured-box">
                  <img
                    src="/images/marketing-agency/featured-img3.jpg"
                    alt="image"
                  />
                  <h3>Transformation & Growth</h3>
                  <p className="newww">
                    Implementing data analytics and digital marketing solutions
                    is to transform your business for the better and make it
                    grow. Our professionals will become your business architect
                    to scale your business by combining the power of digital
                    marketing with the latest tools and technologies to get the
                    desired results.
                  </p>
                  <Link href="/transformation">
                    <a className="read-more-btn">
                      Read More <i className="bx bx-right-arrow-alt"></i>
                    </a>
                  </Link>

                  <Link href="/transformation">
                    <a className="link-btn"></a>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
