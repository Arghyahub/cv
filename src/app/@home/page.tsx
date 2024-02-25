import React from "react";
import Navbar from "@/components/Navbar/navbar-home";
import Home from "./home";
import "./home.css";
import About from "./about";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Home />
      <About />
    </div>
  );
};

export default page;
