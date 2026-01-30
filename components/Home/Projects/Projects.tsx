import Image from "next/image";

const Projects = () => {
  return (
    <section className="p-16" id="projects">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        A small selection of recent <br />{" "}
        <span className="text-cyan-200">Projects</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        <article
          data-aos="fade-up"
          data-aos-delay="0"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/p1.jpg"
            alt=""
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
            Modern Finance DashboardUI
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </article>
        <article
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/p2.jpg"
            alt=""
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
            Modern Finance DashboardUI
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </article>
        <article
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/p3.jpg"
            alt=""
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
            Modern Finance DashboardUI
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </article>
        <article
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor-placement="top-center"
        >
          <Image
            src="/images/p4.jpg"
            alt=""
            width={800}
            height={650}
            className="rounded-lg"
          />
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-white ">
            Modern Finance DashboardUI
          </h1>
          <h1 className="pt-2 font-medium text-white/80">Apps, UI/UX</h1>
        </article>
      </div>
    </section>
  );
};

export default Projects;
