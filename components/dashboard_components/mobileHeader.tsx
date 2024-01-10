//MobileHeader.tsx
import React from "react";
import { FaBars } from "react-icons/fa";


const MobileHeader: React.FC= () => {
  return (
    <header className="bg-gray-800 p-3 flex lg:hidden 2xl:hidden">
      <button className="text-gray-400 focus:outline-none focus:text-gray-300">
        <FaBars />
      </button>
      <p>mobileHeader</p>
    </header>
  );
};

export default MobileHeader;
