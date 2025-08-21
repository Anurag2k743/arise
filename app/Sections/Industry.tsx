import React from "react";
import Image from "next/image";

const Industry = () => {
    return (
        <>
            <section className="bg-[#00020F] py-16 md:py-24 lg:py-48">
                <div className="relative">
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,4,31,0)_0%,#00041F_100%)] lg:hidden z-10"></div>

                    <div className="relative h-[300px] sm:h-[400px] md:h-[570px] flex items-center justify-center overflow-hidden">
                        {/* Left Image */}
                        <div className="absolute left-0 top-0 h-[570px] w-[652px]">
                            <Image
                                src="/Industry_left.png"
                                alt="Left Shape"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="absolute right-0 top-0 h-[570px] w-[652px]">
                            <Image
                                src="/Industry_right.png"
                                alt="Right Shape"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Center Text Section */}
                        <div className="relative z-20 container mx-auto flex items-center justify-center h-full">
                            <div className="text-center text-white px-4 sm:px-6 max-w-3xl">
                                <p className="mb-3">Industry Insights</p>
                                <h2 className="mb-4">
                                    Website Design Impacts Customer Retention
                                </h2>
                                <p className="max-w-xl mx-auto mb-6">
                                    Capture and retain more customers by optimizing your website&apos;s
                                    design for engagement.
                                </p>
                                <button className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-3 px-6 md:py-4 md:px-8 rounded-full text-white">
                                    Start a Project
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industry;
