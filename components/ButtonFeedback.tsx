import React from "react";

interface ButtonFeedbackProps {
  text: string;
}

const ButtonFeedback: React.FC<ButtonFeedbackProps> = ({ text }) => {
  return (
    <button className="bg-primaryPurple w-[158px] h-[44px] rounded-[10px] font-bold text-h4 text-white hover:bg-btn-hover">
      {text}
    </button>
  );
};

export default ButtonFeedback;
