import React from "react";
import amazon from "../assets/amazon.png"
import meundies from "../assets/meundies.png"
import sitepoint from "../assets/sitepoint.png"
import slack from "../assets/slack.png"
import stats from "../assets/stats.webp"
import woocommerce from "../assets/woocommerce.png"

function CompanyLogo() {
    const logos=[
        amazon, meundies, sitepoint, slack, stats, woocommerce

    ]
    return(
        <div className="flex flex-col md:flex-row justify-between w-full overflow-hidden mx-auto">
            <div className= "z-10 mx-auto bg-white py-2 px-8 border-l-4 border-blue-400 w-[250px] mb-8 md:mb-0 md:w-[370px] font-semibold text-gray-600">Proud partner at Hubspot & Segment</div>
            <div className="flex gap-12 animate-marquee mx-auto items-center justify-between">
               {
                 logos.map((logo, index)=>(
                    <img src={logo} className="grayscale opacity-75 hover:opacity-100 hover:grayscale-0 w-28 h-8 " key={index}  alt="" />
                 ))

                
               }
                {
                 logos.map((logo, index)=>(
                    <img src={logo} className="grayscale opacity-75 hover:opacity-100 hover:grayscale-0 w-28 h-8 " key={`duplicate-${index}`}  alt="" />
                 ))

                
               }
            </div>

            
        </div>
    )
}
export default CompanyLogo;