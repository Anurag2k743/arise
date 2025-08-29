"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
import { FaBehance } from "react-icons/fa";

export default function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState("UX/UI design");
  const interests = [
    "UX/ UI design",
    "Web design",
    "Design system",
    "Graphic design",
    "Other",
  ];

  return (
    <section className="w-full flex items-center justify-center bg-[#0B0C14] pb-16">
      <div className="w-full max-w-6xl bg-[#0D1B2A] rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Side */}
        <div className="text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold leading-snug">
              Let’s talk <br />
              on something <span className="text-blue-500">great</span> <br />
              together
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500" />
                <span>andreaDesign@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>+34 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>123 Street 487 House</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8">
            <a href="#" target="_blank" className="text-blue-500 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" className="text-blue-500 hover:text-white">
              <FaBehance className="w-6 h-6" />
            </a>
            <a href="#" target="_blank" className="text-blue-500 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[#111827] rounded-2xl p-6 shadow">
          <h3 className="text-sm font-semibold text-gray-300">I’m interested in:</h3>
          <div className="flex flex-wrap gap-2 my-4">
            {interests.map((interest) => (
              <button
                key={interest}
                onClick={() => setSelectedInterest(interest)}
                className={`px-4 py-2 rounded-full border text-sm transition ${
                  selectedInterest === interest
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {interest}
              </button>
            ))}
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400">Your name</label>
              <input
                type="text"
                placeholder="Jhon Smith"
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Your email</label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className="w-full bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-2 text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400">Your message</label>
              <textarea
                placeholder="Write your message"
                className="w-full bg-transparent border border-gray-600 rounded-lg p-3 focus:border-blue-500 outline-none text-white placeholder-gray-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 transition"
>
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
