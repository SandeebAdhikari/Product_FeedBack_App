import React from "react";

import Image from "next/image";

import Comment from "../public/assets/shared/icon-comments.svg";

const FeedbackCard = () => {
  return (
    <div className="w-[825px] h-[151px] px-8 py-7 rounded-[10px] bg-white flex items-center justify-center">
      <div className="w-[40px] h-[53px] flex flex-col items-center justify-center bg-lightBlue rounded-[10px] gap-2 -mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className="cursor-pointer stroke-primaryBlue"
        >
          <path
            d="M1 6l4-4 4 4"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <h1 className="font-bold text-body3">112</h1>
      </div>
      <div className="ml-10">
        <h1 className="text-h3 text-darkBlue font-bold">
          Add tags for solutions
        </h1>
        <p className="text-body1 text-grayBlue mt-1">
          Easier to search for solutions based on a specific stack.
        </p>
        <div className="mt-4 bg-lightBlue rounded-[10px] px-[16px] py-[5px] text-center text-primaryBlue inline-flex font-bold">
          Enhancement
        </div>
      </div>
      <div className="flex items-center ml-[263px] gap-2">
        <Image src={Comment} alt="Comment Icon" width={18} height={16} />
        <h1 className="font-bold text-body1 ">2</h1>
      </div>
    </div>
  );
};

export default FeedbackCard;
