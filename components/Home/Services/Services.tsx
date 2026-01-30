import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="p-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
        Collaborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 items-center justify-center">
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            icon="/images/s1.png"
            name="UI and UX"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquam?"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ServiceCard
            icon="/images/s2.png"
            name="Web and Mobile App"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquam?"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ServiceCard
            icon="/images/s3.png"
            name="Design & Creative"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquam?"
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ServiceCard
            icon="/images/s4.png"
            name="Development"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aliquam?"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
