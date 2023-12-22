"use client";

import { TbCategoryFilled } from "react-icons/tb";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import { CategoriesCard } from "../cards/categoriesCard";
import { categoryData } from "@/utils/UI_Data";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Categories() {
  //slider controllers
  const slideLeft1 = () => {
    var slider = document.getElementById("slider-2") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft - 550;
    }
  };

  const slideRight2 = () => {
    var slider = document.getElementById("slider-2") as HTMLElement | null;
    if (slider) {
      slider.scrollLeft = slider.scrollLeft + 550;
    }
  };
  return (
    <div className="w-full flex-col sm:py-8 pb-10 lg:pb-12 md:pb-8 py-2 p-4 lg:pl-20 lg:pr-20 mt-10">
      <div className="flex justify-between">
        <div className="inline-flex gap-2">
          <p className="text-left mb-8 text-green-500 sm:text-2xl text-xl font-bold drop-shadow-md">
            Categories
          </p>
          <p className="text-gray-600 sm:text-2xl text-xl mt-1 font-bold drop-shadow-md">
            <TbCategoryFilled />
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
          <FaRegArrowAltCircleLeft onClick={slideLeft1} />
        </p>
        <div
          id="slider-2"
          className="h-full lg:p-1 p-0 flex flex-row gap-3 scroll overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {categoryData.map((category) => (
            <CategoriesCard
              categoryId={category.categoryId}
              categoryImage={category.categoryImage}
              categoryName={category.categoryName}
              key={category.categoryId}
            />
          ))}
        </div>
        <p className="text-green-500 text-2xl ml-1 cursor-pointer hidden sm:block">
          <FaRegArrowAltCircleRight onClick={slideRight2} />
        </p>
      </div>
    </div>
  );
}
