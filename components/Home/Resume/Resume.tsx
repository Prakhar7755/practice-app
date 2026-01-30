import ResumeCard from "./ResumeCard";
import { FaCodepen, FaReact } from "react-icons/fa";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="pt-20 pb-16" id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        <div className="">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My Work <span className="text-cyan-200">Experience</span>
          </h1>
          <div
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
            className="mt-10"
          >
            <ResumeCard Icon={FaCodepen} role="Full Stack Developer" />
            <ResumeCard Icon={FaReact} role="Frontend Developer" />
            <ResumeCard Icon={BsDatabase} role="Backend Developer" />
          </div>
        </div>
        <div className="">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              date="Jan 2023 - Dec 2024"
              Icon={BiBadge}
              role="Design Institute of Technology"
            />
            <ResumeCard
              date="Jan 2023 - Dec 2024"
              Icon={FaReact}
              role="BTech in CSE"
            />
            <ResumeCard
              date="Jan 2023 - Dec 2024"
              Icon={BsDatabase}
              role="Digital Marketing"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
