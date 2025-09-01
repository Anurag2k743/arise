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
            <section className='bg-[#00020F] py-12 md:py-24'>
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
                                <div className='flex justify-center items-center mt-7'>

                                  

                                    <button className="relative overflow-hidden group bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] group-hover:left-0 transition-all duration-500 ease-out z-0"></span>

                                        <span className="relative z-10 flex items-center gap-2 text-white">
                                            <a href="#contact" className="whitespace-nowrap ">
                                                {sectionData.buttonText}
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
                </div>
            </section>

        </>
    )
}

export default Projects