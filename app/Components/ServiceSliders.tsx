"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const services = [
  { name: "Logo Design", icon: "/services1.png" },
  { name: "Social Post Design", icon: "/services2.png" },
  { name: "Branding", icon: "/services3.png" },
  { name: "Packaging Design", icon: "/services4.png" },
  { name: "UI/UX Design", icon: "/services5.png" },

  { name: "Logo Design", icon: "/services1.png" },
  { name: "Social Post Design", icon: "/services2.png" },
  { name: "Branding", icon: "/services3.png" },
  { name: "Packaging Design", icon: "/services4.png" },
  { name: "UI/UX Design", icon: "/services5.png" },
];

const ServiceSliders = () => {
  return (
    <div className="bg-[#00020F] pt-7 w-full">
      <div className="w-[1160px] mx-auto px-4">
        <div className="relative mt-6">
          {/* Gradient edges */}
          <div className="absolute top-0 left-0 z-10 h-full w-8 sm:w-64 pointer-events-none bg-gradient-to-r from-[#00020f] to-transparent opacity-90" />
          <div className="absolute top-0 right-0 z-10 h-full w-8 sm:w-64 pointer-events-none bg-gradient-to-l from-[#00020f] to-transparent opacity-90" />

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={4000}
            // autoplay={{
            //   delay: 0,
            //   disableOnInteraction: false,
            // }}

            spaceBetween={9}
            slidesPerView={3}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 4 },
              640: { slidesPerView: 3, spaceBetween: 5},
              768: { slidesPerView: 3, spaceBetween: 6 },
              1024: { slidesPerView: 4, spaceBetween: 7 },
              1280: { slidesPerView: 5, spaceBetween: 9 },
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="rounded-full border border-[#1e2b55] bg-[#0b1224]/70 backdrop-blur-sm hover:opacity-100 opacity-90 transition duration-300 whitespace-nowrap overflow-hidden">
                <div className="flex justify-center items-center gap-2 px-5 py-3 ">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    width={18}
                    height={18}
                  />
                  <span className="text-base text-white">{service.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServiceSliders;