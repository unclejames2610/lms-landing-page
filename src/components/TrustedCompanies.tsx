import React from "react";
import TrustedCompaniesCard from "./TrustedCompaniesCard";
import pic1 from "../assets/netflix.svg";
import pic2 from "../assets/youtube.svg";
import pic3 from "../assets/google.svg";
import pic4 from "../assets/lenovo.svg";
import pic5 from "../assets/slack.svg";
import pic6 from "../assets/verizon.svg";
import pic7 from "../assets/lexmark.svg";
import pic8 from "../assets/microsoft.svg";

const TrustedCompanies = () => {
  return (
    <div className="flex lg:items-center justify-between gap-16 lg:flex-row flex-col p-4 lg:p-12 lg:min-h-screen">
      {/* writing */}
      <div className="flex flex-col gap-5">
        <h4 className="font-semibold text-3xl text-gray-900">
          6.3k trusted companies
        </h4>
        <p className="text-gray-600 text-sm">
          Nullam egestas tellus at enim ornare tristique. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra.
        </p>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <TrustedCompaniesCard imageSrc={pic1} />
        <TrustedCompaniesCard imageSrc={pic2} />
        <TrustedCompaniesCard imageSrc={pic3} />
        <TrustedCompaniesCard imageSrc={pic4} />
        <TrustedCompaniesCard imageSrc={pic5} />
        <TrustedCompaniesCard imageSrc={pic6} />
        <TrustedCompaniesCard imageSrc={pic7} />
        <TrustedCompaniesCard imageSrc={pic8} />
      </div>
    </div>
  );
};

export default TrustedCompanies;
