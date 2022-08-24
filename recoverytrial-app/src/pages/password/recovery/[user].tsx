import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import Error from "../../../components/Error";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import Input from "../../../components/Input";
import LogoName from "../../../components/logos/LogoName";
import Label from "../../../components/Label";

interface Props { }

const Recover = (props: Props) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRecover = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais");
    }

    if (!password || !confirmPassword) {
      setError("Preencha todos os campos");
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
