import ResumeCard from "./ResumeCard";
import { FaReact } from "react-icons/fa";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <section className="pt-20 pb-16" id="resume">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-14">
        {/* Work Experience */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h1>
          <div className="section-divider !mx-0 !mt-4" />

          <div className="mt-10" data-aos="fade-up">
            <ResumeCard
              Icon={FaReact}
              role="Full-Stack Developer Intern – CodeXConquer (Remote)"
              date="Mar 2026 – Apr 2026"
              description="Built and tested full-stack features using React.js, TypeScript and Node.js; developed REST API endpoints and CRUD operations; practised Git workflows and improved component modularity."
            />

            <ResumeCard
              Icon={FaReact}
              role="Full-Stack Developer Intern – Akdenar Pvt. Ltd. (Remote)"
              date="Oct 2025 – Jan 2026"
              description="Developed responsive React/TypeScript components for the Seller Profile module; integrated Prisma/PostgreSQL REST APIs for 1,000+ seller profiles and optimised query performance and UI accessibility."
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            My <span className="gradient-text">Education</span>
          </h1>
          <div className="section-divider !mx-0 !mt-4" />

          <div
            className="mt-10 timeline-line"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <ResumeCard
              Icon={BiBadge}
              role="B. Tech in Computer Science and Engineering"
              date="2022 – 2026 (Expected: Jun 2026)"
              description="CGPA: 8.16 | Relevant coursework: Data Structures & Algorithms, DBMS, OOP (Java), Programming in C & Python."
            />

            <ResumeCard
              Icon={BiBadge}
              role="Bronze Medal – Top 3 Rank (First Year CSE)"
              description="Awarded by the FGIET Academic Council for outstanding first-year academic performance."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
