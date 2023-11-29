import React from "react";
import instructorImage from "@/public/assets/instructorImage.png";
import Image from "next/image";
const BecomeInstructor = () => {
  return (
    <div className="min-h-screen flex lg:flex-row flex-col lg:p-12 p-4 lg:items-center gap-8 justify-between">
      <div className="flex flex-col gap-8 ">
        <h3 className="font-semibold text-[32px] leading-[40px] text-gray-900">
          Your teaching & earning steps
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex items-center gap-4 p-2">
            <div className="font-semibold text-[#564FFD] text-2xl p-4 rounded-full bg-[#EBEBFF] flex items-center justify-center h-12 w-12 2xl:h-16 2xl:w-16">
              <span>1</span>
            </div>
            <div>Apply to become instructor</div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="font-semibold text-[#FF6636] text-2xl p-4 rounded-full bg-[#FFF0F0] flex items-center justify-center  h-12 w-12 2xl:h-16 2xl:w-16">
              <span> 2</span>
            </div>
            <div>Build & edit your profile</div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="font-semibold text-[#E34444] text-2xl p-4 rounded-full bg-[#FFF0F0] flex items-center justify-center h-12 w-12 2xl:h-16 2xl:w-16">
              3
            </div>
            <div>Create your new course</div>
          </div>

          <div className="flex items-center gap-4 p-2">
            <div className="font-semibold text-[#23BD33] text-2xl p-4 rounded-full bg-[#E1F7E3] flex items-center justify-center h-12 w-12 2xl:h-16 2xl:w-16">
              4
            </div>
            <div>Start teaching & earning</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row bg-[#5F36A8] p-6 justify-between lg:items-center">
        <div className="flex flex-col text-white gap-6">
          <h3 className="font-semibold text-[32px] leading-[40px]">
            Become an instructor
          </h3>
          <p className="text-sm lg:w-[300px]">
            Instructors from around the world teach millions of students on Kuda
            Academy. We provide the tools and skills to teach what you love.
          </p>
          <button className="text-mainPurple font-mulish font-[800] bg-white px-4 py-2 leading-[48px] rounded-lg w-48">
            Start Teaching
          </button>
        </div>
        <div>
          <Image src={instructorImage} alt="instructor Image" />
        </div>
      </div>
    </div>
  );
};

export default BecomeInstructor;
