import React from "react";
import Navbar from "@/components/Navbar/navbar-home";
import Home from "./(home)/home";
import "./(home)/home.css";
import About from "./(home)/about";
import Experience from "./(home)/(experience)/experience";
import Projects from "./(home)/(projects)/projects";
import Skills from "./(home)/skills";
import Footer from "./(home)/footer";

const page = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default page;
