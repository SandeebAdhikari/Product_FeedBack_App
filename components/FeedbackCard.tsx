"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Comment from "../public/assets/shared/icon-comments.svg";

interface FeedbackCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: number;
  status: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({
  id,
  title,
  description,
  category,
  upvotes,
  comments,
  status,
}) => {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);

  const handleFeedbackDetail = () => {
    router.push(`/feedback_detail/${id}`);
  };

  return (
    <div className="w-[825px] h-[151px] px-8 py-7 rounded-[10px] bg-white flex items-center justify-center hover:cursor-pointer mb-5">
      <div
        className={`w-[40px] h-[53px] flex flex-col items-center justify-center rounded-[10px] gap-2 -mt-10  ${
          isClicked ? "bg-primaryBlue" : "bg-lightBlue hover:bg-skyBlue"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setIsClicked(!isClicked);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="7"
          className={`cursor-pointer  ${
            isClicked ? "stroke-white" : "stroke-primaryBlue"
          }`}
        >
          <path
            d="M1 6l4-4 4 4"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
        <h1
          className={`font-bold text-body3 ${
            isClicked ? "text-white" : "text-darkBlue"
          }`}
        >
          {upvotes}
        </h1>
      </div>
      <div className="ml-10">
        <h1 className="text-h3 text-darkBlue font-bold">{title}</h1>
        <p className="text-body1 text-grayBlue mt-1">{description}</p>
        <div className="mt-4 bg-lightBlue rounded-[10px] px-[16px] py-[5px] text-center text-primaryBlue inline-flex font-bold">
          {category}
        </div>
      </div>
      <div
        className="flex items-center ml-[263px] gap-2"
        onClick={handleFeedbackDetail}
      >
        <Image src={Comment} alt="Comment Icon" width={18} height={16} />
        <h1 className="font-bold text-body1 ">{comments}</h1>
      </div>
    </div>
  );
};

export default FeedbackCard;
