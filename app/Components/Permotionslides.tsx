"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  { name: "Velocity", icon: "/batch1.png" },
  { name: "Enigma", icon: "/batch2.png" },
  { name: "Lumina", icon: "/batch3.png" },
  { name: "Vortex", icon: "/batch4.png" },
  { name: "Synergy", icon: "/batch5.png" },
  { name: "Spectrum", icon: "/batch6.png" },
  { name: "Velocity", icon: "/batch7.png" },
  { name: "Enigma", icon: "/batch8.png" },
  { name: "Velocity", icon: "/batch1.png" },
  { name: "Enigma", icon: "/batch2.png" },
  { name: "Lumina", icon: "/batch3.png" },
  { name: "Vortex", icon: "/batch4.png" },
  { name: "Synergy", icon: "/batch5.png" },
  { name: "Spectrum", icon: "/batch6.png" },
  { name: "Velocity", icon: "/batch7.png" },
  { name: "Enigma", icon: "/batch8.png" },
];

const Permotionslides = () => {
  return (
    <div className="bg-[#00020F] pt-12 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Stars and Rating */}
        <div className="">
          <div className="flex justify-center space-x-1 mb-1 text-xl sm:text-2xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-gray-400 text-center">
            4.9/5 From 3,602 Customers
          </p>
        </div>

        {/* Slider with Overlays */}
        <div className="relative mt-5">
          {/* Left gradient */}
          <div className="absolute top-0 left-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-r from-[#00020f] to-transparent opacity-90" />
          {/* Right gradient */}
          <div className="absolute top-0 right-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-l from-[#00020f] to-transparent opacity-90" />

          <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={3000} // smooth speed
            autoplay={{
              delay: 0, // continuous scrolling
              disableOnInteraction: false,
            }}
            spaceBetween={12}
            slidesPerView={4}
            breakpoints={{
              480: { slidesPerView: 4, spaceBetween: 10 },
              640: { slidesPerView: 5, spaceBetween: 18 },
              768: { slidesPerView: 6, spaceBetween: 20 },
              1024: { slidesPerView: 7, spaceBetween: 22 },
              1280: { slidesPerView: 7, spaceBetween: 24 },
            }}
            className=""
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center text-gray-300 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src={logo.icon}
                    alt={logo.name}
                    width={120}
                    height={42}
                    className="mb-2 object-contain max-w-full h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Permotionslides;
