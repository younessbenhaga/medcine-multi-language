import React from "react";
import { useTranslation } from "react-i18next";
import servi from "./service.png";
import servi1 from "./cardiogram-svgrepo-com.svg";
import servi2 from "./dental-drill-svgrepo-com.svg";
import servi3 from "./pill-svgrepo-com.svg";
import servi4 from "./le-coeur-bat-la-bouee-de-sauvetage-dans-un-coeur (1).png";
function Services() {
  const { t } = useTranslation();
  const {
    title,
    titleOne,
    descOne,
    titleTwo,
    descTwo,
    titleThree,
    descThree,
    titleFour,
    descFour,
  } = t("Services");
  return (
    <section id="Services" className="py-6">
      <div className="max-w-7xl mx-auto my-10">
        <h2 className="font-bold text-3xl text-center py-10 mb-8">{title}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <h4 className="flex items-center p-4 text-xl">
                <span className="rounded-full p-3 bg-[#f3f9fe] me-5">
                  <img src={servi4} className="w-8" alt="" loading="lazy" />
                </span>
                {titleOne}
              </h4>
              <p className="ps-4 pt-0 text-gray-600">{descOne}</p>
            </div>
            <div>
              <h4 className="flex items-center p-4 text-xl">
                <span className="rounded-full p-3 bg-[#f3f9fe] me-5">
                  <img src={servi4} className="w-8" alt="" loading="lazy" />
                </span>
                {titleThree}
              </h4>
              <p className="ps-4 pt-0 text-gray-600">{descThree}</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-4">
            <img src={servi} alt="services" loading="lazy" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <div>
              <h4 className="flex items-center p-4 text-xl">
                <span className="rounded-full p-3 bg-[#f3f9fe] me-5">
                  <img src={servi4} className="w-8" alt="" loading="lazy" />
                </span>
                {titleTwo}
              </h4>
              <p className="ps-4 pt-0 text-gray-600">{descTwo}</p>
            </div>
            <div>
              <h4 className="flex items-center p-4 text-xl">
                <span className="rounded-full p-3 bg-[#f3f9fe] me-5">
                  <img src={servi4} className="w-8" alt="" loading="lazy" />
                </span>
                {titleFour}
              </h4>
              <p className="ps-4 pt-0 text-gray-600">{descFour}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
