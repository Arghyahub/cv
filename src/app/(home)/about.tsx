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
        className="flex sm:flex-row flex-col gap-5 md:gap-8 border-2 xs:bg-yellow-400 my-10 px-10 py-12 rounded-3xl w-11/12 md:w-5/6 lg:w-4/6"
      >
        <Image
          src="/images/personal/aboutimg.jpg"
          width={619}
          height={537}
          alt="About Image"
          className="sm:my-6 rounded-md rounded-tl-xl rounded-bl-xl w-full sm:w-2/5 md:w-2/5 lg:w-1/3 sm:min-w-64 md:min-w-[280px] lg:min-w-72 max-w-none h-auto"
        />
        <div className="flex flex-col lg:my-4">
          <h1 className="mb-2 sm:mb-4 font-semibold text-xl">About me</h1>
          <p>
            I&apos;m originally from Assam, currently persuing Bachelor of
            Technology in Computer Science Engineering from Netaji Subhash
            Engineering College. In my free time I like to travel, explore new
            places and sharing a cup of tea with a fascinating stranger is one
            of my life&apos;s true delights.
          </p>
          <div className="flex flex-row justify-center items-end mt-4 w-full h-full">
            <a
              href="https://drive.google.com/drive/folders/1bOjPGMVNdS-mNNPoDJjgsVwO7kYEFk9m?usp=drive_link"
              className="bg-[#22c8e5] hover:bg-[#f7345e] mx-auto mt-4 px-4 py-3 rounded-xl font-semibold text-sm text-white md:text-md transition-colors duration-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
