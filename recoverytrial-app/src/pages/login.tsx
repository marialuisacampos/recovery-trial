import React, { useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";

interface Props {}

const Login = (props: Props) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!email || !password) {
      setError("Preencha todos os campos.");
    }
  };

  return (
    <div>
      <Header />
      <main>
        <img></img>
        <div className="bg-gray-300 flex flex-col max-w-[246px] m-auto pt-8 rounded-xl justify-center items-center">
          <form className="flex flex-col max-w-xs text-sm gap-2">
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
            <Button Type="submit" Text="Entrar" onClick={handleLogin} />
          </form>

          <a className="text-xs underline mt-4" href="#">
            Esqueci a senha
          </a>

          <div className="py-4">
            <a
              href="#"
              className="text-xs mt-2 bg-blue-200 rounded-xl py-2 px-4"
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
