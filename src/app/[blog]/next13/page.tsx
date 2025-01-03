import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      <Image
        src="/images/13.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full md:h-[550px] sm:h-[350px] h-auto rounded-lg border border-slate-300"
      />
      <div className="px-3 md:px-8 py-8 rounded-lg">
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 13</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">Thirteenth Version of Next.JS</h3>
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
          Next.js 13, released in <b>October 2022</b>, introduced significant changes and features, focusing on improving performance, flexibility, and developer experience. Below are the key details of Next.js 13:
        </p>
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
          Here are the key details and features of <b>Next.js 13</b>:
        </p>
        <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 13</h3>
        
        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. App Router (New Routing System)</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Replaces the traditional <span className="bg-gray-400 p-1">pages</span> directory with the new <span className="bg-gray-400 p-1">app</span> directory.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Offers a React Server Components-based routing system.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built-in support for layouts, nested layouts, and streaming.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved data fetching capabilities with better support for Suspense.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. React Server Components</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables rendering components on the server by default, reducing JavaScript sent to the client.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Makes apps faster and more efficient by sending only the minimum necessary HTML and JSON to the browser.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. TurboPack (New Build Tool)</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced as a successor to Webpack.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Written in Rust for ultra-fast build times.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Currently in alpha, focusing on speed optimization for large projects.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Middleware Enhancements</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Middleware supports streaming and edge rendering.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">More flexible with conditional processing based on requests.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. New <span className="bg-gray-400 p-1">next/image</span> Improvements</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatically detects and optimizes images.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified usage with enhanced performance.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. File-based Layouts and Routing</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Layouts</b></li>
          <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Easy creation of reusable layouts by defining them in the <span className="bg-gray-400 p-1">app</span> directory.</li>
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Nested layouts for creating complex, structured designs.</li>
          </ul>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Routing:</b></li>
          <ul className="px-3 md:px-12">
            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Support for nested routing and dynamic segments <span className="bg-gray-400 p-1">([slug])</span>.</li>
          </ul>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Improved Data Fetching</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Integrated support for fetching data directly in components.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Works seamlessly with Suspense and Server Components.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">API routes can now return streaming responses.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Built-in SEO Optimizations</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic metadata handling using the <span className="bg-gray-400 p-1">head</span> tag in the <span className="bg-gray-400 p-1">app</span> directory.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplifies the management of meta tags, Open Graph, and other SEO elements.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Streaming and Suspense Support</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables partial rendering and streaming of HTML.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved user experience with faster content delivery.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">10. API Enhancements</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">API routes can now be used with Server Components, improving flexibility and performance.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Better error handling and validation for API routes.</li>
        </ul>
        <Comments />
      </div>
    </div>
  )
}

export default page
