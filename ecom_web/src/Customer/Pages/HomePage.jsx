import React from 'react'
import MainCarousel from '../Components/HomeCarosal/MainCarousel'
import HomeSectionCarousel from '../Components/HomeSectionCarousal/HomeSectionCarousel'
import Footer from '../Components/Footer/Footer'
import productsData from '../Components/Product/ProductsData'


const MensClothing =productsData.filter((product)=>product.category==="Mens Clothing");
const shoes = productsData.filter((item)=>item.category==="Shoes");

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
