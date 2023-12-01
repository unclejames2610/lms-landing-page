import React, { Dispatch, FC, SetStateAction } from "react";
import { FaXmark } from "react-icons/fa6";

import logo from "../assets/logo.svg";
// import { useRouter } from "next/navigation";
import { Link } from "react-router-dom";

interface SignInProps {
  signIn: boolean;
  setSignIn: Dispatch<SetStateAction<boolean>>;
}

const SignIn: FC<SignInProps> = ({ signIn, setSignIn }) => {
  // const router = useRouter();
  return (
    <div className="fixed md:rounded-lg bg-white p-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 md:w-96 w-full lg:w-[500px] h-full md:h-fit">
      <div className="relative flex flex-col gap-6 w-full">
        <div className="flex justify-end">
          <FaXmark
            className="text-right text-2xl cursor-pointer text-mainPurple"
            onClick={() => setSignIn(!signIn)}
          />
        </div>

        <div className="relative">
          <img src={logo} alt="" className="" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold font-mulish">Sign in</h3>
          <div className="flex text-gray-700 flex-col md:flex-row md:gap-2 md:items-center">
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              className="text-mainPurple cursor-pointer"
              onClick={() => {
                setSignIn(!signIn);
              }}
            >
              Sign up
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
              type="text"
              name="username"
              id="username"
              placeholder="Username or Email Address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <input
                type="checkbox"
                className="text-mainPurple font:outline-none"
              />
              <span className="font-mulish">Remember Me</span>
            </div>
            <p className="text-mainPurple">Forgot Password?</p>
          </div>
        </div>

        <button className="bg-mainPurple font-mulish font-bold py-4 px-8 w-full text-white rounded-lg">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
