import React from 'react'
import stats from "../assets/stats.webp"
import { FaLongArrowAltRight } from "react-icons/fa";

const Schedule = () => {
  return (
    <div  className='py-20 flex flex-col md:flex-row items-center justify-between mx-auto px-4 md:px-10 lg:px-14'>
        {/* img */}
        <div className='w-full md:w-1/2 pb-8 md:pb-0 hover:scale-[1.02] duration-300 transition-all'><img src={stats} alt="" /></div>



        {/* data */}
        <div  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='md:pl-5 w-full md:w-1/2 leading-11 px-2 md:px-0'>
       <p className='text-orange-500 font-bold text-sm'>SCHEDULE</p>
       <p className='text-3xl lg:text-4xl md:pr-20 font-bold capitalize pt-2'>Streamline your business with smart scheduling solutions</p>
       <p className='text-gray-600 leading-6 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam adipisci dignissimos, ad laborum nostrum eveniet cupiditate molestiae dolorum architecto rem.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, explicabo
       </p>
       <a className='flex items-center opacity-100 hover:opacity-75 transition-all gap-2 text-blue-500 font-medium' href="">Explore Scheduling Features <FaLongArrowAltRight className='w-6 h-6 pt-0.5'/>
</a>
        </div>
    </div>
  )
}

export default Schedule