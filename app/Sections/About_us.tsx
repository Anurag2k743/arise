"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About_us = () => {
  const team = [
    {
      id: 1,
      name: "Ryan Matthews",
      role: "Co Founder",
      image: "/reyan.png",
    },
    {
      id: 2,
      name: "David Parker",
      role: "Co Founder",
      image: "/david.png",
    },
  ];

  return (
    <section
      className="bg-[#00020F] scroll-mt-8 md:scroll-mt-32 overflow-x-hidden md:overflow-visible"
      id="about"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <Image
              src="/Discover.png"
              height={510}
              width={605}
              alt="discover"
              className="w-full h-auto max-w-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="p-0 md:p-4"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="flex justify-center lg:justify-start">
              <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] inline-block text-center rounded-full w-fit mb-3">
                About Us
              </h6>
            </div>

            <h3 className="text-center lg:text-left">
              Discover Who We Are and Our Mission
            </h3>
            <p className="text-center lg:text-left py-6">
              Discover who we are and our mission at Arise. We are a passionate
              team of creative professionals dedicated to crafting exceptional
              web design solutions. Our mission is to empower businesses with
              innovative websites that not only captivate but also drive
              results.
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start flex-wrap"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }} >

              <button className="relative overflow-hidden group bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] group-hover:left-0 transition-all duration-500 ease-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <a href="#contact" className="whitespace-nowrap">
                    Contact Us
                  </a>
                  <Image
                    src="/btn_arrow.png"
                    height={20}
                    width={20}
                    alt="arrowbtn"
                    className="transition-transform duration-400 ease-in-out group-hover:translate-x-3"
                  />
                </span>
              </button>



              <button className="relative overflow-hidden group bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
                <span className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <a href="#contact" className="whitespace-nowrap">
                    View Projects
                  </a>
                  <Image
                    src="/btn_arrow.png"
                    height={20}
                    width={20}
                    alt="arrowbtn"
                    className="transition-transform duration-400 ease-in-out group-hover:translate-x-3" />
                </span>
              </button>




            </motion.div>

            {/* Team Section */}
            <motion.div
              className="bg-[#0B0F24] mt-7 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 md:gap-7">
                {team.map((member) => (
                  <motion.div
                    key={member.id}
                    className="flex items-center justify-between rounded-lg px-3 py-2 border border-transparent transition-all duration-300 w-full lg:max-w-xs"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: member.id * 0.2 }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {/* Profile Info */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-white text-sm font-semibold">
                          {member.name}
                        </span>
                        <span className="text-gray-400 text-xs">
                          {member.role}
                        </span>
                      </div>
                    </div>

                    <button className="p-1 rounded-full">
                      <Image src="/x.png" alt="Close" width={42} height={42} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About_us;
