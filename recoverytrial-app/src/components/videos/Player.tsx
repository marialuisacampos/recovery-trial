import React from "react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

interface Props {
  videoId: string;
}

const PlayerVideo = ({ videoId }: Props) => {
  return (
    <Player>
      <Youtube videoId={videoId} />
      <DefaultUi />
    </Player>
  );
};

export default PlayerVideo;
