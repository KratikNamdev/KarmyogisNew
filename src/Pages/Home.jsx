import React from 'react'
import Hero from '../Components/Home/Hero'
import IntroSection from '../Components/Home/IntroSection'
import ServicesSection from '../Components/Home/ServicesSection'
import IndustriesSection from '../Components/Home/IndustriesSection'
import TechnologySection from '../Components/Home/TechnologySection'
import WhyKarmyogisSection from '../Components/Home/WhyKarmyogisSection'
import TestimonialsSection from '../Components/Home/TestimonialsSection'
import CTASection from '../Components/Home/CTASection'

function Home() {
  return (
    <div>
      <Hero/>
      <IntroSection/>
      <ServicesSection/>
      <IndustriesSection/>
      <TechnologySection/>
      <WhyKarmyogisSection/>
      <TestimonialsSection/>
      <CTASection/>

    </div>
  )
}

export default Home
