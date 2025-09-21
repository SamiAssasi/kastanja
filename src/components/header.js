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

        <div>
          <div></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
