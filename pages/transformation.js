import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";
import Head from 'next/head'
class ServiceDetails extends Component {
  state = {
    para1: {
      caption: "TRANSFORMATION & GROWTH",
      h1: "ASSURED DELIVERY – FROM MIDALTA INNOVATION TO YOU",
      p1: "Midalta Innovation can help you keep up with the changing trends of technology to implement a strong digital transformation strategy and ensure maximum customer satisfaction. Whether you are a startup or a growing business, we are committed to transforming your business model with the help of specialized IT and digital marketing solutions.",
      cap: "",
      list1: [
        "Process and Product Optimization",
        "Process and Product Optimization",
        "Implementation of Cloud-Based Systems",
      ],
      list2: [
        "Maximizing Productivity and Agility",
        "Change and Employee Management",
      ],
      image: "",
    },
    para2: {
      caption: "",
      h1: "Quick Adaption and Adoption",
      p1: "Adapting to changing industry standards through the adoption of modern tools and technologies plays a critical role in the success of a business. These types of procedures can vary from improving technology implementation to customer management. \n Midalta Innovation is proud to offer comprehensive technology solutions to help you adopt modern trends in the IT industry and make your business a leading name in the sector. Our team takes a comprehensive approach to transforming and modernizing a business by enhancing the organizational culture and improving customer experience. Ultimately, these efforts will help you scale your investment to a great extent.  ",
    },
    para3: {
      caption: "OUR APPROACH",
      h1: "Execution of Change Management Strategies",
      p1: "Business transformation is only successful when experts like us implement effective change management strategies across the board and keep monitoring the results of these techniques. Our team will facilitate you in creating measurable milestones to ensure the newly implemented IT solutions are working as per your expectations. \n Agility is another key component of our services. Our goal is to work with you at every stage of your business to analyze, define, and implement change management strategies and maximize your company's success.",
      image: "expertise",
    },
    list: false,
  };
  render() {
    return (
      <>
        <Navbar />
        <Head>
          <title>{this.state.para1.caption}</title>
          <meta
            name="description"
            content={this.state.para1.p1.split("Whether")[0]}
          />{" "}
        </Head>
        <PageTitleArea pageTitle="Transformation & Growth" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
