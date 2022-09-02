import  Announcement  from '../components/Annoncements'
import React from 'react'
import Navbar from '../components/Navbar'
import  Slider  from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Newslatter from '../components/Newslatter'
import Footer from '../components/Footer'

 const Home = () => {
  return (
    <div>
      <Announcement/>
       <Navbar />
       <Slider/>
       <Categories/>
       <Products/>
       <Newslatter/>
       <Footer/>
    </div>
  )
}
export default  Home
