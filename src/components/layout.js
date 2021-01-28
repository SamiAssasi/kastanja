import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/index.css";

export default ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto flex-grow bg-white pt-12 px-4">{children}</div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};
