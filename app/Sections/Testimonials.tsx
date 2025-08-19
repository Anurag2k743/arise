"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {

    const sectionInfo = {
        tag: "Testimonials",
        heading: "Client Success Stories",
        desc: "Discover what our clients say about their experiences and success working with us."
    };

    const testimonialData = [
        {
            id: 1,
            text: "Working with Arise was a game-changer for us. They delivered a website that not only looks great but also drives significant traffic and conversions. Highly recommended!",
            name: "Michael Smith",
            position: "CEO – Zenith",
            avatar: "/smith.png"
        },
        {
            id: 2,
            text: "Arise transformed our online presence! The team was responsive and highly skilled, and our sales increased drastically after launch.",
            name: "Samantha Lee",
            position: "Founder – Horizon",
            avatar: "/smith.png"
        },
        {
            id: 3,
            text: "Great experience working with Arise. The site performance and design exceeded our expectations. Will definitely work again.",
            name: "John Doe",
            position: "Manager – AlphaTech",
            avatar: "/smith.png"
        },
    ];

    return (
        <>
            <section className='bg-[#00020F] px-4 pb-10'>
                <div className="pt-16 relative overflow-hidden">
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
                            <div className="max-w-lg mx-auto text-[#d1d1d1] mb-10">
                                <p>{sectionInfo.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        className="mySwiper max-w-[980px]"
                    >
                        {testimonialData.map((item) => (
                            <SwiperSlide key={item.id}>
                                <section className='max-w-[980px] h-[417px] mx-auto px-4 rounded-3xl py-12 border border-[#131839] text-white bg-[url(/testimonial_bg.png)] bg-cover bg-center mb-10'>
                                    <div className='flex justify-center'>
                                        <Image src="/commas.png" alt='comma' height={48} width={53} />
                                    </div>
                                    <div className='max-w-2xl mx-auto text-center mt-4'>
                                        <p>{item.text}</p>
                                    </div>
                                    <div className='flex justify-center mt-6'>
                                        {Array(5).fill(0).map((_, idx) => (
                                            <Image
                                                key={idx}
                                                src="/stars.png"
                                                alt="star"
                                                height={20}
                                                width={20}
                                                className='mx-1'
                                            />
                                        ))}
                                    </div>
                                    <div className='flex justify-center items-center gap-4 mt-10'>
                                        <Image src={item.avatar} alt="User" height={52} width={52} className="rounded-md" />
                                        <div>
                                            <h5 className='text-sm'>{item.name}</h5>
                                            <p className='text-sm'>{item.position}</p>
                                        </div>
                                    </div>
                                </section>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

            <style jsx>{`
    :global(.swiper-pagination-bullet) {
        width: 8px;
        height: 8px;
        background: #161C44;
        opacity: 1;
        border-radius: 999px;
        margin: 0 6px !important;
        transition: width .3s ease;
    }
    :global(.swiper-pagination-bullet-active) {
        background: #194EFF;
        width: 30px;
        height: 8px;
        border-radius: 999px;
    }
`}</style>

        </>
    )
}

export default Testimonials
