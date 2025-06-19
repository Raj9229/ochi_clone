import React from 'react'
import { motion } from 'framer-motion'

const Marque = () => {
  return (
    <div className=' w-full  py-14 rounded-tl-3xl rounded-tr-3xl bg-green-800'>
        <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden '>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[12vw] pr-10 leading-none font-["Founders_Grotesk"] font-semibold uppercase -mb-3 '>We are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity, duration:5}} className='text-[12vw] pr-10 leading-none font-["Founders_Grotesk"] font-semibold uppercase -mb-3 '>We are ochi</motion.h1>


            </div>







    </div>
  )
}

export default Marque