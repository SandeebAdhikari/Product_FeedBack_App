import React from "react";
import Image from "next/image";
import ResponsiveImage from "./ResponsiveImage";

const SideBar = () => {
  return (
    <div className="w-[255px] h-[529px] border rounded-[10px] overflow-hidden">
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
        <div className="mt-6 px-6 border rounded-[10px] bg-white h-[178px] flex flex-col items-center justify-center">
          <div className="flex justify-between w-full">
            <h1>Roadmap</h1>
            <p className="underline text-primaryBlue">View</p>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
