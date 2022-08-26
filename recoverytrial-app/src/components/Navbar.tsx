import React, { useState } from "react";
import Link from "next/link";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import LogoHorizontal from "./logos/LogoHorizontal";
import LogoUFRPE from "./logos/LogoUFRPE";
import { useAuth } from "../context/AuthProvider/useAuth";
import { useRouter } from "next/router";

const Navbar = () => {
  const auth = useAuth();
  const router = useRouter()
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    auth.logout();
    router.push('/')
  }

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
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20 " : "top-[-490px]"
            }`}
        >
          {
            !auth.token && <li className="md:ml-8 text-xl md:my-0 my-7">
              <Link href="/">
                <span className="text-blue-200 font-bold hover:text-pink-100 transition-all cursor-pointer">
                  Home
                </span>
              </Link>
            </li>
          }

          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/about">
              <span className="text-blue-200 font-bold hover:text-pink-100 transition-all cursor-pointer">
                Saiba mais
              </span>
            </Link>
          </li>
          {
            auth.token && <li className="md:ml-8 text-xl md:my-0 my-7"><Link href={`/user/${auth.email}`}><span className="text-blue-300 font-bold hover:text-pink-100 transition-all cursor-pointer">Perfil</span></Link></li>
          }
          {
            auth.token && <li className="md:ml-8 text-xl md:my-0 my-7"><Link href={`/main/${auth.email}`}><span className="text-blue-300 font-bold hover:text-pink-100 transition-all cursor-pointer">Treinos</span></Link></li>
          }
          {
            auth.token && <li className="md:ml-8 text-xl md:my-0 my-7"><span className="text-blue-300 font-bold hover:text-pink-100 transition-all cursor-pointer" onClick={handleLogout}>Sair da conta</span></li>
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
