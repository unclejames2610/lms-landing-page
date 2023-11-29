import Image from "next/image";
import React from "react";
import courseImage1 from "@/public/assets/courseImage1.svg";
import courseImage2 from "@/public/assets/courseImage2.svg";
import courseImage3 from "@/public/assets/courseImage3.svg";
import courseImage4 from "@/public/assets/courseImage4.svg";
import courseDp from "@/public/assets/courseDp.svg";
import { PiUser } from "react-icons/pi";
import { IoIosStar } from "react-icons/io";
import { FiBarChart } from "react-icons/fi";
import { LuClock3 } from "react-icons/lu";

const FeaturedCourses = () => {
  return (
    <div className="min-h-screen p-4 ">
      <div className="border border-[#E9EAF0] py-12 px-6 gap-8 flex flex-col">
        {/* writing */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          <h4 className="font-semibold text-[40px] leading-[48px] text-[#1D2026]">
            Our featured courses
          </h4>
          <p className="text-sm text-gray-800 leading-[22px] lg:w-[424px]">
            Vestibulum sed dolor sed diam mollis maximus vel nec dolor. Donec
            varius purus et eleifend porta.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* card 1 */}
          <div className="flex lg:flex-row flex-col  gap-4 border border-gray-100 shadow-md">
            {/* image */}
            <div>
              <Image
                src={courseImage1}
                alt="courseImage1"
                className="w-full h-full  lg:w-auto"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-2">
              {/* row 1 */}
              <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-1">
                <div className="p-1 text-[#15711F] uppercase text-[10px] font-medium leading-3 bg-[#E1F7E3] w-fit ">
                  Health & Fitness
                </div>

                <div className="flex items-center gap-1 ">
                  <p className="text-lg leading-[24px] text-gray-900">$14.00</p>
                  <p className="text-sm leading-6 line-through text-gray-400">
                    $26.00
                  </p>
                </div>
              </div>

              {/* row 2 */}
              <div className="text-gray-900 font-medium leading-[22px]">
                Investing In Stocks The Complete Course! (13 H...
              </div>

              {/* row 3 */}
              <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-1">
                <div className="flex items-center gap-2">
                  <Image src={courseDp} alt="dp" />
                  <p className="text-sm text-gray-700 leading-[22px]">
                    Ayo Moses
                  </p>
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

          {/* card 2 */}
          <div className="flex gap-4 border border-gray-100 shadow-md lg:flex-row flex-col ">
            {/* image */}
            <div>
              <Image
                src={courseImage2}
                alt="courseImage2"
                className="w-full h-full  lg:w-auto"
              />
            </div>
            <div className="flex flex-col gap-3 p-2">
              {/* row 1 */}
              <div className="flex lg:items-center justify-between lg:flex-row flex-col gap-1">
                <div className="p-1 text-[#993D20] uppercase text-[10px] font-medium w-fit leading-3 bg-[#FFEEE8] ">
                  Personal Development
                </div>

                <div className="flex items-center gap-1 ">
                  <p className="text-lg leading-[24px] text-gray-900">$14.00</p>
                  <p className="text-sm leading-6 line-through text-gray-400">
                    $26.00
                  </p>
                </div>
              </div>

              {/* row 2 */}
              <div className="text-gray-900 font-medium leading-[22px]">
                Google Analytics Certification - Learn How To...
              </div>

              {/* row 3 */}
              <div className="flex justify-between gap-1 lg:items-center lg:flex-row flex-col">
                <div className="flex items-center gap-2">
                  <Image src={courseDp} alt="dp" />
                  <p className="text-sm text-gray-700 leading-[22px]">
                    Ayo Moses
                  </p>
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
              <div className="p-3 flex justify-between gap-1 lg:flex-row flex-col">
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

          {/* card 3 */}
          <div className="flex gap-4 border border-gray-100 shadow-md lg:flex-row flex-col">
            {/* image */}
            <div>
              <Image
                src={courseImage3}
                alt="courseImage3"
                className="w-full h-full  lg:w-auto"
              />
            </div>
            <div className="flex flex-col gap-3 p-2">
              {/* row 1 */}
              <div className="flex lg:items-center justify-between lg:flex-row flex-col gap-1">
                <div className="p-1 text-[#1D2026] uppercase text-[10px] font-medium w-fit leading-3 bg-[#F5F7FA] ">
                  Productivity
                </div>

                <div className="flex items-center gap-1 ">
                  <p className="text-lg leading-[24px] text-gray-900">$14.00</p>
                  <p className="text-sm leading-6 line-through text-gray-400">
                    $26.00
                  </p>
                </div>
              </div>

              {/* row 2 */}
              <div className="text-[#FF6636] font-medium leading-[22px]">
                Adobe XD for Web Design: Essential Principles
              </div>

              {/* row 3 */}
              <div className="flex justify-between gap-1 lg:items-center lg:flex-row flex-col">
                <div className="flex items-center gap-2">
                  <Image src={courseDp} alt="dp" />
                  <p className="text-sm text-gray-700 leading-[22px]">
                    Ayo Moses
                  </p>
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
              <div className="p-3 flex justify-between gap-1 lg:flex-row flex-col">
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

          {/* card 4 */}
          <div className="flex gap-4 border border-gray-100 shadow-md lg:flex-row flex-col ">
            {/* image */}
            <div>
              <Image
                src={courseImage4}
                alt="courseImage4"
                className="w-full h-full  lg:w-auto"
              />
            </div>
            <div className="flex flex-col gap-3 p-2">
              {/* row 1 */}
              <div className="flex lg:items-center justify-between lg:flex-row flex-col gap-1">
                <div className="p-1 text-[#65390C] uppercase text-[10px] font-medium w-fit leading-3 bg-[#FFF2E5] ">
                  Music
                </div>

                <div className="flex items-center gap-1 ">
                  <p className="text-lg leading-[24px] text-gray-900">$14.00</p>
                  <p className="text-sm leading-6 line-through text-gray-400">
                    $26.00
                  </p>
                </div>
              </div>

              {/* row 2 */}
              <div className="text-gray-900 font-medium leading-[22px]">
                The Python Mega Course: Build 10 Real World ...
              </div>

              {/* row 3 */}
              <div className="flex justify-between gap-1 lg:items-center lg:flex-row flex-col">
                <div className="flex items-center gap-2">
                  <Image src={courseDp} alt="dp" />
                  <p className="text-sm text-gray-700 leading-[22px]">
                    Ayo Moses
                  </p>
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
              <div className="p-3 flex justify-between gap-1 lg:flex-row flex-col">
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
      </div>
    </div>
  );
};

export default FeaturedCourses;
