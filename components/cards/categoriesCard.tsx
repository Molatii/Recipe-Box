import { CategoryListProps } from "@/utils/types";
import Link from "next/link";

export const CategoriesCard = ({
    categoryId,
    categoryImage,
    categoryName,
}: CategoryListProps) => {
  //show max of 1 line
  const categoryTitle = categoryName.split("\n").slice(0, 2).join("\n");
  
  return (
    <div
      id={categoryId}
      className="flex flex-col sm:h-[270px] h-[160px] w-[240px] sm:w-[260px] mb-4 sm:mb-2 ml-2 sm:mr-1 mr-2
        rounded-lg shadow-md shadow-slate-500 cursor-pointer"
    >
      <Link href={`/categories/${categoryName}`}>
      <div
        id="img"
        className="border-none bg-cover bg-center sm:w-[260px] w-[240px] sm:h-[205px] h-[115px] rounded-tr rounded-tl"
        style={{
          backgroundImage: `url(${categoryImage})`,
        }}
      />
      <div className="content p-4 pb-0 ">
        <p className="text-center capitalize text-gray-600 font-bold line-clamp-2 sm:text-lg text-sm mb-2">
          {categoryTitle}
        </p>
        </div>
        </Link>
    </div>
  );
};
