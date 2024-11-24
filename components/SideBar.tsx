import React from "react";
import Image from "next/image";
import ResponsiveImage from "./ResponsiveImage";

const SideBar = () => {
  return (
    <div className="w-[255px] h-[529px]  rounded-[10px] overflow-hidden">
      <div className=" h-[115px] rounded-[10px] overflow-hidden inset-0 relative">
        <ResponsiveImage folder="suggestions" imageKey="backgroundHeader" />
        <div className=" absolute mt-[62px] ml-[24px] bottom-[24px] w-[160px] h-[51px]">
          <h1 className="text-white text-h2 font-bold">Memento Design</h1>
          <p className="text-white text-body2">Feedback Board</p>
        </div>
      </div>
      <div className="mt-[24px] h-[166px] bg-white rounded-[10px]">
        <div className="p-[24px] flex flex-wrap gap-2">
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            All
          </div>
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            UI
          </div>
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            UX
          </div>
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            Enhancement
          </div>
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            Bug
          </div>
          <div className="bg-lightBlue rounded-[10px] px-[16px] py-[5px] min-w-max text-center">
            Feature
          </div>
        </div>
        <div className="mt-6 px-6 rounded-[10px] bg-white h-[178px] flex flex-col sm:flex-wrap items-center justify-center">
          <div className="flex w-full justify-between">
            <h1 className="text-h3 font-bold text-semiDarkNavy">Roadmap</h1>
            <p className="underline text-primaryBlue">View</p>
          </div>
          <ul className="flex flex-col w-full gap-2">
            <li className="mt-[24px] flex">
              <ResponsiveImage folder="suggestions" imageKey="ovalIcon" />
              <div className="ml-4 flex justify-between w-full">
                <h1 className="text-darkNavy">Planned</h1>
                <h1 className="font-bold">2</h1>
              </div>
            </li>
            <li className="flex">
              <ResponsiveImage folder="suggestions" imageKey="ovalIcon" />
              <div className="ml-4 flex justify-between w-full">
                <h1 className="text-darkNavy">In-Progress</h1>
                <h1 className="font-bold">3</h1>
              </div>
            </li>
            <li className="flex">
              <ResponsiveImage folder="suggestions" imageKey="ovalIcon" />
              <div className="ml-4 flex justify-between w-full">
                <h1 className="text-darkNavy">Live</h1>
                <h1 className="font-bold">1</h1>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
