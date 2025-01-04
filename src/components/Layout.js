import React from "react";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  // Determine the direction based on the current language
  const direction = i18n.language === "ar" ? "rtl" : "ltr";
  const tabs = [
    { label: "GPT-4", link: "/GPT4" },
    { label: "GPT-3.5", link: "/GPT3" },
    { label: "Gemini", link: "/Gemini" },
    { label: "Mistral MOE", link: "/MistralMOE" },
    { label: "Flexi", link: "/Flexi" },
    { label: "BYOM/BYOI", link: "/BYOMBYOI" },
  ];
  return (
    <div
      className={`flex flex-col gap-4 min-h-screen w-full bg-bgBlack `}
      dir={direction}
    >
      <Header />

      <main className="pt-4 pl-4 flex flex-wrap md:flex-nowrap gap-4 ">
        <SideBar />
        <div className="flex flex-col gap-4 items-start justify-start w-full h-fit pr-4">
          <div className="flex flex-wrap gap-4 w-full md:h-14">
            <button className="w-fit md:w-2/12 font-SohneBuch bg-white text-navbg text-sm flex justify-center items-center py-2 px-6 gap-2 md:h-14 shadow-custom2 rounded-35 self-stretch">
              Start with free tier
            </button>

            <div className="w-full md:w-6/12 md:h-14 flex justify-center">
              <div className="max-w-full overflow-x-auto md:overflow-hidden  md:min-w-[600px] w-fit flex box-border items-center p-3 gap-3 md:h-14 border border-white/20 rounded-57">
                {tabs?.map((tab, i) => (
                  <button
                    className={`border border-bgBlack transition-all duration-600 ease-in-out flex box-border justify-center items-center py-3 px-4 gap-[10px] h-10 min-w-fit text-white rounded-38 font-SohneBuch text-sm  ${
                      window.location.pathname === tab.link
                        ? "bg-white/25"
                        : "bg-none hover:border-white"
                    }`}
                    onClick={() => {
                      console.log(window.location.pathname, tab.link);
                      navigate(tab.link);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <button className="w-fit md:w-2/12 font-SohneBuch bg-white text-navbg text-sm flex justify-center items-center py-2 px-6 gap-2 md:h-14 shadow-custom2 rounded-35 self-stretch">
              Contact for Custom Plan
            </button>
          </div>
          <div className="w-full h-0 border border-white/20 self-stretch" />
          {children}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
