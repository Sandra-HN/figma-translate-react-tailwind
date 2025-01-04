import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink for all navigation links
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faLanguage,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../public/assets/images/logo.png"; // Ensure the path is correct

const Header = () => {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Monthly");
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || "dark";
    setTheme(currentTheme);
    document.documentElement.className = currentTheme;

    const currentLang = localStorage.getItem("language") || "en";
    i18n.changeLanguage(currentLang);
  }, [i18n]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.className = newTheme;
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  };
  const changePlan = (plan) => {
    setSelectedPlan(plan);
  };
  return (
    <header className="bg-navbg text-white p-4 flex justify-between items-center">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-3 md:gap-0">
        <div className="w-full md:w-1/3 flex items-center">
          <img src={logo} alt={t("Logo")} className="h-16 w-auto mr-6" />
          <div className="border-l border-l-white/20">
            <p className="text-2xl pl-6 font-bold font-SohneDreiviertel">
              Pro Plans
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center">
          <div className="box-border flex items-center p-3 gap-3 border border-white/20 rounded-[57px]">
            <button
              className={`box-border flex items-center justify-center px-4 py-3 gap-[10px] h-10 w-40 rounded-38 transition-all duration-600 ease-in-out ${
                selectedPlan === "Monthly" ? "bg-white/25" : "bg-none"
              }`}
              onClick={() => {
                changePlan("Monthly");
              }}
            >
              Monthly
            </button>
            <button
              className={`box-border flex items-center justify-center px-4 py-3 gap-[10px] h-10 w-40 rounded-38 transition-all duration-600 ease-in-out ${
                selectedPlan === "Annual" ? "bg-white/25" : "bg-none"
              }`}
              onClick={() => {
                changePlan("Annual");
              }}
            >
              Annual
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-end">
          <button className="font-SohneBuch text-sm text-white flex items-center px-4 py-2 gap-2 h-10 w-24 bg-bgBlack rounded-35 shadow-custom">
            <FontAwesomeIcon icon={faXmark} size="19" />
            Close
          </button>
        </div>
        {/* <div className="hidden md:flex z-50">
          <NavLink
            to="/"
            className="px-2 py-1 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
          >
            {t("Home")}
          </NavLink>
          <NavLink
            to="/about"
            className="px-2 py-1 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
          >
            {t("About")}
          </NavLink>
          <NavLink
            to="/profile"
            className="px-2 py-1 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
          >
            {t("Profile")}
          </NavLink>
        </div>
        <nav
          className={`
            z-50
            absolute md:relative
            top-16 left-0 md:top-0
            w-full md:w-auto
            bg-gray-800 md:bg-transparent
            transition-opacity duration-600 ease-in-out
            md:hidden block
            ${
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }
          `}
        >
          <NavLink
            to="/"
            className="block px-4 py-2 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            {t("Home")}
          </NavLink>
          <NavLink
            to="/about"
            className="block px-4 py-2 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            {t("About")}
          </NavLink>
          <NavLink
            to="/profile"
            className="block px-4 py-2 hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#ef4444" : "white",
            })}
            onClick={() => setIsMenuOpen(false)}
          >
            {t("Profile")}
          </NavLink>
        </nav> */}
      </div>

      {/* <div className="flex items-center">
        <button onClick={toggleTheme} className="px-4 py-2 rounded">
          <FontAwesomeIcon
            icon={theme === "light" ? faMoon : faSun}
            color={theme === "light" ? "black" : "yellow"}
          />
        </button>
        <button
          onClick={() => changeLanguage(i18n.language === "en" ? "ar" : "en")}
          className="mx-2 px-4 py-2 rounded"
        >
          <FontAwesomeIcon icon={faLanguage} color="gray" />
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white px-4"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div> */}
    </header>
  );
};

export default Header;
