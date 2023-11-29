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
      <TrustedCompanies />
      <Community />
      <ClosingRemarks />
      <Footer />
    </div>
  );
}
