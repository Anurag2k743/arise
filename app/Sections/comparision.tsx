import Image from "next/image";
import React from "react";
import { IoMdStarHalf } from "react-icons/io";

const Comparision = () => {

  const sectionInfo = {
        tag: " Comparison",
        heading: "Choosing Arise Over Others",
        desc: "Browse through our portfolio showcasing diverse, innovative web design and client satisfaction benchmarks"
    };


    const comparisonData = {
        titleLeft: "Other Agencies",
        items: [
            {
                left: "Experienced team delivering standard solutions.",
                right: "Highly skilled specialists delivering customized solutions.",
                leftIcon: "IoMdStarHalf",
                rightIcon: "/vsright.png",
            },
            {
                left: "Offers standard, template-based designs.",
                right: "Offers innovative, bespoke website designs.",
                leftIcon: "IoMdStarHalf",
                rightIcon: "/vsright.png",
            },
            {
                left: "Limited post-launch support and updates.",
                right: "Comprehensive post-launch support and updates.",
                leftIcon: "IoMdStarHalf",
                rightIcon: "/vsright.png",
            },
            {
                left: "Basic performance with average loading times.",
                right: "Optimal performance with fast loading times.",
                leftIcon: "IoMdStarHalf",
                rightIcon: "/vsright.png",
            },
            {
                left: "Basic SEO practices implemented.",
                right: "Advanced SEO tactics for enhanced online visibility.",
                leftIcon: "IoMdStarHalf",
                rightIcon: "/vsright.png",
            },
        ],
    };

    return (
        <section className="bg-[#00020F] pb-16">
            <div className="container mx-auto px-4">
              

                 <div className="pt-16 relative overflow-hidden">
                                    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                                        <Image src="/pricing.png" alt="rings background" className="w-[900px] sm:w-[1000px] opacity-50" width={717} height={268} />
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

                <div className="p-0 md:p-12 bg-[radial-gradient(100%_100%_at_50%_0%,rgba(0,2,15,0.5)_65.75%,rgba(0,4,31,0.5)_100%)] rounded-3xl border-[#0B132B] overflow-hidden">
                    {/* Header */}
                    <div className="grid grid-cols-3 items-center py-6">
                        {/* Left Title */}
                        <div className="flex justify-center">
                            <span className="text-base sm:text-lg md:text-3xl font-semibold text-white px-4 py-1">
                                {comparisonData.titleLeft}
                            </span>
                        </div>

                        {/* VS */}
                        <div className="flex justify-center">
                            <Image
                                src="/VsVersus.png"
                                alt="VS"
                                width={70}
                                height={70}
                                priority
                            />
                        </div>

                        {/* Right Logo */}
                        <div className="flex justify-center">
                            <Image
                                src="/logo.svg"
                                alt="Arise Logo"
                                width={144}
                                height={50}
                                priority
                            />
                        </div>
                    </div>

                    {/* Rows */}
                    <div className="space-y-3">
                        {comparisonData.items.map((item, index) => (
                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-2 rounded-xl overflow-hidden border border-[#0B132B]">
                                {/* Left */}
                                
                                <div className="flex items-start gap-3 p-4 bg-[#00041F] border-b md:border-b-0 md:border-r border-[#0B132B]">
                                    <IoMdStarHalf className="text-white" size={24} />
                                    <p className="text-white">{item.left}</p>
                                </div>

                                {/* Right */}
                                <div className="flex items-start gap-3 p-4 bg-[#00041F]">
                                    <Image
                                        src={item.rightIcon}
                                        alt="Right Icon"
                                        width={24}
                                        height={24}
                                    />
                                    <p className="text-gray-200">{item.right}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Comparision;
