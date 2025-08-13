"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "Works", href: "#works" },
  { label: "Blogs", href: "#blogs" },
  { label: "Timeline", href: "#timeline" },
  { label: "Waitlist", href: "#waitlist" },
  {
    label: "All Pages",
    dropdown: true,
    items: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Team", href: "#team" },
    ],
  },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 1024) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 md:py-2">
      {/* Background Blur Layer */}
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-[#00020f]/50" : "bg-transparent"
        }`}
      />

      {/* Nav Content */}
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="bg-[#0A0D1FCC] text-white pl-2 pr-4 py-2 rounded-full flex space-x-8 items-center border border-[#232D6B]">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer">
                      <span className="hover:text-[#194EFF]">{item.label}</span>
                      <ChevronDown size={16} />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute top-7 left-0 bg-white text-black rounded-md shadow-lg w-40 py-2 z-50">
                        {item.items?.map((subItem, i) => (
                          <a
                            key={i}
                            href={subItem.href}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className={`${
                      item.active
                        ? "bg-[#131839] border border-[#1F275F] p-3 rounded-full text-[#A7ADBE]"
                        : "hover:text-[#194EFF]"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Contact Us (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-4 px-5 rounded-full transition"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
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
          className={`lg:hidden px-6 transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-3 mb-3">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <details key={index} className="group text-white">
                  <summary className="cursor-pointer flex justify-between items-center font-medium">
                    {item.label}
                    <ChevronDown size={16} />
                  </summary>
                  <div className="pl-4 mt-2 flex flex-col space-y-1 text-sm">
                    {item.items?.map((subItem, i) => (
                      <a key={i} href={subItem.href} className="text-white">
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a key={index} href={item.href} className="text-white">
                  {item.label}
                </a>
              )
            )}

            <a
              href="#contact"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-3 px-5 rounded-full text-center transition"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
