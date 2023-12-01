import React from "react";
import { FaArrowRight } from "react-icons/fa";
import RolesCard from "./RolesCard";
import icon1 from "../assets/Frame 145.svg";
import icon2 from "../assets/Frame 145 (1).svg";
import icon3 from "../assets/Frame 145 (2).svg";
import icon4 from "../assets/Frame 145 (3).svg";
import icon5 from "../assets/Frame 145 (4).svg";
import icon6 from "../assets/Frame 145 (5).svg";
import icon7 from "../assets/Frame 145 (6).svg";
import icon8 from "../assets/Frame 145 (7).svg";
import icon9 from "../assets/Frame 145 (8).svg";
import icon10 from "../assets/Frame 145 (9).svg";
import icon11 from "../assets/Frame 145 (10).svg";
import icon12 from "../assets/Frame 145 (11).svg";

const Roles = () => {
  return (
    <div className="flex p-12 flex-col gap-8 min-h-screen">
      {/* writing */}
      <div className="flex flex-col gap-3">
        <div className="flex lg:flex-row flex-col lg:items-center gap-8">
          <p className="font-mulish font-[900] text-xl lg:text-2xl lg:leading-[50px] text-mainPurple">
            Learn top skills to help you relaunch your career in no time
          </p>
          <div className="flex gap-2 items-center text-mainPurple">
            <p className="font-mulish font-light text-xl lg:text-2xl lg:leading-5">
              View all roles
            </p>
            <span>
              <FaArrowRight className="text-xl" />
            </span>
          </div>
        </div>
        <p className="font-mulish font-light text-xl lg:text-2xl lg:leading-[50px] text-mainPurple">
          Top picks for you
        </p>
      </div>

      {/* roles grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <RolesCard
          bgColor="#EBEBFF"
          text="Label"
          subText="63,476 Courses"
          imageSrc={icon1}
        />

        <RolesCard
          bgColor="#E1F7E3"
          text="Business"
          subText="52,822 Courses"
          imageSrc={icon2}
        />

        <RolesCard
          bgColor="#FFF2E5"
          text="Finance & Accounting"
          subText="33,841 Courses"
          imageSrc={icon3}
        />

        <RolesCard
          bgColor="#FFF0F0"
          text="IT & Software"
          subText="22,649 Courses"
          imageSrc={icon4}
        />

        <RolesCard
          bgColor="#FFFFFF"
          text="Personal Development"
          subText="20,126 Courses"
          imageSrc={icon5}
        />

        <RolesCard
          bgColor="#F5F7FA"
          text="Office Productivity"
          subText="13,932 Courses"
          imageSrc={icon6}
        />

        <RolesCard
          bgColor="#EBEBFF"
          text="Marketing"
          subText="12,068 Courses"
          imageSrc={icon7}
        />

        <RolesCard
          bgColor="#F5F7FA"
          text="Photography & Video"
          subText="6,196 Courses"
          imageSrc={icon8}
        />

        <RolesCard
          bgColor="#FFF2E5"
          text="Lifestyle"
          subText="2,736 Courses"
          imageSrc={icon9}
        />

        <RolesCard
          bgColor="#FFEEE8"
          text="Design"
          subText="2,600 Courses"
          imageSrc={icon10}
        />

        <RolesCard
          bgColor="#E1F7E3"
          text="Health & Fitness"
          subText="1,678 Courses"
          imageSrc={icon11}
        />

        <RolesCard
          bgColor="#FFF2E5"
          text="Music"
          subText="959 Courses"
          imageSrc={icon12}
        />
      </div>
    </div>
  );
};

export default Roles;
