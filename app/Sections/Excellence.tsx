"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion, Variants } from "framer-motion";
import "swiper/css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Excellence = () => {
  const tools_icons = [
    { icon: "/tools_icon1.png" },
    { icon: "/tools_icon2.png" },
    { icon: "/tools_icon3.png" },
    { icon: "/tools_icon4.png" },
    { icon: "/tools_icon5.png" },
    { icon: "/tools_icon6.png" },
  ];

  const toolsData = [
    {
      title: "Figurative",
      description: "Collaborative design and prototyping tool online.",
      link: "#",
      icon: "/tools_icon1.png",
    },
    {
      title: "FrameX",
      description: "Interactive prototypes for advanced animations website.",
      link: "#",
      icon: "/tools_icon2.png",
    },
    {
      title: "Shopty",
      description: "E-commerce platform for online shopping websites.",
      link: "#",
      icon: "/tools_icon3.png",
    },
    {
      title: "Idease",
      description: "All-in-one workspace for notes and project tasks.",
      link: "#",
      icon: "/tools_icon4.png",
    },
    {
      title: "Webflew",
      description: "Design and develop websites visually with ease.",
      link: "#",
      icon: "/tools_icon5.png",
    },
    {
      title: "Payflow",
      description: "Online payment processing platform for business.",
      link: "#",
      icon: "/tools_icon6.png",
    },
  ];

  return (
    <>
      <section
        className="bg-[#00020F] py-16 md:py-28 scroll-mt-16 lg:scroll-mt-16"
        id="excellence"
      >
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col justify-center items-center w-full"
          >
            <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto mb-4">
              Tools
            </h6>

            <div className="w-full max-w-[245px] border border-[#1F275F] rounded-full p-2">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={4}
                loop={true}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                }}
                speed={3000}
                grabCursor={true}
              >
                {tools_icons.map((tool, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <Image
                      src={tool.icon}
                      alt={`Tool ${index + 1}`}
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <h3 className="mt-6 text-center md:text-left">
              Tools We Utilize for Excellence
            </h3>
            <div className="w-full text-center md:text-left md:max-w-lg mx-auto">
              <p className="mt-4 md:text-left">
                Discover the advanced tools and technologies we leverage to
                create cutting-edge websites.
              </p>
            </div>
          </motion.div>
        </div>

        <section>
          <div className="container">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-9 md:mt-16"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}>
              {toolsData.map((data, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="p-4 md:p-7 bg-[linear-gradient(180deg,rgba(0,4,31,0)_0%,#00041F_100%)] rounded-2xl border-[#0C0F26] border">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src={data.icon}
                        height={46}
                        width={46}
                        alt={data.title}
                      />
                      <h6>{data.title}</h6>
                    </div>
                    <div className="bg-[#0E122E] h-[34px] w-[46px] flex justify-center items-center rounded-full">
                      <Image
                        src="/tools_arrow.png"
                        height={18}
                        width={18}
                        alt="arrow"
                      />
                    </div>
                  </div>
                  <p className="mt-4">{data.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Excellence;
