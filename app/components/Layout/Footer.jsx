import React from "react";
import SocialMedia from "../SocialMedia";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <button className="getIn-touch">Get in touch</button>

        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-mainColor">
          What's next?
        </h2>

        <p className=" max-w-xl mx-auto text-lg font-normal text-mainColor">
          Feel free to reach out if you're looking for a developer, have a
          question, or just want to say hi. I'm always open to discussing new
          projects and opportunities.
        </p>

        <div className="flex flex-col gap-2 justify-center items-center mx-auto my-10 w-full max-w-xl ">
          <div className="flex gap-3 items-center">
            <FaRegEnvelope size={20} color="#5E3BEE" />
            <a
              href="mailto:nadeenahmed420@gmail.com"
              className="block text-lg font-medium text-mainColor hover:underline hover:text-gray-600 transition duration-300"
            >
              nadeenahmed420@gmail.com
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <FiPhone size={20} color="#5E3BEE" />
            <a
              href="tel:+201011229484"
              className="block text-lg font-medium text-mainColor hover:underline hover:text-gray-600 transition duration-300"
            >
              +20 101 122 9484
            </a>
          </div>
        </div>

        <p className="text-gray-700 mb-5 text-xl">You may also find me on:</p>
        <div>
          <SocialMedia styles=" flex items-center justify-center gap-5" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
