import Image from 'next/image'
import React from 'react'
import Accordian from './Components/Accordian'
const Frequently = () => {

    const sectionInfo = {
        tag: "FAQ’s",
        heading: "Frequently Asked Questions",
        desc: "Answers to common questions about our services, processes, and what sets us apart."
    }
    return (
        <>
            <section className='bg-[#00020F] scroll-mt-12 lg:scroll-mt-32' id='faq'>
                <div className="container">
                    <div className="pt-0 md:pt-16 relative overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                            <Image src="/pricing.png" alt="rings background" className="w-[900px] sm:w-[1000px] opacity-50" width={717} height={268} />
                        </div>
                        <div className="container relative z-10">
                            <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full text-white text-sm">
                                        {sectionInfo.tag}
                                    </h6>
                                </div>
                                <h3 className="mb-4 text-white">{sectionInfo.heading}</h3>
                                <div className="max-w-2xl mx-auto text-[#d1d1d1] mb-10">
                                    <p>{sectionInfo.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Accordian/>

                </div>
            </section>
        </>
    )
}

export default Frequently
