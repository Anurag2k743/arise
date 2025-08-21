import React from 'react'
import Hero from './Sections/Hero'
import Slider from './Components/Slider'
import Permotionslides from './Components/Permotionslides'
import Brand from './Sections/Brand'
import Why_us from './Sections/Why_us'
import Our_Design from './Sections/Our_Design'
import About_us from './Sections/About_us'
import Excellence from './Sections/Excellence'
import Works from './Sections/Works'
import Industry from './Sections/Industry'
import Comparision from './Sections/comparision'
import Footer from './Components/Footer'
import OurMision from './Sections/Our_Mision'
import Services from './Sections/Services'
import Pricing from './Sections/Pricing'
import Assurance from './Sections/Assurance'
import Blogs from './Sections/Blogs'
import Testimonials from './Sections/Testimonials'
import Frequently from './Frequently'
import Projects from './Sections/Projects'

const page = () => {
  return (
    <>
      <Hero />
      <div className="-mt-80 md:-mt-60" >
        <Slider />
      </div>
      <Permotionslides />
      <Brand />
      <OurMision />
      <Why_us />
      <Our_Design />
      <About_us />
      <Excellence />
      <Works />
      <Industry />
      <Comparision />
      <Services />
      <Pricing />
      <Assurance />
      <Blogs />
      <Testimonials/>
      <Frequently/>
      <Projects/>
      <Footer />

    </>
  )
}

export default page
