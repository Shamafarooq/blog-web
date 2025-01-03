import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'
const page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
          <Image
            src="/images/12.jpg"
            alt="setup"
            width={400}
            height={400}
            className="w-full md:h-[550px] sm:h-[350px] h-auto rounded-lg border border-slate-300"
          />
          
      {/* Content Section */}
      <div className="px-3 md:px-8 py-8 rounded-lg">
        {/* Title and Subtitle */}
       <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 12</h1> 
            <h3 className="pb-4 text-xl font-medium text-center font-serif">Twelveth Version of Next.JS</h3>
            <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Next.js 12, released in <b>October 2021</b>, introduced transformative updates, focusing on <b>performance, developer productivity</b>, and <b>scalable web development</b>. Here an in-depth overview of its key features and enhancements:
            </p>
            <p className="py-4 text-[16px] text-justify px-3 md:px-12">
            Here are the key details and features of <b>Next.js 12</b>:
          </p>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 12</h3>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Middleware (Edge Functions)</h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Middleware</b> became fully supported, allowing developers to run lightweight functions at the <b>edge</b> (closer to users).
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Middleware intercepts requests and can modify responses dynamically.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built on <b>V8 isolates</b>, offering low-latency execution without deploying full servers.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example use cases:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Authentication and authorization.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">A/B testing.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Dynamic rewrites and redirects.
          </li>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Middleware is created in the <span className="bg-gray-400 p-1">middleware.js</span> file:</li>
          <div className="bg-black md:text-lg sm:text-sm my-3 border-2 border-gray-500 text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[300px] sm:h-[350px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`export function middleware(request) {`}</code><br />
            <code>&nbsp;{`  const { pathname } = request.nextUrl;`}</code> <br /><br />
            <code>&nbsp;{`    if (pathname === '/dashboard') {`}</code><br />
            <code>&nbsp;&nbsp;{`    return new Response('Access Denied', { status: 403 });`}</code><br />
            <code>&nbsp;{`}`}</code><br />
            <code>{`}`}</code>
            </div>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Rust-Based Compiler (SWC)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Next.js adopted <b>SWC</b>, a Rust-based compiler, replacing Babel for JavaScript and TypeScript transpilation.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Key benefits:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Faster builds</b>: Up to 5x faster than Babel.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Smaller bundle sizes.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Native support for TypeScript and JSX transformations.
          </li>
          </li>
          </ul>
          <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. React Server Components (Experimental)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>React Server Components (RSC)</b> were introduced as an experimental feature.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">RSC enables server-rendered React components that fetch data without requiring client-side JavaScript.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved performance by reducing JavaScript sent to the client.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Seamless integration with SSR and SSG.
          </li>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example structure:</li>
          <div className="bg-black text-lg text-left px-3 my-3 border-2 border-gray-500 md:px-8 py-7 text-cyan-500 md:h-[150px] sm:h-[180px] h-full  rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`export default function ServerComponent() {`}</code><br/>
            <code>&nbsp;{`  return <div>This is rendered on the server.</div>;`}</code><br/>
            <code>{`}`}</code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. URL Imports
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Import <b>third-party modules</b> directly from a URL, avoiding npm installation.
          </li>
          <li className="py-2 list-disc text-md mx-3 md:mx-9">Example:</li>
          <div className="bg-black text-lg text-left my-3 border-2 border-gray-500 px-3 md:px-8 py-7 text-cyan-500 md:h-[150px] sm:h-[190px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>{`import moment from 'https://cdn.skypack.dev/moment';`}</code><br/>
            <code>{`console.log(moment().format());`}</code>
          </div>
          <li className="py-2 list-disc text-md mx-3 md:mx-9">
          Benefits:
<br/>
<li className="py-2 list-disc text-md mx-3 md:mx-9">Faster prototyping.
</li>
<li className="py-2 list-disc text-md mx-3 md:mx-9">Reduced dependency on package managers.
</li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Improved Image Component
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Upgrades to the <span className="bg-gray-400 p-1">{`<Image>`}</span> component for better flexibility:

          <li className="pb-2 list-disc text-md mx-3 md:mx-9">AVIF format support for smaller and faster-loading images.
          </li> 
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic placeholders for missing images.
          </li> 
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved configuration options in <span className="bg-gray-400 p-1">next.config.js</span>.
          </li> 
          </li> 
          <li className="py-2 list-disc text-md mx-3 md:mx-9">Example:</li> 
          <div className="bg-black md:text-lg my-3 border-2 border-gray-500 sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[330px] sm:h-[380px] h-full rounded-lg md:w-[80%] sm:w-[90%] w-full md:ml-[5%]">
            <code>import Image from next/image;</code><br/>
            <code>{`const MyImage = () => (`}</code><br/>
            <code>&nbsp;{`  <Image`}</code><br />
            <code>&nbsp;&nbsp;{`    src="/example.jpg"`}</code><br />
            <code>&nbsp;&nbsp;{`    alt="Example"`}</code><br />
            <code>&nbsp;&nbsp;{`    width={500}`}</code><br />
            <code>&nbsp;&nbsp;{`    height={300}`}</code><br />
            <code>&nbsp;&nbsp;{` placeholder="blur" `}</code><br />
            <code>&nbsp;{`  />`}</code><br />
            <code>{`}`}</code>
          </div>
           </ul>
           <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Native ES Modules Support
           </h4>
           <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Next.js 12 introduced full support for <b>ES Modules</b>.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allows using <span className="bg-gray-400 p-1">import</span> and <span className="bg-gray-400 p-1">export</span> natively, simplifying module development and compatibility.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">7. SSR and SSG Performance Boost
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Major performance improvements for <b>Server-Side Rendering (SSR)</b> and <b>Static Site Generation (SSG)</b>:
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Optimized page rendering times.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced overhead for large-scale static generation.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">8. Built-in React 18 Support
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Next.js 12 prepared developers for <b>React 18</b> with support for:

          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Concurrent rendering.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Automatic batching of updates.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Transition APIs.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">9. Edge Caching
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced <b>edge caching</b> capabilities with support for modern CDN features.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster response times for dynamic content.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved scalability and global distribution.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">10. Improved Internationalization
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Better support for <b>i18n (internationalization)</b> features:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster locale detection.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved handling of localized routes.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">11. Next.js Live (Preview)
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced <b>Next.js Live</b> for real-time collaborative development.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables developers to edit, share, and test Next.js applications directly in the browser.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Still in preview during the release.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">12. Tailwind CSS Integration
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced compatibility with <b>Tailwind CSS</b>:

          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Zero-config setup for Tailwind in Next.js projects.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example setup:</li>
          </li>
          <div className="bg-black md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[80px] sm:h-[100px] h-full rounded-lg md:w-[70%] sm:w-[90%] w-full md:ml-[5%]">
            <code>npx create-next-app -e with-tailwindcss my-app
            </code>
          </div>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">13. Updated <span className="bg-gray-400 p-1">next/script</span> Component
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">New loading strategies for third-party scripts, improving performance and control:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>beforeInteractive</b>: Scripts load before the page becomes interactive.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>afterInteractive</b>: Scripts load after interaction is possible.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>lazyOnload</b>: Scripts load when the browser is idle.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">14. Improved Error Overlay
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced error overlay for better debugging:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">More descriptive error messages.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Links to relevant documentation for resolution.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">15. Improved Caching and Asset Optimization
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced caching mechanism for:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Build outputs.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Static assets.
          </li>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Benefits:
<br />
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced deployment times.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster subsequent builds.
          </li>
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">16. Preview Mode Enhancements
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Preview Mode now works seamlessly with middleware, enabling dynamic previewing of unpublished or experimental content.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">17. TypeScript Improvements
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster <b>TypeScript builds</b> due to SWC integration.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved type-checking speed and developer feedback loops.
          </li>
          </ul>
          <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Benefits of Next.js 12:
          </h3>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. Unparalleled Performance:
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Faster builds with Rust-based SWC.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Edge middleware for low-latency responses.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Enhanced Developer Experience:
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Middleware and React Server Components simplify complex workflows.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Real-time collaboration tools like Next.js Live improve team productivity.
          </li>
          </ul>
          <h4 className="py-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">Future-Ready Features:
          </h4>
          <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built for React 18 and scalable web applications.
          </li>
          </ul>
          <p className="py-4 text-[16px] text-justify px-3 md:px-12">Next.js 12 marked a significant step forward in modern web development, empowering developers to build high-performance, scalable, and feature-rich applications efficiently.
</p>
            </div>
            <Comments/>
            </div>
  )
}

export default page