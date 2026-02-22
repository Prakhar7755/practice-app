import ResumeCard from "./ResumeCard";
import { FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <section className="pt-20 pb-16" id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 ">
        {/* Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="text-cyan-200">Experience</span>
          </h1>

          <div className="mt-10" data-aos="zoom-in">
            <ResumeCard
              Icon={FaReact}
              role="Full-Stack Developer Intern – Akdenar Pvt. Ltd."
              date="Oct 2025 – Jan 2026"
              description="Developed responsive React/TypeScript components and built REST APIs using Prisma & PostgreSQL. Improved performance for 1,000+ seller profiles and enhanced UI consistency across modules."
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="text-cyan-200">Education</span>
          </h1>

          <div className="mt-10" data-aos="zoom-out">
            <ResumeCard
              Icon={BiBadge}
              role="B.Tech in Computer Science & Engineering"
              date="2022 – 2026 "
              description="CGPA: 8.16 | Studied Data Structures, Algorithms, DBMS, OOP, and Software Engineering principles."
            />

            <ResumeCard
              Icon={BiBadge}
              role="Bronze Medal – Top 3 Rank (First Year CSE)"
              description="Recognized by the academic council for outstanding academic performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;