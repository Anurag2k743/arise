"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
  dropdown?: false;
};

type NavDropdown = {
  label: string;
  dropdown: true;
  items: { label: string; href: string }[];
};

type NavItem = NavLink | NavDropdown;

const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "Works", href: "#works" },
  { label: "Blogs", href: "#blogs" },
  { label: "Timeline", href: "#services" },
  { label: "Waitlist", href: "#pricing" },
  {
    label: "All Pages",
    dropdown: true,
    items: [
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Team", href: "#testimonials" },
    ],
  },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");

  const pathname = usePathname();

  // Scroll + resize handler
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

  const buildThresholds = () => Array.from({ length: 101 }, (_, i) => i / 100);

  // Intersection Observer for active section
  useEffect(() => {
    const allNavItems = navItems.flatMap((item) =>
      item.dropdown ? item.items : [item]
    );

    const sectionEls = allNavItems
      .filter((item) => item.href.startsWith("#"))
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sectionEls.length === 0) return;

    const visibilityMap = new Map<HTMLElement, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target instanceof HTMLElement) {
            visibilityMap.set(entry.target, entry.intersectionRatio);
          }
        });

        let bestEl: HTMLElement | null = null; // ✅ fix
        let bestRatio = 0;

        visibilityMap.forEach((ratio, el) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestEl = el;
          }
        });

        if (bestEl) {
          setActiveSection(`#${bestEl.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: buildThresholds(),
      }
    );

    sectionEls.forEach((el) => {
      visibilityMap.set(el, 0);
      observer.observe(el);
    });

    const setInitial = () => {
      let bestEl: HTMLElement | null = null; // ✅ fix
      let bestVisible = 0;

      sectionEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const visible =
          Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
        if (visible > bestVisible) {
          bestVisible = visible;
          bestEl = el;
        }
      });

      if (bestEl) setActiveSection(`#${bestEl.id}`);
    };

    setInitial();

    return () => {
      sectionEls.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return href === activeSection;
    }
    return href === pathname;
  };

  const getNavItemClasses = (href: string) => {
    const isItemActive = isActive(href);
    if (isItemActive) {
      return "bg-[#131839] border border-[#1F275F] px-4 py-2 rounded-full text-white transition-all duration-200";
    }
    return "hover:text-[#194EFF] px-4 py-2 rounded-full text-[#A7ADBE] transition-all duration-200";
  };

  const getDropdownItemClasses = (href: string) => {
    const isItemActive = isActive(href);
    if (isItemActive) {
      return "block px-4 py-2 bg-[#131839] text-[#A7ADBE] transition-all duration-200";
    }
    return "block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-all duration-200";
  };

  const getMobileItemClasses = (href: string) => {
    const isItemActive = isActive(href);
    if (isItemActive) {
      return "block px-4 py-2 bg-[#131839] border border-[#1F275F] text-[#A7ADBE] rounded transition-all duration-200";
    }
    return "block px-4 py-2 text-white hover:bg-[#131839] rounded-full transition-all duration-200";
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 md:py-2">
      <div
        className={`absolute inset-0 z-0 transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-[#00020f]/50" : "bg-transparent"
        }`}
      />

      <div className="relative z-10 header_container">
        <div className="px-4 py-2 flex items-center justify-between">
          <div>
            <Image src="/logo.svg" height={40} width={115} alt="logo" priority />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="bg-[#0A0D1FCC] text-white px-2 py-2 rounded-full flex space-x-2 items-center border border-[#232D6B]">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-1 cursor-pointer px-4 py-2 hover:text-[#194EFF] transition-all duration-200">
                      <span>{item.label}</span>
                      <ChevronDown size={16} />
                    </div>
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 bg-white text-black rounded-md shadow-lg w-40 z-50 overflow-hidden">
                        {item.items.map((subItem, i) => {
                          const isFirst = i === 0;
                          const isLast = i === item.items.length - 1;
                          return (
                            <a
                              key={i}
                              href={subItem.href}
                              className={` ${getDropdownItemClasses(
                                subItem.href
                              )} focus:outline-none focus:ring-0 ${
                                isFirst ? "rounded-t-md" : ""
                              } ${isLast ? "rounded-b-md" : ""} ${
                                !isFirst && !isLast ? "rounded-none" : ""
                              }`}
                            >
                              {subItem.label}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={index}
                    href={item.href}
                    className={`${getNavItemClasses(item.href)} focus:outline-none focus:ring-0`}
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-4 px-5 rounded-full transition focus:outline-none focus:ring-0"
            >
              Contact Us
            </a>
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
          className={`lg:hidden px-6 transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
  >
          <nav className="flex flex-col space-y-3 mb-3">
            {navItems.map((item, index) =>
              item.dropdown ? (
                <details key={index} className="group text-white">
                  <summary className="cursor-pointer flex justify-between items-center font-medium px-4 py-2">
                    {item.label}
                    <ChevronDown size={16} />
                  </summary>
                  <div className="pl-4 mt-2 flex flex-col space-y-1 text-sm">
                    {item.items.map((subItem, i) => (
                      <a
                        key={i}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${getMobileItemClasses(
                          subItem.href
                        )} focus:outline-none focus:ring-0`}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${getMobileItemClasses(item.href)} focus:outline-none focus:ring-0`}
                >
                  {item.label}
                </a>
              )
            )}

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-3 px-5 rounded-full text-center "
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
