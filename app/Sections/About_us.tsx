import Image from 'next/image'
import React from 'react'
const About_us = () => {


    const team = [
        {
            id: 1,
            name: "Ryan Matthews",
            role: "Co Founder",
            image: "/reyan.png", // replace with your image path
        },
        {
            id: 2,
            name: "David Parker",
            role: "Co Founder",
            image: "/david.png", // replace with your image path
        },
    ];

    return (


        <>
            <section className='bg-[#00020F]'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                        <div>
                            <Image src="/Discover.png" height={510} width={605} alt='' className='w-full' />
                        </div>
                        <div className='p-0 md:p-4'>

                            <div className="flex justify-center lg:justify-start">
                                <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mb-3">
                                    About Us
                                </h6>
                            </div>

                            <h3 className='text-center lg:text-left'>Discover Who We Are and Our Mission </h3>
                            <p className='text-center lg:text-left py-6'>Discover who we are and our mission at Arise. We are a passionate team
                                of creative professionals dedicated to crafting exceptional web design
                                solutions. Our mission is to empower businesses with innovative websites
                                that not only captivate but also drive results.</p>

                            <div className=" flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                                <button>
                                    <a
                                        href="#contact"
                                        className="flex justify-center items-center gap-1 bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-2 sm:py-4 px-6 px-2 sm:px-8 rounded-full text-center transition hover:bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)]"
                                    >
                                        Contact Us
                                        <Image src="/btn_arrow.png" height={20} width={20} alt="arrowbtn" />
                                    </a>
                                </button>

                                <button>
                                    <a
                                        href="#contact"
                                        className="flex justify-center items-center gap-1 bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] text-white py-2 sm:py-4 px-6 px-2 sm:px-8 rounded-full text-center transition hover:bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF]"
                                    >
                                        Contact Us
                                        <Image src="/btn_arrow.png" height={20} width={20} alt="arrowbtn" />
                                    </a>
                                </button>
                            </div>



                            <div className="bg-[#0B0F24] mt-7 rounded-2xl">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-7">
                                    {team.map((member) => (
                                        <div
                                            key={member.id}
                                            className="flex items-center justify-between rounded-lg px-3 py-2  border border-transparent transition-all duration-300 w-full lg:max-w-xs"
                                        >
                                            {/* Profile Info */}
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                                <div className="flex flex-col">
                                                    <span className="text-white text-sm font-semibold">{member.name}</span>
                                                    <span className="text-gray-400 text-xs">{member.role}</span>
                                                </div>
                                            </div>

                                            <button className="p-1 rounded-full">
                                                <Image
                                                    src="/x.png"
                                                    alt="Close"
                                                    width={42}
                                                    height={42}
                                                />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default About_us
