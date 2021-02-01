import React, { useState } from "react";
import NavigationItems from "./navigationItems";
import logo from "../images/kastanjalogo.jpg";

// markup
const Header = () => {
  const [isExpanded, toggleExpansion] = useState(false);
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between flex-wrap bg-white pt-6 border-b border-black relative">
        <div className="flex items-center flex-1 lg:flex-shrink-0 text-white mr-6">
          <img
            className="pl-4 w-64 md:w-max md:max-w-sm"
            src={logo}
            alt="Kastanja"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={() => toggleExpansion(!isExpanded)}
            className="mr-4 lg:relative flex items-center px-3 py-2 border rounded"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div>
          <NavigationItems open={isExpanded} />
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
