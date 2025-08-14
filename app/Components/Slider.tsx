'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const projects = [
  { image: '/Container.png', label: 'Website Design - Wanderly' },
  { image: '/mobile.png', label: 'App Design - Waitlista' },
  { image: '/regulate.png', label: 'Website Design - Regulate' },
  { image: '/mobile2.png', label: 'App Design - Appit' },
  { image: '/Container.png', label: 'Website Design - Wanderly' },
  { image: '/mobile.png', label: 'App Design - Waitlista' },
  { image: '/regulate.png', label: 'Website Design - Regulate' },
  { image: '/mobile2.png', label: 'App Design - Appit' },
];

export default function Slider() {
  return (
    <section className="bg-[#00020F] py-12 overflow-hidden">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 z-20">
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-r from-[#00020f] to-transparent opacity-90" />
        <div className="absolute top-0 right-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-l from-[#00020f] to-transparent opacity-90" />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          slidesPerView="auto"
          className="continuous-slider" // ✅ Custom class for styling
        >
          {projects.map((project, index) => {
            const isOdd = index % 2 !== 0;
            const slideWidth = isOdd ? 174 : 468;

            return (
              <SwiperSlide
                key={index}
                style={{ width: `${slideWidth}px` }}
                className="!p-0 !mx-3"
              >
                <div className="rounded-2xl shadow-lg overflow-hidden w-full">
                  <div className="h-[307px] w-full">
                    <img
                      src={project.image}
                      alt={project.label}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="text-left py-2 px-2">
                    <p className="text-sm text-white">{project.label}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
