"use client"
import Image from 'next/image'
import React from 'react'
const Assurance = () => {
    return (
        <section className=" bg-[#00020F] md:py-12 h-[607px] flex items-center justify-center px-4 overflow-hidden">
            {/* Card content */}
            <div className="relative z-10 w-[1160px] mx-auto bg-gradient-to-b from-[rgba(0,4,31,0)] to-[rgba(0,4,31,0.6)] rounded-3xl border border-[#080B1C]  p-1">
                <div className="">
                    <div className="text-center border border-white/10 rounded-3xl p-6 md:p-12 z-50 bg-[url('/assurance_bg.png')] bg-cover bg-center">
                        <Image
                            src="/assurance_logo.png"
                            alt="Assurance Image"
                            width={410}
                            height={141}
                            className="mx-auto mb-4"
                        />
                        <h3 className='my-2'>Assurance Trial Package</h3>
                        <p className=" max-w-2xl mx-auto mt-0">
                            Explore our services confidently with this trial package tailored for assessing our agency&apos;s quality and capabilities.
                        </p>
                        <div className="mt-7">
                            <span className="text-white text-5xl font-bold">$979/m</span>
                            <p  className='mt-2'>Pause or cancel anytime.</p>
                        </div>
                      <div className='flex justify-center items-center mt-7'>
                            <button className="relative overflow-hidden group bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] group-hover:left-0 transition-all duration-500 ease-out z-0"></span>
                                <span className="relative z-10 flex items-center gap-2 text-white">
                                    <a href="#contact" className="whitespace-nowrap">
                                       Start a Project
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
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Assurance
