"use client";
import React, { useState } from "react";
import Image from "next/image";
import NewIcon from "../../public/assets/shared/icon-new-feedback.svg";
import ButtonFeedback from "@/components/ButtonFeedback";
import Dropdown from "@/components/Dropdown";

const page = () => {
  const [selectedOption, setSelectedOption] = useState("Feature");
  const [selectedOptionI, setSelectedOptionI] = useState("Suggestion");
  const optionsI = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  const optionsII = ["Suggestion", "Planned", "In-Progress", "Live"];

  return (
    <div className="mt-[92px] mb-[187px] w-[540px]">
      <button className="flex items-center justify-center gap-2">
        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9L2 5l4-4"
            stroke="#4661E6"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <h1 className="font-bold text-grayBlue text-h4">Go Back</h1>
      </button>
      <div className="mt-10 w-[540px] h-[822px] bg-white rounded-[10px] px-8 relative ">
        <Image
          src={NewIcon}
          alt="New Feedback"
          width={56}
          height={56}
          className="absolute -top-[28px] left-[42px]"
        />
        <h1 className="pt-[52px] text-darkBlue font-bold text-h1">
          Editing ‘Add a dark theme option’
        </h1>
        <h2 className="mt-10 text-darkBlue text-h4 font-bold">
          Feedback Title
        </h2>
        <p className="mt-1 text-grayBlue text-body2">
          Add a short, descriptive headline
        </p>
        <input
          type="text"
          className="w-full h-[48px] mt-4 bg-lighterPeach rounded-[10px] p-2"
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">Category</h2>
        <p className="mt-1 mb-4 text-grayBlue text-body2">
          Choose a category for your feedback
        </p>
        <Dropdown
          options={optionsI}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">Update Status</h2>
        <p className="mt-1 mb-4 text-grayBlue text-body2">
          Change feature state
        </p>
        <Dropdown
          options={optionsII}
          selectedOption={selectedOptionI}
          onSelect={setSelectedOptionI}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">
          Feedback Detail
        </h2>
        <p className="mt-1 text-grayBlue text-body2">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea className="w-full h-[96px] mt-4 bg-lighterPeach rounded-[10px] p-3" />
        <div className="flex justify-end mt-8 gap-4">
          <button className="mr-[110px] bg-red text-lightBlue text-h4 w-[93px] h-[44px] px-6 py-2 rounded-[10px] hover:bg-lightRed">
            Delete
          </button>
          <button className="bg-darkBlue text-lightBlue text-h4 w-[93px] h-[44px] px-6 py-2 rounded-[10px] hover:bg-lightNavy">
            Cancel
          </button>
          <ButtonFeedback text="Add Feedback" />
        </div>
      </div>
    </div>
  );
};

export default page;