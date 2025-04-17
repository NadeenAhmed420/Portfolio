import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-wrapper">
        <div className="content">
          <span>Hey, I am Nadeen</span>
          <h2>
            <span> Frontend Developer</span> focused on delivering seamless,
            responsive, and scalable experiences using
            <span> modern web </span> technologies.
          </h2>
          <p>
            Hi, I’m <i className="text-secondary font-semibold"> Nadeen Hegazy</i> , a passionate and
            detail-oriented React Frontend Developer with over 2 years of
            experience in building responsive, user-centric web applications. I
            specialize in React.js and Next.js, with a strong foundation in
            HTML, CSS, JavaScript, and TypeScript. My goal is to deliver sleek,
            high-performance digital experiences that blend creativity with
            functionality. I'm all about clean code, scalability, and intuitive
            UI/UX design that keeps users engaged.
          </p>
        </div>
        <div className="heroBackground">
          <Image
            src="/hero-bg.png"
            width={250}
            height={100}
            alt="hero-bg"
            className="heroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
