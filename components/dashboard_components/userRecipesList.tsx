"use client";

import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Recipes } from "../cards/recipes";
import { useState } from "react";
import { TbFreeRights } from "react-icons/tb";
import { ImFileEmpty } from "react-icons/im";
import { RecipeListProps } from "@/utils/types";
import RecipesPagination from "../pagination/recipesPagination";

interface RecipesProps {
  RecipesData: RecipeListProps[];
}

const UserRecipesList = ({RecipesData }: RecipesProps) => {
  const [recipeType, setRecipeType] = useState("free");
  const free = "free";
  const pre = "premium";

  return (
    <>
      <div
        id="control-buttons"
        className="flex flex-row mb-4 pl-0 p-4 w-full items-center justify-center"
      >
        <div
          onClick={() => setRecipeType("free")}
          className="flex justify-center cursor-pointer flex-row w-[50%] text-slate-600 hover:text-green-500"
          style={{
            color: recipeType === free ? "#32cd32" : "",
          }}
        >
          <TbFreeRights size={20} />
          <p className="ml-2 font-semibold text-sm">Free Recipes</p>
        </div>
        <div
          onClick={() => setRecipeType("premium")}
          className="flex justify-center cursor-pointer flex-row w-[50%] text-slate-600 hover:text-green-500"
          style={{
            color: recipeType === pre ? "#32cd32" : "",
          }}
        >
          <MdOutlineWorkspacePremium size={20} />
          <p className="ml-2 font-semibold text-sm">Premium Recipes</p>
        </div>
      </div>

      <div id="recipes" className="w-full">
        {recipeType === "free" && (
          <>
            {RecipesData.length ? (
              <RecipesPagination RecipesData={RecipesData} />
            ) : (
              <div className="w-full justify-center text-center">
                <div className="p-4 pt-8 pb-8  text-slate-600 items-center flex flex-col">
                  <ImFileEmpty size={40} />
                  <p className="pd-1 font-medium">List Empty</p>
                </div>
              </div>
            )}
          </>
        )}

        {recipeType === "premium" && (
          <div className="w-full justify-center text-center">
            <div className="p-4 pt-8 pb-8  text-slate-600 items-center flex flex-col">
              <ImFileEmpty size={40} />
              <p className="pd-1 font-medium">List Empty</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserRecipesList;
