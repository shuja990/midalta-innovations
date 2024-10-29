import React from 'react';
import Link from 'next/link';

const services = [
    {
        icon: 'bx bx-conversation bg-e91e63',
        title: 'Digital Transformation',
        description:
            'Harness the power of digital technologies to modernize operations, enhance customer experiences, and stay competitive in the digital age.',
    },
    {
        icon: 'bx bx-mobile bg-6610f2',
        title: 'Growth, Marketing & Sales',
        description:
            'Unlock growth by creating robust marketing strategies and optimizing sales processes tailored to regional market dynamics.',
    },
    {
        icon: 'bx bxs-badge-check bg-ffb700',
        title: 'Implementation',
        description:
            'Turn strategy into action by overseeing full project execution, ensuring deadlines and budgets are met efficiently.',
    },
    {
        icon: 'bx bx-laptop bg-9c27b0',
        title: 'Mergers & Acquisitions',
        description:
            'Guide clients through the M&A process, from due diligence to integration, maximizing value while mitigating risks.',
    },
    {
        icon: 'bx bx-cart bg-3f51b5',
        title: 'Operations',
        description:
            'Enhance operational efficiency by optimizing processes, managing supply chains, and improving overall performance.',
    },
    {
        icon: 'bx bxs-dashboard bg-e91e63',
        title: 'People & Organizational Performance',
        description:
            'Unlock workforce potential through talent management, leadership development, and performance management programs.',
    },
    {
        icon: 'bx bx-data bg-fc3549',
        title: 'Risk & Resilience',
        description:
            'Develop strategies to anticipate and mitigate risks, ensuring organizational resilience in volatile environments.',
    },
    {
        icon: 'bx bxs-info-circle bg-00d280',
        title: 'Strategy & Corporate Finance',
        description:
            'Assist in developing long-term strategies and securing capital, ensuring financial decisions align with growth objectives.',
    },
    {
        icon: 'bx bx-cog bg-3f51b5',
        title: 'Sustainability',
        description:
            'Implement sustainable practices to comply with environmental standards and meet the demand for responsible business operations.',
    },
    {
        icon: 'bx bx-sync bg-9c27b0',
        title: 'Transformation',
        description:
            'Guide complex transformations, including digital upgrades and organizational restructuring, to ensure sustainable success.',
    },
];

const ServicesStyleOne = () => (
    <section className="features-area pt-100 pb-70 bg-f4f6fc mt-4">
        <div className="container">
            <div className="row">
                {services.map((service, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                        <div className="features-box-one">
                            <i className={service.icon}></i>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default ServicesStyleOne;
