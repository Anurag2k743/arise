import React from 'react';
import Image from "next/image";
import ServiceSliders from '../Components/ServiceSliders';
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
                                                className="flex justify-center items-center text-lg " >
                                                {service.buttonText} <Image src="/btn_arrow.png" alt="arrow" width={20} height={20} className='ml-2' />
                                            </a>
                                        </button>
                                    </div>

                                    {/* Description */}
                                    <p className=" mb-4">{service.description}</p>

                                    {/* Divider */}
                                    <div className="border-t border-[#161C44] mb-4"></div>

                                    {/* Features */}
                                    <ul className="space-y-5">
                                        {service.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-gray-300 text-sm">
                                                <span className="flex items-center justify-center mr-2 h-[20px] w-[20px] bg-[#08951E] rounded-full">
                                                    <Image src="/check.png" alt="check" width={8} height={8} />
                                                </span>
                                                {feature}
                                            </li>

                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        <div className="relative w-full mt-12">
                            <div className="absolute inset-0 flex justify-center items-center">
                                <div className="flex items-center px-4 bg-[#00020F] text-white text-sm">
                                    <Image
                                        src="/left_service.png"
                                        alt="left arrow"
                                        width={512}
                                        height={19}
                                        className="mr-2"  />

                                    <span>Other Services</span>

                                    <Image
                                        src="/right_service.png"
                                        alt="right arrow"
                                        width={512}
                                        height={19}
                                        className="ml-2"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* <ServiceSliders /> */}
                    </div>
                </section>
            </section>
        </>
    );
};

export default Services;
