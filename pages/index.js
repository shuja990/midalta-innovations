import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeIt/MainBanner';
import Featured from '../components/DigitalMarketing/Featured';
import AboutArea from '../components/DigitalMarketing/AboutArea';
import CaseStudies from '../components/DigitalMarketing/CaseStudies';
import FeedbackSlider from '../components/DigitalMarketing/FeedbackSlider';
import Partners from '../components/DigitalMarketing/Partners';
import TeamMember from '../components/DigitalMarketing/TeamMember';
import LatestBlog from '../components/DigitalMarketing/LatestBlog';
import CompanyIntroVideo from '../components/DigitalMarketing/CompanyIntroVideo';
import LetsTalk from '../components/DigitalMarketing/LetsTalk';
import FooterTwo from '../components/Layouts/FooterTwo';
import ServicesCard from '../components/DigitalMarketing/ServicesCard';
import ServiceRightImageStyle from '../components/WithoutAnimation/HomeIt/ServiceRightImageStyle';
import ServiceLeftImageStyle from '../components/WithoutAnimation/HomeIt/ServiceLeftImageStyle';
import BuildYourApplication from '../components/WithoutAnimation/HomeSaas/BuildYourApplication';
import GlobalReachAndWhyChooseUs from '../components/WithoutAnimation/HomeIt/GlobalReachAndWhyChooseUs';

class IndexDigitalMarketing extends Component {
    render() { 
        return (
            <>
                <Navbar />
                <MainBanner />
                <Featured />                
                <AboutArea />
                <ServiceRightImageStyle />
                <BuildYourApplication />
                <GlobalReachAndWhyChooseUs />
                {/* <ServicesCard /> */}
                {/* <CaseStudies /> */}
                {/* <FeedbackSlider /> */}
                {/* <Partners /> */}
                {/* <TeamMember /> */}
                {/* <LatestBlog /> */}
                {/* <CompanyIntroVideo /> */}
                {/* <LetsTalk /> */}
                <FooterTwo />
            </>
        );
    }
}

export default IndexDigitalMarketing;