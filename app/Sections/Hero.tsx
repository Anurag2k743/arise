"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const phrases = [
    "Design That Powers Real Business Growth",
    "Websites That Captivate Your Audience",
    "Creative Solutions for Modern Brands"
  ];
  const [displayedText, setDisplayedText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 100 : 100; // typing vs deleting speed
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[phraseIndex];

      if (!deleting) {
        setDisplayedText(currentPhrase.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentPhrase.length) {
          setDeleting(true); // start deleting after complete
        }
      } else {
        setDisplayedText(currentPhrase.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length); // next phrase
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex, phrases]);

  return (
    <section
      className="relative z-10 bg-black text-white overflow-hidden pt-24 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat min-h-[770px] sm:min-h-[800px] md:min-h-[960px] scroll-mt-32"
      id="hero"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.9)_0%,#00020F_100%)] z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-center">
        {/* Badge */}
        <div className="max-w-lg mx-auto hidden sm:block mt-8">
          <div className="bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-md shadow-md mb-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
            <p className="text-white whitespace-normal flex-1 text-center sm:text-left">
              We Design websites that matter, user&apos;s can&apos;t resist
            </p>
            <MoveRight className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] w-[38px] h-[26px] rounded-full shrink-0" />
          </div>
        </div>

        {/* Typing Animation Heading */}
        <motion.h1
          className="mb-4 max-w-4xl w-full md:mx-auto text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-[2px] h-8 bg-white ml-1 align-middle"
          />
        </motion.h1>

        {/* Paragraph */}
        <p className="max-w-2xl mx-auto mb-8 px-2 sm:px-4 mt-5">
          Elevating brands through innovative and engaging web solutions.
        </p>

        {/* CTA */}
        <div className="flex justify-center items-center mt-8 sm:mt-10">
          <button className="relative overflow-hidden group bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
            <span className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
            <span className="relative z-10 flex items-center gap-2 text-white">
              <a href="#contact" className="whitespace-nowrap">
                Get Started
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
        </div>

        {/* Availability */}
        <div className="w-fit mx-auto mt-6 sm:mt-8">
          <div className="flex items-center gap-2 text-[#A7ADBE]">
            <span className="w-3 h-3 rounded-full bg-green-500 shadow-md" />
            <span className="text-lg">2 Spots Available</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
