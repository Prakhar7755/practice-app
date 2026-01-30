"use client";
import dynamic from "next/dynamic";
import "react-multi-carousel/lib/styles.css";
import ClientReviewCard from "./ClientReviewCard";

const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const ClientReview = () => {
  return (
    <div className="p-16">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        Kind words from satisfied <span className="text-cyan-200">clients</span>
      </h1>
      <div className="mt-16 ">
        <Carousel
          draggable={false}
          swipeable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={400}
        >
          <ClientReviewCard
            image="/images/c1.png"
            name="John Doe"
            role="CEO, Landscape"
          />
          <ClientReviewCard
            image="/images/c2.png"
            name="John Doe"
            role="CEO, Landscape"
          />
          <ClientReviewCard
            image="/images/c3.png"
            name="John Doe"
            role="CEO, Landscape"
          />
          <ClientReviewCard
            image="/images/c4.png"
            name="John Doe"
            role="CEO, Landscape"
          />
          <ClientReviewCard
            image="/images/c5.png"
            name="John Doe"
            role="CEO, Landscape"
          />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientReview;
