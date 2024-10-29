import React, { Component } from "react";
import Navbar from "../components/Layouts/Navbar";
import PageTitleArea from "../components/Common/PageTitleArea";
import ServicesStyleThree from "../components/Services/ServicesStyleThree";
import ClientsFeedbackSliderTwo from "../components/Common/ClientsFeedbackSliderTwo";
import Footer from "../components/Layouts/Footer";
import ServicesStyleTwo from "../components/Services/ServicesStyleTwo";
import Head from "next/head"
class Services3 extends Component {
  render() {
    return (
      <>
        <Head>
          <title>Services</title>
          <meta
            name="description"
            content={
              "Midalta Innovation is proud to offer comprehensive technology services and solutions to help you adopt modern trends in the IT industry and make your business a leading name in the sector. "
            }
          />{" "}
        </Head>
        <Navbar />

        <PageTitleArea pageTitle="Services " pageDescription="Our Services" />

        <ServicesStyleThree />
        {/* <ServicesStyleTwo /> */}

        {/* <ClientsFeedbackSliderTwo /> */}

        <Footer />
      </>
    );
  }
}

export default Services3;
