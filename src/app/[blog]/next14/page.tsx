import React from 'react'
import Image from 'next/image'
import Comments from '@/components/comment'

const page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      <Image
        src="/images/14.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full md:h-[550px] sm:h-[350px] h-auto rounded-lg border border-slate-300"
      />
      {/* Content Section */}
      <div className="px-3 md:px-8 py-8 rounded-lg">
        {/* Title and Subtitle */}
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 14</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">Fourteenth Version of Next.JS</h3>
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
          Next.js 14, released in <b>late 2023</b>, introduced a host of powerful features to improve both the developer experience and application performance. Here are the key highlights:
        </p>
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
          Here are the key details and features of <b>Next.js 14</b>:
        </p>
        <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Key Features of Next.js 14</h3>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">1. TurboPack as Default Build Tool</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">TurboPack replaces Webpack as the default bundler, offering <b>much faster build times</b> due to its Rust-based architecture.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improves the overall performance of the build process.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">2. Server Actions</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Introduced as a stable feature, Server Actions allow triggering server-side operations directly from UI components.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enables functions like database updates or API calls to run entirely on the server.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Supports actions via:
            <ul className="list-inside pl-6">
              <li className="pb-2 list-disc text-md mx-3 md:mx-9"><span className="bg-gray-400 p-1">formAction</span> attributes in buttons and forms.</li>
              <li className="pb-2 list-disc text-md mx-3 md:mx-9"><span className="bg-gray-400 p-1">startTransition</span> for advanced use cases.</li>
            </ul>
          </li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplifies managing dynamic data without additional API layers​.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">3. Enhanced App Router</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Built on React Server Components, the App Router continues to improve:
            <ul className="list-inside pl-6">
              <li className="pb-2 list-disc text-md mx-3 md:mx-9"><b>Static and dynamic rendering</b>: Efficiently handles pre-rendered static pages and dynamic content updates.</li>
              <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified layouts and nested routing for better code organization.</li>
              <li className="pb-2 list-disc text-md mx-3 md:mx-9">Streaming support for partial page rendering​.</li>
            </ul>
          </li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">4. Revalidation Enhancements</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Functions like <span className="bg-gray-400 p-1">revalidatePath</span> and <span className="bg-gray-400 p-1">revalidateTag</span> enable dynamic updates to static content, merging the benefits of static and dynamic rendering.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Allows seamless updates when data changes without full page reloads​.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">5. Improved Image Optimization</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Support for newer image formats like <b>AVIF</b>, improving compression and image quality.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Further optimizations to the <span className="bg-gray-400 p-1">next/image</span> component for faster page loads​.</li>
        </ul>

        <h4 className="pb-4 px-3 md:px-12 list-decimal text-lg font-semibold text-left font-serif">6. Middleware and Edge Features</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Improved edge computing capabilities to handle requests closer to the user.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Enhanced middleware functionality for more efficient processing of dynamic and conditional routes​.</li>
        </ul>

        <h4 className="pb-4 text-lg px-3 md:px-12 font-bold text-left font-serif">7. Compatibility with Latest React Features</h4>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Fully integrates with React 18/19, leveraging concurrent rendering and React’s latest optimizations​.</li>
        </ul>

        <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Performance Improvements</h3>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">TurboPack reduces build and reload times.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Server components minimize client-side JavaScript, boosting performance.</li>
        </ul>

        <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">Developer Experience</h3>
        <ul className="px-3 md:px-12">
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Simplified APIs, especially for routing and server-side functions.</li>
          <li className="pb-2 list-disc text-md mx-3 md:mx-9">Better tools for handling both static and dynamic content.</li>
        </ul>
      </div>
      <Comments />
    </div>
  )
}

export default page
