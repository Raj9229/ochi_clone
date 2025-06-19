import React from 'react'
import { FaAward, FaLightbulb } from 'react-icons/fa'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className='container h-[50vh] w-1/2'>
            <div className='card rounded-xl w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-lime-800 to-lime-950 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative'>
                <div className="absolute w-40 h-40 bg-lime-300/10 rounded-full blur-2xl -top-10 -left-10 group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute w-40 h-40 bg-lime-300/10 rounded-full blur-2xl -bottom-10 -right-10 group-hover:blur-3xl transition-all duration-500"></div>
                <img 
                    className='w-32 mb-4 group-hover:scale-110 transition-transform duration-500' 
                    src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" 
                    alt="Featured logo" 
                />
                <h3 className="text-xl font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Award Winning Design</h3>
            </div>
        </div>
        <div className='container h-[50vh] w-1/2 flex gap-5'>
            <div className='card rounded-xl w-1/2 h-full bg-gradient-to-br from-emerald-800 to-emerald-950 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group'>
                <div className="absolute w-40 h-40 bg-emerald-300/10 rounded-full blur-2xl top-0 right-0 group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute w-full h-1/2 bg-black/10 bottom-0 left-0"></div>
                <FaAward className="text-5xl text-white mb-4 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-medium text-white mb-2">Services</h3>
                <p className="text-white/70 text-sm px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Premium design solutions for your brand</p>
            </div>
            <div className='card rounded-xl w-1/2 h-full bg-gradient-to-br from-emerald-800 to-emerald-950 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group'>
                <div className="absolute w-40 h-40 bg-emerald-300/10 rounded-full blur-2xl bottom-0 left-0 group-hover:blur-3xl transition-all duration-500"></div>
                <div className="absolute w-full h-1/2 bg-black/10 top-0 left-0"></div>
                <FaLightbulb className="text-5xl text-white mb-4 group-hover:scale-125 transition-transform duration-300" />
                <h3 className="text-xl font-medium text-white mb-2">Innovation</h3>
                <p className="text-white/70 text-sm px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">Creative solutions that stand out</p>
            </div>
        </div>
    </div>
  )
}

export default Cards