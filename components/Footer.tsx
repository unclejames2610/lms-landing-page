import Image from "next/image";
import React from "react";
import kudaLogo from "@/public/assets/kudaLogo.svg";
import apple from "@/public/assets/apple.svg";
import play from "@/public/assets/playstore.svg";
import web from "@/public/assets/web.svg";
import kLogo from "@/public/assets/klogo.svg";
import twitter from "@/public/assets/twitter.svg";
import insta from "@/public/assets/instagram.svg";
import facebook from "@/public/assets/facebook.svg";
import medium from "@/public/assets/medium.svg";
import youtubeLogo from "@/public/assets/youtubeLogo.svg";
import linkedin from "@/public/assets/linkedin.svg";

const Footer = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between gap-8 p-4 lg:p-12">
      {/* row 1*/}
      <div className="flex lg:flex-row flex-col justify-between gap-8 items-start">
        <Image src={kudaLogo} alt="kuda logo" />

        <div className="flex lg:flex-row flex-col gap-12 justify-between font-mulish">
          {/* col 1 */}
          <div className="flex flex-col gap-4 text-[13px] leading-4">
            <p className="font-[800] text-mainPurple text-[15px] leading-4">
              Personal
            </p>
            <p>Discover Personal</p>
            <p>Transfer & Spend</p>
            <p>Save</p>
            <p>Investments</p>
            <p>Kuda card</p>
          </div>

          {/* col 2 */}
          <div className="flex flex-col gap-4 text-[13px] leading-4">
            <p className="font-[800] text-mainPurple text-[15px] leading-4">
              Business
            </p>
            <p>Discover Business</p>
            <p>Business Registration</p>
            <p>Soft POS</p>
            <p>Payments for Businesss</p>
            <p>Bill Payments</p>
            <p>Invoicing for Business</p>
          </div>

          {/* col 3 */}
          <div className="flex flex-col gap-4 text-[13px] leading-4">
            <p className="font-[800] text-mainPurple text-[15px] leading-4">
              Company
            </p>
            <p>Blog</p>
            <p>Press</p>
            <p>Join Our Team</p>
            <p>About Us</p>
          </div>

          {/* col 4 */}
          <div className="flex flex-col gap-4 text-[13px] leading-4">
            <p className="font-[800] text-mainPurple text-[15px] leading-4">
              Help
            </p>
            <p>Get Help</p>
            <p>Scam Awareness</p>
            <p>FAQs</p>
            <p>Security</p>
            <p>Contact Us</p>
            <p>Self Help</p>
          </div>

          {/* col 5 */}
          <div className="flex flex-col gap-4 text-[13px] leading-4">
            <p className="font-[800] text-mainPurple text-[15px] leading-4">
              Transparency
            </p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Information Security Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>

      {/* row 2 */}
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="flex items-center px-4 py-1 rounded-lg  bg-black gap-2 w-48">
          <Image src={apple} alt="" />
          <div className="flex flex-col items-start text-white font-mulish">
            <p className="text-xs">Download on the</p>
            <h6 className="font-semibold text-xl leading-5">App Store</h6>
          </div>
        </div>

        <div className="flex items-center px-4 py-1 rounded-lg  bg-black gap-2 w-48">
          <Image src={play} alt="" />
          <div className="flex flex-col items-start text-white font-mulish">
            <p className="text-[10px] uppercase">get it on</p>
            <h6 className="font-semibold text-xl leading-5">Google Play</h6>
          </div>
        </div>

        <div className="flex items-center px-4 py-1 rounded-lg  bg-mainPurple text-[#DFE3FF] gap-2 w-48">
          <Image src={web} alt="" />
          <div className="flex flex-col items-start text-white font-mulish">
            <div className="flex text-xs items-baseline gap-1 text-[#DFE3FF]">
              <p className="">Sign in to </p>
              <span>
                <Image src={kLogo} alt="" />
              </span>
              <span>kuda.</span>
            </div>

            <h6 className="font-semibold text-lg leading-5 text-[#DFE3FF]">
              On The Web
            </h6>
          </div>
        </div>
      </div>

      {/* row 3 */}
      <div className="flex flex-col gap-6">
        <p className="text-[13px] leading-4 text-[#979797] text-center font-mulish">
          Products may vary by country or market.
        </p>
        <div className="flex lg:flex-row flex-col justify-between gap-8">
          <div className="flex flex-col gap-5 text-mainPurple font-bold font-mulish">
            <p className="font-700">Contact</p>
            <p className="underline text-sm">hello@kuda.com</p>
            <div className="flex flex-col lg:flex-row gap-4">
              <Image src={twitter} alt="" />
              <Image src={insta} alt="" />
              <Image src={facebook} alt="" />
              <Image src={youtubeLogo} alt="" />
              <Image src={medium} alt="" />
              <Image src={linkedin} alt="" />
            </div>
          </div>

          {/* <div className="flex lg:flex-row flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-5 font-mulish">
              <p className="text-mainPurple font-[700]">Lagos</p>
              <div className="font-mulish flex flex-col text-sm text-black">
                <p>Plot 1-11, Ecentre Extension Office,</p>
                <p>Ecentre Mall, Commercial Avenue,</p>
                <p>Yaba, Lagos State,</p>
                <p>Nigeria.</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 font-mulish">
              <p className="text-mainPurple font-[700]">London</p>
              <div className="font-mulish flex flex-col text-sm text-black">
                <p>91 Wimpole Street,</p>
                <p>Ecentre Mall, Commercial Avenue,</p>
                <p>United Kingdom</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 font-mulish">
              <p className="text-mainPurple font-[700]">Cape Town</p>
              <div className="font-mulish flex flex-col text-sm text-black">
                <p>146 Campground Road,</p>
                <p>Snakepit Building, Level 4,</p>
                <p>Newlands, Cape Town</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* row 4 */}
      {/* <div className="flex flex-col gap-4 text-[#979797] font-mulish text-[11px] leading-3">
        <p>
          Kuda NG Customers get 25 free transfer to other banks every month.
          Extra transfers to other banks cost ₦10 each.
        </p>
        <p>
          © 2022 Kuda MF Bank (RC796975). All rights reserved. All deposits are
          insured by the Nigerian Deposit Insurance Corporation (NDIC). Kuda MF
          Bank is licensed by the Central Bank of Nigeria. “Kuda” and “Kudabank”
          are trademarks of Kuda Technologies Ltd Lagos: 151 Herbert Macaulay
          Way, Yaba, Lagos. London: 5 New Street Square, London, EC4A 3TW, UK
        </p>

        <p>
          Kuda Current Account is provided through Kuda MF Bank. Kuda card is
          issued by Access Bank, pursuant to a license from Visa International &
          Verve. All text, graphics, audio files, code, downloadable material,
          and other works on this website are the copyrighted works of Kuda MF
          Bank. All Rights Reserved. Any unauthorized redistribution or
          reproduction of any copyrighted materials on this website is strictly
          prohibited. Other product and company names are trademarks of their
          respective owners. This website contains simulated images; actual
          appearance may vary.
        </p>
      </div> */}
    </div>
  );
};

export default Footer;
