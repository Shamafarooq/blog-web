import nextVersions from "./nextversion"
import VersionCard from "./versioncard";

const Timeline = () => {
  return (
    <>
      <h1 className="md:text-[45px] sm:text[40px] font-serif text-center md:my-8 sm:mx-4 font-bold">Next.js Version Timeline</h1>
    <div className="lg:p-6 p-4 space-y-6 space-x-6 grid-cols-1 grid md:grid-cols-3 sm:grid-cols-2 lg:space-x-6 ">
    
      {nextVersions.map((versionData, index) => (
        <VersionCard
          key={index}
          version={versionData.version}
          releaseDate={versionData.releaseDate}
          features={versionData.features}
          imagePath={versionData.imagePath}
          src={versionData.src}
        />
      ))}
    </div>
    </>
  );
};

export default Timeline;