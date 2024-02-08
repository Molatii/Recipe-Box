"use client";

import Image from "next/image";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { RecipeListProps } from "@/utils/types";
import Link from "next/link";

export const Recipes = ({
  recipeId,
  recipeImg,
  category,
  title,
  accessType,
  likes,
  authorId,
  authorImage,
  authorName,
  authorStatus,
}: RecipeListProps) => {
  //show max of 1 line
  const recipeTitle = title.split("\n").slice(0, 1).join("\n");
  const recipeCategory = category.split("\n").slice(0, 1).join("\n");

  const [isLiked, setIsLiked] = useState(false);

  const justLiked = () => {
    //set recipe is liked in DB
    setIsLiked(!isLiked);
  };
  return (
    <div
      id={recipeId}
      className="flex flex-col h-auto w-[46%] lg:w-[23%] md:w-[31%] mb-4 sm:mb-2 rounded-lg shadow-md shadow-slate-500 cursor-pointer"
    >
      <Link href={`/recipeDetails/${recipeId}`} className="w-full">
        <div
          id="img"
          className="border-none bg-cover bg-center w-auto sm:h-[150px] h-[100px] rounded-tr rounded-tl"
          style={{
            backgroundImage: `url(${recipeImg})`,
          }}
        >
          <div id="category" className="p-3 w-full">
            <div className="bg-white w-[60%]  sm:w-[43%] justify-start p-2 h-7 rounded-lg">
              <p className="text-[8px] sm:text-[10px] text-green-500 line-clamp-1 font-bold capitalize text-left">
                {recipeCategory}
              </p>
            </div>
          </div>
        </div>
      </Link>
      <div className="content p-4 pb-0 w-full">
        <Link href={`/recipes/${recipeId}`} className="w-full">
          <p className="text-left capitalize text-gray-600 font-bold line-clamp-1 sm:text-lg text-sm mb-2">
            {recipeTitle}
          </p>
        </Link>
        <div className=" w-full flex flex-row justify-between">
          <p className="text-left capitalize text-green-500 sm:text-sm text-xs font-bold">
            {accessType}
          </p>
          {isLiked ? (
            <button
              onClick={justLiked}
              className="bg-white text-red-600 rounded flex gap-1"
            >
              <p className="text-xs text-gray-600 font-semibold">{likes}</p>
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={justLiked}
              className="bg-white flex gap-1 text-gray-600 rounded  hover:text-red-600"
            >
              <p className="text-xs text-gray-600 font-semibold">{likes}</p>
              <FaRegHeart />
            </button>
          )}
        </div>
      </div>
      <hr className="my-2" />

      <Link href={`/user/${authorId}`} className="w-full">
        <div id={authorId} className="flex flex-row pb-2">
          <Image
            className="rounded-full border-none ml-4"
            id={authorId}
            src={authorImage}
            width={40}
            height={20}
            alt="Author-image"
            priority
          />
          <div className="flex flex-col w-full">
            <p className="ml-3 leading-5 text-left text-xs font-bold not-italic text-[#343A40]">
              By {authorName}
            </p>
            <p className="text-xs ml-3 text-left leading-5 font-normal capitalize not-italic text-[#6C757D]">
              {authorStatus}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
