import React, { useEffect, useState } from "react";
import Header from "../../../components/Navbar";
import Sidebar from "../../../components/videos/Sidebar";
import Video from "../../../components/videos/Video";
import { useRouter } from "next/router";
import ProtectedLayout from "../../../components/ProtectedLayout";
import axios from "axios";
import { useAuth } from "../../../context/AuthProvider/useAuth";

type Props = {};

const Videos = (props: Props) => {
  useAuth();
  const [videos, setVideos] = useState<any>([]);
  const [video, setVideo] = useState<any>([]);

  const router = useRouter();
  const { category, exercise } = router.query;
  console.log(category, exercise)

  const fetchVideos = async () => {
    const userLogged = localStorage.getItem("u");
    const userLoggedObject = JSON.parse(userLogged!);
    const fetchallVideos = await axios.get(`http://localhost:3001/videos/${category}`, {
      headers: {
        'authorization': `Bearer ${userLoggedObject.token}`,
      },
    });
    setVideos(fetchallVideos.data)

    const fetchVideo = await axios.get(`http://localhost:3001/videos/${category}/${exercise}`, {
      headers: {
        'authorization': `Bearer ${userLoggedObject.token}`,
      },
    });
    setVideo(fetchVideo.data);
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <div className="flex flex-col min-h-screen pb-20 pt-36">
      <Header />
      <main className="sm:flex sm:flex-1">
        <Video video={video} />
        <Sidebar category={category} videos={videos} />
      </main>
    </div>
  );
};

export default Videos;
