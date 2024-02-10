import DashboardLayout from "@/components/dashboard_components/dashboardLayout";
import RecipesPagination from "@/components/pagination/recipesPagination";
import { RecipesData } from "@/utils/UI_Data";

export default function Home() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <RecipesPagination RecipesData={RecipesData} />
      </DashboardLayout>
    </main>
  );
}
