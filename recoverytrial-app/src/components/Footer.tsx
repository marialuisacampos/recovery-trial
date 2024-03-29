import React from "react";
import LogoUFRPE from "./logos/LogoUFRPE";
import { BiPhone, BiMap } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { IconContext } from "react-icons";


const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-600 h-72 align-middle">
        <div className="md:pl-24 lg:pl-48">
          <img src="/logo-ufrpe.png" alt="logo" style={{ width: '150px' }} />
        </div>
        <div className="pl-5 md:pl-28 lg:pl-56">
          <p className="font-bold text-blue-200 text-lg">Contato</p>
          <div className="
          lg:pl-9 flex flex-col gap-2 mt-2 mb-3 pl-6">
            <IconContext.Provider value={{ size: '25px' }}>
              <div className="flex flex-row gap-2">
                <BiPhone color="#FF8484" />
                <p className="text-sm lg:text-base"></p>
              </div>

              <div className="flex flex-row gap-2">
                <BiMap color="#FF8484" />
                <p className="text-sm lg:text-base">Rua Dom Manuel de Medeiros, s/n - Dois Irmãos, Recife - PE, 52171-900 </p>
              </div>

              <div className="flex flex-row gap-2">
                <HiOutlineMail color="#FF8484" />
                <p className="text-sm lg:text-base">recoverytrialapp@gmail.com</p>
              </div>
            </IconContext.Provider>
          </div>
        </div>
        <div className="m-auto border-t-2 border-blue-200 w-4/5">
          <p className="lg:ml-12 font-sans-roboto mt-3 text-slate-500 text-sm lg:text-base ">UFRPE - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )

};

export default Footer;

