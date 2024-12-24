import { CalendlyButton } from "./CalendlyButton";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white max-w-4xl">
        Transform Your Business With{" "}
        <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-transparent bg-clip-text">
          High-Converting Copy
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
        Partner with Spark Chamber to create compelling content that drives results
        and grows your revenue
      </p>
      <div className="w-full max-w-4xl aspect-video mb-8 bg-gray-800 rounded-lg overflow-hidden">
        <video 
          className="w-full h-full object-cover"
          controls
          preload="metadata"
        >
          <source src="https://drive.google.com/uc?export=download&id=1LUDKX4FS_bHzUs_-IpSdaKMkgQsD9gnn" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <CalendlyButton className="bg-gradient-to-r from-red-600 via-yellow-500 to-orange-500 hover:opacity-90 text-white px-8 py-6 text-lg rounded-md animate-float" />
    </section>
  );
};