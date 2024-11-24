"use client";
import { useParams } from "next/navigation";

import FeedbackCard from "@/components/FeedbackCard";
import CommentCard from "@/components/CommentCard";
import GoBackButton from "@/components/GoBackButton";
import ButtonFeedback from "@/components/ButtonFeedback";
import data from "../../../public/data/data.json";
import { useRouter } from "next/navigation";

const FeedbackDetail = () => {
  const { id } = useParams();
  const router = useRouter();

  const feedback = data.productRequests.find(
    (request) => request.id === parseInt(id as string)
  );

  if (!feedback) {
    return (
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-h3 text-darkBlue font-bold">Feedback Not Found</h1>
        <GoBackButton stroke="#4661E6" color="grayBlue" />
      </div>
    );
  }
  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <div className="mt-[76px] flex flex-col items-center mx-[306px]">
      <div className="flex w-full">
        <div onClick={handleGoBack}>
          <GoBackButton stroke="#4661E6" color="grayBlue" />
        </div>

        <div className="ml-auto">
          <ButtonFeedback text="Edit Feedback" />
        </div>
      </div>

      <div className="mt-10">
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

      <div className="mt-8 flex flex-col bg-white w-full rounded-[10px] px-8 py-6">
        <h1 className="text-h3 font-bold text-darkBlue">
          {feedback.comments?.length || 0} Comments
        </h1>
        {feedback.comments &&
          feedback.comments.map((comment) => (
            <div key={comment.id}>
              <CommentCard
                userImage={comment.user.image}
                name={comment.user.name}
                username={`@${comment.user.username}`}
                comment={comment.content}
              />
              {comment.replies &&
                comment.replies.map((reply, index) => (
                  <div key={index} className="pl-8">
                    <CommentCard
                      userImage={reply.user.image}
                      name={reply.user.name}
                      username={`@${reply.user.username}`}
                      replyTo={`@${reply.replyingTo}`}
                      comment={reply.content}
                    />
                  </div>
                ))}
              <hr className="mt-8 border-[1px] border-lightBlue" />
            </div>
          ))}
      </div>

      <div className="mt-8 w-full px-8 h-[246px] bg-white rounded-[10px] mb-[129px]">
        <h1 className="mt-6 text-h1 text-darkBlue font-bold">Add Comment</h1>
        <textarea
          className="mt-6 w-full h-[80px] bg-lighterPeach rounded-[10px] px-6 py-4"
          placeholder="Type your comment here"
        />
        <div className="flex w-full mt-4 items-center justify-between">
          <h1 className="text-body2 text-grayBlue">250 characters left</h1>
          <ButtonFeedback text="Post Comment" />
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
