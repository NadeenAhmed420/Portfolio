import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <a href="https://www.linkedin.com/in/nadeen-ahmed-b677ab282" className="link-container">
        <FaLinkedin size={25} />
      </a>
      <a href="" className="link-container">
        <FaGithub size={25} />
      </a>
      <a href="" className="link-container">
        <SiNetlify size={25} />
      </a>
    </div>
  );
};

export default SocialMedia;
