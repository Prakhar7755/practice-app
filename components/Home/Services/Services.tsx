import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="p-16 px-0" id="services">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        How I Build Production-Ready Applications
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center justify-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="Full-Stack Web Development"
            description="Building scalable web apps with React, Node.js & PostgreSQL, focused on performance and clean architecture."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Backend & API Engineering"
            description="Designing RESTful APIs, authentication systems (JWT/OAuth), and optimized database queries with Prisma, MongoDB, and PostgreSQL."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="Scalable Systems & Performance"
            description="Improving load times, handling concurrent requests, implementing Redis caching, and optimizing query performance for high-traffic applications."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s4.png"
            name="Deployment & DevOps"
            description="Containerizing applications with Docker, setting up CI/CD pipelines via GitHub Actions, and deploying on Render & Vercel."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
