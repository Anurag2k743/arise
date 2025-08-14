// components/Footer.jsx
import Image from "next/image";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#00041f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 ">
          
          {/* Left Section */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Arise" width={123} height={50} />
            </div>
            <p className="mb-4">Book a Call For Free Consultation</p>
            <p className="text-gray-400 mb-4 text-sm">
              Experienced team delivering exceptional digital solutions tailored to your brand.
            </p>
            <button className="py-3 px-6 md:py-4 md:px-8 rounded-full bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF]">
              Contact Us →
            </button>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="p-2 bg-[#0B132B] rounded-lg hover:bg-blue-600">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-[#0B132B] rounded-lg hover:bg-blue-600">
                <FaInstagram />
              </a>
              <a href="#" className="p-2 bg-[#0B132B] rounded-lg hover:bg-blue-600">
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-20">
              
              {/* Home Links */}
              <div>
                <h4 className="font-semibold mb-4">Home</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#">About</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Pricings</a></li>
                  <li><a href="#">Tools</a></li>
                  <li className="flex items-center gap-2">
                    <a href="#">Works</a>
                    <span className="bg-blue-600 text-xs px-2 py-0.5 rounded-full">New</span>
                  </li>
                </ul>
              </div>

              {/* Other Links */}
              <div>
                <h4 className="font-semibold mb-4">Other</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#">Works</a></li>
                  <li><a href="#">Blogs</a></li>
                  <li><a href="#">Timeline</a></li>
                  <li><a href="#">Waitlist</a></li>
                  <li><a href="#">Privacy policy</a></li>
                </ul>
              </div>

              {/* Contact Links */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">FAQ’s</a></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
