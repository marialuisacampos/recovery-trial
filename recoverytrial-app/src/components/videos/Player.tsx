import React from "react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

interface Props {
  videoId?: any;
}

const PlayerVideo = ({ videoId }: Props) => {
  return (
    <Player autoplay={true}>
      <Youtube videoId={videoId} />
      <DefaultUi />
    </Player>
  );
};

export default PlayerVideo;
