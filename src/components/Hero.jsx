import React from "react";
import heroimg from "../assets/heroimg.png";
function Hero() {
    return (
        
        <div id="home" data-aos="fade-right" 
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="pt-30 lg:pt-40 w-full h-auto flex flex-col md:flex-row   items-center justify-between mx-auto px-4 md:px-10 lg:px-14">
            {/* left */}
            <div className="w-fit h-auto z-20 " >
                <p className="bg-white text-black ml-10 md:ml-6 lg:ml-0 w-fit py-2 px-2 mb-6 hover:bg-gray-300 cursor-pointer  transition-colors group  rounded-full">
                    <span className="pr-2 text-blue-400 group-hover:scale-50 transition-transform">★</span>
                    <span className="font-medium text-sm">Jump start your growth</span>
                </p>

                <p className="leading-tight w-sm pl-10 md:pl-6 lg:pl-0 lg:w-xl pr-20 font-bold text-3xl lg:text-6xl">We boost the growth for
                    <span className="relative inline-block text-blue-600"> Startup to Fortune 500 </span>
                    {/* <div className="hidden lg:block absolute top-30% left-0  w-[540px] ml-14   h-0.5 bg-blue-200/60 shadow-xl"></div> */}
                    <span>Companies</span>
                    <span className="animate-pulse cursor-pointer">⏰</span>
                </p>
                <p className="text-gray-600 px-10  md:pl-6 lg:px-0 lg:pr-10 text-lg py-6 md:text-xl max-w-xl">
                    Get the most accurate leads, sales people training and conversions, tools and more —
                    all within the same one billing.
                </p>
                <div className="flex flex-1 gap-3 pb-20">
                    <input className="w-[250px] ml-10 md:ml-6 lg:ml-0 h-8 lg:w-[330px] pl-6 lg:h-14 border-2 border-gray-200 focus:border-2 focus:border-blue-400  focus:outline-0 rounded-xl " type="email" placeholder="Email Address" />
                    <button className="text-xl px-4 py-1 lg:px-6 lg:py-2 text-white bg-blue-500 hover:bg-blue-400 rounded-xl hover:shadow hover:shadow-blue">→</button>
                </div>
            </div>
            {/* right */}
            <div>
                <img className="hover:scale-[1.02] transition-all pb-10  lg:pb-0 duration-300" src={heroimg} alt="" />
            </div>
        </div>
    );
}
export default Hero