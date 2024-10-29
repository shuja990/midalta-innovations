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
      caption: "TECHNOLOGY",
      h1: "Analyze, Interpret, and Generate",
      p1: "IT trends change on a regular basis. Business owners and managers who manage a wide range of aspects of a company are typically not able to keep up with these ever-evolving trends. \n We offer modern IT services through which you can be at the forefront of digital transformation in 2022 and beyond. We pay special attention to all of the critical modern aspects of technology, such as cybersecurity, SEO, digital marketing, user-friendly design, and fast speed of websites and apps.",
      cap: "Some of the salient features of Midalta Innovation technology services are:",
      list1: [
        "Efficient Web and Mobile Development",
        "Product Design and Engineering",
        "Special Focus on UX/UI Design",
      ],
      list2: [
        "Comprehensive Project Management",
        "Designing Startup Strategy",
        "Data and Analytics for Project Management",
      ],
      image: "",
    },
    para2: {
      caption: "Modernize. Accelerate. Transform.",
      h1: "Modernize IT Procedures",
      p1: "Businesses can only benefit from the latest tools and technology if they also focus on modernizing their IT procedures. We offer comprehensive modern IT services to accelerate the process of upgrading your business to the next level with the help of the best development and marketing solutions. Our technological services will help you in building a safe, secure, and collaborative working environment.",
    },
    para3: {
      caption: "Significance of Data",
      h1: "Transform The Future With Data",
      p1: "Data is the currency of the digital era.\nCompanies that efficiently utilize data can outperform their competitors and streamline essential business procedures related to marketing, supply chains, and business management. Midalta Innovation focuses on helping you in every way possible to gather critical data and use it for the company's maximum growth. \n We will help you utilize and analyze important data to make smart business priorities and transform the data into practical steps and strategies to grow your business. Efficient machine learning procedures and AI solutions will be used to streamline your business procedures and unlock new opportunities for your company. ",
      image: "expertise",
    },
    list: null,
  };
  render() {
    return (
      <>
        <Head>
          <title>{this.state.para1.caption}</title>
          <meta
            name="description"
            content={this.state.para1.p1.split("\n")[0]}
          />{" "}
        </Head>
        <Navbar />

        <PageTitleArea pageTitle="Technology" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
