"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/Icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  // Function to navigate to the description page
  const goToDescription = () => {
    router.push("/description");
  };

  return (
    <div className="w-full py-4 flex items-center justify-between">
      {/* Left side - Logo and Description navigation */}
      <div className="left flex gap-4 items-center">
        <button
          onClick={() => router.push("/")}
          className="text-lg font-bold text-green-300"
        >
          WeatherGo
        </button>
        <button
          onClick={goToDescription}
          className="text-lg text-white hover:underline"
        >
          About
        </button>
      </div>

      {/* Search and theme options */}
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
