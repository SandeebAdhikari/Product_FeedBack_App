"use client";
import FeedbackCard from "@/components/FeedbackCard";
import data from "../../public/data/data.json";

export default function Home() {
  return (
    <div className="mt-6">
      {data.productRequests.map((request) => (
        <FeedbackCard
          key={request.id}
          id={request.id}
          title={request.title}
          description={request.description}
          category={request.category}
          upvotes={request.upvotes}
          comments={request.comments?.length || 0}
          status={request.status}
        />
      ))}
    </div>
  );
}
