import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <>
      <section className="z-10 bg-black text-white overflow-hidden pt-24 bg-[url('/Background.png')] bg-cover bg-center bg-no-repeat min-h-[770px] sm:min-h-[800px] md:min-h-[960px]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-center">

          <div className="max-w-lg mx-auto hidden sm:block mt-8">
            <div className="bg-white/10 px-3 sm:px-4 py-1 sm:py-1.5 md:py-2 rounded-full backdrop-blur-md shadow-md mb-6 flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
              <p className="text-white whitespace-normal flex-1 text-center sm:text-left">
                We Design websites that matter, user&apos;s can&apos;t resist
              </p>
              <MoveRight className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] w-[38px] h-[26px] rounded-full shrink-0" />
            </div>
          </div>

          <h1 className="mb-4 max-w-4xl w-full md:mx-auto">
            Design That Powers Real
            Business Growth
          </h1>

          <p className="max-w-2xl mx-auto mb-8 px-2 sm:px-4 mt-5">
            Elevating brands through innovative and engaging web solutions.
          </p>

          <div className="flex justify-center items-center mt-8 sm:mt-10">
            <a
              href="#contact"
              className="bg-gradient-to-b from-[#4C75FF] to-[#1A4FFF] text-white py-2 sm:py-4 px-6 sm:px-8 rounded-full transition" >
              Get Started
            </a>
          </div>

          <div className="w-fit mx-auto mt-6 sm:mt-8">
            <div className="flex items-center gap-2 text-[#A7ADBE]">
              <span className="w-3 h-3 rounded-full bg-green-500 shadow-md" />
              <span className="text-lg">2 Spots Available</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
