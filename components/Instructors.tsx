import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import image1 from "@/public/assets/Image.svg";
import image2 from "@/public/assets/Image (5).svg";
import image3 from "@/public/assets/Image (1).svg";
import image4 from "@/public/assets/Image (2).svg";
import image5 from "@/public/assets/Image (4).svg";
import InstructorsCard from "./InstructorsCard";

const Instructors = () => {
  return (
    <div className="min-h-screen flex p-4 lg:p-12 gap-8 flex-col ">
      {/* writing */}
      <h4 className="text-[40px] leading-[48px] font-semibold">
        Top instructor of the month
      </h4>
      <div className="flex gap-1 lg:items-center text-sm lg:flex-row flex-col">
        <p className=" text-gray-600">
          Thousands of students waiting for a instructor. Start teaching &
          earning now!.
        </p>
        <div className="flex items-center gap-1">
          <span className="text-[#FF6636]">Become instructor</span>
          <FaArrowRight className="text-[#FF6636]" />
        </div>
      </div>

      {/* grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* card 1 */}
        <InstructorsCard
          imageSrc={image1}
          name="Nosa Oyegun"
          job="Senior Developer"
          rating="4.6"
          stuNo="854"
        />

        {/* card 2 */}
        <InstructorsCard
          imageSrc={image2}
          name="Adetunji Tejuosho"
          job="Digital Product Designer"
          rating="4.9"
          stuNo="451,444"
        />

        {/* card 3 */}
        <InstructorsCard
          imageSrc={image3}
          name="Similolulwa"
          job="UI/UX Designer"
          rating="4.8"
          stuNo="435,671"
        />

        {/* card 4 */}
        <InstructorsCard
          imageSrc={image4}
          name="Kingsley Ahiwe"
          job="Adobe Instructor"
          rating="4.7"
          stuNo="511,123"
        />

        {/* card 5 */}
        <InstructorsCard
          imageSrc={image5}
          name="Lawson Iduku"
          job="Lead Developer"
          rating="4.2"
          stuNo="2,711"
        />

        {/* card 1 */}
        <InstructorsCard
          imageSrc={image1}
          name="Nosa Oyegun"
          job="Senior Developer"
          rating="4.6"
          stuNo="854"
        />

        {/* card 2 */}
        <InstructorsCard
          imageSrc={image2}
          name="Adetunji Tejuosho"
          job="Digital Product Designer"
          rating="4.9"
          stuNo="451,444"
        />

        {/* card 3 */}
        <InstructorsCard
          imageSrc={image3}
          name="Similolulwa"
          job="UI/UX Designer"
          rating="4.8"
          stuNo="435,671"
        />

        {/* card 4 */}
        <InstructorsCard
          imageSrc={image4}
          name="Kingsley Ahiwe"
          job="Adobe Instructor"
          rating="4.7"
          stuNo="511,123"
        />

        {/* card 5 */}
        <InstructorsCard
          imageSrc={image5}
          name="Lawson Iduku"
          job="Lead Developer"
          rating="4.2"
          stuNo="2,711"
        />
      </div>
    </div>
  );
};

export default Instructors;
