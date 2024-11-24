"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import data from "../public/data/data.json";

interface Reply {
  id: number;
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
}

interface Feedback {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

interface FeedbackContextType {
  feedbacks: Feedback[];
  addFeedback: (newFeedback: Omit<Feedback, "id">) => void;
}

const FeedbackContext = createContext<FeedbackContextType | null>(null);

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};

export const FeedbackProvider = ({ children }: { children: ReactNode }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>(
    data.productRequests as Feedback[]
  );

  const addFeedback = (newFeedback: Omit<Feedback, "id">) => {
    setFeedbacks((prev) => [...prev, { id: prev.length + 1, ...newFeedback }]);
  };

  return (
    <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};
