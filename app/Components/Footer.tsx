"use client";
import Image from "next/image";

export default function Footer() {
  type SocialItem = {
    iconSrc: string;
    url: string;
  };

  const footerData = {
    left: {
      logo: "/logo.svg",
      tagline: "Book a Call For Free Consultation",
      description:
        "Experienced team delivering exceptional digital solutions tailored to your brand.",
      buttonText: "Contact Us",
      buttonIcon: "/work_arrow.png",
      socials: [
        { iconSrc: "/linkdin.png", url: "#" },
        { iconSrc: "/xa.png", url: "#" },
        { iconSrc: "/instagram.png", url: "#" },
      ] as SocialItem[],
    },
    columns: [
      {
        title: "Home",
        links: [
          { text: "About", url: "#about" },
          { text: "Services", url: "#services" },
          { text: "Pricings", url: "#pricing" },
          { text: "Tools", url: "#excellence" },
          { text: "Works", url: "#works" },
        ],
      },
      {
        title: "Other",
        links: [
          { text: "Works", url: "#works" },
          { text: "Blogs", url: "#blogs" },
          { text: "Timeline", url: "#timeline" },
          { text: "Waitlist", url: "#waitlist" },
          { text: "Privacy policy", url: "#privacy" },
        ],
      },
      {
        title: "Contact",
        links: [
          { text: "Contact", url: "#contact" },
          { text: "FAQ’s", url: "#faq" },
        ],
      },
    ],
  } as const;

  const { left, columns } = footerData;

  return (
    <footer className="bg-[#00041F] text-white border-t border-[#131839]">
      <div className="container px-4 mx-auto">
        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 w-full">
          
          {/* Left Section */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#131839] pr-0 lg:pr-8 py-12 lg:py-14">
            <div className="flex items-center gap-2 mb-7">
              <Image src={left.logo} alt="Arise" width={123} height={50} />
            </div>
            <h5 className="mb-2">{left.tagline}</h5>
            <div className="max-w-base">
              <p className="mb-6">{left.description}</p>
            </div>
            <button className="py-3 px-6 md:py-4 md:px-8 flex justify-center items-center gap-1 border border-[#161C44] rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF]">
              {left.buttonText}
              <Image src={left.buttonIcon} height={20} width={20} alt="work_arrow" />
            </button>
            <div className="mt-10">
              <span>Our Social Handles</span>
              <div className="flex items-center gap-3 mt-4">
                {left.socials.map(({ iconSrc, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    className="p-2 bg-[#161C44] rounded-lg h-[42px] w-[42px] flex items-center justify-center"
                  >
                    <Image src={iconSrc} alt="social" width={17} height={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-7 pt-12 lg:pt-14 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20">
              {columns.map((col, idx) => (
                <div key={idx}>
                  <h5 className="mb-4">{col.title}</h5>
                  <ul className="space-y-5 text-lg">
                    {col.links.map((item, idx2) => (
                      <li key={idx2}>
                        <a
                          href={item.url}
                          className="text-[#A7ADBE] relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-[2px] after:h-[1px] after:w-0 after:bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] hover:after:w-full after:transition-all"
                        >
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-10 py-4 border-t border-[#131839]">
              <p>Template by Anurag</p>
              <p>© 2024 Arise. All rights reserved.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
