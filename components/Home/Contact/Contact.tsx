import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="p-16" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
        {/* TEXT CONTENT */}
        <div className="">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Schedule a call with to see if I can help
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg ">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals
          </p>

          <address className="mt-7 not-italic">
            <div className="flex items-center space-x-3 mb-4 ">
              <BiPhone className="w-9 h-9 text-cyan-300 " />
              <p className="text-xl font-bold text-gray-400">0438032040923</p>
            </div>
            <div className="flex items-center space-x-3 mb-4 ">
              <BiEnvelope className="w-9 h-9 text-cyan-300 " />
              <p className="text-xl font-bold text-gray-400">hello@gmail.com</p>
            </div>
            <div className="flex items-center space-x-3 mb-4 ">
              <BiMap className="w-9 h-9 text-cyan-300 " />
              <p className="text-xl font-bold text-gray-400">
                Raebareli, Uttar Pradesh, India
              </p>
            </div>
          </address>

          {/* social icons */}
          <div className="flex items-center mt-8 space-x-3">
            <div className="w-14 h-14 bg-blue-950/60  rounded-full flex items-center cursor-pointer flex-col hover:bg-black transition-all duration-300 justify-center  ">
              <FaTwitter className=" text-white w-6 h-6 " />
            </div>
            <div className="w-14 h-14 bg-blue-950/60  rounded-full flex items-center cursor-pointer flex-col hover:bg-red-600 transition-all duration-300 justify-center  ">
              <FaYoutube className=" text-white w-6 h-6 " />
            </div>
            <div className="w-14 h-14 bg-blue-950/60  rounded-full flex items-center cursor-pointer flex-col hover:bg-blue-800 transition-all duration-300 justify-center  ">
              <FaLinkedin className=" text-white w-6 h-6 " />
            </div>
          </div>
        </div>

        {/* FORM */}
        <form
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="0"
          className="md:p-7 p-3 bg-[#131332] rounded-lg space-y-5"
        >
          <input
            type="text"
            placeholder="Name"
            className="p-4 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="p-4 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="p-4 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70"
          />

          <textarea
            name="message"
            placeholder="Your Message ..."
            id="message"
            className="p-4 bg-[#363659] text-white rounded-md w-full placeholder:text-white/70 h-50"
          ></textarea>

          <button className="px-12 py-4 bg-blue-950 hover:bg-blue-900 transition-all duration-300 cursor-pointer text-white rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
