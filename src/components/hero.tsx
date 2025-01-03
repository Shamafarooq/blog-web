import React from 'react'
import Image from 'next/image'
import Latest from './latest'
import Timeline from "./timeline"

const Hero = () => {
  return (
    <div className="border w-full  border-slate-500 md:p-4 sm:p-2 rounded-lg shadow-md py-6 md:px-6 px-3 ">
        
            <Image src="/images/next.jpg" alt="next" width={895} height={597} className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg shadow-md border border-blue-200"/>
        <Latest/>
        <Timeline/>
    </div>
  )
}

export default Hero