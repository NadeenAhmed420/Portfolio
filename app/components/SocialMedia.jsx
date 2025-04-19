import React from "react";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const SocialMedia = ({ styles }) => {
  return (
    <div className={styles}>
      <a
        href="https://www.linkedin.com/in/nadeen-ahmed-b677ab282"
        className="link-container"
      >
        <FaLinkedin size={25} />
      </a>
      <a
        href="https://github.com/NadeenAhmed420?tab=repositories"
        className="link-container"
      >
        <FaGithub size={25} />
      </a>
      <a
        href="https://app.netlify.com/teams/nadeenahmed420/sites"
        className="link-container"
      >
        <SiNetlify size={25} />
      </a>
    </div>
  );
};

export default SocialMedia;
