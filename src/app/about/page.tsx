import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
        <Image src="/images/setup.jpg" alt="setup" width={400} height={400} className="w-full md:h-[550px] sm:h-[350px] h-auto rounded-lg border border-slate-300"/>
   <div className='md:px-8 px-4 py-8 rounded-lg w-full'>
    
    <h1 className='py-4 text-[45px] text-center font-serif font-bold'>Setup Of Next.JS</h1>
        <h3 className='pb-4 text-xl font-medium text-center font-serif'>How to Set Up a Next.js Project: Step-by-Step Guide</h3>
    <p className='py-4  text-[16px] w-[80%] text-justify md:px-12 px-6'>Next.js is a powerful React framework for building fast and optimized web applications. Setting it up is simple, and Ill guide you through it step by step.</p>
    <h3 className='text-xl text-left font-semibold font-serif pb-4 md:px-9 px-3'>1. Install Node.js and npm</h3>
    <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>First, make sure you have Node.js and npm installed. You can check your versions using the following commands.</p>
    <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:px-8 px-2 py-8 text-cyan-500 md:h-[100px] h-[140px] rounded-lg w-[40%] md:ml-[5%]'>
    <code>node -v</code> <br />
    <code>npm -v</code>
    </div>
    <p className='py-4  text-[16px] text-justify md:px-9 px-3'>If they’re not installed, download and install Node.js from <Link href="https://nodejs.org/" className='text-indigo-500'>nodejs.org</Link></p>
    <h3 className='text-xl text-left font-semibold font-serif pb-4 md:px-9 px-3'>2. Create a New Next.js Project</h3>
    <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>Use the <span className='bg-gray-400 p-1'>npx</span> command to create a new Next.js project. In your terminal, run</p>
    <div className='bg-black text-lg text-left px-8 py-7 text-cyan-500 md:h-[100px] h-[190px] rounded-lg md:w-[45%] w-[85%] ml-[5%]'>
        <code>npx create-next-app@latest my-nextjs-app</code>
    </div>
    <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Replace my-nextjs-app with your desired project name.</p>
    <ul className='md:px-9 px-3'>
    <li className='pb-2 list-disc text-md font-semibold md:mx-9 mx-3'>Choose TypeScript or JavaScript:</li>
       <p className='pb-2  text-[16px] text-justify md:px-9 px-3'>The CLI will ask if you want TypeScript; select Yes or No based on your preference.</p>
       <li className='pb-2 list-disc text-md font-semibold md:mx-9 mx-3'>ESLint:</li>
       <p className='pb-2  text-[16px] text-justify md:px-9 px-3'>Choose if you want ESLint for code linting.</p>
       <li className='pb-2 list-disc text-md font-semibold md:mx-9 mx-3'>src Directory: </li>
       <p className='pb-2  text-[16px] text-justify md:px-9 px-3'> Decide if you want to organize files under a <span className='p-1 bg-gray-400'>src</span> directory.</p>
       <li className='pb-2 list-disc text-md font-semibold md:mx-9 mx-3'>Experimental App Router:</li>
       <p className='pb-2  text-[16px] text-justify md:px-9 px-3'> Enable this if you’re using Next.js 13 or later.</p>
       <li className='pb-2 list-disc text-md font-semibold md:mx-9 mx-3'>Other Options:</li>
       <p className='pb-2  text-[16px] text-justify md:px-9 px-3'>You’ll be prompted about Tailwind CSS, Git setup, and other popular features—select based on your project requirements.</p>
    </ul>
    <h3 className='text-xl text-left font-semibold font-serif pb-4 md:px-9 px-3'>3. Navigate to the Project Directory</h3>
    <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>After setup, navigate to the project folder:</p>
    <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:px-8 px-3 py-7 text-cyan-500 md:h-[80px] h-[120px] rounded-lg md:w-[40%] w-[85%] md:ml-[5%]'>
        <code>cd my-nextjs-app</code>
        </div>
        <h3 className='text-xl text-left font-semibold font-serif py-4 md:px-9 px-3'>4. Start the Development Server</h3>
        <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>Run the development server with the following command:</p>
        <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:px-8 px-3 py-7 text-cyan-500 md:h-[80px] h-[120px] rounded-lg w-[40%] md:ml-[5%]'>
            <code>npm run dev</code>
            </div>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Open your browser and go to http://localhost:3000 to view the project.</p>
            <h3 className='text-xl text-left font-semibold font-serif pb-4 md:px-9 px-3'>5. Explore the Project Structure</h3>
            <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>A default Next.js project will have the following structure:</p>
           <ul className='md:px-9 px-3'>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400 '>pages/</span>: Contains your page components.</li>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3' ><span className='bg-gray-400 '>public/</span>: Static files like images and icons.</li>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400 '>styles/</span>: Default CSS files.</li>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400 '>next.config.js</span>: Configuration file for advanced customizations.</li>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400 '>package.json</span>: Manages dependencies and scripts.</li>

           </ul>
           <h3 className='text-xl text-left font-semibold font-serif pb-4 md:px-9 px-3'>6. Configure CSS or Tailwind CSS (Optional)</h3>
           <ul className='md:px-9 px-3'>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><b>CSS</b>: You can add global styles in <span className='bg-gray-400'>styles/globals.css</span> and module-based styles in component files (e.g., <span className='bg-gray-400'>styles/Home.module.css</span>).</li> 
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><b>Tailwind CSS</b>: If you selected Tailwind CSS during setup, configure it in <span className='bg-gray-400'>tailwind.config.js</span>.</li> 
           </ul>
           <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>For styling, Tailwind CSS is a great option with Next.js. Here’s how to set it up:</p>
           <p className='pb-4  text-[16px] text-justify md:px-9 px-3'><b>Install Tailwind:</b></p>
           <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:px-8 px-3 py-8 text-cyan-500 md:h-[100px] h-[120px] rounded-lg w-[70%] ml-[5%]'>
            <code>npm install -D tailwindcss postcss autoprefixernpx tailwindcss init -p</code>
            </div>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Configure Tailwind: Open the generated tailwind.config.js and add the paths to your content:</p>
            <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:pl-12 pl-2 py-8 text-cyan-500 md:h-[380px] h-[420px] rounded-lg md:w-[50%] w-[90%] md:ml-[5%]'>
            <p className='pb-2 text-white text-[16px] text-justify px-3'>tailwind.config.js</p>
            <code> {`module.export ={`} </code><br />
            <code>{`         content: [ `}</code><br />
            <code>   {`             " ./page/**/*.{js,ts,jsx,tsx}",`}</code><br />
            <code> {`               "./components/**/*.{js,ts,tsx,jsx}",`}</code><br />
            <code> {`                 ],`}</code><br />
            <code>{`         theme: {`}</code> <br />
            <code>{`         extend: {},`}</code><br /> 
            <code>{`                },`}</code>  <br />
            <code>{`         plugins: [],`}</code><br />
            <code> {`               };`}</code>
            </div>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Add Tailwind CSS to Your CSS File: In styles/globals.css, add:</p>
            <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:pl-12 pl-2 py-8 text-cyan-500 md:h-[150px] h-[200px] rounded-lg md:w-[50%] w-[90%] ml-[5%]'>
              <code>@Tailwind base;</code><br />
              <code>@Tailwind components;</code><br />
              <code>@Tailwind utilities;</code>
            </div>
           <h3 className='text-xl text-left font-semibold font-serif py-4 md:px-9 px-3'>7. Set Up Routing</h3>
           <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>In Next.js, each file in the <span className='bg-gray-400 '>pages</span> directory automatically becomes a route:</p>
           <ul className='md:px-9 px-3'>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400'>pages/index.js</span> maps to <span className='bg-gray-400'>/</span>.</li> 
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'><span className='bg-gray-400'>pages/about.js</span> maps to <span className='bg-gray-400'>/about</span>.</li> 
           </ul>
           <p className='pb-4  text-[16px] text-justify md:px-9 px-3'>For nested routes, create folders within <span className='bg-gray-400 '>pages</span>:</p>
           <h3 className='text-xl text-left font-semibold font-serif py-4 md:px-9 px-3'>8. Adding Components</h3>
           <ul className='md:px-9 px-3'>
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'>Create a<span className='bg-gray-400'> components</span> directory for reusable components.</li> 
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'>Add a new component, e.g., <span className='bg-gray-400'>Header.js</span>, in <span className='bg-gray-400'>components/</span>.</li> 
           <li className='pb-2 list-disc text-md  md:mx-9 mx-3'>Import and use it in pages like this:</li>
           </ul>
           <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left md:pl-12 pl-2 py-8 text-cyan-500 md:h-[320px] h-[380px] rounded-lg md:w-[50%] w-[85%] md:ml-[5%]'>
            <code>{`import Header from '../components/Header';`}</code><br />
            <code>{`export default function Home() {`}</code><br />
            <code>{` return (`}</code><br />
            <code>{`<div>`}</code><br />
            <code>{`<Header />`}</code><br />
            <code>  {`<h1>Welcome to my Next.js App!</h1>`}</code><br />
            <code>{`  </div>`}</code><br />
            <code> {` );`}</code><br />
            <code>{`}`}</code>
            </div>
            <h3 className='text-xl text-left font-semibold font-serif py-4 md:px-9 px-3'>9. Using Environment Variables</h3>
            <ul className='md:px-9 px-3'>
            <li className='pb-2 list-disc text-md  md:mx-9 mx-3'>Create a <span className='bg-gray-400'>.env.local</span> file in the root directory for environment variables:</li>
            <div className='bg-black my-3 border-2 border-gray-500 sm:text-[1rem] hidden md:block sm:block md:text-lg text-left md:pl-12 pl-2 py-8 text-cyan-500 h-[80px] rounded-lg md:w-[70%] w-[70%] md:ml-[5%]'>
              <code>{`NEXT_PUBLIC_API_URL=https://api.example.com`}</code>
            </div>
            <li className='py-2 list-disc text-md  md:mx-9 mx-3'>Access these variables in your app using <span className='bg-gray-400'>process.env.NEXT_PUBLIC_API_URL</span>.</li>
            </ul>
            <h3 className='text-xl text-left font-semibold font-serif py-4 md:px-9 px-3'>10. Build and Deploy the Project</h3>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>When you are ready to deploy build the project:</p>
            <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left pl-12 py-8 text-cyan-500 md:h-[80px] h-[120px] rounded-lg w-[50%] md:ml-[5%]'>
              <code>npm run build</code>
            </div>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Start the production server:</p>
            <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left pl-12 py-8 text-cyan-500 md:h-[80px] h-[120px] rounded-lg w-[50%] md:ml-[5%]'>
              <code>npm start</code>
            </div>
            <p className='py-4  text-[16px] text-justify md:px-9 px-3'>Or deploy to Vercel, which integrates seamlessly with Next.js.</p>
            <div className='bg-black my-3 border-2 border-gray-500 text-lg text-left pl-12 py-8 text-cyan-500 md:h-[80px] h-[120px] rounded-lg w-[50%] md:ml-[5%]'>
              <code>vercel</code>
            </div>
    </div>
    </div>
  )
}

export default page