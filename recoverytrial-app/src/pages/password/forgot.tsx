import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";

interface Props {}

const Forgot = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleForgot = (e: any) => {
    e.preventDefault();
    if (!email) {
      setError("Preencha o seu email.");
      return;
    }
  };

  return (
    <main>
      <Header />
      <div className="bg-gray-300 flex flex-col max-w-[246px] m-auto pt-8 rounded-xl justify-center items-center md:max-w-sm px-8 text-center">
        <form className="flex flex-col max-w-xs text-sm gap-2 md:text-base">
          <h2 className="font-bold">Problemas para entrar?</h2>
          <label className="my-2">
            Digite seu email e te enviaremos um link para recuperar a sua senha
          </label>
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
  );
};

export default Forgot;
