import React from "react";
import { DefaultUi, Player, Youtube } from "@vime/react";
import "@vime/core/themes/default.css";

type Props = {};

const PlayerVideo = (props: Props) => {
  return (
    <Player>
      <Youtube videoId="7N9IIOIxu8w" />
      <DefaultUi />
    </Player>
  );
};

export default PlayerVideo;
