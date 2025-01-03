import React from 'react';
import Image from 'next/image';
import Comments from '@/components/comment';

const Page = () => {
  return (
    <div className="px-2 md:px-8 py-8 rounded-lg border border-slate-300 max-w-5xl mx-auto">
      {/* Image Section */}
      <Image
        src="/images/11.jpg"
        alt="setup"
        width={400}
        height={400}
        className="w-full md:h-[550px] sm:h-[350px] h-auto rounded-lg border border-slate-300"
      />

      {/* Content Section */}
      <div className="px-3 md:px-8 py-8 rounded-lg">
        {/* Title and Subtitle */}
        <h1 className="py-4 text-[45px] text-center font-serif font-bold">Next.JS 11</h1>
        <h3 className="pb-4 text-xl font-medium text-center font-serif">
          Eleventh Version of Next.js
        </h3>

        {/* Description */}
        <p className="py-4 text-[16px] text-justify px-3 md:px-12">
          Next.js 11, released in <b>June 2021</b>, focused on improving the
          <b> developer experience, performance</b>, and introducing new tools for
          modern web development. Below is a detailed breakdown of its major features and
          enhancements.
        </p>

        {/* Features Section */}
        <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">
          Key Features of Next.js 11
        </h3>

        <FeatureList />
        <Challenges />
        <HistoricalImportance />

        {/* Comments Section */}
        <Comments />
      </div>
    </div>
  );
};

/* Feature List Component */
const FeatureList = () => (
  <ul className="px-3 md:px-12">
    <Feature
      number="1"
      title="Conformance with ESLint"
      description={[
        "Built-in ESLint support for consistent code quality and project conformance.",
        "Automatic detection and setup of ESLint configuration when creating a Next.js app.",
      ]}
      example="npx create-next-app@latest my-app"
    />
    <Feature
      number="2"
      title="Real-Time Collaborative Editing"
      description={[
        "Live Share powered by Visual Studio Code.",
        "Enhanced for pair programming and debugging.",
      ]}
    />
    <Feature
      number="3"
      title="Next.js Script Component"
      description={[
        "Optimized loading for performance by reducing render-blocking scripts.",
        "Supports different strategies: `beforeInteractive`, `afterInteractive`, `lazyOnload`.",
      ]}
      example={`<Script src="https://example.com/script.js" strategy="lazyOnload" />`}
    />
    {/* Add other features here */}
  </ul>
);

/* Feature Component */
const Feature = ({
  number,
  title,
  description,
  example,
}: {
  number: string;
  title: string;
  description: string[];
  example?: string;
}) => (
  <li>
    <h4 className="pb-4 list-decimal text-lg font-semibold text-left font-serif">
      {number}. {title}
    </h4>
    {description.map((desc, idx) => (
      <p key={idx} className="pb-2 list-disc text-md mx-3 md:mx-9">
        {desc}
      </p>
    ))}
    {example && (
      <div className="bg-black text-lg text-left px-3 md:px-8 py-7 text-cyan-500 rounded-lg w-[90%] mx-auto">
        <code>{example}</code>
      </div>
    )}
  </li>
);

/* Challenges Section */
const Challenges = () => (
  <div>
    <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">
      Challenges in Next.js 11
    </h3>
    <ul className="px-3 md:px-12">
      <li className="pb-2 list-disc text-md mx-3 md:mx-9">
        Limited SEO tools compared to newer versions.
      </li>
      <li className="pb-2 list-disc text-md mx-3 md:mx-9">
        Ecosystem integrations were still evolving.
      </li>
    </ul>
  </div>
);

/* Historical Importance Section */
const HistoricalImportance = () => (
  <div>
    <h3 className="pb-4 text-[25px] px-3 md:px-12 font-bold text-left font-serif">
      Historical Importance
    </h3>
    <p className="py-4 text-[16px] text-justify px-3 md:px-12">
      Next.js 11 laid the groundwork for modern frameworks, introducing crucial
      features that enhanced performance, accessibility, and scalability. For
      modern development, consider using the latest version to access even more
      robust tools and features.
    </p>
  </div>
);

export default Page;
