import React from "react";
import Image from "next/image";

const Industry = () => {
    return (
        <>
            <section className="py-16 md:py-48 bg-[#00020F]">
                <div className="relative py-20 md:py-24 lg:py-36 overflow-hidden">
                    
                    {/* Left Shape */}
                    <div className="absolute left-0 top-0 h-[400px] lg:h-[527px] w-[400px] md:w-[500px] lg:w-[652px]">
                        <Image
                            src="/Industry_left.png"
                            alt="Left Shape"
                            fill
                            className="object-cover"
                        />
                        {/* Full gradient overlay - only on mobile to laptop */}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,4,31,0)_0%,#00041F_100%)] lg:hidden"></div>
                    </div>

                    {/* Right Shape */}
                    <div className="absolute right-0 top-0 h-[400px] lg:h-[527px] w-[400px] md:w-[500px] lg:w-[652px]">
                        <Image
                            src="/Industry_right.png"
                            alt="Right Shape"
                            fill
                            className="object-cover"
                        />
                        {/* Full gradient overlay - only on mobile to laptop */}
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,4,31,0)_0%,#00041F_100%)] lg:hidden"></div>
                    </div>

                    {/* Center Content */}
                    <div className="relative z-10 container text-center text-white">
                        <p className="mb-3">Industry Insights</p>
                        <h3 className="mb-4">
                            Website Design Impacts <br /> Customer Retention
                        </h3>
                        <p className="max-w-xl mx-auto mb-6">
                            Capture and retain more customers by optimizing your website’s
                            design for engagement.
                        </p>
                        <button className="bg-blue-600 px-6 py-3 rounded-full">
                            Start a Project
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Industry;
