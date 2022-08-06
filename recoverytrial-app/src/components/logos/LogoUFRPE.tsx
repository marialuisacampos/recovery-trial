import Image from "next/image";
import logoUFRPE from "../../assets/imgs/logoUFRPE.png";

import React from "react";

const LogoUFRPE = () => {
  return (
    <Image
      src={logoUFRPE}
      alt="Recovery Trial escrito em letra azul com um símbolo da Covid"
      height={70}
      width={165}
    />
  );
};

export default LogoUFRPE;
