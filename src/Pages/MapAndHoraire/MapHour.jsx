import React, { useEffect, useState } from "react";
import "./app.css";
import { useTranslation } from "react-i18next";
// import clock from "./clock-regular.svg";

function MapHour() {
  const { t } = useTranslation();
  const { title, hours1, i1, i2, i3, i4,times1 } = t("MapHour");
  const [now, setNow] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const weekday = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const hours = {
    Lundi: ["8:30", "14:00", "16:00", "18:30"],
    Mardi: ["8:30", "14:00", "16:00", "18:30"],
    Mercredi: ["8:30", "14:00", "16:00", "18:30"],
    Jeudi: ["8:30", "14:00", "16:00", "18:30"],
    Vendredi: ["8:30", "14:00", "16:00", "18:30"],
    Samedi: ["Sur rendez-vous"],
    Dimanche: ["Fermé"],
  };

  const today = weekday[now.getDay()];
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const suffix = hour >= 12 ? "PM" : "AM";
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  const isOpenToday =
    (dayOfWeek >= 1 &&
      dayOfWeek <= 5 &&
      ((hour >= 8 && hour < 14) || (hour >= 16 && hour < 18.5))) ||
    (dayOfWeek === 6 && false) || // Adjusted for "Sur rendez-vous"
    (dayOfWeek === 0 && false); // Adjusted for "Fermé"

  const timeMessage = `${i1} ${today} ${
    ((hour + 11) % 12) + 1
  }:${formattedMinutes}${suffix} - ${i2} ${isOpenToday ? `${i3}` : `${i4}`}!`;
  const timeClass = isOpenToday ? "open" : "closed";
  return (
    <section className="my-8 pb-5">
      <section className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
            <h3 className="text-center text-xl py-5 font-bold">Map</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55450.3762497101!2d-9.771726565703666!3d29.700968474860677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb479f80a0432e5%3A0x4de7b30202dab839!2sTiznit%2085000!5e0!3m2!1sfr!2sma!4v1718833445098!5m2!1sfr!2sma"
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>
          <div className="">
            <h3 className="text-center text-xl py-5 font-bold">{title}</h3>
            <div id="main1" className="p-3">
              <div id="timeDiv" className={timeClass}>
                {timeMessage}
              </div>
              <label className="viewOpen mx-auto my-6" htmlFor="modal-state">
                {hours1} &nbsp;&nbsp;
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgba(70, 70, 70, 0.8)"
                    width={20}
                    viewBox="0 0 512 512"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                </span>
              </label>
              <input
                type="checkbox"
                name="modal-state"
                id="modal-state"
                checked={isOpen}
                onChange={() => setIsOpen(!isOpen)}
              />
              {isOpen && (
                <div className="modal-overlay">
                  <label
                    htmlFor="modal-state"
                    className="modal-overlay-close"
                    onClick={() => setIsOpen(false)}
                  ></label>
                  <div className="modal z-20">
                    <label
                      className="button-close"
                      htmlFor="modal-state"
                      onClick={() => setIsOpen(false)}
                    >
                      <i className="fa fa-times"></i>
                    </label>
                    <h2>{times1}</h2>
                    {weekday.map((day) => (
                      <div
                        key={day}
                        id={day}
                        className={`dateTime ${day === today ? "today" : ""}`}
                      >
                        <div className="day">{day}</div>
                        <div className="time">
                          {hours[day].length === 1
                            ? hours[day][0]
                            : `${hours[day][0]} - ${hours[day][1]} | ${hours[day][2]} - ${hours[day][3]}`}
                        </div>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default MapHour;
