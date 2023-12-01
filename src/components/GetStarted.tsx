import React from "react";
import image2 from "../assets/Image2.svg";

const GetStarted = () => {
  return (
    <div className="flex lg:flex-row flex-col gap-12 min-h-screen justify-between p-12 lg:items-center">
      {/* picture */}
      <div>
        <img src={image2} alt="" />
      </div>
      <div className="flex flex-col gap-8 lg:w-[727px] ">
        <h2 className="font-mulish font-[900] text-mainPurple text-4xl lg:text-5xl lg:leading-[75px]">
          Access to learning anytime and anywhere
        </h2>
        <p className="font-poppins font-semibold text-xl lg:text-[22px] lg:leading-[33px] text-[#6A6B6C]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy
        </p>

        <table className="lg:w-[495px] mt-8">
          <tbody>
            <tr className="border-b border-dashed border-customBlue">
              <td className="p-4">
                <p className="text-customBlue font-semibold font-vazirmatn text-xl lg:text-3xl">
                  300+
                </p>
                <p className="text-[#6A6B6C] font-poppins text-lg lg:text-xl leading-[30px]">
                  Experience Teacher
                </p>
              </td>
              <td className="border-l border-dashed border-customBlue p-4">
                <p className="text-customBlue font-semibold font-vazirmatn text-xl lg:text-3xl">
                  100+
                </p>
                <p className="text-[#6A6B6C] font-poppins text-lg lg:text-xl leading-[30px]">
                  Successful Students
                </p>
              </td>
            </tr>
            <tr className="">
              <td className="p-4">
                <p className="text-customBlue font-semibold font-vazirmatn text-xl lg:text-3xl">
                  70+
                </p>
                <p className="text-[#6A6B6C] font-poppins text-lg lg:text-xl leading-[30px]">
                  Expert Learners
                </p>
              </td>
              <td className="border-l border-dashed border-customBlue p-4">
                <p className="text-customBlue font-semibold font-vazirmatn text-xl lg:text-3xl">
                  80+
                </p>
                <p className="text-[#6A6B6C] font-poppins text-lg lg:text-xl leading-[30px]">
                  Happy Students
                </p>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>

        <div className="flex lg:justify-end">
          <button className="font-mulish font-[1000] text-lg lg:text-[28px] leading-[35px] bg-mainPurple rounded-xl text-white py-4 px-8 lg:w-64">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
