import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../css/index.css";


const Layout = ({ title, children }) => {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-black">
        <div className="container mx-auto">
        <h2 className="text-white text-center mb-0 py-4">{title}</h2>
        </div>
      </div>
      <div className="container mx-auto flex-grow bg-white pt-12 px-4">{children}</div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
