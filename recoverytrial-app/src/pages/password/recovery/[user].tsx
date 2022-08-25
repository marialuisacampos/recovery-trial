import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Error from "../../../components/Error";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Input from "../../../components/Input";
import LogoName from "../../../components/logos/LogoName";
import Label from "../../../components/Label";
import { useRouter } from "next/router"
import axios from "axios";

interface Props { }

const Recover = (props: Props) => {
  const router = useRouter()
  const { user } = router.query;
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [sucesso, setSucesso] = useState<string>("");

  const handleRecover = async (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
    }

    if (!password || !confirmPassword) {
      setError("Preencha todos os campos");
    }

    const response = await axios.put(`https://recovery-app-ufrpe.herokuapp.com/users/password/${user}`, {
      senha: password
    })

    if (response.status == 200) {
      setSucesso("Senha alterada com sucesso.")
      setError("")
      setTimeout(() => router.push("/"), 3000)
    } else {
      setError("Algo deu errado.")
    }

  };

  return (
    <div>
      <Navbar />
      <main className="pb-20 pt-44">
        <div className="bg-gray-300 flex flex-col max-w-[300px] m-auto pt-4 rounded-xl justify-center items-center md:pb-2 md:max-w-sm pb-4">
          <LogoName />
          <form className="flex flex-col max-w-xs gap-2 pt-4">
            <Label Children="Nova senha:" />
            <Input
              Type="password"
              Value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <Label Children="Confirme a senha:" />
            <Input
              Type="password"
              Value={confirmPassword}
              onChange={(e) => [
                setConfirmPassword(e.target.value),
                setError(""),
              ]}
            />
            <Error Message={error} />
            <span className="text-green-600 mb-2 break-words text-center">{sucesso}</span>
            <Button
              Type="submit"
              Text="Alterar a senha"
              onClick={handleRecover}
            />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Recover;
