import React from 'react'
import AboutHero from '../Components/About/AboutHero'
import WhoWeAre from '../Components/About/WhoWeAre'
import OurStory from '../Components/About/OurStory'
import MissionVision from '../Components/About/MissionVision'
import WhyKarmyogis from '../Components/About/WhyKarmyogis'
import AboutCTA from '../Components/About/AboutCTA'

function About() {
  return (
    <div>
        <AboutHero/>
        <WhoWeAre/>
        <OurStory/>
        <MissionVision/><WhyKarmyogis/>
        <AboutCTA/>
      
    </div>
  )
}

export default About
