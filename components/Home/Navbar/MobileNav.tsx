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
      className={`${navOpen} fixed inset-0 transform transition-all duration-500 z-[10000]`}
    >
      <div
        className="fixed inset-0 bg-black opacity-70 w-full h-full"
        onClick={closeNav}
      ></div>
      <div
        className={`text-white fixed flex flex-col items-center justify-center h-full transform transition-all duration-300 delay-200 w-[80%] bg-cyan-800 space-y-6 right-0 sm:w-[60%] z-[10005]`}
      >
        {NavLinks.map((link) => (
          <Link key={link.id} href={link.url} onClick={closeNav}>
            <p className="text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
              {link.text}
            </p>
          </Link>
        ))}
      </div>
      <CgClose
        className="text-white absolute top-[2rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6 z-[10006] cursor-pointer"
        onClick={closeNav}
      />
    </div>
  );
};

export default MobileNav;
