"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "hero" },
  { label: "About Us", href: "about" },
  { label: "Works", href: "works" },
  { label: "Blogs", href: "blogs" },
  { label: "Services", href: "services" },
  { label: "Pricing", href: "pricing" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // IntersectionObserver for scrollspy
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.6 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      navItems.forEach((item) => {
        const el = document.getElementById(item.href);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 md:py-2">
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-[#00020f]" : "bg-transparent"
          }`}
      />

      <div className="relative z-10 header_container">
        <div className="px-4 py-2 flex items-center justify-between">
          <div>
            <Image
              src="/logo.svg"
              height={40}
              width={115}
              alt="logo"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="bg-[#0A0D1FCC] text-white px-2 py-2 rounded-full flex space-x-2 items-center border border-[#232D6B]">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.href}`}
                  className={`px-4 py-2 rounded-full transition-all duration-200 ${activeSection === item.href
                    ? "bg-[#131839]  text-white"
                    : "text-[#A7ADBE]  hover:text-[#194EFF]"
                    }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="hidden lg:block">
            <button className="relative overflow-hidden group bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] py-2 sm:py-4 px-6 sm:px-8 rounded-full flex items-center gap-2">
              <span className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_100%,#101636_14.38%,#0C1027_100%)] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
              <span className="relative z-10 flex items-center gap-2 text-white">
                <a href="#contact" className="whitespace-nowrap">
                  Contact Us
                </a>
                <Image
                  src="/btn_arrow.png"
                  height={20}
                  width={20}
                  alt="arrowbtn"
                  className="transition-transform duration-400 ease-in-out group-hover:translate-x-3" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white flex justify-center items-center"
            >
              {mobileMenuOpen ? <X size={30} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden px-6 transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <nav className="flex flex-col space-y-3 mb-3">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-full transition-all duration-200 ${activeSection === item.href
                  ? "text-[#194EFF]"
                  : "text-white "
                  }`} >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-3 px-5 rounded-full text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
