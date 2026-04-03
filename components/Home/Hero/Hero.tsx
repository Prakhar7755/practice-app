"use client";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBackground";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="text-white relative h-screen flex items-center justify-center overflow-hidden flex-col"
    >
      <ParticlesHero />

      {/* Radial glow behind content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Profile image with animated gradient ring */}
        <div className="relative animate-float" data-aos="fade-up">
          <div className="absolute inset-[-6px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 opacity-70 blur-[2px]" style={{ animation: 'spin-slow 8s linear infinite', backgroundSize: '200% 200%', backgroundPosition: '0% 50%' }} />
          <Image
            src={"/images/img2.jpeg"}
            alt={"Hero Image"}
            width={150}
            height={150}
            className="rounded-full border-4 border-[#09091b] relative z-10"
          />
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-8 text-center font-bold tracking-wide leading-tight"
        >
          I Build Fast, Scalable &
          <br />{" "}
          <span className="gradient-text">Production-Ready Web Apps</span>
        </h1>

        <h2
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium items-center flex text-gray-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Hi, I&apos;m Prakhar- A Passionate
          <span className="text-cyan-300 font-bold">
            <Typewriter
              options={{
                strings: [
                  " Full-Stack Developer",
                  " Software Engineer",
                  " React & Node.js Developer",
                  " AI-Integrated Web Builder",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>

        <Link href="/#projects">
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="gradient-btn mt-8 px-10 py-3 cursor-pointer rounded-full text-lg font-medium text-white"
          >
            <span>Explore My Work</span>
            <BsArrowRight className="ml-2 inline-block w-5 h-5" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
