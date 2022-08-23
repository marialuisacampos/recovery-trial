import React from "react";
import Header from "../../../components/Navbar";
import Sidebar from "../../../components/videos/Sidebar";
import Video from "../../../components/videos/Video";
import { useRouter } from "next/router";
import ProtectedLayout from "../../../components/ProtectedLayout";

type Props = {};

const Videos = (props: Props) => {
  const router = useRouter();
  const { category, exercise } = router.query;

  return (
    <ProtectedLayout>
      <div className="flex flex-col min-h-screen pb-20 pt-36">
        <Header />
        <main className="sm:flex sm:flex-1">
          <Video videoId={exercise} />
          <Sidebar category={category} videoId={exercise} />
        </main>
      </div>
    </ProtectedLayout>
  );
};

export default Videos;
