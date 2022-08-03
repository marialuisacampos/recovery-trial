import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }
  };

  useEffect(() => {
    setError("");
  }, []);

  return (
    <div>
      <Header />
      <main>
        <img></img>
        <div className="bg-gray-300 flex flex-col max-w-[246px] m-auto pt-8 rounded-xl justify-center items-center md:max-w-sm">
          <form className="flex flex-col max-w-xs text-sm gap-2 md:text-base">
            <label className="">Email</label>
            <Input
              Type="text"
              Value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            />
            <label>Senha</label>
            <Input
              Type="password"
              Value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <Error Message={error} />
            <Button Type="submit" Text="Entrar" onClick={handleLogin} />
          </form>

          <a className="text-xs underline mt-2 md:text-sm" href="#">
            Esqueci a senha
          </a>

          <div className="py-4">
            <a
              href="#"
              className="text-xs mt-2 bg-blue-200 rounded-xl py-2 px-4 text-gray-300 md:py-2 md:px-8 md:text-base"
            >
              Não tem uma conta?{" "}
              <span className="text-gray-300 font-bold">Registre-se</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
