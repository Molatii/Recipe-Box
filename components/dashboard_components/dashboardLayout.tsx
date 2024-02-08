// components/DashboardLayout.tsx
"use client";

import React from "react";
import Sidebar from "./sidebar";
import { childrenProps } from "@/utils/types";
import TopHeader from "./topHeader";
import MobileHeader from "./mobileHeader";

const DashboardLayout: React.FC<childrenProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex  bg-white">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full lg:w-[82%] 2xl:w[82%] lg:ml-[18%] 2xl:ml-[18%] ml-0 flex flex-col">
        {/* Header components */}
        <TopHeader />
        <MobileHeader />

        {/* Main Content */}
        <main className="w-full flex flex-col p-4 pr-8 pl-8 mt-[100px] bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
