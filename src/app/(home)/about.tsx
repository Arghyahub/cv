import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="section-surface"
    >
      <div className="about-layout">
        <div className="about-photo-wrap">
        <Image
          src="/images/personal/aboutimg.jpg"
          width={619}
          height={537}
          alt="About Image"
          className="about-photo"
        />
        </div>
        <div className="about-copy">
          <p className="section-label">About</p>
          <h2>Full-stack engineering for reliable software.</h2>
          <p className="about-body">
            I&apos;m a full-stack engineer who builds reliable web applications and backend services. I enjoy working across product architecture, APIs, databases, cloud deployment, and performance - turning complex requirements into maintainable systems.
          </p>
          <div className="about-actions">
            <a
              href="https://drive.google.com/drive/folders/1bOjPGMVNdS-mNNPoDJjgsVwO7kYEFk9m?usp=drive_link"
              className="resume-link"
            >
              <span>Download Resume</span>
            </a>
            <a
              className="contact-cta"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=arghyadas242004%40gmail.com&su=Project%20enquiry&body=Hi%20Arghya%2C%0A%0AI%27d%20like%20to%20discuss%20a%20project%20with%20you.%0A%0A"
              target="_blank"
              rel="noreferrer"
            >
              Have a project in mind? Let&apos;s talk <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
