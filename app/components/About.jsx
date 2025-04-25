import Image from "next/image";
import React from "react";

const About = () => {
  const skills = [
    { name: "HTML", image: "/html-img.png", width: 60, height: 60 },
    { name: "CSS", image: "/css-img.webp", width: 60, height: 60 },
    { name: "Bootstrap", image: "/bootstrap-img.png", width: 65, height: 65 },
    { name: "JavaScript", image: "/js-img.png", width: 50, height: 50 },
    { name: "TypeScript", image: "/ts-img.png", width: 50, height: 50 },
    { name: "React", image: "/react-img.png", width: 55, height: 60 },
    { name: "Next.js", image: "/next-img.png", width: 55, height: 60 },
    { name: "Sass", image: "/sass-img.png", width: 65, height: 60 },
    { name: "Material UI", image: "/material-img.png", width: 50, height: 50 },
    { name: "Tailwind", image: "/tailwind-img.png", width: 85, height: 80 },
    { name: "Figma", image: "/figma-img.png", width: 35, height: 35 },
    { name: "Git", image: "/git-img.png", width: 50, height: 50 },
    { name: "GitHub", image: "/github-img.svg", width: 50, height: 50 },
  ];

  return (
    <section className="about-container" id="about">
      <div className="about-wrapper">
        <div className="about">
          <h1>About Me</h1>
          <p>
            Hi, I'm{" "}
            <i className="text-secondary font-semibold ">Nadeen Hegazy</i>, a
            passionate and detail-oriented React Frontend Developer with over 2
            years of experience in building responsive, user-centric web
            applications. I specialize in{" "}
            <span className="text-secondary font-semibold">
              {" "}
              React js and Next.js{" "}
            </span>
            and have a strong foundation in HTML, CSS, and and Next.js, with a
            strong foundation in HTML, CSS, JavaScript, and TypeScript. My goal
            is to deliver sleek, high-performance digital experiences that blend
            creativity with functionality. I'm all about clean code,
            scalability, and intuitive UI/UX design that keeps users engaged.
          </p>
        </div>
        <div className="skills-wrapper">
          <h1>The skills, tools and technologies I am really good at:</h1>
          <div className="skills">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between h-24"
              >
                <div className="h-16 flex items-center justify-center relative">
                  <Image
                    src={skill.image}
                    width={skill.width}
                    height={skill.height}
                    alt={skill.name}
                    style={{
                      width: `${skill.width}px`,
                      height: `${skill.height}px`,
                    }}
                    className="object-contain"
                  />
                </div>
                <span className="text-sm text-gray-600">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
