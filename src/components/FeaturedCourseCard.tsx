import React, { CSSProperties, FC } from "react";
import courseDp from "../assets/courseDp.svg";
import { PiUser } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

interface FeaturedCourseCardProps {
  imageSrc: string;
  categoryTextColor: string;
  categoryBgColor: string;
  categoryName: string;
  courseTextColor?: string;
  courseName: string;
}

const FeaturedCourseCard: FC<FeaturedCourseCardProps> = ({
  imageSrc,
  categoryBgColor,
  categoryName,
  categoryTextColor,
  courseName,
  courseTextColor,
}) => {
  const categoryStyle: CSSProperties = {
    padding: "4px",
    fontSize: "10px",
    fontWeight: "medium",
    textTransform: "uppercase",
    lineHeight: "0.75rem",
    background: categoryBgColor,
    color: categoryTextColor,
    width: "fit-content",
  };

  return (
    <div className="flex justify-center lg:block ">
      <div className="flex lg:flex-row flex-col gap-4 border border-gray-100 shadow-md">
        {/* image */}
        <div>
          <img
            src={imageSrc}
            alt={`₦{imageSrc}`}
            className="w-full h-full  lg:w-auto"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-2">
          {/* row 1 */}
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-1">
            <div
              //   className={`p-1 text-[${categoryTextColor}] uppercase text-[10px] font-medium leading-3 bg-[${categoryBgColor}] w-fit `}
              style={categoryStyle}
            >
              {categoryName}
            </div>

            <div className="flex items-center gap-1 ">
              <p className="text-lg leading-[24px] text-gray-900">₦1,400.00</p>
              <p className="text-sm leading-6 line-through text-gray-400">
                ₦2,600.00
              </p>
            </div>
          </div>

          {/* row 2 */}
          <div
            className={`${
              courseTextColor ? `text-[${courseTextColor}]` : "text-gray-900"
            }  font-medium leading-[22px]`}
          >
            {courseName}
          </div>

          {/* row 3 */}
          <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-1">
            <div className="flex items-center gap-2">
              <img src={courseDp} alt="dp" />
              <p className="text-sm text-gray-700 leading-[22px]">Ayo Moses</p>
            </div>

            <div className="flex items-center gap-1">
              <IoIosStar className="text-[#FD8E1F]" />
              <p className="text-gray-900">5.0</p>
              <span className="text-sm text-gray-500 leading-[22px]">
                (357,914)
              </span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-100 p-0"></div>

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
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourseCard;
