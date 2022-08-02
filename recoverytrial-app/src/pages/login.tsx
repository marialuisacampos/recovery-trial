import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
        <div className="bg-gray-300">
          <form>
            <label className="">Email</label>
            <input type="text"></input>
            <label>Senha</label>
            <input type="password"></input>
            <button type="submit">Entrar</button>
          </form>
          <a href="#">Esqueci a senha</a>
        </div>
        <div>
          <a href="#">Registre-se</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
