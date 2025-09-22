import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi';
import { LiaAnkhSolid } from 'react-icons/lia';

function Navbar() {
  const [ismenuopen, setismenuopen] = useState(false);
  const [activelink, setactivelink] = useState('#home');

  const NavLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Service" },
    { href: "#testimonials", label: "Testimonials" },]
  return (
    <nav  data-aos="zoom-out"      data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='fixed top-0 left-0 right-0  bg-white z-50 backdrop-blur-sm border-b border-gray-100 shadow-sm'>
      <div className='px-4 md:px-10 lg:px-14 w-full h-12  md:h-20 flex items-center justify-between'>
        {/* LOGO */}
        <div className='flex' data-aos="zoom-in-right">
          <div className='w-6 h-6 rounded-full bg-blue-400 opacity-100 hover:opacity-75 transition-all'></div>
          <div className='w-6 h-6 rounded-full bg-red-400 opacity-100 hover:opacity-75 transition-all'></div>
        </div>
        {/* MENU BTN */}
        <button className='md:hidden' onClick={() => {
          setismenuopen(!ismenuopen);
        }}>
          {ismenuopen ? (<HiX className='h-6 w-6' />) : (<HiMenu className='w-6 h-6' />)}
        </button>

        {/* List Items */}
        <div data-aos="zoom-in-left" className='hidden md:flex items-center gap-10'>
          {NavLinks.map((link, index) => (
            <a className={`font-medium text-lg relative after:absolute  after:bottom-0 after:left-0 after:right-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-blue-600 after:transition-all
            ${activelink === link.href ? 'text-blue-600 after:w-full' : 'text-gray-600 hover:text-gray-900'}
          `} key={index} href={link.href}
              onClick={() => {
                setactivelink(link.href)
              }}
            >{link.label}</a>
          ))

          }
        </div>



        {/* CTA BUTTON */}
        <button data-aos="zoom-in-left"
          className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
        >
          <a href="#newsletter">Get in touch</a>
        </button>
      </div>

      {/* MOBILE NAV */}
      {ismenuopen && (
        <div className='md-hidden py-4 '>
          <div className='mx-auto text-center'>
            {
            NavLinks.map((link, index)=>(
              <a href={link.href} key={index} onClick={()=>{
                setactivelink(link.href);
                setismenuopen(false);
              }}
              
              className={`block text-center mx-auto space-y-9  ${activelink === link.href ? 'text-blue-600' : 'text-gray-600 hover:text-gray-900'}`}

              >{link.label}</a>
            ))
          }
          <button 
              className="w-[200px] mt-5 mx-auto text-center bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-100"
            >
              Get in touch
            </button>
          </div>
          
        </div>
      )}
    </nav >
  )
}

export default Navbar