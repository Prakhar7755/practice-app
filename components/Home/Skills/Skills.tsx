"use client";

import Tilt from "react-parallax-tilt";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
  { name: "React.js", icon: <SiReact />, percentage: 92 },
  { name: "Next.js", icon: <SiNextdotjs />, percentage: 80 },
  { name: "Node.js", icon: <SiNodedotjs />, percentage: 80 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 89 },
  { name: "TypeScript", icon: <SiTypescript />, percentage: 79 },
];

const Skills = () => {
  return (
    <div className="text-white p-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        My <span className="text-cyan-300">Skills</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-16">
        {skills.map((skill, index) => {
          return (
            <Tilt key={skill.name} scale={1.5} transitionSpeed={400}>
              <div
                data-aos="flip-right"
                data-aos-delay={index * 100}
                data-aos-anchor-placement="top-center"
                className="bg-[#14134145] text-center  w-40 h-48 rounded-3xl flex flex-col justify-center items-center shadow-lg hover:scale-105"
              >
                <div className="text-5xl text-gray-300">{skill.icon}</div>
                <p className="text-2xl font-semibold mt-1">
                  {skill.percentage}
                </p>
                <p className="text-purple-400 mt-2">{skill.name}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
