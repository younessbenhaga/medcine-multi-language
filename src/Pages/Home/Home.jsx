import React from "react";
import image_home from "./../../assets/banner_img.png";
import { useTranslation } from "react-i18next";
import "./../../index.css";
function Home() {
  const { t } = useTranslation();
  const { hom1, hom2, hom3 } = t("Home");
  return (
    <section id="Home" className="md:pt-40 pt-20 min-h-96">
      <section className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        <div className="pt-20 p-10 text-center md:text-left">
          <h5 className="font-bold">{hom1}</h5>
          <h1 className="font-bold md:text-5xl text-3xl">{hom2}</h1>
          <p className=" text-gray-600 md:p-4 md:ps-0">{hom3}</p>
          <button className="px-6 py-4 mt-10 btn_1 text-white uppercase rounded-md">
            {t("btn")}
          </button>
        </div>
        <div>
          <img className="p-5" src={image_home} alt="banner" loading="lazy" />
        </div>
      </section>
    </section>
  );
}

export default Home;
