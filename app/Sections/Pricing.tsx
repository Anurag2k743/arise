import React from 'react'
import Image from "next/image";

const Pricing = () => {

  const sectionInfo = {
    tag: "Pricing",
    heading: "Transparent Pricing Options",
    desc: "Explore our competitive pricing plans designed to meet diverse business needs and budgets."
  };

  const pricingPlans = [
    {
      title: "Basic",
      price: "1,995",
      icon: "/pricing_icon1.png",
      features: [
        { text: "Enjoy limitless design requests.", available: true },
        { text: "One request at a time", available: true },
        { text: "Average 48 hours delivery", available: false },
        { text: "Unlimited brands", available: false },
        { text: "Easy credit-card payments", available: false },
        { text: "Pause or cancel anytime", available: false },
      ]
    },
    {
      title: "Standard",
      price: "3,995",
      icon: "/pricing_icon2.png",
      features: [
        { text: "Enjoy limitless design requests.", available: true },
        { text: "One request at a time", available: true },
        { text: "Average 48 hours delivery", available: true },
        { text: "Unlimited brands", available: true },
        { text: "Easy credit-card payments", available: true },
        { text: "Pause or cancel anytime", available: true },
      ]
    },
    {
      title: "Pro",
      price: "5,995",
      icon: "/pricing_icon3.png",
      features: [
        { text: "Enjoy limitless design requests.", available: true },
        { text: "One request at a time", available: true },
        { text: "Average 48 hours delivery", available: true },
        { text: "Unlimited brands", available: true },
        { text: "Easy credit-card payments", available: true },
        { text: "Pause or cancel anytime", available: true },
      ]
    },
  ];

  return (
    <>
      <section className='bg-[#00020F] pt-0 md:pt-32'>
        <div className="pt-16 relative overflow-hidden">
          <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
            <Image src="/pricing.png" alt="rings background" className="w-[900px] sm:w-[1000px] opacity-50" width={717} height={268} />
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

        <section className='py-12'>
          <div className="w-full lg:w-[1160px] mx-auto px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, idx) => (
                <div key={idx} className="relative py-2">

                  {/* Highlight strip only on 2nd card */}
                  {idx === 1 && (
                    <div className="absolute -top-10 left-0 right-0 h-16 bg-[#3362FF] rounded-t-3xl text-center pt-3 text-white">
                      Most Popular
                    </div>
                  )}

                  <div className="bg-[#00041F] border border-[#162447] rounded-3xl p-7 text-white relative z-10">
                    <div className="flex gap-2 mb-4">
                      <Image src={plan.icon} alt={`${plan.title} icon`} width={24} height={24} />
                      <h4 className="text-lg font-bold">{plan.title}</h4>
                    </div>

                    <h3 className="text-3xl font-extrabold mb-2">
                      ${plan.price}/m{" "}
                      <span className="text-sm bg-[#122952] px-2 py-1 rounded ml-2">
                        15% Off
                      </span>
                    </h3>
                    <p className="text-gray-400 mb-4">Pause or cancel anytime.</p>

                    <button className="w-full bg-[#101636] py-3 rounded-full mb-3">
                      Get Started
                    </button>
                    <button className="w-full text-sm text-[#A7ADBE]">Book a Call →</button>

                    <div className="mt-5">
                      <h5 className="font-semibold mb-2">What&apos;s included:</h5>
                      <ul className="space-y-2 text-sm">
                        {plan.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center space-x-2">
                            <span className="text-blue-400">
                              {feature.available ? "✔" : "✖"}
                            </span>
                            <span className={feature.available ? "" : "text-gray-500"}>
                              {feature.text.replace("'", "&apos;")}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Pricing;
