"use client";

import Tilt from "react-parallax-tilt";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiTailwindcss,
  SiRedis,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Prisma ORM", icon: <SiPrisma /> },
      { name: "Redis", icon: <SiRedis /> },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="text-white py-20 px-6 md:px-16" id="skills">
      <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold">
        Technical <span className="text-cyan-300">Skills</span>
      </h1>

      <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
        Technologies I use to design, build, and deploy scalable full-stack
        applications.
      </p>

      <div className="mt-16 space-y-14">
        {skillCategories.map((category, index) => (
          <div key={category.title + index}>
            <h2 className="text-xl md:text-2xl font-semibold text-cyan-200 mb-6 text-center">
              {category.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-6">
              {category.skills.map((skill, skillIndex) => (
                <Tilt key={skill.name} scale={1.05} transitionSpeed={400}>
                  <div
                    data-aos="flip-right"
                    data-aos-delay={skillIndex * 100}
                    className="bg-[#14134145] w-36 h-36 rounded-2xl flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <div className="text-4xl text-gray-300">{skill.icon}</div>
                    <p className="text-sm text-gray-300 mt-3 text-center px-2">
                      {skill.name}
                    </p>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
