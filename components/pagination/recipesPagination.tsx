"use client";
import { useState } from "react";
import { Recipes } from "@/components/cards/recipes";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { RecipeListProps } from "@/utils/types";

interface RecipesProps {
  RecipesData: RecipeListProps[];
}

const ITEMS_PER_PAGE = 8;

export default function RecipesPagination({ RecipesData }: RecipesProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentRecipes = RecipesData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(RecipesData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div
        id="cards-container"
        className="w-full flex flex-wrap gap-5 ml-0 sm:ml-2"
      >
        {currentRecipes.map((recipe: any) => (
          <Recipes
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

      <div
        id="pagination-controls"
        className="w-full flex justify-center items-center gap-4 mt-8 mb-4"
      >
        {currentPage > 1 && (
          <BsChevronLeft
            onClick={() => paginate(currentPage - 1)}
            className="cursor-pointer text-green-500 text-2xl"
          />
        )}

        <span className="text-green-500 text-xl font-bold">
          Page {currentPage} of {totalPages}
        </span>

        {currentPage < totalPages && (
          <BsChevronRight
            onClick={() => paginate(currentPage + 1)}
            className="cursor-pointer text-green-500 text-2xl"
          />
        )}
      </div>
    </>
  );
}
