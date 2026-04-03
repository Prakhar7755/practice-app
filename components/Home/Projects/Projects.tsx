import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

const projects = [
  {
    href: "https://ai-stock-prediction-ml-service-1.onrender.com/health",
    image: "/images/stock.png",
    title: "AI Stock Predictor",
    description: "A Web App that predicts future stock values based on past performance",
  },
  {
    href: "https://online-code-ide-mu83.onrender.com",
    image: "/images/code.png",
    title: "Online Code IDE",
    description: "An Online Code Editor that supports 5+ Languages",
  },
  {
    href: "https://gemini-website-generator.vercel.app",
    image: "/images/ai-web.png",
    title: "AI Website Builder",
    description: "An AI website builder that takes and generates webpage using Gemini API",
  },
  {
    href: "https://quick-task-python-service.onrender.com",
    image: "/images/quick.jpg",
    title: "Quick Task Manager",
    description: "A Notes Taking App to manage and monitor your routine using a Python Microservice",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="gradient-text">Projects</span>
      </h1>
      <div className="section-divider" />

      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {projects.map((project, index) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <article
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-anchor-placement="top-center"
              className="glass-card overflow-hidden h-full"
            >
              <div className="img-hover-overlay">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={650}
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-xl sm:text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {project.title}
                  </h1>
                  <BsArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-cyan-300 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
                <p className="pt-2 font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
