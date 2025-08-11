import React from 'react'
import Image from 'next/image';
const Our_Design = () => {

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
                <div className="container">
                    <div className="flex flex-col justify-center items-center w-full">
                        <h6 className='bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto mb-3'>Process</h6>
                        <h3 className='text-center'>Our Design Process</h3>
                        <div className='max-w-xl text-center mt-3'>
                            <p>Explore our streamlined approach to creating bespoke websites that align with your goals.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 md:mt-32'>
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

