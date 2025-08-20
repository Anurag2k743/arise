"use client"
import Image from 'next/image'
import React from 'react'
const Assurance = () => {
    return (
        <section className=" bg-[#00020F] md:py-12 h-[607px] flex items-center justify-center px-4 overflow-hidden">
            {/* Card content */}
            <div className="relative z-10 w-[1160px] mx-auto bg-gradient-to-b from-[rgba(0,4,31,0)] to-[rgba(0,4,31,0.6)] rounded-3xl border border-[#080B1C] p-1">
                <div className='bg-[#00020F]'>
                    <div className="text-center border border-white/10 rounded-3xl p-6 md:p-12 z-50">
                        <Image
                            src="/assurance_logo.png"
                            alt="Assurance Image"
                            width={410}
                            height={141}
                            className="mx-auto mb-4"
                        />
                        <h4 className='my-2'>Assurance Trial Package</h4>
                        <p className="text-base max-w-lg mx-auto mt-0">
                            Explore our services confidently with this trial package tailored for assessing our agency&apos;s quality and capabilities.
                        </p>
                        <div className="mt-7">
                            <span className="text-white text-4xl font-bold mb-4">$979/m</span>
                            <p className="text-gray-400 text-sm">Pause or cancel anytime.</p>
                        </div>
                        <button className="mt-7 bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-3 px-6 rounded-full text-white font-semibold hover:from-[#5C85FF] hover:to-[#2A5FFF] transition-colors duration-300">
                            Start a Project
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Assurance
