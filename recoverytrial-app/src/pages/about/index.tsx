import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className="pb-20 pt-44">
        <div className="containerBig">
          <h1 className="font-extrabold text-blue-200 text-2xl md:text-4xl pb-4 md:pb-8 pt-4">
            Recovery Trial
          </h1>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sunt quam possimus? Consectetur hic, excepturi debitis nobis fugit,
            distinctio modi omnis placeat vitae iste blanditiis atque
            aspernatur. Sed, dicta nam. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Temporibus sunt quam possimus? Consectetur hic,
            excepturi debitis nobis fugit, distinctio modi omnis placeat vitae
            iste blanditiis atque aspernatur. Sed, dicta nam. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Temporibus sunt quam
            possimus? Consectetur hic, excepturi debitis nobis fugit, distinctio
            modi omnis placeat vitae iste blanditiis atque aspernatur. Sed,
            dicta nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus sunt quam possimus? Consectetur hic, excepturi debitis
            nobis fugit, distinctio modi omnis placeat vitae iste blanditiis
            atque aspernatur. Sed, dicta nam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus sunt quam possimus?
            Consectetur hic, excepturi debitis nobis fugit, distinctio modi
            omnis placeat vitae iste blanditiis atque aspernatur. Sed, dicta
            nam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus sunt quam possimus? Consectetur hic, excepturi debitis
            nobis fugit, distinctio modi omnis placeat vitae iste blanditiis
            atque aspernatur. Sed, dicta nam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Temporibus sunt quam possimus?
            Consectetur hic, excepturi debitis nobis fugit, distinctio modi
            omnis placeat vitae iste blanditiis atque aspernatur. Sed, dicta
            nam.{" "}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default index;
