import React from "react";
import Header from "../../components/Navbar";
import Sidebar from "../../components/videos/Sidebar";
import Video from "../../components/videos/Video";

type Props = {};

const Videos = (props: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="sm:flex sm:flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};

export default Videos;
