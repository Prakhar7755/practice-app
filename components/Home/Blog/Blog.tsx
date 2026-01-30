import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className="p-16" id="blog">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white ">
        My latest <span className="text-cyan-200">Blog</span>
      </h1>
      <div className="mx-auto w-[70%] grid grid-cols-1 xl:grid-cols-3 xl:gap-4 items-center mt-16   gap-4">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
        >
          <BlogCard
            image="/images/b1.jpg"
            title="Lorem ipsum, dolor sit amet consectetur "
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <BlogCard
            image="/images/b2.jpg"
            title="Lorem ipsum, dolor sit amet consectetur "
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <BlogCard
            image="/images/b3.jpg"
            title="Lorem ipsum, dolor sit amet consectetur "
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
