import React from "react";
import Image, { StaticImageData } from "next/image";

interface CommentCardProps {
  userImage: string | StaticImageData;
  name: string;
  username: string;
  comment: string;
  replyTo?: string;
}

const CommentCard: React.FC<CommentCardProps> = ({
  userImage,
  name,
  username,
  comment,
  replyTo,
}) => {
  return (
    <div className="mt-7 flex flex-col w-full">
      <div className="flex w-full items-center justify-center">
        <Image
          src={userImage}
          alt="User"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="ml-8 flex flex-col w-full">
          <h1 className="text-h4 font-bold text-darkBlue">{name}</h1>
          <p className="text-grayBlue">{username}</p>
        </div>
        <div className="ml-auto">
          <h1 className="text-primaryPurple text-body3 font-semibold">Reply</h1>
        </div>
      </div>
      <p className="text-body2 mt-[17px] w-full pl-[72px] text-grayBlue">
        {replyTo && (
          <span className="text-primaryPurple font-bold">{replyTo} </span>
        )}
        {comment}
      </p>
    </div>
  );
};

export default CommentCard;
