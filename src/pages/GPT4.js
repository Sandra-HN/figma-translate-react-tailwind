import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const HomePage = () => {
  // const { t } = useTranslation();
  // const currentUser = useSelector((state) => state.currentUser); // Check if someone is currently logged in
  const [selectedTires, setSelectedTires] = useState([]);
  const onTireClicked = (tire) => {
    if (selectedTires.includes(tire)) {
      setSelectedTires((prev) => [...prev.filter((x) => x !== tire)]);
    } else {
      setSelectedTires((prev) => [...prev.filter((x) => x !== tire), tire]);
    }
  };
  const media = [
    "Token Allocation: Up to 2 million tokens/month, usable across GPT-4 and GPT-4V.",
    "GPT-4 API Usage: $150/month, acknowledging the high performance of GPT-4.",
    "On Demand RAG Calls: $120 for up to 10,000 RAG calls at $0.012/call, adjusted for cost.",
    "Embeddings: Access to basic embeddings.",
    "Transcription Services: 10 hours/month at a total cost of $4.07.",
    "Transcription Services: 10 hours/month at a total cost of $4.07.",
    "Total Starter Plan Cost: $400/month, including GPT-4's versatility for standard and visual tasks.",
  ];
  return (
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center w-full max-h-full overflow-y-auto gap-4 md:gap-0">
      {/* plans cards */}
      {/* starter plan */}
      <div className="flex flex-col items-start pt-6 gap-4 h-fit md:h-[754px] justify-between w-full md:w-[32%] bg-starter rounded-20">
        <div className="flex flex-col items-start px-8 gap-6 self-stretch">
          <div className="font-SohneBuch flex flex-col items-start px-8 gap-6 self-stretch">
            <h2 className="h-7  font-extrabold text-xl text-white">
              Starter Plan
            </h2>
            <p className="text-sm text-white">
              For individuals and small teams beginning to explore the
              capabilities of GPT-4 for various projects.
            </p>
            <p className="text-sm text-white">
              <span className="text-2xl text-white font-extrabold ">$400</span>
              /month
            </p>
            <p className="text-sm text-white">
              including GPT-4's versatility for standard and visual tasks.
            </p>
          </div>
          <button className="font-SohneBuch text-sm box-border flex justify-center items-center gap-[10px] h-12 border border-white rounded-40 self-stretch">
            Choose Plan
          </button>
        </div>
        <div className="flex flex-col items-start py-7 px-8 gap-2 bg-navbg shadow-custom3 rounded-20 w-full">
          <ul className="list-disc list-outside pl-5">
            {media?.map((m, i) => (
              <li
                key={i}
                className={`font-SohneBuch text-sm text-white opacity-75 py-4 ${
                  i < media.length - 1 ? "border-b border-b-white/20" : ""
                }`}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Growth Plan */}
      <div className="flex flex-col items-start pt-6 gap-4 h-fit md:h-[754px] justify-between w-full md:w-[32%] bg-growth rounded-20">
        <div className="flex flex-col items-start px-8 gap-6 self-stretch">
          <div className="font-SohneBuch flex flex-col items-start px-8 gap-6 self-stretch">
            <h2 className="h-7  font-extrabold text-xl text-white">
              Growth Plan
            </h2>
            <p className="text-sm text-white">
              For individuals and small teams beginning to explore the
              capabilities of GPT-4 for various projects.
            </p>
            <p className="text-sm text-white">
              <span className="text-2xl text-white font-extrabold ">$400</span>
              /month
            </p>
            <p className="text-sm text-white">
              including GPT-4's versatility for standard and visual tasks.
            </p>
          </div>
          <button className="font-SohneBuch text-sm box-border flex justify-center items-center gap-[10px] h-12 border border-white rounded-40 self-stretch">
            Choose Plan
          </button>
        </div>
        <div className="flex flex-col items-start py-7 px-8 gap-2 bg-navbg shadow-custom3 rounded-20 w-full">
          <ul className="list-disc list-outside pl-5">
            {media?.map((m, i) => (
              <li
                key={i}
                className={`font-SohneBuch text-sm text-white opacity-75 py-4 ${
                  i < media.length - 1 ? "border-b border-b-white/20" : ""
                }`}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="flex flex-col items-start pt-6 gap-4 h-fit md:h-[754px] justify-between w-full md:w-[32%] bg-enterprise rounded-20">
        <div className="flex flex-col items-start px-8 gap-6 self-stretch">
          <div className="font-SohneBuch flex flex-col items-start px-8 gap-6 self-stretch">
            <h2 className="h-7  font-extrabold text-xl text-white">
              Enterprise Plan
            </h2>
            <p className="text-sm text-white">
              For individuals and small teams beginning to explore the
              capabilities of GPT-4 for various projects.
            </p>
            <p className="text-sm text-white">
              <span className="text-2xl text-white font-extrabold ">$400</span>
              /month
            </p>
            <p className="text-sm text-white">
              including GPT-4's versatility for standard and visual tasks.
            </p>
          </div>
          <button className="font-SohneBuch text-sm box-border flex justify-center items-center gap-[10px] h-12 border border-white rounded-40 self-stretch">
            Choose Plan
          </button>
        </div>
        <div className="flex flex-col items-start py-7 px-8 gap-2 bg-navbg shadow-custom3 rounded-20 w-full">
          <ul className="list-disc list-outside pl-5">
            {media?.map((m, i) => (
              <li
                key={i}
                className={`font-SohneBuch text-sm text-white opacity-75 py-4 ${
                  i < media.length - 1 ? "border-b border-b-white/20" : ""
                }`}
              >
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
