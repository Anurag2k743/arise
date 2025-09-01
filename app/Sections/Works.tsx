"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Works = () => {
  const sectionInfo = {
    tag: " Works",
    heading: "Explore Our Recent Projects",
    desc: "Browse through our portfolio showcasing diverse, innovative web design projects and client successe"
  };

  const projectsData = [
    {
      title: "Clever — SaaS Landing Page",
      tag: "Agency",
      description:
        "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
      image: "/project1.png",
      link: "#",
    },
    {
      title: "Genius — SaaS Landing Page",
      tag: "Saas",
      description:
        "Genius is a minimal SaaS landing page template, designed to be modern, simple, and easily adaptable to any brand.",
      image: "/project2.png",
      link: "#",
    },
    {
      title: "Sap — SaaS Website Template",
      tag: "Saas",
      description:
        "Sap is a landing page template designed to showcase SaaS and app information efficiently.",
      image: "/project3.png",
      link: "#",
    },
    {
      title: "Waitlistly — Waitlist Landing Page",
      tag: "Website",
      description:
        "This useful template for crafting a clean and efficient waitlist landing page.",
      image: "/project4.png",
      link: "#",
    },
    {
      title: "Clever — SaaS Landing Page",
      tag: "Agency",
      description:
        "Clever is a modern SaaS landing page template designed to showcase your software features effortlessly.",
      image: "/project1.png",
      link: "#",
    },
    {
      title: "Genius — SaaS Landing Page",
      tag: "Saas",
      description:
        "Genius is a minimal SaaS landing page template, designed to be modern, simple, and easily adaptable to any brand.",
      image: "/project2.png",
      link: "#",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section
      className="bg-[#00020F] scroll-mt-8 md:scroll-mt-32 overflow-hidden scrollbar-hide" 
      id="works"
    >
      <div className="container ">
        <div className="pt-0 md:pt-16 relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image
              src="/pricing.png"
              alt="rings background"
              className="w-[900px] sm:w-[1000px] opacity-50"
              width={717}
              height={268}
            />
          </div>
          <div className="container relative z-10">
            
            {/* Section Heading */}
            <motion.div
              className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center justify-center mb-4">
                <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full text-white text-sm">
                  {sectionInfo.tag}
                </h6>
              </div>
              <h3 className="text-center md:text-left mb-4 text-white">
                {sectionInfo.heading}
              </h3>
              <div className="max-w-lg mx-auto text-center text-[#d1d1d1] mb-10">
                <p>{sectionInfo.desc}</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full md:max-w-[1080px] mx-auto mt-12">
          {(showAll ? projectsData : projectsData.slice(0, 4)).map((project, index) => (
            <motion.div
              key={index}
              className="overflow-hidden bg-[linear-gradient(180deg,#0A0C1E_0%,rgba(10,12,30,0.98)_0.01%,rgba(10,12,30,0)_72.36%)] p-3 rounded-3xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? "-10%" : "10%" }} 
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }} 
            >
              <div className="border border-white/10 border-b-0 p-2 rounded-3xl">
                <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 shadow-[0px_-2px_6px_0px_#00000040]">
                  <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-black/100 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="py-3 px-3">
                  <div className="flex items-center gap-2 mt-4 mb-2">
                    <h4 className="text-white">{project.title}</h4>
                    <span className="px-3 py-1 text-sm text-white rounded-full border border-[#1F275F]">
                      {project.tag}
                    </span>
                  </div>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        {!showAll && (
          <motion.div
            className="flex justify-center items-center w-full mt-6 md:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="py-3 px-6 md:py-4 md:px-8 flex justify-center items-center gap-1 border border-[#161C44] rounded-full bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)]"
            >
              View All Works
              <Image
                src="/work_arrow.png"
                height={20}
                width={20}
                alt="work_arrow"
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Works;
