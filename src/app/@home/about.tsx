import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col justify-center items-center bg-[#edf2f8] w-full min-h-[80vh]"
    >
      <div
        id="box"
        className="flex sm:flex-row flex-col gap-5 md:gap-8 bg-white sm:bg-yellow-400 md:bg-red-500 lg:bg-blue-500 xs:bg-yellow-400 my-10 px-10 py-12 rounded-3xl w-11/12 md:w-5/6 lg:w-4/6"
      >
        <Image
          src="/images/personal/aboutimg.jpg"
          width={619}
          height={537}
          alt="About Image"
          className="rounded-md rounded-tl-xl rounded-bl-xl w-full sm:w-1/3 md:w-2/5 lg:w-1/3 max-w-none h-auto"
        />
        <div className="flex flex-col">
          <h1 className="mb-2 sm:mb-4 font-semibold text-xl">About me</h1>
          <p>
            I&apos;m originally from Assam, Currently I&apos;m persuing Bachelor
            of Technology in Computer Science Engineering from Netaji Subhash
            Engineering College. In my free time I like to travel, explore new
            places and sharing a cup of tea with a fascinating stranger is one
            of my life&apos;s true delights.
          </p>
          <div className="mt-8 sm:mt-10">
            <button className="bg-[#22c8e5] hover:bg-[#f7345e] mt-auto px-4 py-3 rounded-xl font-semibold text-sm text-white md:text-md transition-colors duration-500">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
