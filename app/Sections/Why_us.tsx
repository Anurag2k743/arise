"use client"
import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const Why_us = () => {
  const features = [
    {
      icon: "/arise_icon1.png",
      title: "Timely Delivery",
      description:
        "Meeting deadlines consistently without compromising on quality or precision.",
    },
    {
      icon: "/arise_icon2.png",
      title: "Client-Centric Approach",
      description:
        "Tailoring solutions to meet your unique business needs and exceed expectations.",
    },
    {
      icon: "/arise_icon3.png",
      title: "Proven Experience",
      description:
        "Years of successfully delivering impactful web solutions across diverse industries.",
    },
    {
      icon: "/arise_icon4.png",
      title: "Responsive Solutions",
      description:
        "Ensuring seamless performance across all devices for optimal user experience.",
    },
    {
      icon: "/arise_icon5.png",
      title: "Transparent Communication",
      description:
        "Clear, open lines of communication throughout every stage of your project.",
    },
    {
      icon: "/arise_icon4.png",
      title: "Dedicated Support",
      description:
        "Providing reliable assistance and guidance whenever you need it, ensuring smooth project execution.",
    },
  ];

  // Heading animation
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, y: 30 }, // 👈 fade out when leaving viewport
  };

  // Container for stagger effect
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  // Each card animation
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: { opacity: 0, y: 40 }, // 👈 fade out when scrolling up
  };

  return (
    <>
      <section className="bg-[#00020F] pt-16 md:py-24">
        <div className="container">
          {/* Heading */}
          <motion.div
            className="flex flex-col justify-center items-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.3 }} // 👈 animate in/out on scroll
          >
            <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mx-auto mb-3">
              Why Us
            </h6>
            <h3 className="text-center">Why Arise Stands Out</h3>
            <div className="w-full md:max-w-xl text-center mt-3">
              <p>
                Discover why Arise excels in delivering innovative,
                client-focused web design solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="container">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:mt-16 md:mt-32"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.2 }} // 👈 animate in/out on scroll
          >
            {features.map((features, index) => (
              <motion.div
                key={index}
                className="border border-[#0E122E] bg-[#00020F] rounded-2xl py-6 md:py-10 px-4 md:px-8 mb-4 relative"
                variants={cardVariants}
              >
                <Image
                  src={features.icon}
                  width={38}
                  height={38}
                  alt={features.title}
                  className="absolute -top-5"
                />
                <h5 className="my-2">{features.title}</h5>
                <p>{features.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Why_us;
