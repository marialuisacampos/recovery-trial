import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="pb-20 pt-44">
        <div className="containerBig">
          <h1 className="font-extrabold text-blue-200 text-2xl md:text-4xl pb-4 md:pb-8 pt-4">
            Recovery Trial
          </h1>
          <p className="text-sm md:text-base">
            Prezados, bem vindo ao Recovery App. Esta é uma plataforma construída para lhe ajudar na realização de exercícios físicos sem a supervisão direta de um profissional de Educação Física. Sabemos que após o COVID é comum a existência de alguns problemas, como: fraqueza muscular, cansaço, aumento do estresse e ansiedade, como também perda de memória. Portanto, os exercícios poderão auxiliar nisso. Sigam as instruções e mantenha sua saúde em dia.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
