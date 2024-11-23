"use client";
import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import Image from "next/image";

import DownArrow from "../public/assets/shared/icon-arrow-down.svg";
import UpArrow from "../public/assets/shared/icon-arrow-up.svg";
import TickIcon from "../public/assets/shared/icon-check.svg"; // Import your custom tick icon

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most Upvotes");

  const options = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="w-[825px] h-[72px] border rounded-[10px] flex items-center bg-semiDarkNavy relative">
      <div className="ml-6 gap-4 flex justify-center">
        <div className="w-[23px] h-6">
          <ResponsiveImage folder="suggestions" imageKey="suggestionsIcon" />
        </div>

        <h1 className="text-white text-h3 font-bold">6 Suggestions</h1>
      </div>
      <div className="ml-[38px] flex items-center relative">
        <h1 className="text-white text-h3">
          Sort by: <strong>{selectedOption}</strong>{" "}
        </h1>
        <Image
          src={isOpen ? UpArrow : DownArrow}
          alt=""
          width={10}
          height={7}
          className="m-2 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div className="absolute top-16 left-0 bg-white w-[255px] h-[192px] rounded-[10px] shadow-lg z-10">
            {options.map((option) => (
              <div
                key={option}
                className="flex justify-between items-center px-6 py-3 text-body1 text-darkNavy hover:text-primaryPurple hover:cursor-pointer"
                onClick={() => handleOptionClick(option)}
              >
                <span>{option}</span>
                {option === selectedOption && (
                  <Image src={TickIcon} alt="Selected" width={12} height={12} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <button className="ml-auto mr-4 bg-primaryPurple w-[158px] h-[44px] rounded-[10px] font-bold text-h4 text-white">
        + Add Feedback
      </button>
    </div>
  );
};

export default NavBar;
