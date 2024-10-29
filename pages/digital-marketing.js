import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";
import Head from "next/head"

class ServiceDetails extends Component {
  state = {
    para1: {
      caption: "",
      h1: "Digital Marketing ",
      p1: "Do you want to benefit from digital marketing to take your business to the next level? \n\n Use our professional digital marketing services that focus on designing a marketing campaign and launching it effectively to connect with the audience and expand your customer base.",
      cap: "Some of the most prominent channels we use for digital marketing are:",
      list1: [
        "Search Engine Optimization (SEO) for Organic Growth",
        "Social Media Marketing",
        "Content Marketing",
        "Affiliate Marketing",
      ],
      list2: ["Email Marketing", "Mobile Marketing", "Influencer Marketing"],
      image: "",
    },
    para2: {
      caption: "",
      h1: "DIGITAL",
      p1: "Midalta Innovation is committed to designing a comprehensive digital marketing plan and executing it with maximum efficiency to enjoy the benefits of the digital revolution.\n You can rely on our professional advice to make smart business decisions and enhance company-customer engagement. Once you hire our professional marketing services, you will not have to worry about marketing trends yourself. \n Instead, you can fully rely on us to design effective marketing operations and handle all of the technical aspects of digital marketing.",
    },
    para3: {
      caption: "",
      h1: "ISSUE ADVOCACY",
      p1: "We will work closely with you throughout this process. Your feedback is of utmost importance during marketing to ensure the campaigns are working successfully. We will tweak the marketing campaigns as per your requirements to get the desired results. ",
      image: "expertise",
    },
    list: false,
  };
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>{this.state.para1.h1}</title>
          <meta
            name="description"
            content={
              "Midalta Innovation is committed to designing a comprehensive digital marketing plan and executing it with maximum efficiency to enjoy the benefits of the digital revolution. "
            }
          />{" "}
        </Head>
        <PageTitleArea pageTitle="Digital Marketing" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
