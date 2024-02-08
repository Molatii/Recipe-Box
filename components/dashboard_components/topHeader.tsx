//MobileHeader.tsx
import React from "react";
import SearchBar from "./searchBar";
import { RiLogoutCircleRLine } from "react-icons/ri";
import Link from "next/link";

const TopHeader: React.FC = () => {
  return (
    <header
      className="ml-[18%] lg:w-[82%] 2xl:w[82%] hidden fixed z-20 top-0 left-0 lg:flex 2xl:flex 
    justify-between flex-row bg-gray-100 pr-8 pl-8 p-4"
    >
      <div className="w-[35%]">
        <SearchBar />
      </div>
      <div className="inline-flex">
        <Link
          href="/sign-in"
          className="bg-slate-500 hover:bg-red-500 hover:shadow-red-500 text-lg font-semibold
            not-italic shadow-md shadow-slate-500 p-2
             rounded text-white"
        >
         <p> <RiLogoutCircleRLine size="28" /> </p>
        </Link>
      </div>
    </header>
  );
};

export default TopHeader;
