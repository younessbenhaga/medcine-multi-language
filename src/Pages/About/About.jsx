import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import img1 from "./img1.jpg";
import img2 from "./img2.jpeg";
import img3 from "./img6.webp";
import img4 from "./img7.webp";
import img5 from "./img8.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section id="About" className="py-6 overflow-hidden z-0">
      <div className="max-w-7xl mx-auto my-10">
        <h2 className="font-bold text-3xl text-center">{t("About")}</h2>
        <Slider {...settings} className="py-14 my-7 z-0">
          <div className="p-3 rounded-lg">
            <img
              src={img1}
              className="w-full h-60 object-cover rounded-lg"
              alt="img1"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <img
              src={img2}
              className="w-full h-60 object-cover rounded-lg"
              alt="img2"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <img
              src={img3}
              className="w-full h-60 object-cover rounded-lg"
              alt="img3"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <img
              src={img4}
              className="w-full h-60 object-cover rounded-lg"
              alt="img4"
              loading="lazy"
            />
          </div>
          <div className="p-3">
            <img
              src={img5}
              className="w-full h-60 object-cover rounded-lg"
              alt="img5"
              loading="lazy"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default About;
