import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import ContactFormArea from '../components/Contact/ContactFormArea';
import OurLovingClients from '../components/Common/OurLovingClients';
import Footer from '../components/Layouts/Footer';

class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />
                
                <PageTitleArea 

                    pageTitle="Contact Us" 
                    pageDescription="Drop us Message for any Query" 
                />  

                <ContactFormArea />

                {/* <OurLovingClients /> */}

                <Footer />
            </>
        );
    }
}

export default Contact;