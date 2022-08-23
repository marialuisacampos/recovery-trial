import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import LogoName from "../components/logos/LogoName";
import Label from "../components/Label";
import Link from "next/link";
import { useAuth } from "../context/AuthProvider/useAuth";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const auth = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos.");
    }

    try {
      await auth.authenticate(email, password);
      router.push(`/main/${email}`);
    } catch (error) {
      console.log(error);
      setError("Email ou senha inválido.");
    }
  };

  useEffect(() => {
    setError("");
  }, []);
  return (
    <div className=" pt-44">
      <Navbar />
      <main className="pb-24">
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

          <Link href="/password">
            <span className="underline text-base cursor-pointer">
              Esqueci a senha
            </span>
          </Link>

          <Link href="/signup">
            <div className="py-4 md:py-8">
              <span className=" bg-blue-200 rounded-xl py-2.5 px-4 text-gray-300 md:py-4 md:px-8 text-base cursor-pointer">
                Não tem uma conta?{" "}
                <span className="text-gray-300 font-bold">Registre-se</span>
              </span>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
