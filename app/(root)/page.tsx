"use client";
import FeedbackCard from "@/components/FeedbackCard";
import data from "../../public/data/data.json";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleFeedbackDetail = (id: number) => {
    router.push(`/feedback_detail/${id}`);
  };

  return (
    <div className="mt-6">
      {data.productRequests.map((request) => (
        <div key={request.id} onClick={() => handleFeedbackDetail(request.id)}>
          <FeedbackCard
            id={request.id}
            title={request.title}
            description={request.description}
            category={request.category}
            upvotes={request.upvotes}
            comments={request.comments?.length || 0}
            status={request.status}
          />
        </div>
      ))}
    </div>
  );
}
