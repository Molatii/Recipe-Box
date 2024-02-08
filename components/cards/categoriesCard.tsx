import { CategoryListProps } from "@/utils/types";
import Link from "next/link";

export const CategoriesCard = ({
    categoryId,
    categoryImage,
    categoryName,
}: CategoryListProps) => {
  //show max of 1 line
  const categoryTitle = categoryName.split("\n").slice(0, 1).join("\n");
  
  return (
    <div
      id={categoryId}
      className="flex flex-col mb-4 sm:mb-2 ml-2 sm:mr-1 mr-2 h-auto w-[43%] lg:w-[21%] md:w-[20%]
        rounded-lg shadow-md shadow-slate-500 cursor-pointer"
    >
      <Link href={`/categories/${categoryName}`} className="w-full text-center">
        <div
          id="img"
          className="border-none bg-cover bg-center rounded-tr rounded-tl w-auto sm:h-[150px] h-[100px]"
          style={{
            backgroundImage: `url(${categoryImage})`,
          }}
        />
        <div className="flex p-4 pb-2">
          <p className="text-center w-[180px] capitalize text-gray-600 font-bold line-clamp-1 sm:text-lg text-sm mb-2">
            {categoryTitle}
          </p>
        </div>
      </Link>
    </div>
  );
};
