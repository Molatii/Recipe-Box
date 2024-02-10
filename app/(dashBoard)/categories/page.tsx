import DashboardLayout from "@/components/dashboard_components/dashboardLayout";
import CategoriesPagination from "@/components/pagination/categoriesPagination";
import { categoryData } from "@/utils/UI_Data";

export default function Categories() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <CategoriesPagination categoryData={categoryData} />
      </DashboardLayout>
    </main>
  );
}
