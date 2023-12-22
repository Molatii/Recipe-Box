"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavigationList } from "@/utils/UI_Data";
import { PiBoundingBoxThin } from "react-icons/pi";
import { MdTabUnselected } from "react-icons/md";
import { LiaSignInAltSolid } from "react-icons/lia";

export default function Header() {
  const NavList = NavigationList;
  const [selectedNav, setSelectedNav] = useState("Home");
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
    <header
      className="flex flex-row w-full h-20 fixed z-20 top-0 left-0 justify-between items-center 
      p-4 lg:pl-20 lg:pr-20 bg-gray-100"
    >
      <div className="text-left justify-start w-1/5 text-xl md:text-xl lg:text-2xl font-bold not-italic">
        <Link href="/" className="w-full flex flex-row gap-2">
          <div className="bg-green-500 text-white font-extrabold p-1 rounded">
            <PiBoundingBoxThin size={30} />
          </div>
          <span className="text-green-500 mt-2">
            <p className="text-primary">Recipe</p>
          </span>
          <p className="text-gray-600 mt-2">Box</p>
        </Link>
      </div>

      {isMenuOpen && isOverlayVisible && (
        // Display overlay to close the menu on small devices
        <div
          className="fixed top-0 left-0 w-full h-full bg-transparent z-10"
          onClick={closeMenu}
        />
      )}

      {isMenuOpen ? (
        // Display menu on small devices
        <div className="absolute top-20 justify-center left-0 w-full bg-slate-300 text-gray-600 p-4 z-20">
          {NavList.map((NavData) => (
            <p
              key={NavData.address}
              className="text-lg text-center mb-8 not-italic font-bold"
              style={{
                color:
                  NavData.name === selectedNav
                    ? "#32cd32"
                    : "var(--light-color-base-primary-dark, #)",
              }}
            >
              <Link
                href={NavData.address}
                onClick={() => setSelectedNav(NavData.name)}
                className="inline-flex gap-2 hover:text-green-500"
              >
                {NavData.name}
                <MdTabUnselected />
              </Link>
            </p>
          ))}
          <button
            className="w-full justify-center gap-2 flex flex-row text-center px-4 py-2 
          rounded-full bg-white text-green-500 font-semibold hover:bg-green-500 hover:text-white"
          >
            <p>Sign In</p>
            <LiaSignInAltSolid size={24} />
          </button>
        </div>
      ) : (
        // Display big screen list on larger devices
        <div className="flex-none flex-row w-3/5 gap-6 justify-center hidden sm:flex text-gray-600">
          {NavList.map((NavData) => (
            <p
              key={NavData.address}
              className="lg:text-xl text-base not-italic font-normal"
              style={{
                color:
                  NavData.name === selectedNav
                    ? "#32cd32"
                    : "var(--light-color-base-primary-dark, #)",

                borderBottom: NavData.name === selectedNav ? "solid" : "none",
                borderBottomColor:
                  NavData.name === selectedNav ? "#32cd32" : "transparent",
              }}
            >
              <Link
                href={NavData.address}
                onClick={() => setSelectedNav(NavData.name)}
                className="hover:text-green-500"
              >
                {NavData.name}
              </Link>
            </p>
          ))}
        </div>
      )}

      <div className="w-1/5 flex flex-row gap-4 justify-end items-center">
        {/* Toggle menu icon on small devices */}
        <button
          onClick={toggleMenu}
          className="sm:hidden text-green-500 font-bold"
        >
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

        {/* Display SingIn button on larger devices */}
        <button
          className="w-40 justify-center gap-2 lg:flex md:flex flex-row bg-white text-green-500 font-semibold hover:bg-green-500 
          hover:text-white px-3 py-2 rounded-full hidden sm:block"
        >
          <p>Sign In</p>
          <LiaSignInAltSolid size={24} className="hidden lg:block" />
        </button>
      </div>
    </header>
  );
}
