import React from "react";

const Home = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-art hero-art-wide" aria-label="Portrait of Arghya">
        <div className="hero-copy hero-copy-left">
          <h1>Hi, I&apos;m Arghya Das.</h1>
          <p className="hero-intro">
            A product first engineer building reliable software across frontend, backend, databases,cloud infra & AI.
          </p>
        </div>
        {/* <div className="hero-copy hero-copy-right">
          <p>System design</p>
          <p>Product engineering</p>
          <p>Cloud delivery</p>
        </div> */}
      </div>
    </section>
  );
};

export default Home;
