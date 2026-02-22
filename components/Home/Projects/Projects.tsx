import Image from "next/image";

const Projects = () => {
  return (
    <section className="p-16" id="projects">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-200">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <a href="https://ai-stock-prediction-ml-service-1.onrender.com/health">
          <article
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/images/stock.png"
              alt=""
              width={800}
              height={650}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
              AI Stock Predictor
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              A Web App that predicts future stock values based on past
              performance
            </h1>
          </article>
        </a>
        <a href="https://online-code-ide-mu83.onrender.com">
          <article
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/images/code.png"
              alt=""
              width={800}
              height={650}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
              Online Code IDE
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              An Online Code Editor that supports 5+ Languages{" "}
            </h1>
          </article>
        </a>
        <a href="https://gemini-website-generator.vercel.app">
          <article
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/images/ai-web.png"
              alt=""
              width={800}
              height={650}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
              AI Website Builder
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              An AI website builder that takes and generates webpage using
              Gemini API
            </h1>
          </article>
        </a>
        <a href="https://quick-task-python-service.onrender.com">
          <article
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
          >
            <Image
              src="/images/quick.jpg"
              alt=""
              width={800}
              height={650}
              className="rounded-lg"
            />
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
              Quick Task Manager
            </h1>
            <h1 className="pt-2 font-medium text-white/80">
              An Notes Taking App to manage and monitor your routine using a
              Python Microservice
            </h1>
          </article>
        </a>
      </div>
    </section>
  );
};

export default Projects;
