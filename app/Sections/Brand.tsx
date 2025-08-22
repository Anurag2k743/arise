
import Image from 'next/image'
import React from 'react'

const Brand = () => {

  const featureCards = [
    {
      title: "Custom Designs",
      description: "Tailored websites meticulously crafted to reflect your brand.",
      icon: "/icon1.png"
    },
    {
      title: "Fast Performance",
      description: "Optimized for lightning-fast speed to enhance user experience.",
      icon: "/icon2.png"
    },
    {
      title: "SEO Friendly",
      description: "Designed to improve SEO and increase visibility effortlessly.",
      icon: "/icon3.png"
    }
  ];

  return (
    <>
      <section className="bg-[#00020F] py-16 md:py-24 lg:py-48">
        <div className="container">
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 px-4 flex-wrap mb-5">
            <div className="hidden sm:block h-[2px] w-32 sm:w-64 bg-[linear-gradient(to_right,_rgba(23,29,69,0),_#171D45)]" />
            <p className="text-center text-white text-sm whitespace-nowrap">
              See How We Can Help Your brand
            </p>
            <div className="hidden sm:block h-[2px] w-32 sm:w-64 bg-[linear-gradient(to_left,_rgba(23,29,69,0),_#171D45)]" />
          </div>
        </div>

        <section>
          <div className="container">
            <div className="bg-[#0A0C1E] rounded-3xl">
              <video
                src="/Video/meeting_video.mp4"
                controls
                autoPlay={true}
                muted
                className="rounded-3xl w-full h-auto lg:h-[650px] object-cover">
              </video>
            </div>
          </div>
        </section>


        <section className='mt-5'>
          <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-5'>
              {
                featureCards.map((cards, index) => (
                  <div key={index} className='bg-[#00041F] rounded-2xl p-7 border border-[#131839]'>
                    <Image src={cards.icon} height={50} width={50} alt='icons' />
                    <h6 className='my-4'>{cards.title}</h6>
                    <p>{cards.description}</p>
                  </div>
                ))
              }

            </div>
          </div>
        </section>

      </section>



    </>
  )
}

export default Brand
