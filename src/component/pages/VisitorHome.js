import React from 'react'
import ImageCarousel from './HeroSection'
import ServiceOverview from './ServiceOverview'
import Testimonials from '../navigation/Testimonal'
import Footer from '../navigation/Footer'

function VisitorHome() {
  return (
    <div>
        <ImageCarousel/>
        <ServiceOverview/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default VisitorHome