import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const page = () => {
  return (
    <div className='px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto'>
      <Image
        src="/images/4.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className='md:px-8 px-2 py-8 rounded-lg'>
        <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Next.JS 4</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>Fourth Version of NextJS</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 4 was released in <b>November 2017</b>, following the improvements of Next.js 3. It continued to refine
          the developer experience with a focus on stability, performance, and usability. Below are the details of this version:
        </p>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Here are the key details and features of <b>Next.js 4</b>:
        </p>

        <h3 className='pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif'>Key Features of Next.js 4</h3>
        <ul className='px-3 md:px-12'>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>1. Serverless by Design</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Emphasized the serverless nature of Next.js apps, making them more scalable and easier to deploy to serverless
            environments.
          </li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>2. Improved Error Handling</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Enhanced error messages and stack traces for easier debugging during development.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced more descriptive build-time and runtime errors.</li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>3. Performance Improvements</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Optimized build times and runtime performance for faster page loads and smoother developer experience.
          </li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>4. Automatic Polyfills</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Automatically included necessary JavaScript polyfills (e.g., for older browsers like IE11) without requiring
            developer intervention.
          </li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>5. React 16 Support</h4>
          <li className='pb-2 list-disc text-md mx-9'>
            Fully compatible with <b>React 16</b>, which introduced major features like:
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            <b>Error Boundaries</b>: Handling errors gracefully in React components.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            <b>Portals</b>: Rendering children into DOM nodes outside of the parent hierarchy.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Improved rendering performance and compatibility.</li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>6. Custom Document (_document.js) Enhancements</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Allowed developers to customize the <b>&lt;html&gt;</b>, <b>&lt;head&gt;</b>, and <b>&lt;body&gt;</b> elements of
            their application.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Useful for injecting custom meta tags, styles, or scripts.</li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Example:</li>
          <div className='bg-black my-3 border-2 border-gray-500 md:text-lg text-sm text-left px-8 py-7 text-cyan-500 md:h-[580px] sm:h-[520px] h-[550px] w-[95%] rounded-lg md:w-[80%] ml-[5%]'>
            <code>{`import Document, { Html, Head, Main, NextScript } from 'next/document';`}</code>
            <br />
            <code>{`class MyDocument extends Document {`}</code>
            <br />
            <code>{`  render() {`}</code>
            <br />
            <code>{`    return (`}</code>
            <br />
            <code>{`      <Html>`}</code>
            <br />
            <code>{`        <Head>`}</code>
            <br />
            <code>{`          <meta name="description" content="Custom document in Next.js 4" />`}</code>
            <br />
            <code>{`        </Head>`}</code>
            <br />
            <code>{`        <body>`}</code>
            <br />
            <code>{`          <Main />`}</code>
            <br />
            <code>{`          <NextScript />`}</code>
            <br />
            <code>{`        </body>`}</code>
            <br />
            <code>{`      </Html>`}</code>
            <br />
            <code>{`    );`}</code>
            <br />
            <code>{`  }`}</code>
            <br />
            <code>{`}`}</code>
            <br />
            <code>{`export default MyDocument;`}</code>
          </div>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>7. Enhanced Dynamic Imports</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Continued improvements to the <b>next/dynamic</b> API for lazy loading components.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Introduced the ability to add custom loading indicators.</li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>8. Code Splitting</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improved client-side code splitting to load only the necessary JavaScript for the current page.
          </li>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>Reduced page load times for large applications.</li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>9. Export Enhancements</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Improvements to <b>next export</b> allowed more efficient generation of static files for deployment to static
            hosting providers.
          </li>
          <h4 className='pb-4 list-decimal text-lg font-semibold text-left font-serif'>10. Community and Ecosystem Growth</h4>
          <li className='pb-2 list-disc text-md mx-3 md:mx-9'>
            Strengthened the community and integration with tools like Webpack, Babel, and TypeScript.
          </li>
        </ul>

        <h3 className='pb-4 text-[25px] px-12 font-bold text-left font-serif'>Historical Importance of Next.js 4</h3>
        <p className='py-4 text-[16px] text-justify md:px-12 px-3'>
          Next.js 4 helped establish Next.js as a powerful tool for building static and server-rendered React applications. Its serverless-first approach and continued enhancements to error handling and performance were vital in setting Next.js apart from other frameworks at the time. It laid the groundwork for the continued evolution of the Next.js ecosystem.
        </p>
        <Comments />
      </div>
    </div>
  );
};

export default page;