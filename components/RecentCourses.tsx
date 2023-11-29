import Image from "next/image";
import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import courseImage5 from "@/public/assets/courseImage5.svg";
import courseImage6 from "@/public/assets/courseImage6.svg";
import courseImage7 from "@/public/assets/courseImage7.svg";
import { PiUser } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

const RecentCourses = () => {
  return (
    <div className="min-h-screen p-4 lg:p-12 gap-8 flex flex-col lg:items-center">
      {/* writing */}
      <div>
        <h3 className="font-mulish font-semibold text-[40px] leading-[48px] text-gray-900 lg:text-center">
          Recently added courses
        </h3>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <div className="flex flex-col gap-2 shadow-md">
          <Image
            src={courseImage5}
            alt="courseImage5"
            className="w-full h-auto"
          />
          <div className="flex flex-col p-2">
            {/* row 1 */}
            <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
              <div className="uppercase text-[#993D20] bg-[#FFEEE8] text-[10px] leading-[12px] font-semibold w-fit p-1">
                Design
              </div>

              <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                $57
              </p>
            </div>

            {/* row 2 */}
            <div className="font-semibold text-gray-900">
              The Python Mega Course: Build 10 Real World Applications
            </div>

            {/* row 3 */}
            <div className="flex lg:items-center justify-between gap-1 lg:flex-row flex-col">
              <div className="flex gap-1">
                <IoIosStar className="text-[#FD8E1F]" />
                <span className="text-sm font-semibold text-gray-700">5.0</span>
              </div>

              <div className="flex gap-1">
                <PiUser className="text-[#564FFD]" />
                <span className="text-sm font-semibold text-gray-700">
                  265.7K
                </span>
                <span className="text-gray-500 text-sm">students</span>
              </div>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col gap-2 shadow-md">
          <Image
            src={courseImage7}
            alt="courseImage7"
            className="w-full h-auto"
          />
          <div className="flex flex-col p-2">
            {/* row 1 */}
            <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
              <div className="uppercase text-[#993D20] bg-[#FFEEE8] text-[10px] leading-[12px] font-semibold w-fit p-1">
                it & software
              </div>

              <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                $57
              </p>
            </div>

            {/* row 2 */}
            <div className="font-semibold text-gray-900">
              Facebook Ads & Facebook Marketing MASTERY 2021 Cours...
            </div>

            {/* row 3 */}
            <div className="flex lg:items-center justify-between gap-1 lg:flex-row flex-col">
              <div className="flex gap-1">
                <IoIosStar className="text-[#FD8E1F]" />
                <span className="text-sm font-semibold text-gray-700">5.0</span>
              </div>

              <div className="flex gap-1">
                <PiUser className="text-[#564FFD]" />
                <span className="text-sm font-semibold text-gray-700">
                  265.7K
                </span>
                <span className="text-gray-500 text-sm">students</span>
              </div>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex flex-col gap-2 shadow-md">
          <Image
            src={courseImage6}
            alt="courseImage6"
            className="w-full h-auto"
          />
          <div className="flex flex-col p-2">
            {/* row 1 */}
            <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
              <div className="uppercase text-[#342F98] bg-[#EBEBFF] text-[10px] leading-[12px] font-semibold w-fit p-1">
                Developments
              </div>

              <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                $57
              </p>
            </div>

            {/* row 2 */}
            <div className="font-semibold text-gray-900">
              The Python Mega Course: Build 10 Real World Applications
            </div>

            {/* row 3 */}
            <div className="flex lg:items-center justify-between gap-1 lg:flex-row flex-col">
              <div className="flex gap-1">
                <IoIosStar className="text-[#FD8E1F]" />
                <span className="text-sm font-semibold text-gray-700">5.0</span>
              </div>

              <div className="flex gap-1">
                <PiUser className="text-[#564FFD]" />
                <span className="text-sm font-semibold text-gray-700">
                  265.7K
                </span>
                <span className="text-gray-500 text-sm">students</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="font-mulish font-semibold bg-mainPurple px-6 py-4 text-white rounded-xl">
          Browse All Courses
        </button>
      </div>
    </div>
  );
};

export default RecentCourses;
