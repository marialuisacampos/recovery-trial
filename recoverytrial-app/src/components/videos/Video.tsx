import React, { useState, useRef } from "react";
import dynamic from "next/dynamic";
const Player = dynamic(() => import("./Player"), {
  ssr: false,
});

interface Props {
  videoId: string;
}

const Video = ({ videoId }: Props) => {
  return (
    <div className="flex-1">
      <div className="bg-white text-slate-500 flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player videoId={videoId} />
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto bg-gray-400">
        <div className="md:flex md:items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-blue-200">Treino xxxxx</h1>
            <p className="mt-4 leading-relaxed">Treino de xxxxx</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
