import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import LogoName from "../../components/logos/LogoName";
import Label from "../../components/Label";

const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos.");
    }
  };

  useEffect(() => {
    setError("");
  }, []);
  return (
    <div>
  
      <div className="mb-20">
        <Navbar />
        <main className="">
          <div className="bg-gray-300 flex flex-col max-w-[300px] mx-auto pt-2 rounded-xl justify-center items-center md:pb-2 md:max-w-sm">
            <LogoName />
            <form className="flex flex-col max-w-xs gap-2 pt-4">
              <Label Children="Email" />
              <Input
                Type="text"
                Value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
              <Label Children="Senha" />
              <Input
                Type="password"
                Value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
              />
              <Error Message={error} />
              <Button Type="submit" Text="Entrar" onClick={handleLogin} />
            </form>

            <a className="underline text-base" href="#">
              Esqueci a senha
            </a>

            <div className="py-4 md:py-8">
              <a
                href="#"
                className=" bg-blue-200 rounded-xl py-2.5 px-4 text-gray-300 md:py-4 md:px-8 text-base"
              >
                Não tem uma conta?{" "}
                <span className="text-gray-300 font-bold">Registre-se</span>
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
