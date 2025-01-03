import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
        <Image 
          src="/images/3.jpg" 
          alt="setup" 
          width={400} 
          height={400} 
          className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
        />
        <div className='md:px-8 px-2 py-8 rounded-lg'>
            <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 3</h1>
            <h3 className='pb-4 text-xl font-medium text-center font-serif'>Third Version of NextJS</h3>
            <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
              Next.js 3 was an early version of the popular React framework, released in <b>August 2017</b>. While it is outdated now, it introduced several important features and improvements that set the stage for later advancements. Below are the details of Next.js 3:
            </p>
            <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
              Here are the key details and features of <b>Next.js 3</b>:
            </p>
            <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 3</h3>
            <ul className='px-3 md:px-12'>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Static Exporting (next export)</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enabled developers to export their Next.js applications as a set of static files.</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>This feature made it possible to deploy apps to any static hosting service (e.g., GitHub Pages or Netlify).</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Dynamic Import (next/dynamic)</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced support for dynamic imports, allowing developers to lazy-load components.</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Reduced initial page load times by splitting the JavaScript bundle.</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
              <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[280px] h-[300px] rounded-lg md:w-[45%] w-[95%] ml-[5%]'>
                <code>import dynamic from next/dynamic;</code> <br />
                <code>{`const DynamicComponent = dynamic(() => import('./path-to-component'));`}</code> <br />
                <code>{`function Page() {`}</code><br />
                <code>{`return <DynamicComponent />;`}</code><br />
                <code>{`}`}</code>
              </div>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Custom Error Pages</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Developers could now create custom error pages (<span className='bg-gray-400 p-1'>pages/_error.js</span>).</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed better handling of errors and provided a more branded user experience.</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Improved Hot Module Replacement (HMR)</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enhanced development experience with better live updates during development without requiring a full reload.</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>5. Enhanced Routing</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>The routing system became more robust, allowing dynamic routing and custom routes.</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Improved Build Size and Performance</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Optimizations to reduce build size and improve runtime performance.</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>7. Support for Environment Variables</h4>
              <li className='pb-2 list-disc text-md mx-9'>Simplified injecting environment-specific settings into applications.</li>
              <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>8. Server-Side Rendering (SSR) Improvements</h4>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>More reliable support for SSR with better caching and rendering performance.</li>
            </ul>
        </div>

        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Challenges in Next.js 3</h3>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Lack of advanced features like API routes, middleware, or advanced static generation that were introduced in later versions.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Minimal SEO tools compared to modern versions.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Limited ecosystem integrations compared to current releases.</li>
        </ul>

        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Historical Importance</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 3 was significant because it introduced the foundational features that have been expanded and refined in later versions. If you are working on a modern project, consider using the latest Next.js version to leverage the latest features like file-based routing, API routes, middleware, and image optimization.
        </p>

        <Comments />
    </div>
  )
}

export default page
