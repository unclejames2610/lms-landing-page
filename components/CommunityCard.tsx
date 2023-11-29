import React, { FC } from "react";

interface CommunityCardProps {
  text: string;
  sender: string;
  description: string;
}
const CommunityCard: FC<CommunityCardProps> = ({
  text,
  sender,
  description,
}) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg p-4 gap-10 font-mulish justify-between text-black">
      <div>
        <p className="text-[13px] leading-[20px] w-[200px] lg:w-[279px]">
          {text}
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="font-[900]">{sender}</p>
        <p className="text-[#979797]">{description}</p>
      </div>
    </div>
  );
};

export default CommunityCard;
