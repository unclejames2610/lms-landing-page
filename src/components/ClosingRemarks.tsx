import React from "react";

const ClosingRemarks = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen p-4 lg:p-12 gap-10">
      {/* top */}
      <div className="flex gap-8 flex-col text-black">
        <h1 className="font-[1000] 2xl:leading-[80px] text-4xl lg:text-5xl 2xl:text-[70px] font-mulish">
          The Ideal solution for your team
        </h1>
        <p className="lg:w-[770px] md:w-[400px] text-xl lg:text-2xl">
          Get the world-class learning and development chosen by top
          organizations across the globe. All on Kudacademy for teams.
        </p>
        <button className="rounded-md bg-mainPurple text-[#FDFDFD] font-mulish text-base lg:text-2xl font-[700] p-4 w-fit">
          Use Kuda Academy for Business
        </button>
      </div>

      {/* bottom */}
      <div className="flex flex-col gap-8 text-black justify-end items-end">
        <h4 className="font-[1000] font-mulish text-xl lg:text-2xl 2xl:text-[45px] 2xl:leading-[80px] lg:w-[730px] md:w-[400px] text-right">
          Take the next step toward your personal and professional goals with
          Kuda Academy.
        </h4>
        <button className="bg-mainPurple text-white p-4 w-fit rounded-md font-mulish font-[700] text-base lg:text-2xl leading-[20px]">
          Join for free
        </button>
      </div>
    </div>
  );
};

export default ClosingRemarks;
