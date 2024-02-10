"use client";
import { useState } from "react";

import { CategoriesCard } from "@/components/cards/categoriesCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CategoryListProps } from "@/utils/types";

interface categoryDataProps {
  categoryData: CategoryListProps[];
}

const ITEMS_PER_PAGE = 8;

export default function CategoriesPagination({ categoryData }: categoryDataProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentCategoryData = categoryData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(categoryData.length / ITEMS_PER_PAGE);

  return (
    <>
      <div
        id="category-cards"
        className="w-full flex flex-wrap gap-5 ml-0 sm:ml-2"
      >
        {currentCategoryData.map((category) => (
          <CategoriesCard
            categoryId={category.categoryId}
            categoryImage={category.categoryImage}
            categoryName={category.categoryName}
            key={category.categoryId}
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
