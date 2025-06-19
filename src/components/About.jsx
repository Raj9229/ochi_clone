import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-lime-300 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[4vw] font-semibold leading-[3.5vw]  font-[Nueu_Montreal]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>

        <div className='w-full border-t-1 pt-10 flex gap-5 border-lime-700 mt-20'>
          <div className='w-1/2 gap'>
          <h1 className='text-5xl '>Our Approach</h1>
          <button className='flex items-center hover:bg-zinc-700  gap-5 uppercase px-10 py-6 mt-7 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-3 h-3 hover:scale-200 hover:bg-white-200 bg-white rounded-full'></div></button>
        </div>
        <div className='w-1/2 h-[70vh] bg-rose-200 rounded-3xl '></div>
        </div>
    </div>
  )
}

export default About