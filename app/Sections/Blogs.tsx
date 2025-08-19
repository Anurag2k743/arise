"use client";
import Image from 'next/image'
import React, { useState } from 'react'

const Blogs = () => {
  const [showAll, setShowAll] = useState(false)

  const sectionInfo = {
    tag: "Our Blogs",
    heading: "News, insights and more",
    desc: "Dive into our blog for expert insights, tips, and industry trends to elevate your project management journey."
  }

  const blogsdata = [
    {
      id: 1,
      category: "Web Design",
      date: "Oct 11, 2024",
      title: "User-Centric Product Design, A Complete Guide From Scratch",
      image: "/blog1.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
    {
      id: 2,
      category: "Branding",
      date: "Sep 13, 2024",
      title: "The Power of Storytelling and Visual Elements in Branding",
      image: "/blog2.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
    {
      id: 3,
      category: "Web Design",
      date: "Aug 04, 2024",
      title: "Innovative Web Design Techniques for Modern Brands",
      image: "/blog3.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
    // New 3 dummy cards repeating same images
       {
      id: 4,
      category: "UX Design",
      date: "Dec 02, 2024",
      title: "Improving User Experience Through Micro Interactions",
      image: "/blog2.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
    {
      id: 5,
      category: "Development",
      date: "Jan 05, 2025",
      title: "How to Optimize Website Performance for Better UX",
      image: "/blog3.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
    {
      id: 6,
      category: "Brand Identity",
      date: "Nov 18, 2024",
      title: "Creating a Cohesive Visual Identity for Your Brand",
      image: "/blog1.png",
      readLabel: "Read Full Blog",
      readUrl: "#"
    },
 
  ]

  const blogsToDisplay = showAll ? blogsdata : blogsdata.slice(0, 3);

  return (
    <section className='bg-[#00020F]'>
       <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogsToDisplay.map((blog) => (
              <div key={blog.id} className="bg-[#000319] rounded-3xl p-2 border border-[#0E122E]">
                <div className='p-2 bg-[radial-gradient(80%_80%_at_50%_0%,#5C7DF4_0%,rgba(92,125,244,0)_100%)] rounded-3xl'>
                  <div>
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      className="rounded-2xl w-full"
                      height={275}
                      width={374}
                    />
                  </div>

                  <div className='py-5 px-4'>
                    <div className="flex items-center gap-3 mb-3 text-md">
                      <span className="bg-[#121529] px-3 py-1 rounded-full">{blog.category}</span>
                      <span>{blog.date}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-white mb-4 leading-snug">{blog.title}</h4>
                    <a href={blog.readUrl} className="text-[#6D7792] text-base flex items-center hover:underline">
                      {blog.readLabel}
                      <Image src="/blog_arrow.png" alt='blog_arrow' height={12} width={12} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button */}
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className='py-3 px-6 md:py-4 md:px-8 flex justify-center items-center gap-1 border border-[#161C44] rounded-full bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)]'>
              {showAll ? "Show Less" : "View All Blogs"}
              <Image src="/work_arrow.png" height={20} width={20} alt='work_arrow' />
            </button>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Blogs
