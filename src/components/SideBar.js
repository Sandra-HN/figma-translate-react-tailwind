import React, { useState } from "react";
import icon1 from "../../public/assets/images/icon1.svg";
import icon2 from "../../public/assets/images/icon2.svg";
import icon3 from "../../public/assets/images/icon3.svg";
import icon4 from "../../public/assets/images/icon4.svg";
import icon5 from "../../public/assets/images/icon5.svg";
import icon6 from "../../public/assets/images/icon6.svg";
import icon7 from "../../public/assets/images/icon7.svg";
import icon8 from "../../public/assets/images/icon8.svg";
import icon9 from "../../public/assets/images/icon9.svg";
import icon10 from "../../public/assets/images/icon10.svg";
import icon11 from "../../public/assets/images/icon11.svg";
import icon12 from "../../public/assets/images/icon12.svg";
import icon13 from "../../public/assets/images/icon13.svg";
import icon14 from "../../public/assets/images/icon14.svg";
import icon15 from "../../public/assets/images/icon15.svg";
import icon16 from "../../public/assets/images/icon16.svg";

const icons = [
  { className: "pb-20", icons: [icon1, icon2, icon3, icon4, icon5] },
  { className: "pb-28", icons: [icon6] },
  { className: "pb-20", icons: [icon7] },
  { className: "pb-14", icons: [icon8] },
  { className: "pb-14", icons: [icon9] },
  {
    className: "",
    icons: [icon10, icon11, icon12, icon13, icon14, icon15, icon16],
  },
];

const menu = [
  { label: "Item 1", link: "#" },
  { label: "Item 2", link: "#" },
  { label: "Item 3", link: "#" },
  { label: "Item 4", link: "#" },
  { label: "Item 5", link: "#" },
  { label: "Item 6", link: "#" },
  { label: "Item 7", link: "#" },
  { label: "Item 8", link: "#" },
  { label: "Item 9", link: "#" },
  { label: "Item 10", link: "#" },
  { label: "Item 11", link: "#" },
  { label: "Item 12", link: "#" },
  { label: "Item 13", link: "#" },
  { label: "Item 14", link: "#" },
  { label: "Item 15", link: "#" },
  { label: "Item 16", link: "#" },
];

const sidebarItems = icons?.map((iconGroup, index) => ({
  icons: iconGroup?.icons ?? [],
  className: iconGroup.className,
  label: menu[index].label,
  link: menu[index].link,
}));

const SideBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Hide the menu on leaving the entire aside
  const handleAsideMouseLeave = () => {
    setSelectedIndex(null);
  };

  // Show menu for hovered icon
  const handleIconMouseEnter = (index) => {
    setSelectedIndex(index);
  };

  return (
    <aside
      onMouseLeave={handleAsideMouseLeave}
      className="
      
        flex
        md:flex-row flex-col
        md:min-h-screen
        overflow-x-auto md:overflow-x-hidden
        w-auto
        bg-navbg
        text-white
        rounded-30
        overflow-hidden
      "
    >
      {/* Icons Column */}
      <div
        className="
          flex flex-row md:flex-col
          items-center
          gap-4
          px-4
          py-4
          w-full md:w-16 
        "
      >
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onMouseEnter={() => handleIconMouseEnter(index)}
          >
            <div className={`${item.className} gap-4 flex flex-col`}>
              {item.icons?.map((icon, j) => (
                <div
                  key={j}
                  className={`
                w-[calc(27px_+_0.5rem)] h-[27px]
                border-r-2
                pr-2
                ${
                  selectedIndex === index
                    ? "border-r-white/40" // Visible border when selected
                    : "border-r-transparent" // Transparent border otherwise
                }
              `}
                >
                  <img
                    src={icon}
                    alt={`icon-${index}-${j}`}
                    className="w-full h-full block"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Sub-menu */}
      <div
        className={`
          ${selectedIndex === null ? "hidden" : "flex"}
          md:w-fit w-full flex-1
          py-4
        `}
      >
        {selectedIndex !== null && (
          <div className="transition-all duration-300 ease-in-out opacity-100 w-full ">
            <div className="gap-4 w-full flex flex-col justify-center items-center">
              {menu.map((mItem, i) => (
                <p key={i} className="w-full md:text-left  text-center">
                  <a
                    href={mItem.link}
                    className="hover:underline text-sm whitespace-nowrap w-full block md:text-left text-center md:mr-12"
                  >
                    {mItem.label}
                  </a>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SideBar;
