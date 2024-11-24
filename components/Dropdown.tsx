"use client";
import React, { useState } from "react";
import Image from "next/image";
import TickIcon from "../public/assets/shared/icon-check.svg";

interface CategoryDropdownProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  options,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      className="relative w-full px-6 flex items-center justify-between h-[48px] bg-lighterPeach rounded-[10px] p-2 hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <h1 className="text-body2 text-grayBlue">{selectedOption}</h1>
      {isOpen ? (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 6l4-4 4 4"
            stroke="#4661E6"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4 4-4"
            stroke="#4661E6"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      )}
      {isOpen && (
        <div className="absolute top-16 left-0 bg-white w-full h-[240px] rounded-[10px] shadow-2xl z-10">
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
  );
};

export default CategoryDropdown;
