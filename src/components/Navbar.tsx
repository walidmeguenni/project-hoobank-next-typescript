import React from "react";
import Image from "next/image";
import styles from "../styles/styles";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Link from "next/link";
const Navbar: React.FC = () => {
  const [active, setActive] = React.useState<string>("Home");
  const [toggle, setToggle] = React.useState<boolean>(false);

  const onChangeColor = () => {
    if (window.screen.width > 768) setToggle(false);
  };
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", onChangeColor);
  }
  
  return (
    <nav className={`w-full py-6 ${styles.flexCenter}`}>
      <Image src={logo} alt="hoobank" width={124} height={32} />
      <ul className=" hidden sm:flex justify-end items-end flex-1">
        {navLinks.map(({ id, title }, inedx) => (
          <Link href={id} key={id}>
            <a
              className={`font-poppins font-normal cursor-pointer  text-[16px] ${
                active === title ? "text-white" : "text-dimWhite"
              } ${inedx === navLinks.length - 1 ? "mr-0" : "mr-10"}
          `}
              onClick={() => setActive(title)}
            >
              {title}
            </a>
          </Link>
        ))}
      </ul>
      <div className="sm:hidden flex justify-end items-center flex-1">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar

        `}
        >
          <ul className="flex justify-end items-start flex-1 flex-col">
            {navLinks.map(({ id, title }, index) => (
              <Link key={id} href={id}>
                <a
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
              
              `}
                  onClick={() => setActive(title)}
                >
                  {title}
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
