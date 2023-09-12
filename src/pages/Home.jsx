import React from 'react'
import NavbarWithCarousel from './navbar/NavbarWithCarousel'
import SecondSection from './secondSection/SecondSection'
import VideoSection from './videoSection/VideoSection'
import Footer from './footer/Footer'
export default function Home() {
  return (
    <div>
      {/* Navbar component */}
      <NavbarWithCarousel/>

      {/* secondSection */}

      <SecondSection/>

      {/* Video Section */}

      <VideoSection/>

      {/* footer Section */}
      <Footer/>
    </div>
  )
}
