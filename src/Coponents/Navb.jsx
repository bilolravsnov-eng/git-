import React from 'react'

const Navbar = () => {
    return (
        <div className="w-full bg-[#f2faf8] border-y-4 border-purple-500 py-14">
            <div className="w-[85%] mx-auto flex flex-wrap items-center justify-between gap-10">

              
                <h1 className="text-5xl font-medium tracking-tight">
                    <span className="text-blue-500">G</span>
                    <span className="text-red-500">o</span>
                    <span className="text-yellow-500">o</span>
                    <span className="text-blue-500">g</span>
                    <span className="text-green-600">l</span>
                    <span className="text-red-500">e</span>
                </h1>

               
                <h1 className="text-5xl font-bold text-[#111033]">
                    <span className="text-orange-500">✿</span> avast
                </h1>

                <h1 className="text-5xl font-medium">
                    <span className="text-red-500">e</span>
                    <span className="text-blue-700">b</span>
                    <span className="text-yellow-500">a</span>
                    <span className="text-green-600">y</span>
                </h1>

                <h1 className="text-5xl font-extrabold italic text-blue-900">
                    Pay<span className="text-blue-600">Pal</span>
                </h1>

                <h1 className="text-5xl font-bold text-slate-700">
                    HubSp<span className="text-orange-400">o</span>t
                </h1>

            </div>
        </div>
    )
}

export default Navbar