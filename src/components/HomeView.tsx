import React, { useState } from "react";
import BecomeInstructor from "./BecomeInstructor";
import ClosingRemarks from "./ClosingRemarks";
import Community from "./Community";
import FeaturedCourses from "./FeaturedCourses";
import Footer from "./Footer";
import GetStarted from "./GetStarted";
import Hero from "./Hero";
import Instructors from "./Instructors";
import Navbar from "./Navbar";
import RecentCourses from "./RecentCourses";
import Roles from "./Roles";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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

      <Community />
      <ClosingRemarks />
      <Footer />
    </div>
  );
};

export default HomeView;
