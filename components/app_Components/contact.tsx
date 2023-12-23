import { GrContact } from "react-icons/gr";

export default function ContactUSComponent() {
  return (
    <div className="w-full flex flex-col text-center mb-4 pt-0 p-4 pb-12 lg:pl-20 lg:pr-20">
      <div
        className="w-full h-[310px] relative mb-8"
        style={{
          backgroundImage: "url('/c.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "auto",
        }}
      ></div>
      <div className="flex flex-col">
        <div className="inline-flex gap-2">
          <p className="text-left mb-8 text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">Contact </span>Us
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl mt-1 font-bold drop-shadow-md">
            <GrContact />
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-left text-gray-600 text-base">
          Welcome to RecipeBox, where passion for food meets a community of
          culinary enthusiasts! Our platform is dedicated to providing a space
          for food lovers to share, discover, and connect through the art of
          cooking.
        </p>
      </div>
    </div>
  );
}
