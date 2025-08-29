"use client"
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const Brand = () => {
  const featureCards = [
    {
      title: "Custom Designs",
      description:
        "Tailored websites meticulously crafted to reflect your brand.",
      icon: "/Icon1.png",
    },
    {
      title: "Fast Performance",
      description:
        "Optimized for lightning-fast speed to enhance user experience.",
      icon: "/Icon2.png",
    },
    {
      title: "SEO Friendly",
      description:
        "Designed to improve SEO and increase visibility effortlessly.",
      icon: "/Icon3.png",
    },
  ];

  // ✅ Wrapper for stagger effect
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay each card
      },
    },
  };

  // ✅ Each card animates from left
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, x: -50 }, // 👈 fade/slide out when leaving viewport
  };

  return (
    <>
      <section className="bg-[#00020F] py-16 md:py-24 lg:py-48">
        <div className="container">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 px-4 flex-wrap mb-5">
            <div className="hidden sm:block h-[2px] w-32 sm:w-64 bg-[linear-gradient(to_right,_rgba(23,29,69,0),_#171D45)]" />
            <p className="text-center text-white text-sm whitespace-nowrap">
              See How We Can Help Your brand
            </p>
            <div className="hidden sm:block h-[2px] w-32 sm:w-64 bg-[linear-gradient(to_left,_rgba(23,29,69,0),_#171D45)]" />
          </div>
        </div>

        {/* Video Section */}
        <section>
          <div className="container">
            <div className="bg-[#0A0C1E] rounded-3xl">
              <video
                src="/Video/meeting_video.mp4"
                controls
                autoPlay={true}
                muted
                className="rounded-3xl w-full h-auto lg:h-[650px] object-cover"
              ></video>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mt-5">
          <div className="container">
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              viewport={{ once: false, amount: 0.2 }} // 👈 animate on scroll up & down
            >
              {featureCards.map((cards, index) => (
                <motion.div
                  key={index}
                  className="bg-[#00041F] rounded-2xl p-7 border border-[#131839]"
                  variants={cardVariants}
                >
                  <Image
                    src={cards.icon}
                    height={50}
                    width={50}
                    alt="icons"
                  />
                  <h6 className="my-4">{cards.title}</h6>
                  <p>{cards.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Brand;
