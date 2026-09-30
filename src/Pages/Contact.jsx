import React from 'react'
import ContactHero from '../Components/Contact/ContactHero'
import ContactForm from '../Components/Contact/ContactForm'
import HelpSection from '../Components/Contact/HelpSection'
import MapSection from '../Components/Contact/MapSection'

function Contact() {
  return (
    <div>
        <ContactHero/>
        <ContactForm/>
        {/* <HelpSection/> */}
        <MapSection/>
      
    </div>
  )
}

export default Contact
