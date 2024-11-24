"use client";

import { useFeedbackContext } from "@/context/FeedbackContext";
import FeedbackCard from "@/components/FeedbackCard";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const feedbackContext = useFeedbackContext();

  if (!feedbackContext) {
    return <div>Error: Feedback context is not available.</div>;
  }

  const { feedbacks } = feedbackContext;

  const handleFeedbackDetail = (id: number) => {
    router.push(`/feedback_detail/${id}`);
  };

  return (
    <div className="mt-6">
      {feedbacks.map((feedback) => (
        <div
          key={feedback.id}
          onClick={() => handleFeedbackDetail(feedback.id)}
        >
          <FeedbackCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            upvotes={feedback.upvotes}
            comments={feedback.comments?.length || 0}
            status={feedback.status}
          />
        </div>
      ))}
    </div>
  );
}
