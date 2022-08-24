
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Muscular from "../../components/cards/Muscular";
import Breath from "../../components/cards/Breath";
import Memory from "../../components/cards/Memory";
import { useRouter } from "next/router";
import axios from "axios";

type Props = {};

export default function Main() {
  const router = useRouter();
  const { user } = router.query;

  const [treinos, setTreinos] = useState<string[]>(["flexibilidade", "forca"])
  const [nivel, setNivel] = useState<string>()

  const fetchData = async () => {
    const userLogged = localStorage.getItem("u");
    const userLoggedObject = JSON.parse(userLogged!);

    const requestUser = await axios.get(`http://localhost:3001/users/${user}`, {
      headers: {
        'authorization': `Bearer ${userLoggedObject.token}`,
      },
    });

    const userData = requestUser.data;

    if (userData.perda_de_memoria) { treinos.push("dualtask") }

    if (userData.dificuldade_respiratoria) { treinos.push("aerobio") }

    if (userData.acidente_em_12_meses) { treinos.push("equilibrio") }

    userData.p_atividade_fisica ? setNivel("avancado") : setNivel("iniciante")
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex  h-screen bg-black justify-center items-center">
        <div className="bg-gray-600 mt-24 w-2/5 h-2/4 md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-3/4 rounded-md ">
          {nivel ? <p>{nivel}</p> : "Carregando"}
        </div>
      </div>

      <Footer />
    </div>
  )
}
