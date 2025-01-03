import Image from "next/image";
type Propstype = {
    version:string
    releaseDate:string;
    features:string;
    imagePath:string;
    src:string
}
const VersionCard:React.FC<Propstype> = ({ version , releaseDate, features , imagePath,src}) => {
    return (
      <div className="border p-4 lg:w-[350px] w-[280px] lg:h-[520px] h-[460px] border-slate-500 rounded-lg shadow-md space-y-3 md:space-y-4">
        <h2 className="text-xl font-bold">{version}</h2>
        {imagePath ? (
          <Image src={imagePath} alt={`${version} image`} width={350} height={300} className="rounded md:w-[400px] w-[300px] border-2 border-white sm:h-[200px] md:h-[250px]" />
        ) : (
          <p className="text-red-500">Image not found</p>
        )}
        <p className="text-gray-400">Released: {releaseDate}</p>
        {Array.isArray(features) && features.length > 0 ? (
          <ul className="list-disc ml-5 mt-2">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No features available</p>
        )}
        <button>{src}</button>
      </div>
    );
  };
  
  export default VersionCard;