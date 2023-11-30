"use client";
import Image from "next/image";
import React, { Dispatch, FC, SetStateAction, useState } from "react";
import logo from "@/public/assets/logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import cartIcon from "@/public/assets/cartIcon.svg";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface NavbarProps {
  signIn: boolean;
  setSignIn: Dispatch<SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({ signIn, setSignIn }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className="flex flex-col relative">
      <div className="flex justify-between items-center p-4 lg:pt-10 bg-white">
        <div className="flex gap-12 items-center">
          {/* logo */}
          <div className="">
            <Image src={logo} alt="logo" />
          </div>

          <div className="lg:flex gap-2 items-center text-mainPurple hidden">
            <span className="font-mulish font-bold">Categories</span>
            <IoMdArrowDropdown />
          </div>

          <div className="lg:flex items-center gap-2 rounded-xl bg-[#D9D9D9] p-2 hidden">
            <span className="text-mainPurple">
              <AiOutlineSearch />
            </span>
            <input
              className="text-mainPurple bg-transparent placeholder:text-mainPurple/30 text-sm leading-[18px] font-mulish font-bold focus:outline-none w-full"
              placeholder="Search for courses"
            />
          </div>
        </div>

        <div className="flex lg:gap-12 md:gap-8 gap-2 items-center">
          {/* icon */}
          <div>
            <Image
              src={cartIcon}
              alt="cart"
              className="lg:h-auto lg:w-auto h-[35px] w-[30px]"
            />
          </div>
          <button
            className="text-mainPurple px-6 py-2 rounded-lg bg-white font-mulish font-[800] text-[15px] leading-[22.5px] border-2 border-black hidden lg:block lg:w-32"
            onClick={() => setSignIn(!signIn)}
          >
            Sign In
          </button>
          <button
            className="text-white px-6 py-2 rounded-lg bg-mainPurple font-mulish font-[800] text-[15px] leading-[22.5px] border-2 border-mainPurple hidden lg:block lg:w-32"
            onClick={() => {
              router.push("signup");
            }}
          >
            Sign Up
          </button>

          {navOpen ? (
            <FaXmark
              className="text-mainPurple text-2xl lg:hidden cursor-pointer"
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <FaBars
              className="text-mainPurple text-2xl lg:hidden cursor-pointer"
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>
      </div>
      {navOpen && (
        <div className="bg-white gap-8 flex flex-col p-4">
          <div className="flex justify-between items-center text-mainPurple">
            <span className="font-mulish font-bold">Categories</span>
            <IoMdArrowDropdown />
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#D9D9D9] p-2 ">
            <span className="text-mainPurple">
              <AiOutlineSearch />
            </span>
            <input
              className="text-mainPurple bg-transparent placeholder:text-mainPurple/30 text-sm leading-[18px] font-mulish font-bold focus:outline-none w-full"
              placeholder="Search for courses"
            />
          </div>
          <button
            className="text-mainPurple px-6 py-2 rounded-lg bg-white font-mulish font-[800] text-[15px] leading-[22.5px] border-2 border-black "
            onClick={() => setSignIn(!signIn)}
          >
            Sign In
          </button>
          <button
            className="text-white px-4 py-2 rounded-lg bg-mainPurple font-mulish font-[800] text-[15px] leading-[22.5px] border-2 border-mainPurple "
            onClick={() => {
              router.push("signup");
            }}
          >
            Join Kuda
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
