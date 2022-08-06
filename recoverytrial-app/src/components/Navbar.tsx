import React, { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import LogoHorizontal from "./logos/LogoHorizontal";
import LogoUFRPE from "./logos/LogoUFRPE";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex bg-white py-4 md:px-10 px-7 items-center justify-around">
        <div className=" absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in">
          <LogoUFRPE />
        </div>
        <div className="">
          <LogoHorizontal />
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IoIosClose color="#FF8484" size={50} />
          ) : (
            <IoIosMenu color="#FF8484" size={50} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <a
              href="#"
              className="text-blue-200 font-bold hover:text-pink-100 transition-all"
            >
              Home
            </a>
          </li>
          <li className="md:ml-8 text-xl">
            <a
              className="text-blue-200 font-bold hover:text-pink-100 transition-all"
              href="#"
            >
              Saiba mais
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
