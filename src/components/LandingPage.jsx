import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";



const LandingPage = () => {
    
  return ( 
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className=' w-full h-full bg-zinc-900 pt-1'>
        <div className='textstructure mt-52 px-20 '>
            <div className='masker '>
                <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk"]'>We create</h1> 
            </div>

    <div className='masker '>
        <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk"]'>
            eye opening</h1>

        <div className='masker '>
        <h1 className='text-8xl uppercase leading-[6vw] tracking-tighter font-["Founders_Grotesk"]'>
            presentations</h1> 
    </div>
    </div>

    <div className='border-t-[1px] border-zinc-800 flex justify-between items-center py-5 px-20 mt-10'>
        {["For public and private companies","From the first pitch to IPO"].map((items, index) => (
            <p key={index} className='text-md font-light tracking-tight leading-none'>{items}</p>
        ))}
    <div className='start flex  items-center gap-5'>
        <div className='px-4 py-2 border-[1px] uppercase font-light text-md border-zinc-500 rounded-full'>Start the Project</div>
        <div className='w-10 h-10 border-[1px] border-zinc-500 rounded-full flex justify-center items-center'>
            <span className='rotate-[45deg]'><FaLongArrowAltUp /></span></div>
    </div>

    </div>


</div>




    </div>
  )
}

export default LandingPage