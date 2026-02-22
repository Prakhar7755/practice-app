import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="md:p-16 pb-5" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE - CONTACT INFO */}
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-200">
            Let’s build something great together
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <address className="mt-7 not-italic">
            <div className="flex items-center space-x-3 mb-4">
              <BiPhone className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-semibold text-gray-400">
                +91 9315570781
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiEnvelope className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-semibold text-gray-400">
                prakhar.5779.aps3@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-3 mb-4">
              <BiMap className="w-9 h-9 text-cyan-300" />
              <p className="text-xl font-semibold text-gray-400">
                Raebareli, Uttar Pradesh, India
              </p>
            </div>
          </address>

          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-3">
            <a href="https://x.com/Prakhar_tech775" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-black transition-all duration-300">
              <FaTwitter className="text-white w-6 h-6" />
            </a>

            <a href="https://github.com/Prakhar7755" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-all duration-300">
              <FaGithub className="text-white w-6 h-6" />
            </a >

            <a href="https://linkedin.com/in/prakhar-tech" className="w-14 h-14 bg-blue-950/60 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-800 transition-all duration-300">
              <FaLinkedin className="text-white w-6 h-6" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM PLACEHOLDER */}
        <div className="md:p-8 p-6 bg-[#131332] rounded-lg flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl font-bold text-white">
            Contact Form Coming Soon
          </h2>

          <p className="text-gray-400 mt-4">
            I’m currently setting up a secure contact system. For now, feel free
            to reach out directly via email.
          </p>

          <a
            href="mailto:prakhar.5779.aps3@gmail.com"
            className="mt-6 px-8 py-3 bg-blue-950 hover:bg-blue-900 transition-all duration-300 text-white rounded-full"
          >
            Email Me Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

/* FORM */
{
  /* <form
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
        </form> */
}
