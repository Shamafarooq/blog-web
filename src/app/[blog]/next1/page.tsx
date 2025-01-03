// import React from 'react'
// import Image from 'next/image'
// import Comments from '@/components/comment'

// const page = () => {
//   return (
//     <div className='md:px-8 px-2 py-8 rounded-lg  '>
// <Image src="/images/1.jpg" alt="setup" width={200} height={200} className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"/>
// <div className='md:px-8 px-2 py-8 rounded-lg'>
// <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 1</h1>
// <h3 className='pb-4 text-xl font-medium text-center font-serif'>Next.js 1: The Beginning of the Framework Revolution</h3>
// <p className='py-4  text-[16px] text-justify md:px-12 px-3'>Next.js 1, released in <b>October 2016</b>, marked the first step towards creating a framework that made server-side rendering (SSR) and static site generation (SSG) more accessible for React developers. At the time, the React ecosystem lacked a streamlined solution for building SEO-friendly, high-performance web applications. Next.js addressed this gap by introducing a simple yet powerful way to create universal JavaScript applications.</p>
// <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 1</h3>
// <ul className='md:px-12 px-2'>
//     <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Server-Side Rendering (SSR):</h4>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Next.js 1 allowed developers to render React components on the server, sending fully-rendered HTML to the browser.</li>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>This feature significantly improved SEO and initial load time, as search engines could easily index the HTML content.</li>
// <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. File-Based Routing:</h4>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Introduced an innovative file-based routing system where the structure of the <span className='bg-gray-400 p-1'>pages</span> directory directly corresponded to the application URL structure.</li>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>For Example:</li>
// <li className='pb-2 list-disc text-md md:mx-12 px-3'>A file <span className='bg-gray-400 p-1'>about.js</span> inside the <span className='bg-gray-400 p-1'>pages</span> folder would map to the <span className='bg-gray-400 p-1'>/about</span> route.</li>
// <li className='pb-2 list-disc text-md md:mx-12 mx-3'>No need for complex routing libraries.</li>
// <h4  className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Built-In Webpack and Babel Integration:</h4>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Provided zero-config support for modern JavaScript features using Babel.</li>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Allowed developers to focus on building their application rather than setting up the tooling.</li>
// </ul>
// <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Why Next.js 1 Was Revolutionary</h3>
// <ul>
// <h4  className='pb-4 list-decimal md:mx-12 mx-3 text-lg font-semibold text-left font-serif'>Simplicity:</h4>
// <li className='pb-2 list-disc text-md md:mx-12 mx-3'>Developers no longer had to manually set up server-side rendering or configure tools like Webpack and Babel.</li>
// <h4  className='pb-4 list-decimal text-lg md:mx-12 mx-3 font-semibold text-left font-serif'>Performance:</h4>
// <li className='pb-2 list-disc text-md md:mx-12 mx-3'>By default, Next.js optimized performance with SSR and efficient build processes.</li>
// <h4  className='pb-4 list-decimal text-lg md:mx-12 mx-3 font-semibold text-left font-serif'>SEO-Friendly:</h4>
// <li className='pb-2 list-disc text-md md:mx-12 mx-3'>Compared to traditional React applications (which rendered most content on the client side), Next.js 1 improved visibility on search engines by serving pre-rendered HTML.

// </li>
// </ul>
// <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Limitations of Next.js 1
// </h3>
// <p className='py-4  text-[16px] text-justify md:px-12 px-3'>While Next.js 1 was groundbreaking, it was still in its infancy and had limitations:</p>
// <ul className='md:px-9 px-3'>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Lack of advanced features like API routes, dynamic routing, and incremental static regeneration.</li>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>No built-in support for CSS or styling; developers had to rely on custom solutions.</li>
// <li className='pb-2 list-disc text-md md:mx-9 mx-3'>Limited community adoption, as React itself was still evolving.</li>
// </ul>
// <h3 className='pb-4 text-[25px] md:px-12 mx-3 font-bold text-left font-serif'>Impact and Legacy</h3>
// <p className='py-1  text-[16px] text-justify md:px-12 px-3'>Next.js 1 laid the foundation for a framework that would grow into one of the most popular tools in the React ecosystem. It provided a vision of what a modern web application framework could look like, making complex features simple and accessible. <br />
// </p>
// <p className='py-1  text-[16px] text-justify md:px-12 px-3'>Today, with Next.js 15, we can see how far this journey has come—but it all started with the simplicity and vision of <b>Next.js 1</b>.</p>
// </div>
// <Comments/>
//     </div>
//   )
// }

// export default page

import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const Page = () => {
  return (
    <div className="md:px-8 px-2 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      <Image
        src="/images/1.jpg"
        alt="setup"
        width={200}
        height={200}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg"
      />
      <div className="md:px-8 px-2 py-8 rounded-lg">
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 1</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">
          Next.js 1: The Beginning of the Framework Revolution
        </h3>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          Next.js 1, released in <b>October 2016</b>, marked the first step towards creating a framework
          that made server-side rendering (SSR) and static site generation (SSG) more accessible for React
          developers. At the time, the React ecosystem lacked a streamlined solution for building
          SEO-friendly, high-performance web applications. Next.js addressed this gap by introducing a
          simple yet powerful way to create universal JavaScript applications.
        </p>
        <h3 className="pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif">
          Key Features of Next.js 1
        </h3>
        <ul className="md:px-12 px-2">
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            1. Server-Side Rendering (SSR):
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Next.js 1 allowed developers to render React components on the server, sending fully-rendered
            HTML to the browser.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            This feature significantly improved SEO and initial load time, as search engines could easily
            index the HTML content.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            2. File-Based Routing:
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Introduced an innovative file-based routing system where the structure of the{' '}
            <span className="bg-gray-400 p-1">pages</span> directory directly corresponded to the
            application URL structure.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">For Example:</li>
          <li className="pb-2 list-disc text-md md:mx-12 px-3">
            A file <span className="bg-gray-400 p-1">about.js</span> inside the{' '}
            <span className="bg-gray-400 p-1">pages</span> folder would map to the{' '}
            <span className="bg-gray-400 p-1">/about</span> route.
          </li>
          <li className="pb-2 list-disc text-md md:mx-12 mx-3">No need for complex routing libraries.</li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            3. Built-In Webpack and Babel Integration:
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Provided zero-config support for modern JavaScript features using Babel.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Allowed developers to focus on building their application rather than setting up the tooling.
          </li>
        </ul>
        <h3 className="pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif">
          Why Next.js 1 Was Revolutionary
        </h3>
        <ul>
          <h4 className="pb-4 list-decimal md:mx-12 mx-3 text-lg font-semibold text-left font-serif">
            Simplicity:
          </h4>
          <li className="pb-2 list-disc text-md md:mx-12 mx-3">
            Developers no longer had to manually set up server-side rendering or configure tools like
            Webpack and Babel.
          </li>
          <h4 className="pb-4 list-decimal text-lg md:mx-12 mx-3 font-semibold text-left font-serif">
            Performance:
          </h4>
          <li className="pb-2 list-disc text-md md:mx-12 mx-3">
            By default, Next.js optimized performance with SSR and efficient build processes.
          </li>
          <h4 className="pb-4 list-decimal text-lg md:mx-12 mx-3 font-semibold text-left font-serif">
            SEO-Friendly:
          </h4>
          <li className="pb-2 list-disc text-md md:mx-12 mx-3">
            Compared to traditional React applications (which rendered most content on the client side),
            Next.js 1 improved visibility on search engines by serving pre-rendered HTML.
          </li>
        </ul>
        <h3 className="pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif">
          Limitations of Next.js 1
        </h3>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          While Next.js 1 was groundbreaking, it was still in its infancy and had limitations:
        </p>
        <ul className="md:px-9 px-3">
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Lack of advanced features like API routes, dynamic routing, and incremental static regeneration.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            No built-in support for CSS or styling; developers had to rely on custom solutions.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Limited community adoption, as React itself was still evolving.
          </li>
        </ul>
        <h3 className="pb-4 text-[25px] md:px-12 mx-3 font-bold text-left font-serif">Impact and Legacy</h3>
        <p className="py-1 text-[16px] text-justify md:px-12 px-3">
          Next.js 1 laid the foundation for a framework that would grow into one of the most popular tools
          in the React ecosystem. It provided a vision of what a modern web application framework could look
          like, making complex features simple and accessible. <br />
        </p>
        <p className="py-1 text-[16px] text-justify md:px-12 px-3">
          Today, with Next.js 15, we can see how far this journey has come—but it all started with the
          simplicity and vision of <b>Next.js 1</b>.
        </p>
      </div>
      <Comments />
    </div>
  );
};

export default Page;
