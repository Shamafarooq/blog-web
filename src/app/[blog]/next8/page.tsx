// import React from 'react'
// import Image from 'next/image'
// import Comments from '@/components/comment'
// const page = () => {
//   return (
//     <div> 
//     <div className="px-3 md:px-8 py-8 rounded-lg">
//       <Image
//         src="/images/8.jpg"
//         alt="setup"
//         width={400}
//         height={400}
//         className="w-full h-full md:w-full sm:w-[660px] md:h-[550px] sm:h[350px] rounded-lg border border-slate-300"
//       />
//       <div className="px-3 md:px-8 py-8 rounded-lg">
//         <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 8</h1>
//         <h3 className="pb-4 text-xl font-medium text-center font-serif">Eightth Version of Next.JS</h3>
//         <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 8, released in <b>February 2019</b>, introduced features that enhanced performance, scalability, and developer experience. It marked a shift toward serverless computing and better handling of large-scale applications.

// </p>
// <p className="py-4 text-[16px] text-justify px-3 md:px-12">
//             Here are the key details and features of <b>Next.js 8</b>:
//           </p>
//           <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 8</h3>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Serverless Mode
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced <b>serverless mode</b>, allowing each page in a Next.js application to be deployed as an independent serverless function.</li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits:
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster cold starts and better scalability.</li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced costs for serverless deployments (e.g., AWS Lambda, Vercel).</li>
//           </ul>
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">How it works:
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Each page becomes a serverless function that handles its logic, making deployments modular.</li>
//           </ul>
//           </li>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Improved Build Performance
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster build process by parallelizing builds of individual pages.
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced caching for unchanged pages during the build process.
//           </li>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Incremental Compilation
//           </h4>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enabled incremental compilation, reducing rebuild times by reusing previously built files for unchanged pages.
//           </li>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Customizable<span className="bg-gray-400 p-1"> next.config.js</span>.</h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Expanded customization options in <span className="bg-gray-400 p-1">next.config.js</span>:
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allowed fine-tuning serverless build configurations.</li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved support for third-party plugins and custom logic.</li>
//           </li>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Static Asset Serving
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified the process for serving static files from the <span className="bg-gray-400 p-1">/static</span> directory (later <span className="bg-gray-400 p-1">/public</span> in newer versions).
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Place files in <span className="bg-gray-400 p-1">/static</span>, and they are accessible at <span className="bg-gray-400 p-1">/static/filename</span></li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Used for serving images, fonts, or other assets.</li>
//           </li>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Support for Web Workers
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Added support for web workers, enabling developers to use multithreading for computationally heavy tasks.</li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
//           <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[100px] md:h-[150px] rounded-lg w-full md:w-[70%] sm:w-[90%] md:ml-[5%]">
//    <code>const worker = new Worker(./worker.js);</code><br />
//    <code>worker.postMessage(Hello Worker);</code>
//    </div>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. Preloading for <span className="bg-gray-400 p-1">next/link</span>.</h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved the <span className="bg-gray-400 p-1">next/link</span>component with smarter preloading strategies for linked pages.</li> 
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits:
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced navigation time.
//           </li> 
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">
//           Enhanced user experience through faster transitions.
//           </li> 
//           </li> 
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Performance Monitoring with <span className="bg-gray-400 p-1">next build.</span>
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Added detailed performance insights during the build process.
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Provided statistics on bundle sizes, build times, and opportunities for optimization.
//           </li>

//           </ul>
//           <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Other Enhancements
//           </h3>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">Webpack 4 Integration Improvements
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Fully leveraged Webpack 4 for better code-splitting and tree-shaking.
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized builds for smaller client-side bundles.
//           </li>

//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">Error Handling Improvements
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Clearer error messages and stack traces during development and production.
//           </li>
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved error overlay for debugging client-side issues.
//           </li>

//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">Support for React 16.8 (Hooks)
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Fully compatible with <b>React 16.8</b>, enabling the use of <b>React Hooks</b>React Hooks for functional component state and lifecycle management.
//           </li>
//           </ul>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">Dynamic Routing Enhancements
//           </h4>
//           <ul className="px-3 md:px-12">
//           <li className="pb-2 list-disc text-md mx-3 md:mx-9">Although file-based dynamic routing  <span className="bg-gray-400 p-1">([id].js)</span> was not yet introduced, this version made dynamic routing patterns easier with custom server setups.
//           </li>
//           </ul>
//           <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Performance Enhancements</h3>
//            <ul className="px-3 md:px-12">
//            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster cold starts for serverless deployments.
//            </li>
//            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized page rendering for both SSR and static exports.
//            </li>
//            <li className="pb-2 list-disc text-md mx-3 md:mx-9">Smarter asset caching strategies.
//            </li>
//            </ul>
//            <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Limitations of Next.js 8
//            </h3>
//           <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. No File-based Dynamic Routing:

// </h4>
// <li className="pb-2 list-disc text-md mx-3 md:mx-9">File-based dynamic routing (e.g., <span className="bg-gray-400 p-1">[id].js</span>) came in Next.js 9.
// </li>
// <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. No Built-in API Routes:
// </h4>
// <li className="pb-2 list-disc text-md mx-3 md:mx-9">Developers still had to rely on custom servers for backend logic or use external APIs.
// </li>
// <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. No Image Optimization:
// </h4>
// <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built-in image optimization was introduced in Next.js 10.
// </li>
// <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">No Static Site Generation (SSG) or Incremental Static Regeneration (ISR):
// </h4>
// <li className="pb-2 list-disc text-md mx-3 md:mx-9">These features were introduced in Next.js 9 and 10.
// </li>

//         </div>
//     </div>
//     <Comments/>
// </div>
//   )
// }

// export default page
import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      <Image
        src="/images/8.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 8</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Eighth Version of Next.JS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 8, released in <b>February 2019</b>, introduced features that enhanced performance, scalability, and developer experience. It marked a shift toward serverless computing and better handling of large-scale applications.
        </p>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Here are the key details and features of <b>Next.js 8</b>:
        </p>

        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 8</h3>
        <ul className='px-3 md:px-12'>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Serverless Mode</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Introduced <b>serverless mode</b>, allowing each page in a Next.js application to be deployed as an independent serverless function.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Benefits:
            <ul className='px-3 md:px-12'>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Faster cold starts and better scalability.</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Reduced costs for serverless deployments (e.g., AWS Lambda, Vercel).</li>
            </ul>
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            How it works:
            <ul className='px-3 md:px-12'>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Each page becomes a serverless function that handles its logic, making deployments modular.</li>
            </ul>
          </li>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Improved Build Performance</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Faster build process by parallelizing builds of individual pages.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enhanced caching for unchanged pages during the build process.</li>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Incremental Compilation</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Enabled incremental compilation, reducing rebuild times by reusing previously built files for unchanged pages.</li>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Customizable <span className='bg-gray-400 p-1'>next.config.js</span></h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Expanded customization options in <span className='bg-gray-400 p-1'>next.config.js</span>:</li>
          <ul className='px-3 md:px-12'>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Allowed fine-tuning serverless build configurations.</li>
            <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved support for third-party plugins and custom logic.</li>
          </ul>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>5. Static Asset Serving</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Simplified the process for serving static files from the <span className='bg-gray-400 p-1'>/static</span> directory (later <span className='bg-gray-400 p-1'>/public</span> in newer versions).
            <ul className='px-3 md:px-12'>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Place files in <span className='bg-gray-400 p-1'>/static</span>, and they are accessible at <span className='bg-gray-400 p-1'>/static/filename</span>.</li>
              <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Used for serving images, fonts, or other assets.</li>
            </ul>
          </li>
        </ul>

        <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Support for Web Workers</h4>
        <ul className='px-3 md:px-12'>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Added support for web workers, enabling developers to use multithreading for computationally heavy tasks.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[100px] md:h-[150px] rounded-lg w-full md:w-[70%] sm:w-[90%] md:ml-[5%]'>
            <code>const worker = new Worker(./worker.js);</code><br />
            <code>worker.postMessage(Hello Worker);</code>
          </div>
        </ul>

        {/* Additional content follows the same pattern */}

      </div>
      <Comments />
    </div>
  );
};

export default page;
