import React, { Component } from 'react';
import PageTitleArea from '../components/Common/PageTitleArea';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import Footer from '../components/Layouts/Footer';
import Navbar from '../components/Layouts/Navbar';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';
import DynamicLayout from '../components/Capabilities/DynamicLayout';
import OurApproach from '../components/Capabilities/OurApproach';

class Services2 extends Component {

    constructor() {
        super();
        this.state = {
            consultingContent: [
                {
                    "title": "Strategic Advisory: Global Growth, Local Insight",
                    "layout": "rightImage",
                    "howWeHelp": "We provide actionable insights and strategic guidance that enable businesses to expand internationally while maintaining local relevance. We help clients identify new markets, assess competitive landscapes, and create growth strategies that are not only sustainable but culturally and economically appropriate for each region. With our deep understanding of the regulatory environments in the USA, Africa, and the Caribbean, we mitigate risks and help businesses smoothly transition into new markets.",
                    "insight": "In regions like Africa and the Caribbean, market entry can be fraught with regulatory complexities and logistical challenges. As consultants, we leverage our local connections and knowledge to help businesses navigate bureaucratic obstacles, obtain necessary permits, and build partnerships that fast-track growth. We also provide critical support for businesses looking to adapt their operations to meet local market demands, ensuring compliance while unlocking new revenue streams.",
                    "image": "/images/home-saas/feature5.png"
                },
                {
                    "title": "Crisis Management & Compliance: Navigating Uncertainty",
                    "layout": "leftImage",
                    "howWeHelp": "Midalta Innovations specializes in resolving crises swiftly and efficiently. From compliance issues to public relations disasters, our team steps in to manage and contain crises, protecting your reputation and operations. We ensure that your organization adheres to local and international regulations, providing compliance audits, regulatory advice, and direct intervention where needed.",
                    "insight": "In fast-evolving markets like Africa and the Caribbean, regulatory environments can change quickly. We act as consultants by anticipating these shifts and helping clients avoid or respond to compliance violations. Our expertise in regulatory affairs means that we can step in at critical moments to resolve problems, whether it's handling government relations in a sensitive manner or negotiating penalties. We have the local connections and know-how to navigate red tape, ensuring business continuity even under pressure.",
                    "image": "/images/home-saas/feature5.png"
                },
                {
                    "title": "Sustainability & ESG Solutions: Leading with Responsibility",
                    "layout": "rightImage",
                    "howWeHelp": "Midalta Innovations helps businesses integrate sustainability into their operations and meet environmental, social, and governance (ESG) standards. Whether you are looking to reduce your carbon footprint, engage in responsible sourcing, or implement governance frameworks, our experts provide the necessary tools and strategies. We tailor these efforts to the unique environmental and regulatory demands of each region, ensuring that businesses not only comply with ESG goals but also become industry leaders in sustainability.",
                    "insight": "In the Caribbean and Africa, sustainability is a key priority due to environmental challenges such as climate change and resource scarcity. As consultants, we use our regional expertise to help businesses adopt eco-friendly practices that not only satisfy ESG requirements but also enhance their long-term viability. We navigate local regulations around sustainability, assist with securing permits for green initiatives, and provide crisis intervention when environmental challenges arise.",
                    "image": "/images/home-saas/feature5.png"
                },
                {
                    "title": "Project Development & Management: From Vision to Reality",
                    "layout": "leftImage",
                    "howWeHelp": "From the initial concept to project completion, we provide full-service project development and management, particularly for large-scale initiatives in agriculture, mining, infrastructure, and tourism. Our services include feasibility assessments, regulatory approval processes, resource management, and stakeholder engagement. We ensure that every phase of the project is executed seamlessly, on time, and within budget.",
                    "insight": "In regions like Africa and the Caribbean, executing large-scale projects often requires navigating complex local bureaucracies and unpredictable supply chains. As consultants, we facilitate smoother project development by securing government approvals, managing logistics in challenging environments, and resolving on-the-ground issues that can stall progress. We tap into our networks to ensure you have the right partnerships, materials, and permissions to get projects off the ground quickly and effectively.",
                    "image": "/images/home-saas/feature5.png"
                },
                {
                    "title": "Investment & Private Capital Services: Unlocking Opportunities",
                    "layout": "rightImage",
                    "howWeHelp": "We assist clients in securing private capital to fund growth, expansion, or new ventures in sectors such as tourism, agriculture, and energy. Whether you're seeking investment for a large-scale project or looking to attract venture capital for a new initiative, Midalta Innovations connects you with the right investors and financial institutions. Our extensive experience in financial services across the USA, Africa, and the Caribbean allows us to guide clients through the capital raising process with confidence.",
                    "insight": "Securing private capital in emerging markets like Africa or the Caribbean requires a deep understanding of both local and international investment landscapes. As consultants, we provide the crucial bridge between businesses and investors, ensuring that our clients are well-positioned to attract capital. We help clients refine their business models, prepare investor-ready presentations, and negotiate favorable terms. When challenges arise, such as shifting regulations or political risks, we step in to resolve these issues, ensuring your capital flow remains uninterrupted.",
                    "image": "/images/home-saas/feature5.png"
                }
            ]

        }
    }

    render() {
        return (
            <>
                <Navbar />
                <PageTitleArea
                    pageTitle="Our Consulting Solutions"
                    pageDescription="Midalta Innovations offers comprehensive consulting services tailored to the unique challenges and opportunities of key industries. Acting as strategic “consultants,” we help businesses and governments tackle complex problems, navigate crises, and implement solutions that drive sustainable growth. Our hands-on approach leverages our extensive networks and deep industry insights, ensuring that our clients are equipped to overcome both immediate and long-term challenges across the USA,  Africa, and the Caribbean.
                    Whether your organization faces regulatory hurdles, needs to expand across borders, or seeks to mitigate risks, our expert team is ready to deliver results.
                    "
                />
                {this?.state?.consultingContent?.map((section, index) => (
                    <DynamicLayout key={index} data={section} consult/>
                ))}
                <OurApproach />
                <Footer />
            </>
        );
    }
}

export default Services2;