import React from "react";
import logo from "../assets/logo3.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import location from "../assets/location.svg";
import bgFooter from "../assets/bg-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#e8eaf3] pt-8">
      <div className="bg-[linear-gradient(90deg,_rgb(16,53,112),_rgb(0,79,206)_100%)]  container mx-auto  flex flex-col items-center rounded-[24px]">
        <h3 className="text-white text-[38px] font-semibold mt-[80px] text-center">
          Ready to Hire Smarter
        </h3>

        <p className="text-base text-[#B9BDC7] mt-[12px] text-center">
          Unlock Exclusive Insights Subscribe to Our Newsletter
        </p>

        <button className="bg-[#FCE38A] py-4 px-9 rounded-[50px] mt-[48px] mb-[80px]">
          Join Now
        </button>
      </div>

      <div
        className="fixed bottom-0 left-0 w-[655px] h-[655px] rounded-full -z-10 pointer-events-none"
        style={{
          filter: "blur(1000px)",
          background:
            "linear-gradient(83.09deg, rgb(255, 111, 185) -65.063%, rgb(103, 151, 255) 23.729%)",
        }}
      ></div>

      {/* navigation */}
      <div className="lg:flex space-y-10  lg:space-y-0 px-10 md:px-5 items-center justify-between mt-[144px] container mx-auto pb-[130px]">
        {/* 1st */}
        <div>
          <div className="flex items-center gap-[12px]">
            <img src={logo} alt="" />
            <h3 className="text-[37.09px] font-bold text-[#020407]">Logo</h3>
          </div>

          <p className="text-sm text-[#335386] mt-[30px] w-9/12">
            SalesRank.AI offers a comprehensive suite of AI-powered solutions to
            help you find expert sales professionals who can elevate every
            aspect of your business. From performance rankings and skill
            verification to industry benchmarking and real-time analytics, we
            provide the insights and tools to optimize your sales strategy and
            drive growth.
          </p>

          <div className="flex items-center gap-4 mt-8">
            <div className="bg-white rounded-full p-4">
              <FaFacebookF />
            </div>

            <div className="bg-white rounded-full p-4">
              <FaTwitter />
            </div>
            <div className="bg-white rounded-full p-4">
              <FaLinkedinIn />
            </div>
            <div className="bg-white rounded-full p-4">
              <FaInstagram />
            </div>
          </div>
        </div>

        {/* 2nd */}

        <div className="md:flex px-10 space-y-5 md:space-y-0 md:px-0 items-start gap-[115px]">
          {/* 1st */}
          <div className="flex flex-col gap-6">
            <span className="text-[18px] font-semibold text-[#001C4A]">
              Navigation
            </span>

            <span className="text-sm text-[#335386]">Service</span>
            <span className="text-sm text-[#335386]">Agency</span>
            <span className="text-sm text-[#335386]">Case Study</span>
            <span className="text-sm text-[#335386]">Resource</span>
            <span className="text-sm text-[#335386]">Contact</span>
          </div>

          {/* 2nd */}

          <div className="flex flex-col gap-6">
            <span className="text-[18px] font-semibold text-[#001C4A]">
              License
            </span>

            <span className="text-sm text-[#335386]">Privacy Policy</span>
            <span className="text-sm text-[#335386]">Copyright</span>
            <span className="text-sm text-[#335386]">Email Address</span>
          </div>

          {/* 3rd */}

          <div className="flex flex-col gap-6 ">
            <span className="text-[18px] font-semibold text-[#001C4A]">
              Contact
            </span>

            <span className="text-sm text-[#335386] flex items-start gap-1 w-full">
              {" "}
              <img src={phone} alt="" /> (406) 555-0120
            </span>
            <span className="text-sm text-[#335386] flex items-start gap-1 w-full">
              <img src={mail} alt="" /> Hey@boostim.com
            </span>
            <span className="text-sm text-[#335386] flex gap-1 items-start w-full">
              <img src={location} alt="" /> 2972 Westheimer Rd. Santa Ana,
              Illinois 85486
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
