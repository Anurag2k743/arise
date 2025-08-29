"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Our_Design = () => {
  const sectionInfo = {
    tag: "Process",
    heading: "Our Design Process",
    desc: "Explore our streamlined approach to creating bespoke websites that align with your goals.",
  };

  const stepsData = [
    {
      step: "Step 01",
      title: "Discovery Phase",
      description:
        "Understanding your brand, objectives, and target audience to define project goals.",
      icon: "/Design_icon1.png",
    },
    {
      step: "Step 02",
      title: "Design Concept",
      description:
        "Creating initial design concepts based on insights gathered during the discovery phase.",
      icon: "/Design_icon2.png",
    },
    {
      step: "Step 03",
      title: "Development & Testing",
      description:
        "Building and refining the website, ensuring functionality and compatibility across devices.",
      icon: "/Design_icon3.png",
    },
    {
      step: "Step 04",
      title: "Launch & Support",
      description:
        "Deploying the finalized website and providing ongoing support to ensure long-term success.",
      icon: "/Design_icon4.png",
    },
  ];

  // Variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, y: 40 },
  };

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <>
      <section className="bg-[#00020F] pb-16 md:pb-24">
        <div className="pt-16 relative overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/pricing.png"
              alt="rings background"
              className="w-[900px] sm:w-[1000px] opacity-50"
              width={717}
              height={268}
            />
          </div>

          {/* Heading Section */}
          <motion.div
            className="container relative z-10"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full text-white text-sm">
                  {sectionInfo.tag}
                </h6>
              </div>
              <h3 className="text-center md:text-left mb-4 text-white">
                {sectionInfo.heading}
              </h3>
              <div className="max-w-xl mx-auto text-center text-[#d1d1d1] mb-10">
                <p>{sectionInfo.desc}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Steps Section */}
        <div className="container">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 md:mt-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }}
          >
            {stepsData.map((step, index) => (
              <motion.div
                key={index}
                className="p-4 md:p-8 bg-[#00041F] rounded-2xl border border-[#131839]"
                variants={cardVariants}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <Image
                      src={step.icon}
                      height={50}
                      width={50}
                      alt={step.title}
                    />
                  </div>
                  <div>
                    <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto">
                      {step.step}
                    </h6>
                  </div>
                </div>
                <h5 className="mt-4">{step.title}</h5>
                <p className="mt-2">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Our_Design;
