<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState } from "react";
>>>>>>> 03c6020 (Add auth provider)
import { GetServerSideProps } from "next";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Muscular from "../../components/cards/Muscular";
import Breath from "../../components/cards/Breath";
import Memory from "../../components/cards/Memory";
<<<<<<< HEAD
import { useRouter } from "next/router";
import axios from "axios";
=======
>>>>>>> 03c6020 (Add auth provider)

type Props = {};

export default function Main() {
<<<<<<< HEAD
  const router = useRouter();
  const { user } = router.query;

  const fetchData = async () => {
    const userLogged = localStorage.getItem("u");
    const userLoggedObject = JSON.parse(userLogged!);
    console.log(userLoggedObject.token);
    const request = await axios.get(`http://localhost:3001/users/${user}`, {
      headers: {
        'authorization': `Bearer ${userLoggedObject.token}`,
      },
    });
    console.log(request);
  };

  useEffect(() => {
    fetchData();
  }, []);

=======
>>>>>>> 03c6020 (Add auth provider)
  return (
    <div>
      <Navbar />
      <div className="flex  h-screen bg-black justify-center items-center">
        <div className="bg-gray-600 mt-24 w-2/5 h-2/4 md:w-4/5 md:h-3/4 lg:w-4/5 lg:h-3/4 rounded-md ">
          {}
        </div>
      </div>

      <Footer />
    </div>
  );
}
