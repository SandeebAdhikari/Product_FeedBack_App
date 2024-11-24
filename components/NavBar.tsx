"use client";
import React, { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import Image from "next/image";
import { useRouter } from "next/navigation";

import TickIcon from "../public/assets/shared/icon-check.svg";
import ButtonFeedback from "./ButtonFeedback";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Most Upvotes");

  const options = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const handleOptionClick = (option: string): void => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleAddFeedback = () => {
    router.push("/new_feedback");
  };

  return (
    <div className="w-[825px] h-[72px] rounded-[10px] flex items-center bg-semiDarkNavy relative">
      <div className="ml-6 gap-4 flex justify-center">
        <div className="w-[23px] h-6">
          <ResponsiveImage folder="suggestions" imageKey="suggestionsIcon" />
        </div>

        <h1 className="text-white text-h3 font-bold">6 Suggestions</h1>
      </div>
      <div
        className="ml-[38px] flex w-[255px] items-center gap-2 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="text-white text-h3">
          Sort by: <strong>{selectedOption}</strong>
        </h1>
        {isOpen ? (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="white"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        ) : (
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4 4-4"
              stroke="white"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        )}
        {isOpen && (
          <div className="absolute top-16 left-0 bg-white w-full h-[192px] rounded-[10px] shadow-2xl z-10">
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
      <div className="mr-4 ml-auto" onClick={handleAddFeedback}>
        <ButtonFeedback text="+ Add Feedback" />
      </div>
    </div>
  );
};

export default NavBar;
