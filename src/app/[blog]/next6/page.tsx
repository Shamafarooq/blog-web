import Comments from '@/components/comment';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      <Image 
        src="/images/6.jpg" 
        alt="setup" 
        width={400} 
        height={400} 
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 6</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Sixth Version of Next.JS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 6, released in <b>June 2018</b>, introduced several significant updates, focusing on better routing, TypeScript compatibility, and improvements to server-side rendering (SSR). Although the version did not include groundbreaking features compared to later versions, it contributed to improving developer experience and preparing the framework for modern React features.
        </p>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Here are the key details and features of <b>Next.js 6</b>:
        </p>
        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 6</h3>
        <ul className='px-3 md:px-12'>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Built-in Support for Custom <span className='bg-gray-400 p-1'>routes</span></h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved routing capabilities with enhancements to the <span className='bg-gray-400 p-1'>next.config.js</span> file.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Developers could define custom routes more easily without relying on external libraries.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Simplified dynamic routing and page linking.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Default TypeScript Integration</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Although Next.js 6 did not fully support TypeScript out of the box, it introduced better compatibility with TypeScript configurations.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Simplified adding TypeScript to projects, making it easier to set up by manually adding <span className='bg-gray-400 p-1'>tsconfig.json</span> and type definitions.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Enhanced Dynamic Imports</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Continued improvements to <span className='bg-gray-400 p-1'>next/dynamic</span> for dynamically importing components.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Supported advanced loading states and server-side rendering for dynamic components.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Improved Static Export</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enhanced error messages during development, making debugging easier.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Included better stack traces for server-side errors.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Upgraded Webpack Integration</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Adopted updates from <b>Webpack 4</b>, offering faster builds and better code-splitting.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Added advanced optimizations for production builds, reducing JavaScript bundle sizes further.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>7. Custom Server Improvements</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved support for custom servers, allowing developers to define custom logic more flexibly.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example: Easily add middleware or API endpoints to a <span className='bg-gray-400 p-1'>Next.js</span> app using server.js.</li>
        </ul>

        <h3 className='pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif'>Performance Improvements</h3>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Optimized server-side rendering performance, reducing the time required to render pages on the server.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved client-side hydration, enhancing user experience on page load.</li>
        </ul>

        <h3 className='pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif'>Limitations of Next.js 6</h3>
        <ul className='md:px-12 px-3'>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. No File-based Dynamic Routing</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Dynamic routing with file-based conventions (e.g., <span className='bg-gray-400 p-1'>[id].js</span>) was not yet available (introduced in Next.js 9).</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. No Built-in API Routes</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Still required a custom server for API logic, as built-in API routes came later in Next.js 9.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. No Advanced Static Generation</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Did not support <b>Static Site Generation (SSG)</b> or <b>Incremental Static Regeneration (ISR)</b>, which were introduced in Next.js 9 and 10.</li>

          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. No Image Optimization</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Lacked built-in image optimization, introduced in Next.js 10.</li>
        </ul>
      </div>

      <Comments />
    </div>
  );
}

export default Page;
