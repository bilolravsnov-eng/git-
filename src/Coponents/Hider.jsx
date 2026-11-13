
import React from 'react'

const Hider = () => {
    return (
        <div className="w-full bg-white">
            <div className="max-w-[1688px] mx-auto h-[120px] px-6 flex items-center justify-between">

               
                <div className="flex items-center gap-2">
                    <div className="w-[38px] h-[38px] rounded-full bg-[#54dfb5] flex items-center justify-center">
                        <div className="w-[15px] h-[15px] rounded-full bg-white"></div>
                    </div>

                    <h1 className="text-[27px] font-bold text-[#19dba5]">
                        S<span className="text-[#ffcf45]">/</span>OFT P<span className="text-[#ffcf45]">/</span>INT
                    </h1>
                </div>

               
                <div className="flex items-center gap-[75px]">
                    <a className="text-[25px] text-[#858d88] cursor-pointer">
                        Feature
                    </a>

                    <a className="text-[25px] text-[#858d88] cursor-pointer">
                        Download
                    </a>

                    <a className="text-[25px] text-[#858d88] cursor-pointer">
                        Pricing
                    </a>
                </div>

               
                <div className="flex items-center gap-9">
                    <button className="text-[25px] font-semibold text-[#505a53]">
                        Login
                    </button>

                    <button className="w-[185px] h-[82px] bg-[#fa4144] rounded-[10px] text-white text-[25px] hover:bg-red-600 transition">
                        Sign up
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Hider
