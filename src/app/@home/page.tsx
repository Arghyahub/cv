import React from "react";
import Navbar from "@/components/Navbar/navbar-home";
import Home from "./home";
import "./home.css";
import About from "./about";
import Experience from "./experience";
import Projects from "./projects";
import Skills from "./skills";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
};

export default page;
