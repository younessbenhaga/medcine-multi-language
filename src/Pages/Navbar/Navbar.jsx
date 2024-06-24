import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import usa from "./usa.webp";
import france from "./france.webp";

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [navBg, setNavBg] = useState("bg-transparent");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setNavBg("bg-white drop-shadow-lg");
    } else {
      setNavBg("bg-transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { nav1, nav2, nav3, nav4, nav5, nav6, nav7 } = t("navbar");

  return (
    <nav
      className={`fixed top-0 w-full transition-colors duration-300 z-50 ${navBg}`}
    >
      <div className="flex md:items-center justify-between py-5 px-7 text-black max-w-7xl mx-auto">
        <div className="text-lg font-bold">Logo</div>
        <div className="md:hidden">
          <button
            id="bouton"
            onClick={toggleMenu}
            className="focus:outline-none fixed right-4 top-4 w-8 h-8 bg-white cursor-pointer rounded-full opacity-60 transition-opacity duration-1000 hover:opacity-100"
          >
            <svg
              className="w-6 h-6 m-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:bg-transparent bg-white w-full md:w-auto hidden`}
        >
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav1}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav2}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav3}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav4}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav5}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav6}
          </a>
          <a
            href="#"
            className="md:inline-block p-2 hover:text-blue-700 transition-colors duration-500"
          >
            {nav7}
          </a>
        </div>
        <div className="hidden md:block">
          <button onClick={() => changeLanguage("en")}>
            <img className="w-7 mx-2 rounded-full" src={usa} alt="english" />
          </button>
          <button onClick={() => changeLanguage("fr")}>
            <img className="w-7 rounded-full" src={france} alt="france" />
          </button>
        </div>
      </div>
      <div
        id="volet"
        className={`absolute top-0 left-0 w-1/2 h-screen bg-white text-black transition-transform duration-1000 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="text-lg font-bold border-b-2 p-8">Logo</div>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav1}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav2}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav3}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav4}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav5}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav6}
        </a>
        <a
          href="#"
          className="block py-4 ps-5 hover:text-blue-700 transition-colors duration-500"
        >
          {nav7}
        </a>
        <div className="block p-6 md:hidden">
          <button onClick={() => changeLanguage("en")}>
            <img className="w-7 rounded-full" src={usa} alt="english" />
          </button>
          <button onClick={() => changeLanguage("fr")}>
            <img className="w-7 mx-2 rounded-full" src={france} alt="france" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
