import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      <Image
        src="/images/9.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 9</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Ninth Version of Next.JS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 9, released in <b>July 2019</b>, introduced several new features and improvements aimed at enhancing the developer experience and scalability of applications. Below are the key details of this version:
        </p>      
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Here are the key details and features of <b>Next.js 9</b>:
        </p>
        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 9</h3>
        
        {/* API Routes Section */}
        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. API Routes</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced serverless API routes to handle backend logic.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Developers can now create API endpoints by adding JavaScript or TypeScript files in the <span className='bg-gray-400 p-1'>/pages/api</span> directory.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[200px] md:h-[180px] sm:h-[220px] rounded-lg w-[60%] ml-[5%]'>
            <code>{`export default function handler(req, res) {`}</code><br/>
            <code>&nbsp;{`res.status(400).json({ message: 'Hello, world!' });`}</code><br/>
            <code>{`}`}</code>
          </div>
        </ul>
        
        {/* Dynamic Routing Section */}
        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Dynamic Routing</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Simplified <b>dynamic routes</b> using file-based routing with brackets <span className='bg-gray-400 p-1'>([param])</span>.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[350px] sm:h-[380px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]'>
            <code>{`import { useRouter } from 'next/router';`}</code><br />
            <code>{`const Post = () => {`}</code><br />
            <code>&nbsp;{`  const router = useRouter();`}</code><br />
            <code>&nbsp;{`  const { id } = router.query;`}</code><br /><br />
            <code>&nbsp;{`  return <div>Post ID: {id}</div>;`}</code><br />
            <code>{`};`}</code><br /><br />
            <code>export default Post;</code>
          </div>
        </ul>

        {/* Pre-Rendering Improvements Section */}
        <h4 className='py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif'>3. Pre-Rendering Improvements</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'><b>Static Generation (SSG):</b> Static content is generated at build time.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Use <span className='bg-gray-400 p-1'>getStaticProps</span> and <span className='bg-gray-400 p-1'>getStaticPaths</span> for dynamic static content.</li>
        </ul>

        {/* Additional Features Section */}
        <h4 className='py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif'>4. Automatic Static Optimization</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Pages without server-side logic are automatically rendered as static HTML at build time.</li>
        </ul>

        <h4 className='py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif'>5. Built-In TypeScript Support</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Automatic TypeScript configuration and setup.</li>
        </ul>

        <h4 className='py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif'>6. Improved Developer Experience</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Instant feedback while coding with hot reloading.</li>
        </ul>

        {/* Other Sections */}
        {/* Add more sections as needed, following similar structure */}

      </div>
      <Comments />
    </div>
  )
}

export default page
