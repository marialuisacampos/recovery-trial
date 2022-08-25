import React from "react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";
import ReactPlayer from "react-player"

interface Props {
  videoId?: any;
}

const PlayerVideo = ({ videoId }: Props) => {
  return (
    <div className="relative pt-[56.25%]">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${videoId}`} className="absolute top-0 left-0" width="100%" height="100%" playing={true} />
    </div>
  );
};

export default PlayerVideo;
