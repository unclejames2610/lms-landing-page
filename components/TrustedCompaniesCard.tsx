import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { FC } from "react";

interface TrustedCompaniesCardProps {
  imageSrc: StaticImport;
}

const TrustedCompaniesCard: FC<TrustedCompaniesCardProps> = ({ imageSrc }) => {
  return (
    <div className="flex items-center justify-center bg-white p-8 shadow-lg">
      <Image src={imageSrc} alt={`${imageSrc}`} />
    </div>
  );
};

export default TrustedCompaniesCard;
