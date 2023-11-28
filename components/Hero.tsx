import React from "react";
import heroImg from "@/public/assets/heroImg.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col h-screen bg-lightPurple lg:items-center p-12  xl:px-24 justify-between">
      <div className="flex flex-col items-start gap-4">
        <h2 className="font-mulish font-[900] text-5xl leading-[50px] text-mainPurple">
          Learn at Kuda
        </h2>
        <p className="font-mulish font-semibold text-lg lg:text-xl leading-[30px] text-black md:w-[620px]">
          Get exposed to a variety of courses from instructors with real world
          experience.
        </p>
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:mt-12">
          <button className="p-2 bg-mainPurple border-2 border-mainPurple text-white font-mulish font-bold text-sm rounded-lg w-full lg:w-auto">
            Browse all courses
          </button>
          <button className="p-2 bg-white border-2 border-black text-mainPurple font-mulish font-bold text-sm rounded-lg w-full lg:w-auto">
            Buy for your team
          </button>
        </div>
      </div>

      <div>
        <Image src={heroImg} alt="heroImage" />
      </div>
    </div>
  );
};

export default Hero;
