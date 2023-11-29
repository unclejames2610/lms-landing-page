import React, { FC } from "react";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface InstructorCardProps {
  imageSrc: StaticImport;
  name: string;
  job: string;
  rating: string;
  stuNo: string;
}

const InstructorsCard: FC<InstructorCardProps> = ({
  imageSrc,
  name,
  job,
  rating,
  stuNo,
}) => {
  return (
    <div className="flex lg:block justify-center">
      <div className="flex flex-col gap-2 shadow-lg lg:w-full">
        <div className="">
          <Image
            src={imageSrc}
            alt={`${imageSrc}`}
            className="lg:w-full w-auto h-auto"
          />
        </div>

        <p className="font-semibold text-gray-900 text-center">{name}</p>
        <p className="text-gray-500 text-sm text-center">{job}</p>
        <div className="flex items-center justify-between mt-4 px-2">
          <div className="flex gap-1 items-center">
            <IoIosStar className="text-[#FD8E1F]" />
            <span className="text-sm font-semibold text-gray-700">
              {rating}
            </span>
          </div>
          <div className="flex gap-1">
            <p className="text-gray-700 text-sm font-semibold">{stuNo}</p>
            <span className="text-gray-500 text-sm">students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
