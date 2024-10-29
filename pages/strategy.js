import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServiceDetailsContent from "../components/Services/ServiceDetailsContent";
import SubscribeStyleTwo from "../components/Common/SubscribeStyleTwo";
import OurLovingClients from "../components/Common/OurLovingClients";
import Footer from "../components/Layouts/Footer";
import Head from "next/head";
class ServiceDetails extends Component {
  state = {
    para1: {
      caption: "STRATEGY",
      h1: "Maximize Your Success",
      p1: "We can achieve great things together with proper planning and implementation of modern IT solutions such as data analytics tools. Your company's future is in your hands, and with the help of our experts, you can redesign it for the better and enjoy guaranteed success.",
      cap: "Key aspects of business planning and strategy making are:",
      list1: [
        "Customer-Oriented Business",
        "Innovate the Business Model",
        "Product Design and Marketing Strategy",
      ],
      list2: [
        "Maximizing Customer Experience",
        "Usage of Multiple Platforms to Maximize Sales",
        "Implementation of a Comprehensive Digital Marketing Strategy. ",
      ],
      image: "",
    },
    para2: {
      caption: "Benefits of Our Hands-on Approach",
      h1: "ACTION – We Take you There ",
      p1: "Our professional IT and digital marketing services are more than just making strategies for business success. We also focus on the practical implementation of these strategies through our hands-on approach to get effective results quickly. \n Our specialty is in comprehensively analyzing different types of businesses and competitors to design and implement specialized solutions according to specific business needs. It ultimately helps in creating a sophisticated digital experience for the customers and impressing them to establish a loyal customer base. \n Analysis of business data and critical business needs, including up-gradation of IT processes and marketing techniques, is vital for smart decision-making and aligning the company's working procedures with its goals. \n Ultimately, our purpose is to help you establish and grow your business by using all of the relevant tools and technologies to attract potential customers and convert them into loyal clients. ",
      image: "expertise",
    },
    para3: {
      caption: "Risk Management",
      h1: "MOTION- WE CONFIDENTLY GUIDE YOU THROUGH AMBIGUITY AND RISK",
      p1: "Since Midalta has a team of experienced and well-trained marketers and data analysts, we are able to deal with a wide range of risks and help you make future-forward choices by considering the latest IT trends and digital marketing strategies. \n We focus on providing comprehensive analysis and risk management services to all types of companies and industries across the board. Therefore, all organizations can benefit from our expertise and create a clear plan of taking the business to the next level while avoiding common pitfalls. ",
      image: "expertise",
    },
    list: {
      heading:
        "How We Implement Successful Growth Strategies – Plan, Grow, Adapt",
      item1: {
        icon: "",
        title: "Plan",
        text: "Analyze future opportunities and create a comprehensive roadmap to implement state-of-the-art tools and technologies for maximum growth.",
      },
      item2: {
        icon: "",
        title: "Grow",
        text: "Focus on tools and strategies that will make the business grow exponentially and transform the business model for the better.",
      },
      item3: {
        icon: "",
        title: "Adapt",
        text: "Bring innovation in skills and capabilities of the business procedures to outperform the competitors and establish the business as a leading name in the industry.",
      },
    },
  };
  render() {
    return (
      <>
        <Head>
          <title>{this.state.para1.caption}</title>
          <meta name="description" content={this.state.para1.p1} />{" "}
        </Head>
        <Navbar />

        <PageTitleArea pageTitle="Strategy" />

        <ServiceDetailsContent data={this.state} />

        {/* <OurLovingClients /> */}

        <Footer />
      </>
    );
  }
}

export default ServiceDetails;
