"use client";
import React, { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import GetStarted from "@/components/GetStarted";
import Roles from "@/components/Roles";
import FeaturedCourses from "@/components/FeaturedCourses";
import RecentCourses from "@/components/RecentCourses";
import Instructors from "@/components/Instructors";
import BecomeInstructor from "@/components/BecomeInstructor";
import TrustedCompanies from "@/components/TrustedCompanies";
import Community from "@/components/Community";
import ClosingRemarks from "@/components/ClosingRemarks";
import Footer from "@/components/Footer";
import SignIn from "../SignIn";

const HomeView = () => {
  const [signIn, setSignIn] = useState<boolean>(false);
  return (
    <div className="relative">
      {signIn && <div className="fixed h-screen w-full bg-black/50 z-30"></div>}
      {signIn && <SignIn signIn={signIn} setSignIn={setSignIn} />}
      <Navbar signIn={signIn} setSignIn={setSignIn} />

      <Hero />
      <GetStarted />
      <Roles />
      <FeaturedCourses />
      <RecentCourses />
      <Instructors />
      <BecomeInstructor />
      {/* <TrustedCompanies /> */}
      <Community />
      <ClosingRemarks />
      <Footer />
    </div>
  );
};

export default HomeView;
