import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import ProtectedLayout from "../../components/ProtectedLayout";
import axios from "axios";
import { getUserLocalStorage } from "../../context/AuthProvider/util";
import Button from "../../components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../../context/AuthProvider/useAuth";

export default function User() {
  const auth = useAuth()
  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [telefone, setTelefone] = useState<string>("")
  const [sucesso, setSucesso] = useState<string>("")

  const handleUpdate = async (e: any) => {
    e.preventDefault()

    const userLogged = getUserLocalStorage()
    const responseGetUser = await axios.get(`https://recovery-app-ufrpe.herokuapp.com/users/${userLogged!.user}`, {
      headers: {
        'authorization': `Bearer ${userLogged!.token}`,
      }
    })

    const userData = responseGetUser.data

    const responseUpdateUser = await axios.put("https://recovery-app-ufrpe.herokuapp.com/users/update/", {
      id: userData.id,
      nome,
      email,
      telefone,
    }, {
      headers: {
        'authorization': `Bearer ${userLogged!.token}`,
      }
    })

    if (responseUpdateUser.status == 200) {
      setSucesso("Usuário atualizado com sucesso")
    }
  }

  const handleLogout = async (e: any) => {
    e.preventDefault()

    auth.logout()

    router.push("/")
  }

  const router = useRouter()
  const { user } = router.query

  return (
    <div>
      <Navbar />
      <main className="pt-40">
        <div className="bg-black h-screen flex flex-row">
          <div className="bg-gray-400 w-screen flex flex-col items-center ">
            <p className="mt-10 mr- font-bold text-blue-200 text-lg">
              Informações pessoais
            </p>

            <div
              className=" md:w-3/4 md:flex-row md:gap-11 lg:w-3/4 lg:h-80 flex lg:flex-row flex-col lg:gap-32 border-t-2 border-pink-100 justify-center items-center
                        mb-16"
            >
              <div className=" flex flex-col gap-1 mt-3">
                <label htmlFor="fieldName"> Nome </label>
                <input
                  type="text"
                  className="md:w-80 lg:w-80"
                  id="fieldName"
                  value={nome}
                  onChange={(e) => [setNome(e.target.value)]}
                />

                <label htmlFor="fildMail"> Email </label>
                <input type="mail" className="lg:w-80" id="fieldMail"
                  value={email}
                  onChange={(e) => [setEmail(e.target.value)]}
                />

                <label htmlFor="fildNumber"> Telefone </label>
                <input type="text" id="fieldNumber"
                  value={telefone}
                  onChange={(e) => [setTelefone(e.target.value)]}
                />
                <p className="text-green-500 my-4">{sucesso}</p>
              </div>

              <div className="flex flex-col gap-1 mt-3">

                <Button Text="Atualizar perfil" onClick={handleUpdate} Type="submit" />
              </div>

              <div className="underline text-pink-100 cursor-pointer mt-4">
                <Link href={`/main/${user}`}>
                  Conferir meus treinos
                </Link>
              </div>

              <div className="underline text-pink-100 cursor-pointer mt-4" onClick={handleLogout}>
                Sair da minha conta
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
