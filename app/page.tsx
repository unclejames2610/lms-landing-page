import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}
