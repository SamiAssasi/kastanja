import * as React from "react";
import { Link } from "gatsby";

// markup
const navigationItem = ({ title, slug }) => {
  return (
    <Link to={slug} activeClassName="font-bold">
      <div
        className="block mt-4 lg:inline-block lg:mt-0 mr-8 hover:text-gray-500"
      >
        {title}
      </div>
    </Link>
  );
};

export default navigationItem;
