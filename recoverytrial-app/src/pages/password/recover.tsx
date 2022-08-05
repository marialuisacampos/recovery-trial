import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Error from "../../components/Error";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Input from "../../components/Input";

interface Props {}

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
      <Header />
      <main>
        <div className="bg-gray-300 flex flex-col max-w-[246px] m-auto pt-8 rounded-xl justify-center items-center md:pb-2 md:max-w-sm">
          <form className="flex flex-col max-w-xs text-sm gap-2 md:text-base">
            <label>Nova senha</label>
            <Input
              Type="password"
              Value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            />
            <label>Confirme a senha</label>
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
