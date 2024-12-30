import React from 'react'
import MainCarousel from '../Components/HomeCarosal/MainCarousel'
import HomeSectionCarousel from '../Components/HomeSectionCarousal/HomeSectionCarousel'
import MensClothing from '../Data/MensClothing'
import shoes from '../Data/Shoes'
import Footer from '../Components/Footer/Footer'

function HomePage() {
  return (
    <div>
        <MainCarousel/>
        <div className='py-10 space-y-5'>
            <HomeSectionCarousel items = {MensClothing} name="MensClothing"/>
            <HomeSectionCarousel items = {shoes} name="Shoes"/>
            
        </div>
        <Footer/>
      
    </div>
  )
}

export default HomePage
