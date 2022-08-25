import React, { useEffect, useState } from "react";
import Header from "../../../components/Navbar";
import Sidebar from "../../../components/videos/Sidebar";
import Video from "../../../components/videos/Video";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { getUserLocalStorage } from "../../../context/AuthProvider/util";
import 'dotenv/config';
import { GetServerSideProps } from "next";

interface Props {
  videos: any
  video: any
  category: any
};

export default function Videos({ videos, video, category }: Props) {
  useAuth();


  const router = useRouter();


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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const category = context.params?.category;
  const exercise = context.params?.exercise;

  let videos = []
  let video

  const token = context.req.cookies["token"]

  const fetchallVideos = await axios.get(`${process.env.NEXT_PUBLIC_API}/videos/${category}`, {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });
  videos = fetchallVideos.data

  const fetchVideo = await axios.get(`${process.env.NEXT_PUBLIC_API}/videos/${category}/${exercise}`, {
    headers: {
      'authorization': `Bearer ${token}`,
    },
  });
  video = fetchVideo.data

  return {
    props: {
      videos,
      video,
      category
    },
  };
}
