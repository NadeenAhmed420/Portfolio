import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <a href="/" className="nav-logo">
            <Image src="/logo-2.svg" width={30} height={30} alt="logo" />
            Nadeen Ahmed
          </a>
          <ul className="nav-items">
            <li>
              <a href="/" className="active nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Project
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <button className="nav-button">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
