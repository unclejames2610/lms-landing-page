import React, { FC } from "react";

interface TrustedCompaniesCardProps {
  imageSrc: string;
}

const TrustedCompaniesCard: FC<TrustedCompaniesCardProps> = ({ imageSrc }) => {
  return (
    <div className="flex items-center justify-center bg-white p-8 shadow-lg">
      <img src={imageSrc} alt={`${imageSrc}`} />
    </div>
  );
};

export default TrustedCompaniesCard;
