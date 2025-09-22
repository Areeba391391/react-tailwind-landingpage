import React from "react";
function Purpose() {
    const paras = [
        {
            bullet: "🟣",
            title: "Built for impact",
            desc: "We identify and nurture a truly diverse team of designers, developers and marketers"
        },
        {
            bullet: "🔴",
            title: "In sync with you",
            desc: "We work the way you do by adapting to your workflows and rhythm we aim to blend in for a seamless"
        }
    ]
    return (
        <div id='about' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="800"
     >
            <div className="px-4 md:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between mx-auto bg-gray-100 leading-tight my-7 py-20">
                <div> <p className="text-purple-400">ACHIEVE MORE</p>
                    <p className="w-[250px] md:w-[200px] lg:w-[250px] text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-0">Purpose of a convoy is to keep your team</p></div>
                <div className="flex  items-center  justify-between mx-auto lg:mx-0 ml-8 md:mb-14 flex-col md:flex-row">
                    {
                        paras.map((para, index) => (
                            <div className="w-sm md:w-[250px] lg:w-sm mx-auto mb-7 md:mb-0">
                                <div className="flex gap-2 items-center">
                                    <div className="cursor-pointer opacity-100 hover:opacity-75 transition-all">{para.bullet}</div>
                                    <p className="leading-10 font-bold text-[23px]">{para.title}</p>
                                </div>
                                <div className="leading-6 w-[260px] md:w-[220px] lg:w-[290px] text-[17px] text-gray-600 ml-7">{para.desc}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    );
}
export default Purpose;