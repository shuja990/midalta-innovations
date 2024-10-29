import React, { Component } from "react";
import Link from "next/link";
import {
    FaHome,
    FaEye,
    FaHandPointUp,
    FaSun,
    FaUserFriends,
    FaRegHeart,
  } from "react-icons/fa";
class ServiceDetailsContent extends Component {
  
  render() {
    return (
      <section className="services-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
              <div className="row align-items-start">
                <div className="col-lg-12 col-md-12">
                  <div className="about-content">
                    <p>{this.props.data.para1.caption}</p>
                    <h2 className="sub-title">{this.props.data.para1.h1}</h2>
                    <p style={{whiteSpace: "pre-line"}}>
                    {this.props.data.para1.p1}
                    </p>
                    <p>{this.props.data.para1.cap}</p>
                    <hr style={{color:"grey"}}/>
                    <div className="servicedetailsnewcontent">
                    <ul>
                        {
                            this.props.data.para1.list1.map((e,id)=>(
                                <li key={id} style={{textAlign:"left"}}>{e}</li>
                            ))
                        }
                    </ul>
                    <ul>
                        {
                            this.props.data.para1.list2.map((e,idx)=>(
                                <li key={idx} style={{textAlign:"left"}}>{e}</li>
                            ))
                        }
                    </ul>
                    </div>
                  </div>
                </div>
{/* 
                <div className="col-lg-6 col-md-12">
                  <div className="about-image">
                    <img src="/images/about-img.jpg" alt="image" />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
              <div className="displ row align-items-start">
                {/* <div className="ord1">
                  <div className="about-image">
                    <img src="/images/about-img.jpg" alt="image" />
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="about-content">
                      <p>{this.props.data.para2.caption}</p>
                    <h2 className="sub-title" style={{fontSize:"32px"}}>{this.props.data.para2.h1}</h2>
                    <p style={{whiteSpace: "pre-line"}}>
                    {this.props.data.para2.p1}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 pb-4 mb-4">
              <div className="row align-items-start">
                <div className="col-lg-12 col-md-12">
                  <div className="about-content">
                      <p>{this.props.data.para3.caption}</p>
                    <h2 className="sub-title">{this.props.data.para3.h1}</h2>
                    <p style={{whiteSpace: "pre-line"}}>
                    {this.props.data.para3.p1}
                    </p>
                  </div>
                </div>

                {/* <div className="col-lg-6 col-md-12">
                  <div className="about-image">
                    <img src="/images/about-img.jpg" alt="image" />
                  </div>
                </div> */}
              </div>
            </div>
            { this.props.data.list && 
           
            <div className="features-custom">
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h2 className="col-lg-10">
            {this.props.data.list.heading}
            </h2>
          </div>
          <div>
          <div className="col-lg-4 col-md-12 col-sm-12 feature-custom" style={{marginBottom:"50px"}}>
            <div
              className="col-lg-12"
              style={{ display: "flex", margin: "5px" }}
            >
              <FaHome
                className="col-lg-3"
                style={{ width: "35px", height: "35px", margin: "15px",color: "#0c62fb", }}
              />
              <div className="col-lg-9">
                <h4>{this.props.data.list.item1.title}</h4>
                <p>
                {this.props.data.list.item1.text}
                </p>
              </div>
            </div>
            <div
              className="col-lg-12"
              style={{ display: "flex", margin: "5px" }}
            >
              <FaHandPointUp
                className="col-lg-3"
                style={{ width: "35px", height: "35px", margin: "15px",color: "#0c62fb", }}
              />
              <div className="col-lg-9">
                <h4>{this.props.data.list.item2.title}</h4>
                <p>
                {this.props.data.list.item2.text}
                </p>
              </div>
            </div>
            <div className="col-lg-12" style={{ display: "flex",margin: "5px" }}>
              <FaUserFriends
                className="col-lg-3"
                style={{ width: "35px", height: "35px", margin: "15px",color: "#0c62fb", }}
              />
              <div className="col-lg-9">
                <h4>{this.props.data.list.item3.title}</h4>
                <p>
                {this.props.data.list.item3.text}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
        }
          </div>
        </div>
      </section>
    );
  }
}

export default ServiceDetailsContent;
