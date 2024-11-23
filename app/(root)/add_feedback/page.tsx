import React from "react";
import Image from "next/image";

import Empty from "../../../public/assets/suggestions/illustration-empty.svg";

const page = () => {
  return (
    <div className="mt-6 w-full h-[550px] flex flex-col items-center justify-center gap-[54px] bg-white rounded-[10px]">
      <Image src={Empty} alt="Error Image" width={130} height={137} />
      <div className="flex flex-col w-full items-center">
        <h1 className="text-h1 text-darkBlue font-bold">
          There is no feedback yet.
        </h1>
        <p className="mt-[16px] text-body2 text-grayBlue text-center w-[410px] h-[46px]">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <button className="mt-12 bg-primaryPurple w-[158px] h-[44px] rounded-[10px] font-bold text-h4 text-white">
          + Add Feedback
        </button>
      </div>
    </div>
  );
};

export default page;
