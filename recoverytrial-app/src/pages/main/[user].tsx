
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import forca from "../../../public/muscleCard.jpg";
import aerobio from "../../../public/breathCard.jpg";
import dualtask from "../../../public/memoryCard.jpg";
import equilibrio from "../../../public/balanceCard.jpg";
import flexibilidade from "../../../public/flexibilityCard.jpg";
import axios from "axios";
import Link from "next/link";
import Image from "next/image"

interface Props {
  links: any
  treinos: string[]
}

export default function Main({ treinos, links }: Props) {

  return (
    <div>
      <Navbar />
      <div className="flex  h-screen bg-blue-200 justify-center items-center">
        <div className="bg-gray-600 mt-24 w-2/5 h-2/4 md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-3/4 rounded-md ">
          {treinos.map((t) => (
            <Link href={`/training/${t}/${links[t]}`}>
              <Image src={`/${t}`} width="640px" height="75px" />
            </Link>
          ))
          }
        </div>
      </div>
      <Footer />
    </div>
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