"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useFeedbackContext } from "@/context/FeedbackContext";
import Image from "next/image";
import NewIcon from "../../public/assets/shared/icon-new-feedback.svg";
import ButtonFeedback from "@/components/ButtonFeedback";
import Dropdown from "@/components/Dropdown";
import GoBackButton from "@/components/GoBackButton";

const NewFeedback = () => {
  const [selectedOption, setSelectedOption] = useState("Feature");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const feedbackContext = useFeedbackContext();
  if (!feedbackContext) {
    return <div>Error: Feedback context is not available.</div>;
  }
  const addFeedback = feedbackContext.addFeedback;
  const router = useRouter();

  const handleAddFeedback = () => {
    const newFeedback = {
      title,
      category: selectedOption,
      description,
      upvotes: 0,
      comments: [],
      status: "suggestion",
    };

    addFeedback(newFeedback);
    router.push("/");
  };

  return (
    <div className="mt-[92px] mb-[187px] w-[540px]">
      <GoBackButton stroke="#4661E6" color="grayBlue" />
      <div className="mt-10 w-[540px] h-[685px] bg-white rounded-[10px] px-8 relative ">
        <Image
          src={NewIcon}
          alt="New Feedback"
          width={56}
          height={56}
          className="absolute -top-[28px] left-[42px]"
        />
        <h1 className="pt-[52px] text-darkBlue font-bold text-h1">
          Create New Feedback
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">Category</h2>
        <p className="mt-1 mb-4 text-grayBlue text-body2">
          Choose a category for your feedback
        </p>
        <Dropdown
          options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
          selectedOption={selectedOption}
          onSelect={setSelectedOption}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">
          Feedback Detail
        </h2>
        <p className="mt-1 text-grayBlue text-body2">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className="w-full h-[96px] mt-4 bg-lighterPeach rounded-[10px] p-3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex justify-end mt-8 gap-4">
          <button
            className="bg-darkBlue text-lightBlue text-h4 w-[93px] h-[44px] px-6 py-2 rounded-[10px]"
            onClick={() => router.push("/")}
          >
            Cancel
          </button>
          <div onClick={handleAddFeedback}>
            <ButtonFeedback text="Add Feedback" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewFeedback;
