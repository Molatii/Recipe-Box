import DashboardLayout from "@/components/dashboard_components/dashboardLayout";
import Image from "next/image";
import userIcon from "../../../public/user_icon.jpg";
import UserRecipesList from "@/components/dashboard_components/userRecipesList";
import { RecipesData } from "@/utils/UI_Data";

export default function UserProfile() {
  return (
    <main className="w-full">
      <DashboardLayout>
        <div
          id="profile-container"
          className="w-full items-center flex flex-col ml-0 sm:ml-2"
        >
          <div
            id="profile"
            className="w-full lg:w-10/12 grid sm:grid-cols-2 grid-cols-1 gap-0 sm:gap-8 bg-white rounded shadow-lg shadow-slate-300 mb-20"
          >
            <div className="w-full  sm:items-center flex flex-col p-4">
              <Image
                className="rounded-lg border-none"
                src={userIcon}
                width={150}
                height={20}
                alt="user-image"
              />
            </div>
            <div className="w-full flex flex-col p-4 gap-2 text-gray-600 font-medium not-italic text-md">
              <p>Paballo Molati</p>
              <p>molatipaballo@gmail.com</p>
              <p>Lesotho</p>
              <p>Passionate cook</p>
            </div>
          </div>

          <UserRecipesList RecipesData={RecipesData} />
        </div>
      </DashboardLayout>
    </main>
  );
}
