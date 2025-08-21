import Image from 'next/image';
import React from 'react'
const Why_us = () => {

    const features = [
        {
            icon: "/arise_icon1.png",
            title: "Timely Delivery",
            description: "Meeting deadlines consistently without compromising on quality or precision."
        },
        {
            icon: "/arise_icon2.png",
            title: "Client-Centric Approach",
            description: "Tailoring solutions to meet your unique business needs and exceed expectations."
        },
        {
            icon: "/arise_icon3.png",
            title: "Proven Experience",
            description: "Years of successfully delivering impactful web solutions across diverse industries."
        },
        {
            icon: "/arise_icon4.png",
            title: "Responsive Solutions",
            description: "Ensuring seamless performance across all devices for optimal user experience."
        },
        {
            icon: "/arise_icon5.png",
            title: "Transparent Communication",
            description: "Clear, open lines of communication throughout every stage of your project."
        },
        {
            icon: "/arise_icon4.png",
            title: "Dedicated Support",
            description: "Providing reliable assistance and guidance whenever you need it, ensuring smooth project execution."
        }
    ];




    return (
        <>
            <section className='bg-[#00020F] pt-16 md:py-24'>
                <div className="container">
                    <div className="flex flex-col justify-center items-center ">
                        <h6 className='bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto mb-3'>Why Us</h6>
                        <h3 className='text-center'>Why Arise Stands Out</h3>
                        <div className='w-full md:max-w-xl text-center mt-3'>
                            <p>Discover why Arise excels in delivering innovative, client-focused  web design solutions.</p>
                        </div>
                    </div>
                </div>

                <div className='container'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16 md:mt-32'>
                        {
                            features.map((features, index) => (
                                <div key={index} className='border border-[#0E122E] bg-[#00020F] rounded-2xl py-6 md:py-10 px-4 md:px-8 mb-4 relative'>
                                    <Image src={features.icon} width={38} height={38} alt={features.title} className='absolute top-[-19]' />
                                    <h5 className='my-2'>{features.title}</h5>
                                    <p>{features.description}</p>

                                </div>
                            ))
                        }

                    </div>
                </div>

            </section>
        </>
    )
}

export default Why_us
