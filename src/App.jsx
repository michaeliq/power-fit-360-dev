import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './containers/HeroSection'
import ServicesSection from './containers/ServicesSection'
import TestimonialSection from './containers/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='App'>
        <Header/>
        <HeroSection/>
        <ServicesSection/>
        <TestimonialSection/>
      </div>
    </>
  )
}

export default App
