import ButtonFeedback from "@/components/ButtonFeedback";
import FeedbackCard from "@/components/FeedbackCard";
import CommentCard from "@/components/CommentCard";

import UserImage1 from "@/public/assets/user-images/image-elijah.jpg";
import UserImage2 from "@/public/assets/user-images/image-james.jpg";
import UserImage3 from "@/public/assets/user-images/image-anne.jpg";
import UserImage4 from "@/public/assets/user-images/image-ryan.jpg";
import React from "react";
import GoBackButton from "@/components/GoBackButton";

const page = () => {
  return (
    <div className="mt-[76px] flex flex-col items-center mx-[306px]">
      <div className="flex w-full">
        <GoBackButton stroke="#4661E6" color="grayBlue" />
        <div className="ml-auto">
          <ButtonFeedback text="Edit Feedback" />
        </div>
      </div>
      <div className="mt-10">
        <FeedbackCard />
      </div>
      <div className="mt-8 flex flex-col bg-white w-full rounded-[10px] px-8 py-6">
        <h1 className="text-h3 font-bold text-darkBlue">4 Comments</h1>
        <CommentCard
          userImage={UserImage1}
          name="Elijah Moss"
          username="@hexagon.bestagon"
          comment="Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has."
        />
        <hr className="mt-8 w-full" />
        <CommentCard
          userImage={UserImage2}
          name="James Skinner"
          username="@hummingbird1"
          comment="Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and apparently saves battery life."
        />
        <div className="flex w-full">
          <div className="w-1 h-[267px] bg-gray-100 mt-6 ml-5" />

          <div className="flex w-full">
            <div className="pl-6 flex flex-col w-full">
              <CommentCard
                userImage={UserImage3}
                name="Anne Valentine"
                username="@annev1990"
                replyTo="@hummingbird1"
                comment="While waiting for dark mode, there are browser extensions that will also do the job. Search for 'dark theme' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though."
              />
              <CommentCard
                userImage={UserImage4}
                name="Ryan Welles"
                username="@voyager.344"
                replyTo="@annev1990"
                comment="Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I'd prefer not to use one of such extensions, however, for security and privacy reasons."
              />
            </div>
          </div>
        </div>
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

export default page;
