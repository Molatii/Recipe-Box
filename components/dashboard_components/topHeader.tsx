//MobileHeader.tsx
import React from "react";
import SearchBar from "./searchBar";

const TopHeader: React.FC = () => {
  return (
    <header className="hidden lg:flex 2xl:flex flex-row bg-gray-100 p-4">
      <div><SearchBar /></div>
      <div><p>notice, Profile</p></div>
    </header>
  );
};

export default TopHeader;
