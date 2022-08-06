import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import LogoName from "../../components/logos/LogoName";

interface Props {}

const Forgot = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleForgot = (e: any) => {
    e.preventDefault();
    if (!email) {
      setError("Preencha o seu email");
      return;
    }
  };

  return (
    <div>
      <Navbar />
      <main className="">
        <div className="bg-gray-300 flex flex-col max-w-[300px] m-auto pt-4 px-8 rounded-xl justify-center items-center md:pb-2 md:max-w-sm pb-4">
          <LogoName />
          <form className="flex flex-col max-w-xs gap-2 pt-4">
            <h2 className="font-bold mx-2">Problemas para entrar?</h2>
            <p className="mx-2">
              Digite seu email e te enviaremos um link para recuperar a sua
              senha
            </p>
            <Input
              Type="text"
              Value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <Error Message={error} />
            <Button Type="submit" onClick={handleForgot} Text="Enviar" />
          </form>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Forgot;
