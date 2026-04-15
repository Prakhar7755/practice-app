"use client";

import { FaCode } from "react-icons/fa";
import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Navbar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`transition-all duration-500 h-[12vh] z-10000 fixed w-full ${
        navBg
          ? "bg-[#09091b]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-white/5"
          : ""
      }`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* LOGO */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full items-center justify-center flex shadow-lg group-hover:shadow-cyan-500/25 transition-all duration-300">
            <FaCode className="h-6 w-6 text-white" />
          </div>

          <h1 className="text-xl hidden sm:block md:text-2xl font-bold text-white">
            Prakhar
          </h1>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="nav-link text-base text-gray-300 hover:text-cyan-300 font-medium transition-all duration-300"
              >
                <p>{link.text}</p>
              </Link>
            );
          })}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://drive.google.com/file/d/1j62gTPF5htKOQbeDOvBYVtE-QdYQ_AII/view?usp=drive_link"
            download
            className="gradient-btn p-3 md:px-8 md:py-3.5 text-sm cursor-pointer rounded-lg text-white flex items-center gap-3 font-medium"
          >
            <BiDownload className="w-5 h-5" />
            <span className="hidden md:block">Download CV</span>
          </a>

          {/* Burger menu */}
          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white lg:hidden hover:text-cyan-300 transition-colors duration-300"
            onClick={openNav}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
