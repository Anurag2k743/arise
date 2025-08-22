'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

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
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);
  const speed = 1; 

  useAnimationFrame((_, delta) => {
    if (containerRef.current) {
      x.current -= speed * (delta / 16.67); // normalize to 60fps
      if (x.current < -containerRef.current.scrollWidth / 2) {
        x.current = 0; 
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <section className="bg-[#00020F] py-12 overflow-hidden relative">
      <div className="relative w-full max-w-[1440px] mx-auto px-4 z-20">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-r from-[#00020f] to-transparent opacity-90" />
        <div className="absolute top-0 right-0 z-10 h-full w-16 sm:w-32 pointer-events-none bg-gradient-to-l from-[#00020f] to-transparent opacity-90" />

        {/* Slider content */}
        <div className="overflow-hidden">
          <div className="flex gap-6" ref={containerRef}>
            {/* Duplicate slides for seamless scrolling */}
            {projects.concat(projects).map((project, index) => {
              const isOdd = index % 2 !== 0;
              const slideWidth = isOdd ? 174 : 468;

              return (
                <div
                  key={index}
                  style={{ width: `${slideWidth}px` }}
                  className="rounded-2xl shadow-lg overflow-hidden flex-shrink-0 !mx-3"
                >
                  <div className="h-[307px] w-full">
                    <Image
                      src={project.image}
                      alt={project.label}
                      width={slideWidth}
                      height={307}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="text-left py-2 px-2">
                    <p className="text-sm text-white">{project.label.replace(/'/g, "&apos;")}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
