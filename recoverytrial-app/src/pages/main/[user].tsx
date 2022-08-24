
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Muscular from "../../components/cards/Muscular";
import Breath from "../../components/cards/Breath";
import Memory from "../../components/cards/Memory";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

type Props = {};

export default function Main() {
  const router = useRouter();
  const { user } = router.query;

  const [treinos, setTreinos] = useState<string[]>(["flexibilidade", "forca"])
  const [links, setLinks] = useState<any>({})
  const [nivel, setNivel] = useState<string>()

  const fetchData = async () => {
    const userLogged = localStorage.getItem("u");
    const userLoggedObject = JSON.parse(userLogged!);
    await axios.get(`http://localhost:3001/users/${user}`, {
      headers: {
        'authorization': `Bearer ${userLoggedObject.token}`,
      },
    }).then(userData => {
      if (userData.data.perda_de_memoria) { treinos.push("dualtask") }
      if (userData.data.dificuldade_respiratoria) { treinos.push("aerobio") }
      if (userData.data.acidente_em_12_meses) { treinos.push("equilibrio") }
      userData.data.p_atividade_fisica ? setNivel("avancado") : setNivel("iniciante")
    }).then((data) => {
      treinos.forEach(async (treino: any) => {
        const fetchVideos = await axios.get(`http://localhost:3001/videos/${treino}`, {
          headers: {
            'authorization': `Bearer ${userLoggedObject.token}`,
          },
        });
        links[treino] = fetchVideos.data[0].videoId
      })
    })
  };

  useEffect(() => {
    fetchData();
  }, [() => fetchData()]);

  return (
    <div>
      <Navbar />
      {
        links.length > 1 ? (
          <div className="flex  h-screen bg-black justify-center items-center">
            <div className="bg-gray-600 mt-24 w-2/5 h-2/4 md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-3/4 rounded-md ">
              {treinos.map((t) => (
                <Link href={`/training/${t}/${links[t]}`}>{links[t]}</Link>
              ))
              }
            </div>
          </div>
        ) : (
          <div className="flex  h-screen bg-black justify-center items-center">
            <div className="bg-gray-600 mt-24 w-2/5 h-2/4 md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-3/4 rounded-md ">
              <p>Carregando...</p>
            </div>
          </div>
        )
      }
      <Footer />
    </div>
  )
}
