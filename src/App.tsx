import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BecomeInstructor from "./components/BecomeInstructor";
import ClosingRemarks from "./components/ClosingRemarks";
import Community from "./components/Community";
import FeaturedCourses from "./components/FeaturedCourses";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import HomeView from "./components/HomeView";
import Instructors from "./components/Instructors";
import Navbar from "./components/Navbar";
import RecentCourses from "./components/RecentCourses";
import Roles from "./components/Roles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const [signIn, setSignIn] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        {/* <div className="relative">
          {signIn && (
            <div className="fixed h-screen w-full bg-black/50 z-30"></div>
          )}
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
        </div> */}

        <div>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
