import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageTitleArea from '../components/Common/PageTitleArea';
import Footer from '../components/Layouts/Footer';
import DynamicLayout from '../components/industries/DynamicIndustyLayout';
import AboutContent from '../components/About/AboutContent';
class About extends Component {
    state = {
        "content": [
            {
                "layout": "leftImage",
                "main_heading": "Our History",
                "subheading": "",
                "content": "Midalta Innovation was founded to bridge the gap between global consulting expertise and the unique needs globally. Over the years, we have expanded our presence into new industries, built strong alliances, and developed a reputation for being a trusted partner in both the public and private sectors. Our journey has been one of growth and evolution, constantly responding to the changing landscapes of the regions we serve.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "fullWidth",
                "main_heading": "Our Aspiration",
                "subheading": "",
                "content": "We aspire to become the premier Global Management Consulting firm for businesses and governments looking to expand, transform, and thrive in challenging markets. Our goal is to be the go-to partner for organizations seeking strategic solutions that are not only innovative but also grounded in practical execution."
            },
            {
                "layout": "leftImage",
                "main_heading": "Our Governance",
                "subheading": "",
                "content": "Our governance structure ensures accountability, transparency, and ethical decision-making at every level of our organization. We have established a clear framework that guides our business practices, promotes compliance with local and international regulations, and fosters an environment of trust and responsibility across all our operations.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "rightImage",
                "main_heading": "Diversity, Equity & Inclusion",
                "subheading": "OUR COMMITMENTS",
                "content": "At Midalta Innovation, we believe that diversity is a strength. We are committed to creating an inclusive work environment where every voice is heard and valued. Our diverse team reflects the global nature of our business, allowing us to bring a wide range of perspectives to every client challenge. We actively promote equity and inclusion within our workforce and through the solutions we provide to our clients.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "leftImage",
                "main_heading": "Social Responsibility",
                "subheading": "",
                "content": "We are dedicated to making a positive impact in the communities where we operate. Whether through supporting local businesses, empowering entrepreneurs, or working with governments to implement policies that benefit society, social responsibility is at the core of everything we do. We believe in giving back and creating long-lasting, positive change in Africa, the Caribbean, and beyond.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "rightImage",
                "main_heading": "Environmental Sustainability",
                "subheading": "",
                "content": "Environmental sustainability is not just a buzzword at Midalta Innovation—it’s a guiding principle. We help clients integrate sustainable practices into their operations, from reducing carbon footprints to implementing eco-friendly supply chains. We are particularly focused on helping industries in the Caribbean and Africa, where the effects of climate change are already being felt, to adopt resilient and sustainable solutions.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "fullWidth",
                "main_heading": "ESG Report",
                "subheading": "",
                "content": "Our Environmental, Social, and Governance (ESG) Report highlights our commitment to sustainability, ethical business practices, and social responsibility. We hold ourselves accountable by regularly measuring and reporting on our impact, ensuring that we stay true to our values while delivering exceptional service to our clients."
            },
            {
                "layout": "leftImage",
                "main_heading": "Alliances & Acquisitions",
                "subheading": "HOW WE WORK",
                "content": "We partner with leading organizations across industries to deliver comprehensive solutions that extend beyond traditional consulting. Our alliances with local and international firms enhance our capabilities, enabling us to provide specialized services that meet the specific needs of each client. When necessary, we also advise on acquisitions that can enhance client operations and market presence, facilitating smooth transitions and ensuring alignment with strategic goals.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "rightImage",
                "main_heading": "Solutions",
                "subheading": "",
                "content": "Our solutions are designed to address real-world challenges across multiple sectors. We take a hands-on approach, working closely with clients to develop tailored strategies and implement them effectively. From risk mitigation and crisis management to growth strategy and sustainability, we provide solutions that deliver measurable results.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "fullWidth",
                "main_heading": "Client Capabilities Network",
                "subheading": "",
                "content": "Midalta Innovation maintains a strong network of regional and international experts who collaborate to solve our clients’ most complex challenges. Our capabilities network enables us to draw on a vast pool of knowledge, providing clients with access to cutting-edge strategies, industry best practices, and tailored solutions that are informed by local and global Perspectives."
            },
            {
                "layout": "leftImage",
                "main_heading": "Case Studies",
                "subheading": "",
                "content": "Our case studies demonstrate our ability to transform challenges into opportunities. From guiding companies through difficult market expansions in Africa to helping governments improve infrastructure in the Caribbean, our work speaks for itself. We measure success not just by the results we deliver but by the lasting impact we leave on the industries and communities we serve.",
                "image": "/images/home-saas/feature5.png"
            },
            {
                "layout": "fullWidth",
                "main_heading": "From Idea to Impact",
                "subheading": "",
                "content": "At Midalta Innovation, we don’t just offer advice—we see projects through from idea to impact. We collaborate with our clients every step of the way, from initial brainstorming to implementation, ensuring that strategies are not only well-crafted but also fully executed to drive tangible, long-term results."
            }
        ]

    };

    render() {
        return (
            <>
                <Navbar />
                <PageTitleArea
                    pageTitle="About Us"
                    pageDescription="At Midalta Innovation, we are more than just a management consulting firm. We are a global team of problem-solvers, strategic thinkers, and hands-on implementers who are deeply committed to helping our clients overcome challenges and unlock new growth opportunities. Our unique position in the USA, Singapore, and the Caribbean allows us to offer local expertise with global Perspectives, empowering businesses and governments to navigate complex markets and industries."
                />
                <AboutContent />

                {this.state.content.map((section, index) => (
                    <DynamicLayout key={index} data={section} />
                ))}
                <Footer />
            </>
        );
    }
}

export default About;
