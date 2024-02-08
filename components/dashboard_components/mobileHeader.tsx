//MobileHeader.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PiBoundingBoxThin } from "react-icons/pi";
import React from "react";
import { MobileNavList } from "./mobileNavList";

const MobileHeader: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setOverlayVisible(!isOverlayVisible);
  };

  useEffect(() => {
    // Close the menu and overlay when the component mounts
    return () => {
      setMenuOpen(false);
      setOverlayVisible(false);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setOverlayVisible(false);
  };

  return (
    <header className="fixed z-20 top-0 left-0 w-full justify-between bg-gray-100 p-4 flex flex-row lg:hidden 2xl:hidden">
      <div className="text-left justify-start text-xl md:text-xl lg:text-2xl font-bold not-italic">
        <Link href="/home" className="w-full flex flex-row gap-2">
          <div className="bg-green-500 text-white font-extrabold p-1 rounded">
            <PiBoundingBoxThin size={25} />
          </div>
          <span className="text-green-500 mt-2 -mr-2">
            <p className="text-primary">Recipe</p>
          </span>
          <p className="text-gray-600 mt-2">.com</p>
        </Link>
      </div>

      {isMenuOpen && isOverlayVisible && (
        // Display overlay to close the menu on small devices
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-10"
          onClick={closeMenu}
        />
      )}

      <div>
        {/* menu list on small devices */}
        <MobileNavList isMenuOpen={isMenuOpen} />

        {/* Toggle menu icon on small devices */}
        <button onClick={toggleMenu} className=" text-green-500 font-bold">
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;
