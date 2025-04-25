"use client";
import Image from "next/image";
import React, { useState } from "react";
import portfolioData from "../data/portfolio.json";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Portfolio = () => {
  const [expandedCards, setExpandedCards] = useState({});

  return (
    <section className="portfolio-container" id="portfolio">
      <div className="portfolio">
        <h1>My Projects</h1>
        <div className="portfolio-wrapper">
          {portfolioData.projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <div className="relative h-64 w-full mb-4 ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="card-title">{project.title}</h3>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedCards[project.id] ? "max-h-[300px]" : "max-h-[4.5em]"
                }`}
              >
                <p className="card-description">{project.description}</p>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setExpandedCards((prev) => ({
                    ...prev,
                    [project.id]: !prev[project.id],
                  }));
                }}
                className={`card-toggle-content ${
                  expandedCards[project.id] ? "mt-0" : "mt-3"
                }`}
              >
                {expandedCards[project.id] ? (
                  <>
                    <p className="flex gap-2 items-center">
                      <span className="text-xl ">
                        <FaArrowUp color="#5E3BEE" size={15} />
                      </span>{" "}
                      Show Less
                    </p>
                  </>
                ) : (
                  <>
                    <p className="flex gap-2 items-center">
                      <span className="text-xl ">
                        <FaArrowDown color="#5E3BEE" size={15} />
                      </span>{" "}
                      Show More
                    </p>
                  </>
                )}
              </button>
              <span className="card-url">
                {project.demoLink}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 13L13 1M13 1H1M13 1V13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
