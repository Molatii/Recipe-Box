import { Recipes } from "@/components/cards/recipes";
import DashboardLayout from "@/components/dashboard_components/dashboardLayout";
import { RecipesData } from "@/utils/UI_Data";

export default function Popular() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <div
          id="cards-container"
          className="w-full flex flex-wrap gap-5 ml-0 sm:ml-2"
        >
          {RecipesData.map((recipe) => (
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
      </DashboardLayout>
    </main>
  );
}
