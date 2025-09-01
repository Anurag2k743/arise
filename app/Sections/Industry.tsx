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
                                <div className="flex justify-center items-center">
                                    <button className="relative overflow-hidden group bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                                        <span className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                                        <span className="relative z-10 flex items-center gap-2 text-white">
                                            <a href="#contact" className="whitespace-nowrap">
                                                Start a Project
                                            </a>
                                            <Image
                                                src="/btn_arrow.png"
                                                height={20}
                                                width={20}
                                                alt="arrowbtn"
                                                className="transition-transform duration-400 ease-in-out group-hover:translate-x-3" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industry;
