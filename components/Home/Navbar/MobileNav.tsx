import { NavLinks } from "@/constant/constant";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-10000`}
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm w-full h-full"
        onClick={closeNav}
      ></div>
      <nav
        className={`text-white fixed flex flex-col items-center justify-center h-full transform transition-all duration-500 delay-200 w-[80%] sm:w-[60%] right-0 z-10005`}
        style={{
          background: 'linear-gradient(135deg, rgba(9,9,27,0.95), rgba(15,10,46,0.95))',
          backdropFilter: 'blur(20px)',
          borderLeft: '1px solid rgba(103, 232, 249, 0.1)',
        }}
      >
        {NavLinks.map((link, index) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p
              className="text-gray-200 w-fit text-xl ml-12 pb-1 sm:text-[30px] mb-6 hover:text-cyan-300 transition-all duration-300 relative nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.text}
            </p>
          </Link>
        ))}
      </nav>
      <CgClose
        className="text-white absolute top-8 right-8 sm:w-8 sm:h-8 w-6 h-6 z-10006 cursor-pointer hover:text-cyan-300 hover:rotate-90 transition-all duration-300"
        onClick={closeNav}
      />
    </div>
  );
};

export default MobileNav;
