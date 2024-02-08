import { CategoriesCard } from "@/components/cards/categoriesCard";
import DashboardLayout from "@/components/dashboard_components/dashboardLayout";
import { categoryData } from "@/utils/UI_Data";

export default function Categories() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <div
          id="category-cards"
          className="w-full flex flex-wrap gap-5 ml-0 sm:ml-2"
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
      </DashboardLayout>
    </main>
  );
}
