import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - CONTACT INFO */}
        <div data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Let&apos;s build something{" "}
            <span className="gradient-text">great together</span>
          </h1>

          <p className="text-gray-400 mt-6 text-base sm:text-lg leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>

          <address className="mt-8 not-italic space-y-5">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all duration-300">
                <BiPhone className="w-6 h-6 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                +91 9315570781
              </p>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all duration-300">
                <BiEnvelope className="w-6 h-6 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                prakhar.tech.developer@gmail.com
              </p>
            </div>

            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/15 to-purple-500/15 flex items-center justify-center group-hover:from-cyan-500/25 group-hover:to-purple-500/25 transition-all duration-300">
                <BiMap className="w-6 h-6 text-cyan-300" />
              </div>
              <p className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                Raebareli, Uttar Pradesh, India
              </p>
            </div>
          </address>

          {/* Social Icons */}
          <div className="flex items-center mt-8 space-x-4">
            <a
              href="https://x.com/Prakhar_tech775"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 glass-card !rounded-full flex items-center justify-center cursor-pointer hover:!border-cyan-400/30"
            >
              <FaTwitter className="text-gray-400 w-5 h-5 hover:text-cyan-300 transition-colors" />
            </a>

            <a
              href="https://github.com/Prakhar7755"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 glass-card !rounded-full flex items-center justify-center cursor-pointer hover:!border-purple-400/30"
            >
              <FaGithub className="text-gray-400 w-5 h-5 hover:text-purple-300 transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/prakhar-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon w-12 h-12 glass-card !rounded-full flex items-center justify-center cursor-pointer hover:!border-blue-400/30"
            >
              <FaLinkedin className="text-gray-400 w-5 h-5 hover:text-blue-300 transition-colors" />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT PLACEHOLDER */}
        <div data-aos="fade-up" data-aos-delay="150">
          <div className="glass-card p-10 flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center mb-6">
              <BiEnvelope className="w-8 h-8 text-cyan-300" />
            </div>

            <h2 className="text-2xl font-bold text-white">
              Contact Form <span className="gradient-text">Coming Soon</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-relaxed">
              I&apos;m currently setting up a secure contact system. For now, feel free
              to reach out directly via email.
            </p>

            <a
              href="mailto:prakhar.5779.aps3@gmail.com"
              className="gradient-btn mt-8 px-8 py-3 text-white rounded-full font-medium inline-flex items-center gap-2"
            >
              <BiEnvelope className="w-5 h-5" />
              Email Me Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
