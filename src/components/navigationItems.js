import * as React from "react";
import NavigationItem from "./navigationItem";

// markup
const navigationItems = ({ open }) => {
  return (
    <div
      className={`${open ? `block` : `hidden`}
      block lg:flex text-xl lg:flex-grow`}
    >
      <NavigationItem title="Etusivu" slug="/" />
      <NavigationItem title="Galleria" slug="/galleria" />
      <NavigationItem title="Hinnasto" slug="/hinnasto" />
      <NavigationItem title="Tuotesarjat" slug="/tuotesarjat" />
    </div>
  );
};

export default navigationItems;
