import React from "react";

interface GoBackButtonProps {
  stroke: string;
  color: string;
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ stroke, color }) => {
  return (
    <button className="flex items-center justify-center gap-2">
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={stroke}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <h1 className={`font-bold text-${color} text-h4 hover:underline`}>
        Go Back
      </h1>
    </button>
  );
};

export default GoBackButton;
