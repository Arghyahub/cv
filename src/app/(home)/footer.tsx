import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center gap-6 bg-slate-50 px-5 py-14"
    >
      <p className="section-label">Contact</p>
      <h2 className="-mt-3 font-semibold text-2xl text-center">Let&apos;s build something useful.</h2>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/arghya-das-045702222/"
          className="contact-link"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/linkedin.png"}
          />
          <p>LinkedIn</p>
        </a>
        <a
          href="https://twitter.com/ArghyaDas04?t=y__VQeQQNNXf-9K37FJUFA&s=09"
          className="contact-link"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/twitter.png"}
          />
          <p>Twitter</p>
        </a>
        <a
          href="https://github.com/Arghyahub"
          className="contact-link"
        >
          <Image
            width={35}
            height={35}
            className="size-7 lg:size-10"
            alt="social"
            src={"/images/contacts/github.png"}
          />
          <p>Github</p>
        </a>
        <a
          href="mailto:arghyadas242004@gmail.com"
          className="contact-link"
        >
          <Image
            width={35}
            height={35}
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
