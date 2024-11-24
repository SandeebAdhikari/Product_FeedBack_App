import React from "react";
import ResponsiveImage from "./ResponsiveImage";

const RoadMapCard = () => {
  return (
    <div className="w-[350px] h-[272px] rounded-[5px] p-8 border-t-[6px] border-t-lightRed bg-white">
      <li className="flex gap-4">
        <ResponsiveImage folder="suggestions" imageKey="ovalIcon" />
        <h1 className="text-darkNavy text-body1">Planned</h1>
      </li>
      <h1 className="mt-2 text-semiDarkNavy text-h3 font-bold">
        More comprehensive reports
      </h1>
      <p className="mt-1 text-grayBlue text-body2">
        It would be great to see a more detailed breakdown of solutions.
      </p>
      <div className="mt-4 bg-lightBlue rounded-[10px] px-[16px] py-[5px] text-center text-primaryBlue inline-flex ">
        Feature
      </div>
      <div className="flex w-full justify-between mt-4">
        <div className=" bg-lightBlue rounded-[10px] w-[69px] h-[40px] flex items-center justify-center gap-[9.5px]">
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 6l4-4 4 4"
              stroke="#4661E6"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <h1 className="text-semiDarkNavy font-bold text-h4">123</h1>
        </div>
        <div className="flex items-center gap-2">
          <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
              fill="#CDD2EE"
              fillRule="nonzero"
            />
          </svg>
          <h1 className="text-semiDarkNavy text-body1 font-bold">2</h1>
        </div>
      </div>
    </div>
  );
};

export default RoadMapCard;
