import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      <Image 
        src="/images/10.jpg" 
        alt="setup" 
        width={400} 
        height={400} 
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 10</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Tenth Version of Next.JS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 10, released in <b>October 2020</b>, introduced several groundbreaking features enhancing both developer experience and application performance. Here is an overview of the key features:
        </p>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Key features of <b>Next.js 10</b> include:
        </p>

        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 10</h3>
        
        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Image Optimization</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'><b>Built-in Image Component:</b> The new <span className='bg-gray-400 p-1'>{`<Image>`}</span> component simplifies handling images with automatic optimization.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Automatic resizing and serving images in modern formats like WebP.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Lazy loading by default for performance improvements.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[410px] h-[300px] rounded-lg md:w-[45%] w-[95%] ml-[5%]'>
            <code>import Image from next/image;</code> <br />
            <code>{`const MyImage = () => (`}</code><br /><br />
            <code>{` <Image`}</code><br />
            <code>&nbsp;&nbsp;{` src="/example.jpg" // Path to the image`}</code><br />
            <code>&nbsp;&nbsp;{` alt="Example Image" `}</code><br />
            <code>&nbsp;&nbsp;{` width={800} `}</code><br />
            <code>&nbsp;&nbsp;{`height={600}`}</code><br />
            <code>&nbsp;{`  />`}</code><br />
            <code>{`);`}</code><br />
            <code>export default MyImage</code><br />
          </div>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Internationalized Routing (i18n)</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Native support for internationalized (multilingual) routing.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enables locale-based URL routing, such as <span className='bg-gray-400 p-1'>/en</span>, <span className='bg-gray-400 p-1'>/fr</span>, or <span className='bg-gray-400 p-1'>/es</span>.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Configuration in <span className='bg-gray-400 p-1'>next.config.js</span>:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[280px] h-[300px] rounded-lg md:w-[45%] w-[95%] ml-[5%]'>
            <code>{`module.exports = {`}</code><br />
            <code>&nbsp;&nbsp;{`i18n: {`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{`locales: ['en', 'fr', 'es'],`}</code><br />
            <code>&nbsp;&nbsp;&nbsp;{`defaultLocale: 'en',`}</code><br />
            <code>&nbsp;&nbsp;{`},`}</code><br />
            <code>{`};`}</code><br />
          </div>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Next.js Analytics (Powered by Vercel)</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Real-time application performance insights.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Monitors page load times, visitor metrics, and Web Vitals.</li>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Built-in Webpack 5 Support</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Better tree-shaking and faster builds.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Smaller client-side bundles.</li>
        </ul>

        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Challenges in Next.js 10</h3>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Experimental support for Webpack 5.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Certain features still required fine-tuning for production use.</li>
        </ul>

        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Historical Importance</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 10 marked a significant improvement in performance, image optimization, and internationalization, setting the stage for more advanced features in later versions. It paved the way for a more user-friendly experience for developers and end users alike.
        </p>

        <Comments />
      </div>
    </div>
  )
}

export default page
