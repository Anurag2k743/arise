"use client";
import React from 'react';
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
    const sectionInfo = {
        tag: "Services",
        heading: "Explore Our Services",
        desc: "Discover our comprehensive range of services tailored to enhance your digital presence."
    };

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
        <section className="bg-[#00020F] pb-16 scroll-mt-8 md:scroll-mt-32" id="services">
            <div className="pt-0 md:pt-16 relative overflow-hidden">
                <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                    <Image
                        src="/pricing.png"
                        alt="rings background"
                        className="w-[900px] sm:w-[1000px] opacity-50"
                        width={717}
                        height={268}
                    />
                </div>
                <div className="container relative z-10">
                    <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
                        <div className="flex items-center justify-center mb-4">
                            <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full text-white text-sm">
                                {sectionInfo.tag}
                            </h6>
                        </div>
                        <h3 className="text-center md:text-left mb-4 text-white">
                            {sectionInfo.heading}
                        </h3>
                        <div className="max-w-md mx-auto text-center text-[#d1d1d1] mb-10">
                            <p>{sectionInfo.desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Section */}
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-[#050922] rounded-xl border border-[#131839] p-4 sm:p-6 lg:p-10"
                                initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }} // alternate up/down
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <h4>{service.title}</h4>
                                    <button className="relative overflow-hidden group bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                                        {/* Hover background slides in smoothly */}
                                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] group-hover:left-0 transition-all duration-500 ease-out z-0"></span>

                                        {/* Content stays on top */}
                                        <span className="relative z-10 flex items-center gap-2 text-white">
                                            <a href="#contact" className="whitespace-nowrap">
                                                Contact Us
                                            </a>
                                            <Image
                                                src="/btn_arrow.png"
                                                height={20}
                                                width={20}
                                                alt="arrowbtn"
                                                className="transition-transform duration-400 ease-in-out group-hover:translate-x-3"
                                            />
                                        </span>
                                    </button>
                                </div>

                                {/* Description */}
                                <p className="mb-4">{service.description}</p>

                                {/* Divider */}
                                <div className="border-t border-[#161C44] mb-4"></div>

                                {/* Features */}
                                <ul className="space-y-5">
                                    {service.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-gray-300 text-lg"
                                        >
                                            <span className="flex items-center justify-center mr-2 h-[20px] w-[20px] bg-[#08951E] rounded-full">
                                                <Image
                                                    src="/check.png"
                                                    alt="check"
                                                    width={8}
                                                    height={8}
                                                />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Services;
