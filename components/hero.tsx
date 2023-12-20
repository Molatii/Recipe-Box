import { PiShootingStarThin } from "react-icons/pi";

export default function HeroComponent() {
  return (
    <div
      className="w-full h-[310px] relative"
      style={{
        backgroundImage: "url('/hero_bg.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Dark gradient overlay to improve text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-700 opacity-50 z-10" />

      <div
        id="centered-content"
        className="flex  flex-col justify-center items-center mt-14 p-4 lg:pl-20 lg:pr-20 relative z-10"
      >
        <p className="text-center mb-6 text-3xl md:text-5xl lg:text-6xl not-italic text-white font-semibold ">
          Share your recipes with
          <br />
          the world & <span className="text-green-500">earn!</span>
        </p>
        <button
          className="w-60 justify-center gap-2 mt-4 inline-flex bg-white text-green-500 font-semibold hover:bg-green-500 
          hover:text-white p-3 rounded-full"
        >
          <PiShootingStarThin size={30} />
          <p className="text-lg font-semibold capitalize">get started</p>
          <PiShootingStarThin size={30} />
        </button>
      </div>
    </div>
  );
}
