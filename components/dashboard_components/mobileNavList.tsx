import { MenuListDataType } from "@/utils/types";
import Link from "next/link";
import { BiFoodMenu, BiSolidCategoryAlt, BiSolidUserRectangle } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { LiaSignInAltSolid } from "react-icons/lia";
import { RiAddBoxFill } from "react-icons/ri";
import { TbClover } from "react-icons/tb";
import SearchBar from "./searchBar";
import { usePathname } from "next/navigation";

export const MobileNavList = ({ isMenuOpen }: MenuListDataType) => {
  const pathname = usePathname();
  return (
    <div>
      {isMenuOpen === true && (
        <div className="absolute justify-end top-[71px] right-6 w-60 bg-slate-300 text-gray-600 p-4 z-20">
          <SearchBar />
          <div className="text-lg text-left mt-2 mb-2 not-italic font-bold">
            <Link
              href="/home"
              className={`inline-flex gap-4 hover:text-green-500${
                pathname === "/home" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <GoHomeFill size="25" />
              <p>Home</p>
            </Link>
          </div>
          <div className="text-lg text-left mb-2 not-italic font-bold">
            <Link
              href="/new-recipe"
              className={`inline-flex gap-4 hover:text-green-500${
                pathname === "/new-recipe" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <BiFoodMenu size="25" />
              <p>New</p>
            </Link>
          </div>
          <div className="text-lg text-left mb-2 not-italic font-bold">
            <Link
              href="/popular"
              className={`inline-flex gap-4 hover:text-green-500${
                pathname === "/popular" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <TbClover size="25" />
              <p>Popular</p>
            </Link>
          </div>
          <div className="text-lg text-left mb-2 not-italic font-bold">
            <Link
              href="/categories"
              className={`inline-flex gap-4 hover:text-green-500${
                pathname === "/categories" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <BiSolidCategoryAlt size="25" />
              <p>Categories</p>
            </Link>
          </div>
          <div className="text-lg text-left mb-2 not-italic font-bold">
            <Link
              href="/add-recipe"
              className={`inline-flex gap-4 hover:text-green-500${
                pathname === "/add-recipe" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <RiAddBoxFill size="25" />
              <p>Add Recipe</p>
            </Link>
          </div>
          <div className="text-lg text-left mb-2 not-italic font-bold">
            <Link
              href="/profile"
              className={`inline-flex gap-4 hover:text-green-500 ${
                pathname === "/profile" ? "text-green-500" : " text-gray-600"
              }`}
            >
              <BiSolidUserRectangle size="25" />
              <p>Profile</p>
            </Link>
          </div>

          <Link href="/sign-in">
            <button
              className="w-full justify-center gap-2 flex flex-row text-center px-4 py-2 
              rounded bg-white text-green-500 font-semibold hover:bg-green-500 hover:text-white"
            >
              <p>Sign Out</p>
              <LiaSignInAltSolid size={24} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
