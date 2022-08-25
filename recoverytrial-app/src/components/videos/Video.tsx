import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
const Player = dynamic(() => import("./Player"), {
  ssr: false,
});

interface Props {
  video?: any;
}

const Video = ({ video }: Props) => {
  return (
    <div className="flex-1">
      <div className=" text-slate-500 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player videoId={video.videoId} />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto bg-gray-400">
        <div className="md:flex md:items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-200">{video.titulo}</h1>
            <p className="mt-4 leading-relaxed">{`Treino de ${video.categoria} de nível ${video.nivel}`}</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
