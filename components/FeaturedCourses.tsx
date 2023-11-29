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
import FeaturedCourseCard from "./FeaturedCourseCard";

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

          <FeaturedCourseCard
            imageSrc={courseImage1}
            categoryName="Health & Fitness"
            categoryTextColor="#15711F"
            categoryBgColor="#E1F7E3"
            courseName="Investing In Stocks The Complete Course! (13 H..."
          />

          {/* card 2 */}
          <FeaturedCourseCard
            imageSrc={courseImage2}
            categoryName="Personal Development"
            categoryTextColor="#993D20"
            categoryBgColor="#FFEEE8"
            courseName="Google Analytics Certification - Learn How To..."
          />
          {/* card 3 */}
          <FeaturedCourseCard
            imageSrc={courseImage3}
            categoryName="Productivity"
            categoryTextColor="#1D2026"
            categoryBgColor="#F5F7FA"
            courseName="Adobe XD for Web Design: Essential Principles"
            courseTextColor="#FF6636"
          />
          {/* card 4 */}
          <FeaturedCourseCard
            imageSrc={courseImage4}
            categoryName="Music"
            categoryTextColor="#65390C"
            categoryBgColor="#FFF2E5"
            courseName="The Python Mega Course: Build 10 Real World ."
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
