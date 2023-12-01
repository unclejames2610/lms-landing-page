import React, { useState } from "react";
import logo from "../assets/logo.svg";
import SignIn from "./SignIn";

const SignUp = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  return (
    <div className="relative">
      {signIn && (
        <div className="fixed min-h-screen w-full bg-black/50 z-30"></div>
      )}
      {signIn && <SignIn signIn={signIn} setSignIn={setSignIn} />}
      <div className="flex items-center bg-lightPurple justify-center p-0 md:p-12">
        <div className="bg-white p-12 flex flex-col w-full md:w-fit shadow-lg h-fit gap-8 md:rounded-lg">
          <img src={logo} alt="" className="w-[199px] h-[26px]" />

          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold font-mulish">Sign up</h3>
            <div className="flex text-gray-700 flex-col md:flex-row md:gap-2 md:items-center">
              <p>Already have an account?</p>
              <span
                className="text-mainPurple cursor-pointer"
                onClick={() => setSignIn(!signIn)}
              >
                Sign in
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="firstname">First Name</label>
              <input
                className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="lastname">Last Name</label>
              <input
                className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="username">Username</label>
              <input
                className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
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

            <div className="flex flex-col gap-2">
              <label htmlFor="passwordConfirm">Password Confirmation</label>
              <input
                className="w-full p-4 placeholder:text-gray-600 border border-gray-300 rounded-lg font-mulish focus:outline-none text-sm"
                type="text"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="Password Confirmation"
              />
            </div>
          </div>

          <div className="font-mulish text-gray-700">
            By signing up, I agree with the website's{" "}
            <span className="text-mainPurple">Terms and Conditions</span>
          </div>
          <button className="bg-mainPurple font-mulish font-bold py-4 px-8 w-full text-white rounded-lg">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
