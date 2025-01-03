import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const Page = () => {
  return (
    <div className="md:px-8 px-2 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      <Image
        src="/images/2.jpg"
        alt="setup"
        width={200}
        height={200}
        className="w-full h-auto md:h-[550px] sm:h-[350px] rounded-lg border border-slate-300"
      />
      <div className="md:px-8 px-2 py-8 rounded-lg">
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 2</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">
          Second Version of NextJS
        </h3>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          Next.js 2 was an early version of the Next.js framework, which was first released in <b>2016</b>.
          Although it is an older version, it laid the foundation for modern web application development
          with its focus on server-side rendering (SSR) and simplicity in building React applications.
        </p>
        <p className="py-4 text-[16px] text-justify md:px-12 px-3">
          Here are the key details and features of <b>Next.js 2</b>:
        </p>
        <h3 className="pb-4 text-[25px] md:px-12 px-3 font-bold text-left font-serif">
          Key Features of Next.js 2
        </h3>
        <ul className="md:px-12 px-3">
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            1. Server-Side Rendering (SSR):
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Pages were rendered on the server before being sent to the client, improving SEO and initial
            load performance.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            2. File-based Routing
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Introduced a file-based routing system where the file structure in the <span className="bg-gray-400 p-1">pages/</span> directory determined the routes in the application.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            3. Built-in CSS Support
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Allowed importing CSS directly into components.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            4. Static Exporting
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Provided the ability to export the app as a static site with pre-rendered HTML files.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            5. Hot Module Replacement (HMR)
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Enabled fast development by automatically updating the application in the browser without
            requiring a full page reload.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            6. Minimal Configuration
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Focused on zero-config setup, making it easy for developers to get started quickly.
          </li>
          <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
            7. Custom Document Support
          </h4>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Developers could customize the HTML {"<head>"} and {"<body>"} tags using a _document.js file.
          </li>
        </ul>
        <h3 className="pb-4 text-[25px] md:px-12 mx-3 font-bold text-left font-serif">
          Limitations of Next.js 2
        </h3>
        <ul>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Lacked advanced features like dynamic routing, API routes, and better performance optimizations.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Limited TypeScript support compared to modern versions.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            Did not have built-in image optimization, which is now a staple feature.
          </li>
          <li className="pb-2 list-disc text-md md:mx-9 mx-3">
            More manual work was required for handling custom configurations.
          </li>
        </ul>
      </div>
      <Comments />
    </div>
  );
};

export default Page;
