import React from "react";
import img_doctor from "./doctor-img.webp";
import { useTranslation } from "react-i18next";
function Doctor() {
  const { t } = useTranslation();
  const { title, description } = t("Doctor");
  return (
    <section id="Doctor" className="mt-44">
      <div className="max-w-7xl md:mx-auto bg-white rounded-3xl doctor_div shadow-md mx-6">
        <h2 className="font-bold text-3xl text-center py-9">{title}</h2>
        <div className="">
          <img src={img_doctor} alt="doctor" className="w-96 mx-auto m-10" loading="lazy" />
        </div>
        <p className="md:px-32 px-5 text-center py-7">{description}</p>
      </div>
    </section>
  );
}

export default Doctor;
