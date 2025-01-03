import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Latest = () => {
  return (
    <div>

            <h2 className='py-4 text-[45px] text-center font-serif font-bold'>Latest Version</h2>
            <div className='flex-row md:flex'>
                <div className='md:p-4 p-2 md:w-[50%] sm:w-[90%] w-full '>
                    <h2 className='md:px-8 px-3 text-4xl text-left font-semibold font-sans'>Next.JS 15</h2>
                    <p className='text-[20px] md:px-8 px-3 text-justify py-5'>Next.js has consistently pushed the boundaries of web development, and with the release of Next.js 15, the framework has reached new heights. This version introduces powerful features that enhance performance, development speed, and flexibility, particularly with React 19 compatibility and advancements in server-side rendering. If you are a developer or a tech enthusiast, Next.js 15 is packed with updates that are worth exploring.</p>
                    <Link href="/blog/next15" className='ml-[5%]'><button className='border border-white bg-black text-white text-[15px] text-center md:p-3 p-1 rounded-lg'>Read More</button></Link>
                </div>
                <div className='md:w-[60%] w-[90%] pt-8'>
                <Image src="/images/15.jpg" alt="next-15" width={200} height={250} className="md:ml-10 md:mr-6 m-3 w-full h-full md:w-[90%] sm:w-[660px] md:h-[350px] sm:h[350px] border border-slate-300 rounded-lg"/>
                </div>
            </div>
           

        </div>
    
  )
}

export default Latest