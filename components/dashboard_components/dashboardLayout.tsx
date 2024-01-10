// components/DashboardLayout.tsx
"use client";

import React from "react";
import Sidebar from "./sidebar";
import { childrenProps } from "@/utils/types";
import TopHeader from "./topHeader";
import MobileHeader from "./mobileHeader";

const DashboardLayout: React.FC<childrenProps> = ({ children }) => {

  return (
    <div className="w-full flex flex-row bg-white">
        {/* Sidebar */}
        <Sidebar />

      <div className="w-full lg:w-[85%] 2xl:w[85%] flex flex-col">
        {/* Header components */}
              <TopHeader />
              <MobileHeader />

        {/* Main Content */}
        <main className="flex p-4 mt-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
