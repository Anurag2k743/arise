import React from 'react';
const Services = () => {
    const servicesData = [
        {
            title: "Web Design",
            description:
                "Crafting visually captivating websites that resonate with your audience and elevate your brand identity.",
            buttonText: "Contact Us",
            buttonLink: "#",
            features: [
                "Customized visual aesthetics.",
                "User-centric design approach.",
                "Responsive and mobile-friendly.",
                "Intuitive user interface (UI).",
                "Interactive and engaging layouts."
            ]
        },
        {
            title: "Web Development",
            description:
                "Building robust websites with advanced functionality and seamless performance, tailored to your business needs.",
            buttonText: "Contact Us",
            buttonLink: "#",
            features: [
                "Custom backend development.",
                "Ongoing maintenance and support.",
                "Security and data protection.",
                "Content management systems (CMS).",
                "API integration and development."
            ]
        }
    ];

    return (
        <>
            <section className="bg-[#00020F] pb-16">
                <div className="container">
                    <div className="flex flex-col justify-center items-center w-full">
                        <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full mx-auto mb-4 text-white text-sm">
                            Services
                        </h6>
                        <h3 className="text-center md:text-left mb-4">
                            Explore Our Core Services
                        </h3>
                        <div className="max-w-lg mx-auto text-center  mb-10">
                            <p>
                                Discover our comprehensive range of services tailored to enhance your digital presence.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cards Section */}
                <section>
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {servicesData.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative bg-[#050922] rounded-xl border border-[#131839] p-4 sm:p-6 lg:p-10" >
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="">{service.title}</h4>
                                        <button className='bg-[#0A0E2F] text-white text-sm px-6 py-3 rounded-full border border-[#161C44] hover:bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] transition'>
                                            <a
                                                href={service.buttonLink}
                                                className="" >
                                                {service.buttonText} <span className="inline-block">↗</span>
                                            </a>
                                        </button>
                                    </div>

                                    {/* Description */}
                                    <p className=" mb-4">{service.description}</p>

                                    {/* Divider */}
                                    <div className="border-t border-[#161C44] mb-4"></div>

                                    {/* Features */}
                                    <ul className="space-y-2">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-300 text-sm">
                                                <span className="text-white mr-2 mt-[2px] h-[20px] w-[20px] bg-[#08951E] text-center rounded-full">✔</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Services;
