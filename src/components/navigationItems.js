import * as React from "react";
import NavigationItem from "./navigationItem";

// markup
const navigationItems = ({ open }) => {
  return (
    <div
      className={`${open ? `block` : `hidden`}
      bg-white shadow-xl w-full z-20 block lg:flex lg:items-center lg:w-auto absolute lg:relative top-full transition duration-500 ease-in-out p-4 pt-0 lg:p-0 lg:shadow-none lg:bg-transparent left-0`}
    >
      <NavigationItem title="Etusivu" slug="/" />
      <NavigationItem title="Galleria" slug="/galleria" />
      <NavigationItem title="Tuotesarjat" slug="/tuotesarjat" />
    </div>
  );
};

export default navigationItems;
