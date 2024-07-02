import React from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar-home";

const Navbar = () => {
  return (
    <div
      id="nav-home"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
      className="top-0 z-20 fixed flex flex-row items-center bg-slate-100 py-3 w-full"
    >
      {/* Logo area */}
      <div id="logo" className="flex flex-row px-3 py-2 h-full">
        <div className="mb-1 w-5 h-5">
          <Image
            src="/images/personal/wings.png"
            alt="logo"
            width={20}
            height={20}
          />
        </div>
        <p className="mt-auto">Arghya</p>
        <div className="mb-1 w-5 h-5 transform scale-x-[-1]">
          <Image
            src="/images/personal/wings.png"
            alt="logo"
            width={20}
            height={20}
          />
        </div>
      </div>
      {/* Nav links */}
      <div
        id="navlinks"
        className="md:flex flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10 hidden mr-16 lg:mr-28 w-full h-full text-[#6b7688]"
      >
        <Link href={"/#home"}>Home</Link>
        <Link href={"/#about"}>About</Link>
        <Link href={"/#experience"}>Experience</Link>
        <Link href={"/#projects"}>Projects</Link>
        <Link href={"/#skills"}>Skills</Link>
        <Link href={"/blog"}>Blogs</Link>
        <Link href={"/#contact"}>Contact</Link>
      </div>
      {/* Hamburger menu */}
      <div className="flex md:hidden mr-5 ml-auto">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
