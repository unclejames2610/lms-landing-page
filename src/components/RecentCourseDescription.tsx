import React, { FC } from "react";
import { PiUser } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";
import recentCoursedp from "../assets/recentCoursedp.svg";
import { MdCheck } from "react-icons/md";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

interface RecentCourseDescriptionProps {
  categoryTextColor: string;
  categoryBgColor: string;
  category: string;
  title: string;
}

const RecentCourseDescription: FC<RecentCourseDescriptionProps> = ({
  category,
  categoryBgColor,
  categoryTextColor,
  title,
}) => {
  return (
    <div className="bg-white shadow-lg flex flex-col w-fit lg:w-[433px] absolute top-0 right-0 z-40">
      {/* box 1 */}
      <div className="flex flex-col gap-6 p-6">
        <div
          className={`uppercase text-[${categoryTextColor}] bg-[${categoryBgColor}] text-[10px] leading-[12px] font-semibold w-fit p-1`}
        >
          {category}
        </div>
        <div className="font-semibold text-gray-900">{title}</div>
        {/* row 3 */}
        <div className="flex lg:flex-row flex-col gap-4 justify-between">
          <div className="flex gap-2">
            <img src={recentCoursedp} alt="" />
            <div className="flex flex-col gap-2 text-sm">
              <p className="text-gray-500">Course by</p>
              <p>Ayo Moses</p>
            </div>
          </div>
          <div className="flex gap-1">
            <IoIosStar className="text-[#FD8E1F]" />
            <span className="text-sm font-semibold text-gray-700">5.0</span>
            <span className="text-gray-600 text-sm">(357,914)</span>
          </div>
        </div>

        {/* row 4 */}
        <div className="p-3 flex lg:flex-row flex-col gap-1 justify-between">
          <div className="gap-1 flex items-center">
            <PiUser className="text-[#564FFD]" />
            <p className="text-gray-700 text-sm font-medium">265.7K</p>
            <span className="text-gray-500 leading-[22px] text-sm">
              students
            </span>
          </div>

          <div className="gap-1 flex items-center">
            <FiBarChart className="text-[#E34444]" />
            <span className="text-gray-700 text-sm ">Beginner</span>
          </div>

          <div className="gap-1 flex items-center">
            <LuClock3 className="text-[#23BD33]" />
            <span className="text-gray-700 text-sm ">6 hour</span>
          </div>
        </div>

        {/* row 5 */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex gap-2 items-center">
            <h5 className="text-gray-900 text-2xl">₦1,400.00</h5>
            <p className="text-gray-500 line-through">₦2,600.00</p>
            <div className="text-[#FF6636] font-medium text-sm leading-[14px] p-2 bg-[#FFEEE8]">
              56% OFF
            </div>
          </div>

          <div className="p-2 flex items-center justify-center bg-[#FFEEE8] w-fit">
            <IoIosHeartEmpty className="text-xl text-[#FF6636]" />
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-100"></div>

      {/* box 2 */}
      <div className="flex flex-col gap-4 p-6">
        <p className="text-gray-900 text-xs uppercase font-medium">
          What you&apos;ll learn
        </p>
        <div className="flex items-start gap-2">
          <MdCheck className="text-[#23BD33] text-xl" />
          <p className="text-sm text-gray-600">
            Learn to use Python professionally, learning both Python 2 and
            Python 3!
          </p>
        </div>
        <div className="flex items-start gap-2">
          <MdCheck className="text-[#23BD33] text-xl" />
          <p className="text-sm text-gray-600">
            Create games with Python, like Tic Tac Toe and Blackjack!
          </p>
        </div>
        <div className="flex items-start gap-2">
          <MdCheck className="text-[#23BD33] text-xl" />
          <p className="text-sm text-gray-600">
            Learn to use Python professionally, learning both Python 2 and
            Python 3!
          </p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-100"></div>

      {/* box 3 */}
      <div className="flex flex-col gap-4 p-6">
        <div className="bg-mainPurple text-white px-6 w-full py-4 cursor-pointer flex items-center justify-center gap-2">
          <span className="text-xl">
            <PiShoppingCartSimpleBold />
          </span>
          <span>Add To Cart</span>
        </div>

        <button className="bg-lightPurple text-mainPurple px-6 w-full py-4">
          Course Detail
        </button>
      </div>
    </div>
  );
};

export default RecentCourseDescription;
