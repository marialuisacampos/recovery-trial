import React from "react";
import LogoUFRPE from "./logos/LogoUFRPE";


const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-600 h-72 align-middle">
        <div className="pl-48">
          <img src="/logo-ufrpe.png" alt="logo" style={{ width: '150px' }} />
        </div>
        <div className="pl-56">
          <p className="font-bold text-blue-200 text-lg">Contato</p>
          <div className="pl-9 flex flex-col gap-2 mt-2 mb-3">
            <p>Fone: </p>
            <p>Endereço: Rua Dom Manuel de Medeiros, s/n - Dois Irmãos, Recife - PE, 54171-900</p>
            <p>E-mail: </p>
          </div>
        </div>
        <div className="m-auto border-t-2 border-blue-200 w-4/5">
          <p className="ml-12 font-sans-roboto mt-3 text-slate-500 ">UFRPE - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )

};

export default Footer;

