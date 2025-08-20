import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './containers/HeroSection'
import ServicesSection from './containers/ServicesSection'
import TestimonialSection from './containers/Testimonials'
import GallerySection from './containers/GallerySection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div id='App'>
        <Header/>
        <HeroSection/>
        <ServicesSection/>
        <TestimonialSection/>
        <GallerySection/>
        <Footer/>
      </div>
    </>
  )
}

export default App
