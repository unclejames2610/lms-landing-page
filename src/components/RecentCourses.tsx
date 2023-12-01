import React, { useState } from "react";
// import { IoIosHeartEmpty } from "react-icons/io";
// import { PiShoppingCartSimpleBold } from "react-icons/pi";
import courseImage5 from "../assets/courseImage5.svg";
import courseImage6 from "../assets/courseImage6.svg";
import courseImage7 from "../assets/courseImage7.svg";
import { PiUser } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
// import { FiBarChart } from "react-icons/fi";
// import { LuClock3 } from "react-icons/lu";
// import recentCoursedp from "../assets/recentCoursedp.svg";
// import { MdCheck } from "react-icons/md";
import RecentCourseDescription from "./RecentCourseDescription";

const RecentCourses = () => {
  const [card1, setCard1] = useState<boolean>(false);
  const [card2, setCard2] = useState<boolean>(false);
  const [card3, setCard3] = useState<boolean>(false);
  return (
    <div className="min-h-screen p-4 lg:p-12 gap-8 flex flex-col">
      {/* writing */}
      <div>
        <h3 className="font-mulish font-semibold text-[40px] leading-[48px] text-gray-900 text-center">
          Recently added courses
        </h3>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* card 1 */}
        <div
          className="flex lg:block justify-center relative cursor-pointer"
          onMouseEnter={() => setCard1(true)}
          onMouseLeave={() => setCard1(false)}
        >
          <div className="flex flex-col gap-2 shadow-md ">
            <img
              src={courseImage5}
              alt="courseImage5"
              className="lg:w-full w-auto h-auto"
            />
            <div className="flex flex-col p-2">
              {/* row 1 */}
              <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
                <div className="uppercase text-[#993D20] bg-[#FFEEE8] text-[10px] leading-[12px] font-semibold w-fit p-1">
                  Design
                </div>

                <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                  ₦5,700
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
                  <span className="text-sm font-semibold text-gray-700">
                    5.0
                  </span>
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

          {card1 && (
            <RecentCourseDescription
              category="design"
              categoryBgColor="#FFEEE8"
              categoryTextColor="#993D20"
              title="The Python Mega Course: Build 10 Real World Applications"
            />
          )}
        </div>

        {/* card 2 */}
        <div
          className="flex lg:block justify-center relative cursor-pointer"
          onMouseEnter={() => setCard2(true)}
          onMouseLeave={() => setCard2(false)}
        >
          <div className="flex flex-col gap-2 shadow-md ">
            <img
              src={courseImage7}
              alt="courseImage7"
              className="lg:w-full w-auto h-auto"
            />
            <div className="flex flex-col p-2">
              {/* row 1 */}
              <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
                <div className="uppercase text-[#993D20] bg-[#FFEEE8] text-[10px] leading-[12px] font-semibold w-fit p-1">
                  it & software
                </div>

                <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                  ₦5,700
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
                  <span className="text-sm font-semibold text-gray-700">
                    5.0
                  </span>
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

          {card2 && (
            <RecentCourseDescription
              category="it & software"
              categoryBgColor="#FFEEE8"
              categoryTextColor="#993D20"
              title="Facebook Ads & Facebook Marketing MASTERY 2021 Cours..."
            />
          )}
        </div>

        {/* card 3 */}
        <div
          className="flex lg:block justify-center relative cursor-pointer"
          onMouseEnter={() => setCard3(true)}
          onMouseLeave={() => setCard3(false)}
        >
          <div className="flex flex-col gap-2 shadow-md ">
            <img
              src={courseImage6}
              alt="courseImage6"
              className="lg:w-full w-auto h-auto"
            />
            <div className="flex flex-col p-2">
              {/* row 1 */}
              <div className="flex lg:flex-row flex-col justify-between gap-1 lg:items-center">
                <div className="uppercase text-[#342F98] bg-[#EBEBFF] text-[10px] leading-[12px] font-semibold w-fit p-1">
                  Developments
                </div>

                <p className="text-[#FF6636] font-semibold text-lg leading-[24px]">
                  ₦5,700
                </p>
              </div>

              {/* row 2 */}
              <div className="font-semibold text-gray-900">
                2021 Complete Python Bootcamp From Zero to Hero in Python
              </div>

              {/* row 3 */}
              <div className="flex lg:items-center justify-between gap-1 lg:flex-row flex-col">
                <div className="flex gap-1">
                  <IoIosStar className="text-[#FD8E1F]" />
                  <span className="text-sm font-semibold text-gray-700">
                    5.0
                  </span>
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

          {card3 && (
            <RecentCourseDescription
              category="Developments"
              categoryBgColor="#EBEBFF"
              categoryTextColor="#342F98"
              title="2021 Complete Python Bootcamp From Zero to Hero in Python"
            />
          )}
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
