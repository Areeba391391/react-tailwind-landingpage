import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import monitorcard from "../assets/monitor-card.webp"
function Monitor() {
    return (
        <div data-aos="fade-up" className='pb-20 flex flex-col md:flex-row items-center justify-between mx-auto px-4 md:px-10 lg:px-14'>
            {/* data  */}
            <div className='w-full md:w-1/2 leading-10' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <p className='text-green-500 font-bold uppercase'>Monitor</p>
                <p className='lg:leading-12  text-3xl leading-8  lg:text-4xl pr-30 lg:pr-50 font-bold capitalize pt-2'>Introducing best mobile carousels</p>
                <p className='text-gray-600 leading-6 py-3 w-[450px]  md:w-[350px] lg:w-[450px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta sequi aspernatur quae facere magnam repellendus cum nulla placeat molestias.</p>
                <a className='flex items-center opacity-100 hover:opacity-75 transition-all gap-2 text-blue-500 font-medium' href="">Learn More About Monitoring <FaLongArrowAltRight className='w-6 h-6 pt-1.5' />
                </a>
            </div>



            {/* Picture  */}
            <div className='w-full md:w-1/2 pt-10 md:pt-0 hover:scale-[1.02] duration-300 transition-all'><img src={monitorcard} alt="" /></div>
        </div>
    )
}

export default Monitor;