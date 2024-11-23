import React, { Component } from "react";
import Head from "next/head";
import Navbar from "../../components/Layouts/Navbar";
import PageTitleArea from "../../components/Common/PageTitleArea";
import ServiceDetailsContent from "../../components/Services/ServiceDetailsContent";
import Footer from "../../components/Layouts/FooterTwo";
import { withRouter, useRouter, Router } from "next/router";
import SectorDetailsContent from "../../components/Services/SectorDetailsContent";
class ServiceDetails extends Component {
    state = {
        data: [
            {
                "title": "Agriculture",
                "slug": "Agriculture",
                "path": "sectors/Agriculture",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Transforming Agriculture for Sustainable Growth",
                "description": "In the agriculture sector, we work closely with clients across the value chain—from farming operations and agribusinesses to food processing and export logistics. Our solutions focus on improving productivity, adopting sustainable practices, and leveraging technology to enhance supply chain management. With expertise in diverse agricultural regions, including the Caribbean and Africa, we help companies capitalize on emerging market opportunities and tackle challenges related to climate change, resource management, and market access.",
                "perspectives": [
                    {
                        "title": "Sustainability",
                        "description": "We help our clients integrate sustainable farming practices that improve yield and reduce environmental impact."
                    },
                    {
                        "title": "Technology Adoption",
                        "description": "Implementing digital farming solutions and smart agriculture technologies to optimize resource use."
                    },
                    {
                        "title": "Supply Chain Efficiency",
                        "description": "Streamlining logistics and distribution channels to ensure timely delivery and reduce waste."
                    }
                ],
                "subSections": [
                    {
                        "title": "Enhancing Productivity and Market Access",
                        "description": "We partner with agricultural businesses to boost their productivity through innovative practices, technology adoption, and supply chain optimization. By addressing inefficiencies in farming methods and improving market access, we help clients expand their operations and profitability."
                    }
                ],
                "approach": [
                    {
                        "title": "Optimizing Operations",
                        "description": "Implementing precision agriculture tools, digital farming, and sustainable practices to enhance yield and reduce waste."
                    },
                    {
                        "title": "Market Access and Expansion",
                        "description": "Identifying new markets for produce and advising on export logistics to ensure global competitiveness."
                    },
                    {
                        "title": "Sustainability Strategies",
                        "description": "Assisting with the adoption of eco-friendly practices that not only benefit the environment but also attract sustainability-conscious investors."
                    }
                ]
            },
            {
                "title": "Financial Services",
                "slug": "Financial%20Services",
                "path": "sectors/Financial%20Services",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Driving Innovation in Financial Services",
                "description": "The financial services industry is experiencing rapid change due to fintech innovations, regulatory shifts, and evolving consumer expectations. We provide clients with strategic guidance in areas such as digital transformation, risk management, and regulatory compliance. By working with banks, fintech startups, insurance companies, and investment firms, we help them stay competitive in a complex regulatory environment, enhance customer experiences, and optimize operational efficiency.",
                "perspectives": [
                    {
                        "title": "Digital Transformation",
                        "description": "We guide clients through adopting cutting-edge fintech solutions, including blockchain, AI, and mobile banking platforms."
                    },
                    {
                        "title": "Risk Management & Compliance",
                        "description": "Navigating the evolving regulatory landscape with solutions that ensure compliance and mitigate risk."
                    },
                    {
                        "title": "Customer Experience",
                        "description": "Enhancing customer interactions through digital channels and personalized financial services."
                    }
                ],
                "subSections": [
                    {
                        "title": "Navigating Digital Transformation and Compliance",
                        "description": "In the rapidly evolving financial services sector, we help our clients stay ahead by guiding them through digital transformation initiatives, risk management strategies, and compliance with ever-changing regulations. Our services focus on fostering innovation while ensuring regulatory adherence."
                    }
                ],
                "approach": [
                    {
                        "title": "Digital Transformation",
                        "description": "Supporting banks, fintech firms, and insurance companies in implementing cutting-edge technology solutions like blockchain, AI, and mobile platforms."
                    },
                    {
                        "title": "Risk Management",
                        "description": "Helping clients assess, manage, and mitigate operational, financial, and cybersecurity risks."
                    },
                    {
                        "title": "Regulatory Compliance",
                        "description": "Ensuring that businesses remain compliant with local and international regulations, and guiding them through the complex web of legal requirements."
                    }
                ]
            },
            {
                "title": "Government and Private Sector",
                "slug": "Government%20and%20Private%20Sector",
                "path": "sectors/Government%20and%20Private%20Sector",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Strategic Partnerships for Public-Private Growth",
                "description": "At Midalta Innovation, we act as key facilitators between the public and private sectors, offering insights into government policy, regulatory environments, and infrastructure development. Our consultants help governments drive economic growth while empowering private enterprises to collaborate effectively with public institutions. In areas such as public policy, infrastructure projects, and social initiatives, we bring deep local and international expertise to ensure mutually beneficial outcomes.",
                "perspectives": [
                    {
                        "title": "Policy Advisory",
                        "description": "Shaping policies that drive economic development and support long-term infrastructure projects."
                    },
                    {
                        "title": "Public-Private Partnerships (PPP)",
                        "description": "Helping businesses and governments collaborate on large-scale projects, from transportation systems to energy."
                    },
                    {
                        "title": "Regulatory Strategy",
                        "description": "Ensuring businesses operate within legal frameworks while maximizing profitability."
                    }
                ],
                "subSections": [
                    {
                        "title": "Bridging Public-Private Collaboration for Success",
                        "description": "We assist governments and private sector entities in fostering successful collaborations that drive economic development, innovation, and large-scale infrastructure projects. Our role often involves strategic advisory, policy shaping, and facilitating partnerships to ensure mutual benefits."
                    }
                ],
                "approach": [
                    {
                        "title": "Public Policy Development",
                        "description": "Advising governments on policies that promote business growth, sustainability, and infrastructure development."
                    },
                    {
                        "title": "Private Sector Strategy",
                        "description": "Helping businesses align with government initiatives and tap into public sector opportunities."
                    },
                    {
                        "title": "PPP (Public-Private Partnerships)",
                        "description": "Structuring and facilitating large-scale partnerships for infrastructure, energy, and social projects to ensure long-term success."
                    }
                ]
            },
            {
                "title": "Travel Logistics and Infrastructure",
                "slug": "Travel%20Logistics%20and%20Infrastructure",
                "path": "sectors/Travel%20Logistics%20and%20Infrastructure",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Navigating the Complexities of Global Travel and Infrastructure",
                "description": "Travel logistics and infrastructure are vital sectors that require a blend of operational efficiency, strategic foresight, and adaptability. We assist transportation companies, logistics providers, and government agencies in improving the infrastructure that supports tourism, trade, and supply chains. From port development and air travel to road networks and urban mobility, we deliver comprehensive solutions that enable smoother, safer, and more efficient transport systems.",
                "perspectives": [
                    {
                        "title": "Infrastructure Planning",
                        "description": "Supporting the development of ports, airports, and roads to bolster regional and international connectivity."
                    },
                    {
                        "title": "Supply Chain Optimization",
                        "description": "Implementing technology solutions that improve freight management and reduce logistical bottlenecks."
                    },
                    {
                        "title": "Tourism Infrastructure",
                        "description": "Enhancing facilities and services to support growing tourism sectors across the Caribbean and Africa."
                    }
                ],
                "subSections": [
                    {
                        "title": "Creating Efficient, Scalable Infrastructure Solutions",
                        "description": "In the travel logistics and infrastructure space, we help our clients plan, design, and implement solutions that streamline transportation networks, optimize supply chains, and develop sustainable tourism infrastructure. Our expertise ensures that clients can meet the demands of growing economies while improving operational efficiency."
                    }
                ],
                "approach": [
                    {
                        "title": "Infrastructure Planning",
                        "description": "Providing end-to-end planning and project management for port, airport, and road network development."
                    },
                    {
                        "title": "Supply Chain Optimization",
                        "description": "Streamlining logistics processes to improve freight handling, reduce costs, and enhance overall efficiency."
                    },
                    {
                        "title": "Tourism Infrastructure",
                        "description": "Advising on the development of world-class tourism facilities that attract international visitors and create local economic benefits."
                    }
                ]
            },
            {
                "title": "Tourism and Private Capital",
                "slug": "Tourism%20and%20Private%20Capital",
                "path": "sectors/Tourism%20and%20Private%20Capital",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Unlocking the Potential of Tourism and Investment",
                "description": "Tourism is a vital driver of economic growth, particularly in the Caribbean and Africa. At Midalta Innovation, we work with private investors, government entities, and hospitality businesses to design strategies that attract tourists while promoting sustainable development. Our expertise spans from managing large-scale resorts and boutique hotels to advising on public policy initiatives that support tourism.",
                "perspectives": [
                    {
                        "title": "Investment Strategy",
                        "description": "Helping investors identify high-potential tourism ventures and secure financing for development projects."
                    },
                    {
                        "title": "Sustainable Tourism",
                        "description": "Crafting strategies that balance economic growth with environmental conservation and local community engagement."
                    },
                    {
                        "title": "Destination Development",
                        "description": "Assisting regions in enhancing their tourism offerings to meet international standards and attract more visitors."
                    }
                ],
                "subSections": [
                    {
                        "title": "Maximizing Investment and Growth in Tourism",
                        "description": "We help investors, governments, and private businesses unlock the potential of the tourism industry by guiding them through the complexities of project financing, destination development, and sustainable tourism strategies. Our insights drive profitable growth while protecting cultural and environmental assets."
                    }
                ],
                "approach": [
                    {
                        "title": "Investment Strategy",
                        "description": "Advising private equity and venture capital firms on lucrative tourism-related investments, including hospitality, eco-tourism, and destination development."
                    },
                    {
                        "title": "Sustainable Tourism Practices",
                        "description": "Ensuring that tourism development aligns with sustainable and responsible practices that benefit both businesses and local communities."
                    },
                    {
                        "title": "Destination Management",
                        "description": "Providing strategic insights to governments and private businesses on developing tourism destinations that stand out in competitive global markets."
                    }
                ]
            },
            {
                "title": "Technology and Digital IT Services",
                "slug": "Technology%20and%20Digital%20IT%20Services",
                "path": "sectors/Technology%20and%20Digital%20IT%20Services",
                "image": "/images/home-saas/feature5.png",
                "subtitle": "Innovating for the Digital Future",
                "description": "In today's fast-paced world, technology and digital IT services are at the heart of innovation. We assist companies across industries in embracing the latest technologies to improve their operations, enhance customer engagement, and achieve scalable growth. From cloud computing and cybersecurity to data analytics and digital transformation, our consulting services ensure that your business is not just keeping up with the latest trends but leading them.",
                "perspectives": [
                    {
                        "title": "Digital Transformation",
                        "description": "Helping businesses adopt AI, machine learning, and cloud technologies to enhance efficiency and agility."
                    },
                    {
                        "title": "Cybersecurity",
                        "description": "Protecting sensitive data and ensuring compliance with global security standards."
                    },
                    {
                        "title": "Data Analytics",
                        "description": "Empowering businesses with data-driven insights that support smarter decision-making and strategic growth."
                    }
                ],
                "subSections": [
                    {
                        "title": "Empowering Businesses Through Technological Innovation",
                        "description": "We assist companies in harnessing the power of technology and digital services to improve operational efficiency, scale businesses, and enhance customer experiences. Our clients rely on us to guide them through the adoption of innovative IT solutions that position them for long-term success."
                    }
                ],
                "approach": [
                    {
                        "title": "Digital Transformation",
                        "description": "Guiding companies through the digitalization of their operations, from cloud adoption to implementing AI and machine learning."
                    },
                    {
                        "title": "Cybersecurity",
                        "description": "Ensuring that businesses are protected against digital threats and that they comply with global cybersecurity standards."
                    },
                    {
                        "title": "Data Analytics",
                        "description": "Using data-driven insights to help businesses optimize their decision-making processes and achieve measurable outcomes."
                    }
                ]
            }
        ],
        currentContent: null
    };

    // router = useRouter()
    componentDidMount() {
        const { id } = this.props.router.query; // Get slug from URL parameters
        if (id) {
            // Find the content matching the slug
            const content = this.state.data.find(
                (item) => item.title === id
            );
            if (content) {
                this.setState({ currentContent: content });
            } else {
                // Redirect to 404 page if content not found
                this.props.router.push('/404');
            }
        } else {
            // Redirect to 404 page if no slug provided
            this.props.router.push('/404');
        }
    }

    render() {
        const { currentContent } = this.state;

        return (
            <>
                <Head>
                    <title>{currentContent?.title}</title>
                    <meta name="description" content={currentContent?.description} />
                </Head>
                <Navbar />

                <PageTitleArea pageTitle={currentContent?.title} />

                {currentContent && <SectorDetailsContent data={currentContent} />
                }
                <Footer />
            </>
        );
    }
}

export default withRouter(ServiceDetails);