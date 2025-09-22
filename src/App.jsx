import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import AOS from "aos"
import "aos/dist/aos.css"
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import CompanyLogo from './components/CompanyLogo';
import Purpose from './components/Purpose';
import Schedule from './components/Schedule';
import Monitor from './components/Monitor';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
function App() {
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // animation only once
    });
  }, []);
  const [count, setCount] = useState(0)

  return (
    <>
<div className='relative  overflow-x-hidden'>
  <div className='absolute  blur-[80px] opacity -top-28 -left-28 rounded  w-[500px] h-[500px]  bg-gradient-to-tl from-indigo-500/20 to-pink-500/20 '></div>
 
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <CompanyLogo/>
        <Purpose/>
        <Schedule/>
        <Monitor/>

<Pricing/>
        <Services/>
        <Testimonials/>
        <Newsletter/>
        <Footer/>
      </div>
</div>




    </>
  )
}

export default App
