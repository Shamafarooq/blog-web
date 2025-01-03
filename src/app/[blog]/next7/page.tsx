import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      <Image
        src="/images/7.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className="md:px-8 px-2 py-8 rounded-lg">
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 7</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">Seventh Version of Next.JS</h3>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          Next.js 7, released in <b>October 2018</b>, was a significant step forward in the framework development. It introduced new features that enhanced developer productivity, improved performance, and expanded customization options. This version focused on simplifying routing, better asset management, and integrating modern React features.
        </p>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          Here are the key details and features of <b>Next.js 7</b>:
        </p>
        <h3 className="pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif">Key Features of Next.js 7</h3>

        {/* Feature 1: Static and Dynamic Routing Enhancements */}
        <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">1. Static and Dynamic Routing Enhancements</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced <b>Static Import for Pages</b></li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">
            Allowed importing pages from custom folders instead of being limited to the <span className="bg-gray-400 p-1">pages</span> directory.
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example:</li>
        </ul>
        <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 md:h-[120px] sm:h-[130px] h-[150px] rounded-lg md:w-[60%] sm:w-[80%] w-full md:ml-[5%]">
          <code>import MyPage from ./custom-folder/MyPage;</code><br />
          <code>export default MyPage;</code>
        </div><br />

        {/* Feature 2: Improved Build Performance */}
        <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">2. Improved Build Performance</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Leveraged <b>Webpack 4</b> optimizations for faster builds.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced client and server build times with better code-splitting.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Reduced JavaScript bundle sizes for faster page loads.</li>
        </ul>

        {/* Feature 3: Webpack and Babel Configuration */}
        <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">3. Webpack and Babel Configuration</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allowed <b>custom Webpack and Babel configurations</b> through <span className="bg-gray-400 p-1">next.config.js</span>.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Example: Modifying Webpack behavior:</li>
        </ul>
        <div className="bg-black my-3 border-2 border-gray-500 md:text-lg sm:text-sm text-[14px] text-left px-3 md:px-8 py-7 text-cyan-500 h-[300px] rounded-lg md:w-[60%] sm:w-[80%] w-full md:ml-[5%]">
          <code>{`module.exports = {`}</code><br />
          <code>&nbsp;{`webpack: (config) => {`}</code><br />
          <code>&nbsp;&nbsp;{` config.module.rules.push({`}</code><br />
          <code>&nbsp;&nbsp;&nbsp;{`  test: /\.svg$/,`}</code><br />
          <code>&nbsp;&nbsp;&nbsp;{`  use: ['@svgr/webpack'],`}</code><br />
          <code>&nbsp;&nbsp;{` });`}</code><br />
          <code>&nbsp;&nbsp;{`    return config;`}</code><br />
          <code>&nbsp;{`  },`}</code><br />
          <code>{`};`}</code>
        </div>

        {/* More Features go here */}

      </div>

      <Comments />
    </div>
  );
};

export default page;
