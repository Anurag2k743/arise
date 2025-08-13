import React from 'react'
import Hero from './Sections/Hero'
import Slider from './Components/Slider'
import Permotionslides from './Components/Permotionslides'
import Brand from './Sections/Brand'
import Our_Mision from './Sections/Our_Mision'
import Why_us from './Sections/Why_us'
import Our_Design from './Sections/Our_Design'
import About_us from './Sections/About_us'
import Excellence from './Sections/Excellence'
import Works from './Sections/Works'
import Industry from './Sections/Industry'

const page = () => {
  return (
    <div>
      <Hero />
      <div className="-mt-80 md:-mt-60" >
        <Slider/>
      </div>
      <Permotionslides/>
      <Brand/>
      <Our_Mision/>
      <Why_us/>
      <Our_Design/>
      <About_us/>
      <Excellence/>
      <Works/>
      <Industry/>
    </div>
  )
}

export default page
