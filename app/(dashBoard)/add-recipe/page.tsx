import AddRecipeForm from "@/components/dashboard_components/addRecipeForm";
import DashboardLayout from "@/components/dashboard_components/dashboardLayout";

export default function AddRecipe() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <div id="cards-container" className="w-full flex items-center justify-center">
          <AddRecipeForm />
          </div>
      </DashboardLayout>
    </main>
  );
}
