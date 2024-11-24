import ButtonFeedback from "@/components/ButtonFeedback";
import GoBackButton from "@/components/GoBackButton";
import RoadMapCard from "@/components/RoadMapCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-[1110px] min-h-screen">
      <div className="mt-[78px] flex w-full h-[113px] bg-semiDarkNavy rounded-[10px] items-center justify-center">
        <div className="ml-8 ">
          <GoBackButton stroke="white" color="white" />
          <h1 className="mt-2 text-white text-h1 font-bold">Roadmap </h1>
        </div>
        <div className="ml-auto mr-10">
          <ButtonFeedback text="+ Add Feedback" />
        </div>
      </div>
      <div className="mt-12 flex w-full justify-between">
        <div className="flex flex-col ">
          <h1 className="text-h3 text-semiDarkNavy font-bold">Planned (2)</h1>
          <p className="text-body2 text-grayBlue mt-1 mb-8">
            Ideas prioritized for research
          </p>
          <RoadMapCard />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-h3 text-semiDarkNavy font-bold">
            In-Progress (3)
          </h1>
          <p className="text-body2 text-grayBlue mt-1 mb-8">
            Ideas prioritized for research
          </p>
          <RoadMapCard />
        </div>
        <div className="flex flex-col ">
          <h1 className="text-h3 text-semiDarkNavy font-bold">Live (1)</h1>
          <p className="text-body2 text-grayBlue mt-1 mb-8">
            Ideas prioritized for research
          </p>
          <RoadMapCard />
        </div>
      </div>
    </div>
  );
};

export default page;
