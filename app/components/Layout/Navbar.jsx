"use client";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
      <div className="nav-container">
        <div className="nav-wrapper">
          <a href="/" className="nav-logo">
            <Image src="/logo-2.svg" width={30} height={30} alt="logo" />
            Nadeen Ahmed
          </a>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              <svg
                className={`w-6 h-6 transform transition-transform duration-300 ease-in-out ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          <ul className={`nav-items ${isOpen ? "flex" : "hidden"} md:flex`}>
            <li>
              <a href="/" className="active nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="md:hidden">
              <button className="nav-button w-full">Download CV</button>
            </li>
          </ul>

          <button className="nav-button hidden md:block">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
