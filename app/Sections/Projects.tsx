import React from 'react'
import Image from 'next/image'

const Projects = () => {
    const sectionData = {
        "sectionTitle": "Start Your Project",
        "callToAction": "Contact us today to start crafting your exceptional and customized website solution.",
        "features": [
            {
                "name": "Customized design",
            },
            {
                "name": "Ongoing support"
            },
            {
                "name": "Fast delivery"
            }
        ],
        "buttonText": "Start a Project"
    };

    return (
        <>
            <section className='bg-[#00020F] py-12 md:py-24 lg:py-48'>
                <div className="flex items-center justify-center md:py-12">
                    <div className="w-full max-w-6xl mx-auto px-4">
                        <div className='bg-[#00020F] p-1 border border-[#080B1C] rounded-3xl'>
                            <div className="text-center border border border-[#080B1C] rounded-3xl p-6 sm:p-10 lg:p-20 bg-[url('/project.jpg')] bg-cover bg-center">
                                <h3 className='my-2'>{sectionData.sectionTitle}</h3>
                                <p className=" max-w-lg mx-auto mt-0">
                                    {sectionData.callToAction}
                                </p>
                                <div className='mt-6 flex flex-wrap justify-center gap-3 sm:gap-4'>
                                    {sectionData.features.map((feature, index) => (
                                        <div key={index} className='flex items-center gap-2 p-2 rounded-full border border-[#0E122E]'>
                                            <Image src="/check_arrow.png" alt={`Feature ${index + 1}`} width={20} height={20} />
                                            <span className='text-base'>{feature.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-8 md:mt-10 bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-3 px-6 rounded-full text-white">
                                    {sectionData.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Projects