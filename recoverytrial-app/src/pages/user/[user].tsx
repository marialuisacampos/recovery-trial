import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Input from "../../components/Input";
import ProtectedLayout from "../../components/ProtectedLayout";

export default function User() {
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
                />

                <label htmlFor="fieldLastName"> Sobrenome </label>
                <input type="text" id="fieldLastName" />

                <label htmlFor="fildMail"> Email </label>
                <input type="mail" className="lg:w-80" id="fieldMail" />

                <label htmlFor="fildNumber"> Número </label>
                <input type="text" id="fieldNumber" />
              </div>

              <div className="flex flex-col gap-1 mt-3">
                <label htmlFor="fieldNewPassword"> Nova senha </label>
                <input
                  type="password"
                  className="md:w-80 lg:w-80"
                  id="fieldNewPassword"
                />

                <label htmlFor="fildNewPasswordC">
                  {" "}
                  Confirmação de senha{" "}
                </label>
                <input type="password" id="fieldNewPasswordC" />

                <button
                  className="md:mt-28 lg:mt-28 mt-10 m-auto bg-blue-200 rounded-3xl w-40 h-8 hover:bg-blue-100
                                transition duration-75"
                >
                  <p className="text-white">Salvar</p>
                </button>
              </div>
            </div>
            <p className="-mr- font-bold text-blue-200 text-lg">
              Seus treinamentos
            </p>
            <div className="lg:w-3/4 lg:h-1/4 flex lg:flex-row flex-col border-t-2  border-pink-100"></div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="m-auto bg-blue-200 rounded-3xl w-40 h-8 hover:bg-blue-100
                                transition duration-75 my-4 text-white"
          >
            Sair
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}