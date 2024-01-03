import Image from "next/image";
import { FaBuildingUser } from "react-icons/fa6";

export default function AboutComponent() {
  return (
    <div className="w-full flex flex-col text-center mb-4 pt-0 p-4 pb-12 lg:pl-20 lg:pr-20">
      <div
        className="w-full h-[310px] relative mb-8"
        style={{
          backgroundImage: "url('/b.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex flex-col">
        <div className="inline-flex justify-center pt-4 gap-2">
          <p className="text-center mb-8 text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">About </span>Us
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl mt-1 font-bold drop-shadow-md">
            <FaBuildingUser />
          </p>
        </div>
      </div>
      <div id="main" className="flex justify-center  text-center">
        <p className="text-gray-600 sm:w-[60%] w-full text-base text-center">
          Welcome to RecipeBox, where passion for food meets a community of
          culinary enthusiasts! Our platform is dedicated to providing a space
          for food lovers to share, discover, and connect through the art of
          cooking.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1  gap-4">
        <div className="flex  items-center">
          <Image
            src="/tm.avif"
            alt="Image 1"
            width={55}
            height={55}
            priority
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center text-green-500 text-xl font-semibold mb-4">
            Our Mission
          </p>
          <p className="text-gray-600 text-base">
            At RecipeBox, our mission is to inspire and empower individuals to
            explore the world of cooking, whether you're a seasoned chef or a
            beginner in the kitchen. We believe in the power of food to bring
            people together, create memories, and share joy.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center text-green-500 text-xl font-semibold mb-4">
            What We Offer
          </p>
          <ul className="text-left gap-2">
            <li>
              <span className="font-semibold">Recipe Sharing: </span> RecipeBox
              is your go-to platform for sharing your favorite recipes with the
              world. Whether it's a cherished family secret or a creative twist
              on a classic, we invite you to showcase your culinary creations.
            </li>
            <br />
            <li>
              <span className="font-semibold">Community Engagement: </span>Join
              a community of fellow food enthusiasts! Connect with like-minded
              individuals, exchange cooking tips, and discover new recipes that
              tantalize your taste buds.
            </li>
            <br />
            <li>
              <span className="font-semibold">Variety of Categories: </span>From
              breakfast delights to African Cuisine recipes and decadent
              desserts, RecipeBox caters to a wide range of tastes and
              preferences. Explore our diverse categories to find recipes that
              match your culinary interests.
            </li>
          </ul>
        </div>
        <div className="flex items-center">
          <Image
            src="/t.svg"
            alt="Image 1"
            width={55}
            height={55}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
