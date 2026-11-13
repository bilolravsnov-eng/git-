
import React from 'react'

const Navbar = () => {
    return (
        <div className="min-h-screen bg-white">
            <div className="w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 py-16">

                <div>
                    <h1 className="text-5xl lg:text-6xl font-bold text-green-950 leading-tight">
                        Develop Your Life <br />
                        With <span className="text-emerald-400">One Step...</span>
                    </h1>

                    <p className="text-gray-600 text-xl mt-8 leading-10">
                        Pushing the possibilities of the internet. Good for
                        the last software. <b>Make it A software night.</b>
                    </p>


                    <div className="flex shadow-xl rounded-xl mt-10 p-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full outline-none px-4 text-lg"
                        />

                        <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-lg text-xl">
                            Send
                        </button>
                    </div>


                    <div className="flex gap-10 mt-10 flex-wrap">
                        <div>
                            <p className="text-gray-500 text-sm">Android App on</p>
                            <h2 className="text-2xl font-semibold">
                                ▶ GOOGLE PLAY
                            </h2>
                        </div>

                        <div>
                            <p className="text-gray-500 text-sm">Available on the</p>
                            <h2 className="text-2xl font-semibold">
                                 Apple Store
                            </h2>
                        </div>
                    </div>
                </div>


                <div className="relative flex justify-center items-center py-10">

                    <div className="absolute w-36 h-36 bg-orange-300 rounded-full -top-5 left-10"></div>


                    <div className="relative bg-gray-900 rounded-t-3xl border-[10px] border-gray-800 w-full max-w-[650px] h-[390px] shadow-2xl z-10">

                        <div className="bg-white h-full p-5 overflow-hidden">

                            <h2 className="font-bold text-xl text-gray-800">
                                My Folders
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Photos, Videos, Documents
                            </p>


                            <div className="grid grid-cols-3 gap-3 mt-6">
                                {[
                                    ['📁', 'Photos', '25%'],
                                    ['📁', 'Songs', '75%'],
                                    ['📁', 'Documents', '45%']
                                ].map((item, index) => (
                                    <div key={index} className="shadow-lg rounded-xl p-4">
                                        <h1 className="text-3xl">{item[0]}</h1>
                                        <p className="font-semibold mt-2">{item[1]}</p>
                                        <h2 className="font-bold text-xl">{item[2]}</h2>
                                        <div className="h-1 bg-green-500 rounded mt-3"></div>
                                    </div>
                                ))}
                            </div>


                            <div className="border rounded-xl mt-8 p-4">
                                <h2 className="font-bold mb-4">Weekly Statistics</h2>

                                <div className="flex items-end justify-around h-28">
                                    {[50, 80, 40, 95, 65, 85, 55, 100, 70, 90].map((height, i) => (
                                        <div
                                            key={i}
                                            className="w-3 bg-emerald-500 rounded-t"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                    ))}
                                </div>

                                <div className="flex justify-between text-xs text-gray-400 mt-3">
                                    <span>Mon</span>
                                    <span>Tue</span>
                                    <span>Wed</span>
                                    <span>Thu</span>
                                    <span>Fri</span>
                                    <span>Sat</span>
                                    <span>Sun</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="absolute -bottom-5 -left-3 lg:-left-8 bg-gray-950 border-4 border-purple-500 rounded-[30px] w-36 h-64 p-2 z-20 shadow-xl">
                        <div className="bg-white rounded-[23px] h-full p-3">
                            <div className="text-center text-xs font-bold">9:41</div>
                            <h2 className="font-bold text-sm mt-8">Total Earning</h2>
                            <h1 className="text-xl font-bold text-blue-950">$2,879.45</h1>

                            <div className="bg-gray-100 rounded-xl p-3 mt-5">
                                <p className="text-xs text-gray-500">Weekly Stats</p>
                                <h2 className="text-xl font-bold text-emerald-500">18.5M</h2>
                                <p className="text-xs">Revenue</p>
                            </div>

                            <button className="bg-red-500 text-white rounded-full w-10 h-10 mt-5 ml-8">
                                +
                            </button>
                        </div>
                    </div>

                    <div className="absolute w-32 h-32 bg-emerald-300 rounded-full -bottom-10 right-0"></div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
