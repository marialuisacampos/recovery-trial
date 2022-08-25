
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Forca from "../../components/cards/Muscular";
import Aerobio from "../../components/cards/Breath";
import Dualtask from "../../components/cards/Memory";
import Equilibrio from "../../components/cards/Balance";
import Flexibilidade from "../../components/cards/Flexibility";
import axios from "axios";
import Link from "next/link";
import Image from "next/image"
import { useAuth } from "../../context/AuthProvider/useAuth";

interface Props {
  links: any
  treinos: string[]
}

export default function Main({ treinos, links }: Props) {
  const auth = useAuth()

  const isForca = treinos.includes("forca")
  const isFlexibilidade = treinos.includes("flexibilidade")
  const isEquilibrio = treinos.includes("equilibrio")
  const isDualtask = treinos.includes("dualtask")
  const isAerobio = treinos.includes("aerobio")

  return (
    <div>
      <div className="flex bg-blue-300 justify-center items-center pb-10">
        <Navbar />
        <div className="bg-gray-300 flex flex-col max-w-[350px] m-auto mt-40 pt-4 px-8 rounded-xl justify-center items-center pb-4 md:pb-2 md:max-w-4xl">
          <h1 className="text-center text-xl md:text-2xl text-pink-100 mb-8">{`Oi! Vamos nos movimentar? Estes foram os treinos indicados para você:`}</h1>
          <div className="flex gap-4 flex-wrap justify-center items-center">

            {
              isForca && (
                <Link href={`/training/forca/${links["forca"]}`}>
                  <div className="cursor-pointer">
                    <h2 className="title">Treinos de Força</h2>
                    <Forca />
                  </div>
                </Link >
              )
            }
            {
              isFlexibilidade && (
                <Link href={`/training/flexibilidade/${links["flexibilidade"]}`}>
                  <div className="cursor-pointer">
                    <h2 className="title">Treinos de Flexibilidade</h2>
                    <Flexibilidade />
                  </div>
                </Link >
              )
            }
            {
              isEquilibrio && (
                <Link href={`/training/equilibrio/${links["equilibrio"]}`}>
                  <div className="cursor-pointer">
                    <h2 className="title">Treinos de Equilibrio</h2>
                    <Equilibrio />
                  </div>
                </Link>
              )
            }
            {
              isDualtask && (
                <Link href={`/training/dualtask/${links["dualtask"]}`}>
                  <div className="cursor-pointer">
                    <h2 className="title">Treinos Dual Task</h2>
                    <Dualtask />
                  </div>
                </Link>
              )
            }
            {
              isAerobio && (
                <Link href={`/training/aerobio/${links["aerobio"]}`}>
                  <div className="cursor-pointer">
                    <h2 className="title">Treinos de Aeróbio</h2>
                    <Aerobio />
                  </div>
                </Link>
              )
            }
          </div>
        </div>

      </div>
      <Footer />
    </div >
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = context.params.user;

  let treinos = ["flexibilidade", "forca"]
  let links = {
    flexibilidade: "",
    forca: "",
    dualtask: "",
    aerobio: "",
    equilibrio: ""
  }

  const token = context.req.cookies["token"]

  const userRequest = await axios.get(`http://localhost:3001/users/${user}`, {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  })

  if (userRequest.data.perda_de_memoria) {
    treinos.push("dualtask")
    const fetchVideos = await axios.get(`http://localhost:3001/videos/dualtask`, {
      headers: {
        'authorization': `Bearer ${token}`,
      },
    });
    links["dualtask"] = fetchVideos.data[0].videoId
  }

  if (userRequest.data.dificuldade_respiratoria) {
    treinos.push("aerobio")
    const fetchVideos = await axios.get(`http://localhost:3001/videos/aerobio`, {
      headers: {
        'authorization': `Bearer ${token}`,
      },
    });
    links["aerobio"] = fetchVideos.data[0].videoId
  }

  if (userRequest.data.acidente_em_12_meses) {
    treinos.push("equilibrio")
    const fetchVideos = await axios.get(`http://localhost:3001/videos/equilibrio`, {
      headers: {
        'authorization': `Bearer ${token}`,
      },
    });
    links["equilibrio"] = fetchVideos.data[0].videoId
  }

  const fetchVideosFlexibilidade = await axios.get(`http://localhost:3001/videos/flexibilidade`, {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });
  links["flexibilidade"] = fetchVideosFlexibilidade.data[0].videoId

  const fetchVideosForca = await axios.get(`http://localhost:3001/videos/forca`, {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });
  links["forca"] = fetchVideosForca.data[0].videoId

  return {
    props: {
      treinos,
      links
    },
  };

}