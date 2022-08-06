import Image from "next/image";
import logoHorizontal from "../../assets/imgs/logoHorizontal.png";

import React from "react";

const LogoHorizontal = () => {
  return (
    <Image
      src={logoHorizontal}
      alt="Recovery Trial escrito em letra azul com um símbolo da Covid"
      height={75}
      width={235}
    />
  );
};

export default LogoHorizontal;
