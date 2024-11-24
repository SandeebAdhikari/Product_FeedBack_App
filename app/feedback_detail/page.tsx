import ButtonFeedback from "@/components/ButtonFeedback";
import FeedbackCard from "@/components/FeedbackCard";
import ResponsiveImage from "@/components/ResponsiveImage";
import Image from "next/image";
import React from "react";
import UserImage1 from "@/public/assets/user-images/image-elijah.jpg";
import UserImage2 from "@/public/assets/user-images/image-james.jpg";
import UserImage3 from "@/public/assets/user-images/image-anne.jpg";
import UserImage4 from "@/public/assets/user-images/image-ryan.jpg";

const page = () => {
  return (
    <div className="mt-[76px]  flex flex-col items-center mx-[306px]">
      <div className="flex w-full">
        <button className="flex items-center justify-center gap-2">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#4661E6"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <h1 className="font-bold text-grayBlue text-h4">Go Back</h1>
        </button>
        <div className="ml-auto">
          <ButtonFeedback text="Edit Feedback" />
        </div>
      </div>
      <div className="mt-10">
        <FeedbackCard />
      </div>
      <div className="mt-8 flex flex-col bg-white w-full rounded-[10px] px-8 py-6">
        <h1 className="text-h3 font-bold text-darkBlue">4 Comments</h1>

        <div className="mt-7 flex flex-col w-full">
          <div className="flex w-full items-center justify-center">
            <Image
              src={UserImage1}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-8 flex flex-col w-full">
              <h1 className="text-h4 font-bold text-darkBlue">Elijah Moss</h1>
              <p className="text-grayBlue">@hexagon.bestagon</p>
            </div>
            <div className="ml-auto">
              <h1 className="text-primaryPurple text-body3 font-semibold">
                Reply
              </h1>
            </div>
          </div>
          <p className="text-body2 mt-[17px] w-full pl-[72px] text-grayBlue">
            Also, please allow styles to be applied based on system preferences.
            I would love to be able to browse Frontend Mentor in the evening
            after my device’s dark mode turns on without the bright background
            it currently has.
          </p>
        </div>
        <hr className="mt-8 w-full" />
        <div className="mt-8 flex flex-col w-full">
          <div className="flex w-full  items-center justify-center">
            <Image
              src={UserImage2}
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="ml-8 flex flex-col w-full">
              <h1 className="text-h4 font-bold text-darkBlue">James Skinner</h1>
              <p className="text-grayBlue">@hummingbird1</p>
            </div>
            <div className="ml-auto">
              <h1 className="text-primaryPurple text-body3 font-semibold">
                Reply
              </h1>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1 h-[267px] bg-gray-100 mt-6 ml-5" />
            <div className="flex flex-col w-full">
              <p className="-ml-6 text-body2 mt-[17px] w-full pl-[72px] text-grayBlue">
                Second this! I do a lot of late night coding and reading. Adding
                a dark theme can be great for preventing eye strain and the
                headaches that result. It’s also quite a trend with modern apps
                and apparently saves battery life.
              </p>
              <div className="pl-8 mt-7 flex flex-col w-full">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={UserImage3}
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-8 flex flex-col w-full">
                    <h1 className="text-h4 font-bold text-darkBlue">
                      Anne Valentine
                    </h1>
                    <p className="text-grayBlue">@annev1990</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="text-primaryPurple text-body3 font-semibold">
                      Reply
                    </h1>
                  </div>
                </div>
                <p className="text-body2 mt-[17px] w-full pl-[72px] text-grayBlue">
                  <span className="text-primaryPurple font-bold">
                    @hummingbird1
                  </span>{" "}
                  While waiting for dark mode, there are browser extensions that
                  will also do the job. Search for "dark theme” followed by your
                  browser. There might be a need to turn off the extension for
                  sites with naturally black backgrounds though.
                </p>
              </div>
              <div className="pl-8 mt-7 flex flex-col w-full">
                <div className="flex w-full items-center justify-center">
                  <Image
                    src={UserImage4}
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-8 flex flex-col w-full">
                    <h1 className="text-h4 font-bold text-darkBlue">
                      Ryan Welles
                    </h1>
                    <p className="text-grayBlue">@voyager.344</p>
                  </div>
                  <div className="ml-auto">
                    <h1 className="text-primaryPurple text-body3 font-semibold">
                      Reply
                    </h1>
                  </div>
                </div>
                <p className="text-body2 mt-[17px] w-full pl-[72px] text-grayBlue">
                  <span className="text-primaryPurple font-bold">
                    @annev1990
                  </span>{" "}
                  Good point! Using any kind of style extension is great and can
                  be highly customizable, like the ability to change contrast
                  and brightness. I'd prefer not to use one of such extensions,
                  however, for security and privacy reasons.
                </p>
              </div>
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
        <div className="flex w-full mt-4  items-center justify-between">
          <h1 className="text-body2 text-grayBlue">250 characters left</h1>
          <ButtonFeedback text="Post Comment" />
        </div>
      </div>
    </div>
  );
};

export default page;
