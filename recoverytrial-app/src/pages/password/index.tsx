import React, { useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import LogoName from "../../components/logos/LogoName";
import axios from "axios";
import { useRouter } from "next/router"
import 'dotenv/config';

interface Props { }

const Forgot = (props: Props) => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [sucesso, setSucesso] = useState<string>("");

  const handleForgot = async (e: any) => {
    e.preventDefault();

    if (!email) {
      setError("Preencha o seu email");
      return;
    }

    const response = await axios.post(`${process.env.API}/email/send`, {
      to: email,
      from: "recoverytrialapp@hotmail.com",
      subject: "Recuperação de senha",
      text: `Acesse este link para recuperar a sua senha: https://www.recoverytrial.com/password/recovery/${email}`
    })

    if (response.status == 200) {
      setError("")
      setSucesso("Pronto! Confira seu email.")
      setTimeout(() => router.push("/"), 3000)
    } else {
      setError("Algo deu errado.")
    }
  };

  return (
    <div>
      <Navbar />
      <main>
        <div className="bg-gray-300 flex flex-col max-w-[300px] mt-56 mb-44 m-auto px-8 rounded-xl justify-center items-center md:pb-2 md:max-w-sm pt-4">
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
            <span className="text-green-600 mb-2 text-center">{sucesso}</span>
            <Button Type="submit" onClick={handleForgot} Text="Enviar" />
          </form>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Forgot;
