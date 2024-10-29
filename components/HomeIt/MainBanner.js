import React, { Component } from "react";
import Link from "next/link";

class MainBanner extends Component {
  render() {
    return (
      <>
        <div className="main-banner main-banner-one">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12">
                <div className="main-banner-content">
                  <div className="d-table">
                    <div className="d-table-cell">
                      <div className="content">
                        <h1>Midalta Innovations: Strategic Solutions for Global Growth</h1>

                        <p>
                          Welcome to Midalta Innovations, a consulting firm dedicated to delivering impactful, mid level advisory services across diverse sectors. From agriculture and financial services to travel logistics, we leverage our expertise to drive sustainable growth and solve complex challenges. With a presence in New York, the Caribbean, and East Africa, our global reach allows us to tailor solutions that resonate with the unique needs of businesses, governments, and investors.
                        </p>

                        <Link href="/contact">
                          <a className="default-btn">
                            <i className="bx bxs-hot"></i>
                            Get Started
                            <span></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-12">
                <div className="banner-image mbanner-bg-one">
                  <div className="d-table">
                    <div className="d-table-cell">
                      {/* Animate Image */}
                      <div className="animate-banner-image">
                        <img
                          src="/images/animate-banner-img1.jpg"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>

                  {/* For Small Device */}
                  <img
                    src="/images/banner-slider/banner-img1.jpg"
                    className="mbanner-img"
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images */}
          <div className="shape20">
            <img src="/images/shape/shape19.png" alt="image" />
          </div>
          <div className="shape21">
            <img src="/images/shape/shape20.png" alt="image" />
          </div>
          <div className="shape19">
            <img src="/images/shape/shape18.png" alt="image" />
          </div>
          <div className="shape22">
            <img src="/images/shape/shape21.png" alt="image" />
          </div>
          <div className="shape23">
            <img src="/images/shape/shape22.svg" alt="image" />
          </div>
          <div className="shape24">
            <img src="/images/shape/shape23.png" alt="image" />
          </div>
        </div>
      </>
    );
  }
}

export default MainBanner;
