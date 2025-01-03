import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const Page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      
      {/* Image Section */}
      <Image
        src="/images/5.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      
      {/* Content Section */}
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        
        {/* Title and Introduction */}
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 5</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Fifth Version of Next.JS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 5, released in <b>March 2018</b>, was a significant milestone for the framework, introducing key features that improved performance, compatibility, and ease of deployment. It expanded the possibilities for server-side rendering (SSR) and static export workflows, making Next.js even more popular among developers.
        </p>
        
        {/* Key Features Section */}
        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 5</h3>
        <ul className='px-3 md:px-12'>
          
          {/* Multi-Zone Support */}
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Multi-Zone Support</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Introduced the ability to compose multiple Next.js applications into a single application, referred to as <b>multi-zone support</b>.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Allowed developers to create micro-frontends or split large apps into smaller, maintainable parts.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Example: Different subdomains or URL paths could serve different Next.js apps.
          </li>
          
          {/* Code Block for Multi-Zone */}
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[300px] h-[300px] rounded-lg md:w-[45%] w-[95%] ml-[5%]'>
            <code>{`module.exports = {`}</code><br />
            <code>{`exportPathMap: async function (defaultPathMap) {`}</code><br />
            <code>{`  return {`}</code><br />
            <code>{`    '/app1': { page: '/' },`}</code><br />
            <code>{`    '/app2': { page: '/other' },`}</code><br />
            <code>{`  };`}</code><br />
            <code>{`  },`}</code><br />
            <code>{`};`}</code>
          </div>

          {/* Dynamic Import with SSR */}
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Dynamic Import with SSR</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improved <span className='bg-gray-400 p-1'>next/dynamic</span> to support server-side rendering (SSR) for dynamically imported modules.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Allowed components to load conditionally on the server side without affecting SSR capabilities.
          </li>

          {/* Code Block for Dynamic Import */}
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[330px] h-[300px] rounded-lg md:w-[45%] w-[95%] ml-[5%]'>
            <code>{`import dynamic from 'next/dynamic';`}</code><br />
            <code>{`const DynamicComponent = dynamic(() => import('./SomeComponent'), { ssr: true });`}</code><br />
            <code>{`function Page() {`}</code><br />
            <code>{`  return <DynamicComponent />;`}</code><br />
            <code>{`}`}</code><br />
            <code>{`export default Page;`}</code>
          </div>

          {/* Webpack 4 Integration */}
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Webpack 4 Integration</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Next.js 5 adopted <b>Webpack 4</b>, resulting in:
          </li>
          <ul className='list-disc pl-6'>
            <li className='text-md mx-3 md:mx-9'>Faster build times.</li>
            <li className='text-md mx-3 md:mx-9'>Smaller JavaScript bundles for better performance.</li>
            <li className='text-md mx-3 md:mx-9'>Built-in support for features like tree-shaking.</li>
          </ul>

          {/* Additional Features */}
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Automatic Static Optimization</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improved static file export process with better optimizations for pages without server-side code.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Allowed hybrid static/dynamic applications, setting the stage for static site generation features introduced in later versions.
          </li>
          
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>5. Enhanced Error Handling</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improved error handling for SSR and client-side rendering, making debugging easier during development.
          </li>
          
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Production-ready Build Improvements</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improved the production build process to generate smaller bundles and better optimize client-side JavaScript.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Reduced initial load times for users.
          </li>
          
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>7. Support for Custom <span className='bg-gray-400 p-1'>server.js</span></h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Allowed developers to customize their server logic with a custom <span className='bg-gray-400 p-1'>server.js</span> file.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Example: Adding custom API endpoints or middleware logic.
          </li>
          
          {/* Code Block for Custom Server */}
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[630px] h-[300px] rounded-lg md:w-[50%] w-[95%] ml-[5%]'>
            <code>{`const express = require('express');`}</code><br />
            <code>{`const next = require('next');`}</code><br />
            <code>{`const app = next({ dev: process.env.NODE_ENV !== 'production' });`}</code><br />
            <code>{`const handle = app.getRequestHandler();`}</code><br />
            <code>{`app.prepare().then(() => {`}</code><br />
            <code>{`  const server = express();`}</code><br />
            <code>{`  server.get('/custom', (req, res) => { res.send('Custom Route'); });`}</code><br />
            <code>{`  server.all('*', (req, res) => { return handle(req, res); });`}</code><br />
            <code>{`  server.listen(3000, (err) => {`}</code><br />
            <code>{`    if (err) throw err;`}</code><br />
            <code>{`    console.log('> Ready on http://localhost:3000');`}</code><br />
            <code>{`  });`}</code><br />
            <code>{`});`}</code>
          </div>

        </ul>
      </div>

      {/* Comments Section */}
      <div className='py-6 md:px-12 px-2'>
        <h3 className='pb-4 text-[25px] font-bold text-left font-serif'>Discussion</h3>
        <Comments />
      </div>
      
    </div>
  )
}

export default Page
