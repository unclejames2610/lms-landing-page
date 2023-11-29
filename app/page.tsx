import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import GetStarted from "@/components/GetStarted";
import Roles from "@/components/Roles";
import FeaturedCourses from "@/components/FeaturedCourses";
import RecentCourses from "@/components/RecentCourses";
import Instructors from "@/components/Instructors";
import BecomeInstructor from "@/components/BecomeInstructor";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <GetStarted />
      <Roles />
      <FeaturedCourses />
      <RecentCourses />
      <Instructors />
      <BecomeInstructor />
    </div>
  );
}
