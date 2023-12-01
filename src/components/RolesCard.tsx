import React, { FC } from "react";

interface RolesCardProps {
  bgColor: string;
  imageSrc: string;
  text: string;
  subText: string;
}
const RolesCard: FC<RolesCardProps> = ({
  bgColor,
  imageSrc,
  text,
  subText,
}) => {
  const cardStyle = {
    background: bgColor,
    padding: "1rem", // Adjust the padding as needed
    display: "flex",
    alignItems: "center",
    gap: "0.75rem", // Adjust the gap as needed
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  };

  return (
    <div
      // className={`p-4 bg-${bgColor} flex items-center gap-3 `}
      style={cardStyle}
    >
      <div>
        <img src={imageSrc} alt={`${imageSrc}`} />
      </div>
      <div className="flex gap-2 flex-col ">
        <p className="font-medium text-[#1D2026]">{text}</p>
        <p className="text-sm text-[#6E7485]">{subText}</p>
      </div>
    </div>
  );
};

export default RolesCard;
