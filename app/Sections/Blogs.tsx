"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  const [showAll, setShowAll] = useState(false);

  const sectionInfo = {
    tag: "Our Blogs",
    heading: "News, insights and more",
    desc: "Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey.",
  };

  const blogsdata = [
    {
      id: 1,
      category: "Web Design",
      date: "Oct 11, 2024",
      title: "User-Centric Product Design, A Complete Guide From Scratch",
      image: "/blog1.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
    {
      id: 2,
      category: "Branding",
      date: "Sep 13, 2024",
      title: "The Power of Storytelling and Visual Elements in Branding",
      image: "/blog2.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
    {
      id: 3,
      category: "Web Design",
      date: "Aug 04, 2024",
      title: "Innovative Web Design Techniques for Modern Brands",
      image: "/blog3.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
    {
      id: 4,
      category: "UX Design",
      date: "Dec 02, 2024",
      title: "Improving User Experience Through Micro Interactions",
      image: "/blog2.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
    {
      id: 5,
      category: "Development",
      date: "Jan 05, 2025",
      title: "How to Optimize Website Performance for Better UX",
      image: "/blog3.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
    {
      id: 6,
      category: "Brand Identity",
      date: "Nov 18, 2024",
      title: "Creating a Cohesive Visual Identity for Your Brand",
      image: "/blog1.png",
      readLabel: "Read Full Blog",
      readUrl: "#",
    },
  ];

  const blogsToDisplay = showAll ? blogsdata : blogsdata.slice(0, 3);

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#00020F] scroll-mt-8 md:scroll-mt-32" id="blogs">
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
          <div className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <h6 className="bg-[#000529] px-3 py-2 border border-[#161C44] rounded-full text-white text-sm">
                {sectionInfo.tag}
              </h6>
            </div>
            <h3 className="text-center md:text-left mb-4 text-white">
              {sectionInfo.heading}
            </h3>
            <div className="max-w-3xl mx-auto text-center text-[#d1d1d1] mb-10">
              <p>{sectionInfo.desc}</p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogsToDisplay.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="bg-[#000319] rounded-3xl p-2 border border-[#0E122E]"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // ✅ works on scroll up & down
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="p-2 bg-[radial-gradient(80%_80%_at_50%_0%,#5C7DF4_0%,rgba(92,125,244,0)_100%)] rounded-3xl">
                  <div>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-2xl w-full"
                      height={275}
                      width={374}
                    />
                  </div>

                  <div className="py-5 px-4">
                    <div className="flex items-center gap-3 mb-3 text-md">
                      <span className="bg-[#121529] px-3 py-1 rounded-full border border-[#FFFFFF1F] text-white">
                        {blog.category}
                      </span>
                      <span className="text-[#6D7792]">{blog.date}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-4 leading-snug">
                      {blog.title}
                    </h4>
                    <a
                      href={blog.readUrl}
                      className="text-[#6D7792] text-base flex items-center hover:underline"
                    >
                      {blog.readLabel}
                      <Image
                        src="/blog_arrow.png"
                        alt="blog_arrow"
                        height={12}
                        width={12}
                        className="ml-1"
                      />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Toggle Button */}
          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="group hover:bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-3 px-6 md:py-4 md:px-8 flex justify-center items-center gap-1 border border-[#161C44] rounded-full bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)]"
            >
              {showAll ? "Show Less" : "View All Blogs"}
              <Image
                src="/work_arrow.png"
                height={20}
                width={20}
                alt="work_arrow"
                className="transition-transform duration-400 ease-in-out group-hover:translate-x-3"
              />
            </button>


            
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Blogs;
