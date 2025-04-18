import Image from "next/image";
import React from "react";
import SocialMedia from "../SocialMedia";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-wrapper">
        <div className="content">
          <span>Hey, I am Nadeen</span>
          <h2>
            <span> Frontend Developer</span> focused on delivering seamless,
            responsive, and scalable experiences using
            <span> modern web </span> technologies.
          </h2>
          <button className="nav-button mt-7">Download CV</button>
        </div>
        <div className="hero-wrapper ">
          <div className="heroBackground">
            <Image
              src="/hero-bg.png"
              width={300}
              height={200}
              alt="hero-bg"
              className="heroImage"
            />
          </div>
        </div>
        <div className="social-container">
          <SocialMedia />
        </div>
      </div>
    </header>
  );
};

export default Header;
