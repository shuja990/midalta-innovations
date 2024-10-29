import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import AboutContent from '../components/Careers/CareerContent';
import ClientsFeedbackSliderTwo from '../components/Common/ClientsFeedbackSliderTwo';
import TeamMemberContent from '../components/Team/TeamMemberContent';
import FaqContent from '../components/Careers/About';
import FeaturesStyleTwo from '../components/Careers/Features'
import Footer from '../components/Layouts/Footer';

class Services3 extends Component {
    render() {
        return (
            <>
                <Navbar />

                <PageTitleArea 
                    pageTitle="Careers " 
                    pageDescription="Love your work—and your life." 
                />
                
                <AboutContent />
                {/* <TeamMemberContent /> */}
                {/* <FaqContent /> */}
                <FeaturesStyleTwo />
                {/* <ClientsFeedbackSliderTwo /> */}
                
                <Footer />
            </>
        );
    }
}

export default Services3;