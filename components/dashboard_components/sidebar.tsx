//Sidebar.tsx
"use client";

import Link from "next/link";
import React from "react";
import { SocialIconProps } from "@/utils/types";
import { RiAddBoxFill } from "react-icons/ri";
import { PiBoundingBoxThin } from "react-icons/pi";
import { GoHomeFill } from "react-icons/go";
import { BiFoodMenu, BiSolidCategoryAlt, BiSolidUserRectangle,  } from "react-icons/bi";
import { TbClover } from "react-icons/tb";
import { usePathname } from "next/navigation";


const Sidebar: React.FC = () => {
  return (
    <div className="hidden min-h-screen fixed lg:flex 2xl:flex flex-col top-0 left-0 m-0 h-screen
     w-[18%] bg-slate-600 text-white shadow-lg">
      <div className="w-full py-[18px] p-4">
        <Link
          href="/home"
          className="w-full flex flex-row gap-2 self-center text-xl font-semibold whitespace-nowrap text-white"
        >
          <div className="bg-green-500 text-white font-extrabold p-1 rounded">
            <PiBoundingBoxThin size={30} />
          </div>
          <span className="text-green-500 mt-2 -mr-2">
            <p className="text-primary">Recipe</p>
          </span>
          <p className="text-white mt-2 ">.com</p>
        </Link>
      </div>

      <div className="w-full flex-col p-4  mt-6">
        <SidebarIcon
          href="/home"
          icon={<GoHomeFill size="28" />}
          label={"Home"}
        />
        <SidebarIcon
          href="/new-recipe"
          icon={<BiFoodMenu size="28" />}
          label={"New"}
        />
        <SidebarIcon
          href="/popular"
          icon={<TbClover size="28" />}
          label={"Popular"}
        />
        <SidebarIcon
          href="/categories"
          icon={<BiSolidCategoryAlt size="28" />}
          label={"Categories"}
        />
        <SidebarIcon
          href="/add-recipe"
          icon={<RiAddBoxFill size="28" />}
          label={"Add Recipe"}
        />
      </div>
      <hr className="w-[80%] border-slate-500 ml-4 pr-4 mt-[10%]" />
      <div className="w-full flex-col p-4  mt-[20%]">
        <SidebarIcon
          href="/profile"
          icon={<BiSolidUserRectangle size="28" />}
          label={"User Profile"}
        />
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, label, href }: SocialIconProps) => {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <div
        id="icon"
        className={`h-12 mb-5 mx-auto  text-white shadow-lg
        translate-all duration-300 hover:bg-green-500 hover:text-white
    ${
      pathname === href
        ? "bg-green-500 rounded-2xl"
        : "rounded bg-slate-500"
    }
    `}
      >
        <div className="m-1 inline-flex p-2 gap-2">
          <p className="font-bold">{icon}</p>
          <p className="font-medium md:text-base lg:text-lg text-lg truncate">
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Sidebar;
