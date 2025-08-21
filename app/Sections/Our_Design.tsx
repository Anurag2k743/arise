import React from 'react'
import Image from 'next/image';
const Our_Design = () => {

    const sectionInfo = {
        tag: "Process",
        heading: "Our Design Process",
        desc: "Explore our streamlined approach to creating bespoke websites that align with your goals."
    };
    const stepsData = [
        {
            step: "Step 01",
            title: "Discovery Phase",
            description: "Understanding your brand, objectives, and target audience to define project goals.",
            icon: "/Design_icon1.png" // replace with actual icon name or path if available
        },
        {
            step: "Step 02",
            title: "Design Concept",
            description: "Creating initial design concepts based on insights gathered during the discovery phase.",
            icon: "/Design_icon2.png" // replace with actual icon name or path if available
        },
        {
            step: "Step 03",
            title: "Development & Testing",
            description: "Building and refining the website, ensuring functionality and compatibility across devices.",
            icon: "/Design_icon3.png" // replace with actual icon name or path if available
        },
        {
            step: "Step 04",
            title: "Launch & Support",
            description: "Deploying the finalized website and providing ongoing support to ensure long-term success.",
            icon: "/Design_icon4.png" // replace with actual icon name or path if available
        }
    ];



    return (
        <>
            <section className='bg-[#00020F] pb-16 md:pb-24'>
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
                            <div className="max-w-xl mx-auto text-center text-[#d1d1d1] mb-10">
                                <p>{sectionInfo.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 md:mt-32'>
                        {
                            stepsData.map((stepsData, index) => (
                                <div key={index} className='p-4 md:p-8 bg-[#00041F] rounded-2xl border border-[#131839]'>
                                    <div className='flex justify-between items-center'>
                                        <div><Image src={stepsData.icon} height={50} width={50} alt={stepsData.title} /></div>
                                        <div>
                                            <h6 className='bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto'>{stepsData.step}
                                            </h6>
                                        </div>
                                    </div>
                                    <h5 className='mt-4'>{stepsData.title}</h5>
                                    <p className='mt-2'>{stepsData.description}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Our_Design

