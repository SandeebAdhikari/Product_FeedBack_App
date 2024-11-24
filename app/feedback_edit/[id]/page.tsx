"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NewIcon from "../../../public/assets/shared/icon-edit-feedback.svg";
import ButtonFeedback from "@/components/ButtonFeedback";
import Dropdown from "@/components/Dropdown";
import GoBackButton from "@/components/GoBackButton";
import data from "../../../public/data/data.json";

interface Feedback {
  id: number;
  title: string;
  description: string;
  category: string;
  upvotes: number;
  comments: {
    id: number;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
    replies?: {
      content: string;
      replyingTo: string;
      user: {
        image: string;
        name: string;
        username: string;
      };
    }[];
  }[];
  status: string;
}
const FeedbackEdit = () => {
  const { id } = useParams();
  const router = useRouter();

  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Feature");
  const [selectedStatus, setSelectedStatus] = useState("Suggestion");

  useEffect(() => {
    const feedbackData = data.productRequests.find(
      (request) => request.id === parseInt(id as string)
    ) as Feedback;
    if (feedbackData) {
      setFeedback(feedbackData);
      setTitle(feedbackData.title);
      setDetail(feedbackData.description);
      setSelectedCategory(feedbackData.category);
      setSelectedStatus(feedbackData.status);
    }
  }, [id]);

  const handleUpdateFeedback = () => {
    const updatedData = {
      ...feedback,
      title,
      description: detail,
      category: selectedCategory,
      status: selectedStatus,
    };

    // Here, you should update the `data.json` file or state in your backend/database
    console.log("Updated Feedback:", updatedData);

    router.push(`/feedback_detail/${id}`);
  };

  const handleDeleteFeedback = () => {
    // Here, you should remove the feedback from `data.json` or state in your backend/database
    console.log("Deleted Feedback:", id);

    router.push("/");
  };

  const handleCancelEdit = () => {
    router.push(`/feedback_detail/${id}`);
  };

  return (
    <div className="mt-[92px] mb-[187px] w-[540px]">
      <div onClick={handleCancelEdit}>
        <GoBackButton stroke="#4661E6" color="grayBlue" />
      </div>
      <div className="mt-10 w-[540px] h-[822px] bg-white rounded-[10px] px-8 relative ">
        <Image
          src={NewIcon}
          alt="New Feedback"
          width={56}
          height={56}
          className="absolute -top-[28px] left-[42px]"
        />
        <h1 className="pt-[52px] text-darkBlue font-bold text-h1">
          Editing ‘{title}’
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
          height="240"
          options={["Feature", "UI", "UX", "Enhancement", "Bug"]}
          selectedOption={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">Update Status</h2>
        <p className="mt-1 mb-4 text-grayBlue text-body2">
          Change feature state
        </p>
        <Dropdown
          height="191"
          options={["Suggestion", "Planned", "In-Progress", "Live"]}
          selectedOption={selectedStatus}
          onSelect={setSelectedStatus}
        />
        <h2 className="mt-6 text-darkBlue text-h4 font-bold">
          Feedback Detail
        </h2>
        <p className="mt-1 text-grayBlue text-body2">
          Include any specific comments on what should be improved, added, etc.
        </p>
        <textarea
          className="w-full h-[96px] mt-4 bg-lighterPeach rounded-[10px] p-3"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <div className="flex justify-end mt-8 gap-4">
          <button
            className="mr-[110px] bg-red text-lightBlue text-h4 w-[93px] h-[44px] px-6 py-2 rounded-[10px] hover:bg-lightRed"
            onClick={handleDeleteFeedback}
          >
            Delete
          </button>
          <button
            className="bg-darkBlue text-lightBlue text-h4 w-[93px] h-[44px] px-6 py-2 rounded-[10px] hover:bg-lightNavy"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
          <ButtonFeedback text="Save Changes" onClick={handleUpdateFeedback} />
        </div>
      </div>
    </div>
  );
};

export default FeedbackEdit;
