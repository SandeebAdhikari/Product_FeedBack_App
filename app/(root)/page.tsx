"use client";
import FeedbackCard from "@/components/FeedbackCard";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="mt-6 ">
      <FeedbackCard />
    </div>
  );
}
