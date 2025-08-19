"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { BsQuestionCircleFill } from 'react-icons/bs';
import AskQuestions from "./AskQustions";


type FAQItem = {
    question: string;
    answer: string;
};

const Accordian: React.FC = () => {
    const faqData: FAQItem[] = [
        {
            question: "What services does Arise offer?",
            answer: "We specialize in web design, development, branding, and digital strategy solutions."
        },
        {
            question: "Do you provide hosting services?",
            answer: "Yes, hosting options are available as part of our full-service packages."
        },
        {
            question: "How long does a typical project take?",
            answer: "A standard project can take anywhere from 3 to 6 weeks depending on the complexity."
        },
        {
            question: "How do you handle revisions during the process?",
            answer: "We include multiple revision rounds to ensure you’re satisfied with the result."
        },
        {
            question: "Do you offer ongoing support after the website launch?",
            answer: "Yes, ongoing support and maintenance are available to all our clients."
        },
        {
            question: "Can you help with content creation for my website?",
            answer: "We can assist with drafting copy, gathering visuals, and refining your messaging."
        },
        {
            question: "Can I see examples of your previous work?",
            answer: "Of course! You can view case studies and sample projects in our portfolio section."
        },
        {
            question: "Is SEO included in your web design packages?",
            answer: "We include basic SEO setup and offer advanced SEO services as an optional addon."
        },
        {
            question: "What is your pricing structure like?",
            answer: "Our pricing depends on project scope; we offer flexible packages and transparent quotes."
        },
        {
            question: "What makes Arise different from other agencies?",
            answer: "Our creative approach, personalized process, and proven results set us apart."
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number>(-1);

    const handleToggle = (index: number) => {
        setActiveIndex(prev => (prev === index ? -1 : index));
    };

    return (
        <section className="pb-10">
            <div className="container px-4">
                <div className="flex flex-wrap gap-6">
                    {faqData.map((item, i) => (
                        <div key={i} className="w-full md:w-[48%]">
                            <div className="bg-[#0D1224] border border-[#131839] rounded-2xl py-5 px-7 text-lg">
                                <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle(i)}>
                                    <h4 className="text-white text-sm sm:text-lg">{item.question}</h4>
                                    <div className="h-[38px] w-[38px] bg-[#0E122E]  border border-[#161C44] text-white rounded-full flex justify-center items-center">
                                        {activeIndex === i ? <IoIosRemove size={22} /> : <IoIosAdd size={22} />}
                                    </div>
                                </div>
                                {activeIndex === i && (
                                    <p className="text-[#a9a9a9] text-sm mt-3">{item.answer}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <AskQuestions/>
               
            </div>
        </section>
    );
};

export default Accordian;
