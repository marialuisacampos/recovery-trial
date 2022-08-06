import Image from "next/image";
import logoName from "../../assets/imgs/logoName.png";

import React from "react";

const LogoName = () => {
  return (
    <Image
      src={logoName}
      alt="Recovery Trial escrito em letra azul com um símbolo da Covid"
      height={50}
      width={166}
    />
  );
};

export default LogoName;
