import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
const Player = dynamic(() => import("./Player"), {
  ssr: false,
});

type Props = {};

const Video = (props: Props) => {
  return (
    <div className="flex-1">
      <div className="bg-white text-slate-500 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto bg-gray-400">
        <div className="md:flex md:items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-200">
              Titulo do vídeo
            </h1>
            <p className="mt-4 leading-relaxed">Descrição do vídeo aqui</p>
          </div>

          <div className="mt-4">
            <a
              href=""
              className="p-4 text-sm bg-pink-100 text-white flex items-center rounded font-bold uppercase gap-2 justify-center transition-colors"
            >
              Marcar como concluida
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
