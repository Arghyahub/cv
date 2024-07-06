import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center gap-6 px-2 py-10"
    >
      <h1 className="font-semibold text-xl">Thank you for visiting</h1>
      <div className="flex flex-row justify-between w-full md:w-9/12">
        <a
          href="https://www.linkedin.com/in/arghya-das-045702222/"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-nowrap text-xs sm:text-sm md:text-base lg:text-lg underline"
        >
          <Image
            width={40}
            height={40}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/linkedin.png"}
          />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://twitter.com/ArghyaDas04?t=y__VQeQQNNXf-9K37FJUFA&s=09"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-nowrap text-xs sm:text-sm md:text-base lg:text-lg underline"
        >
          <Image
            width={40}
            height={40}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/twitter.png"}
          />
          <p>Twitter</p>
        </a>
        <a
          href="https://github.com/Arghyahub"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-nowrap text-xs sm:text-sm md:text-base lg:text-lg underline"
        >
          <Image
            width={40}
            height={40}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/github.png"}
          />
          <p>Github</p>
        </a>
        <a
          href="mailto:arghyadas242004@gmail.com"
          className="flex flex-row items-center gap-1 sm:gap-2 px-2 py-1 text-indigo-500 text-nowrap text-xs sm:text-sm md:text-base lg:text-lg underline"
        >
          <Image
            width={40}
            height={40}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/gmail.png"}
          />
          <p>Email</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
