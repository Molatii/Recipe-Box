"use client";

import { RecipeCard } from "../cards/recipeCard";
import { FaHandHoldingHeart } from "react-icons/fa";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { RecipesData } from "@/utils/UI_Data";

export default function PopularComponent() {
  //slider controllers
  const slideLeft = () => {
    var slider = document.getElementById("slider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 550;
    }
  };

  const slideRight = () => {
    var slider = document.getElementById("slider") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 550;
    }
  };

  return (
    <div className="w-full flex-col sm:py-8 pb-10 lg:pb-12 md:pb-8 py-2 p-4 lg:pl-20 lg:pr-20 mt-10">
      <div className="flex justify-between">
        <div className="inline-flex gap-2">
          <p className="text-left mb-8 text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <span className="text-green-500">Popular</span> recipes
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl font-bold drop-shadow-md">
            <FaHandHoldingHeart />
          </p>
        </div>
        <div className="inline-flex gap-1 sm:hidden ">
          <p className="text-green-500 sm:text-xl text-xl font-bold">Swipe</p>
          <p className="text-green-500 sm:text-xl text-2xl mt-1 font-bold">
            <MdArrowLeft />
          </p>
          <p className="text-green-500 sm:text-xl text-2xl mt-1 font-bold">
            <MdArrowRight />
          </p>
        </div>
      </div>

      <div className="w-full relative flex items-center">
        <p className="text-green-500 text-2xl mr-1 cursor-pointer hidden sm:block">
          <FaRegArrowAltCircleLeft onClick={slideLeft} />
        </p>
        <div
          id="slider"
          className="h-full lg:p-1 p-0 flex flex-row gap-3 scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {RecipesData.map((recipe) => (
            <RecipeCard
              recipeId={recipe.recipeId}
              recipeImg={recipe.recipeImg}
              category={recipe.category}
              title={recipe.title}
              accessType={recipe.accessType}
              likes={recipe.likes}
              authorId={recipe.authorId}
              authorImage={recipe.authorImage}
              authorName={recipe.authorName}
              authorStatus={recipe.authorStatus}
              key={recipe.recipeId}
            />
          ))}
        </div>
        <p className="text-green-500 text-2xl ml-1 cursor-pointer hidden sm:block">
          <FaRegArrowAltCircleRight onClick={slideRight} />
        </p>
      </div>
    </div>
  );
}
