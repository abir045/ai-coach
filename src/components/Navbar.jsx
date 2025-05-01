import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiMenuFries } from "react-icons/ci";
import logo from "../assets/logo2.svg";
import { IoMdClose } from "react-icons/io";
import bg from "../assets/bg-left.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="w-full  h-[108px] ">
      {/* <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-pink-400/55 to-blue-300/55 rounded-[500px]  blur-[1000px]"></div> */}
      <img
        className="absolute top-0 left-0 w-64 h-64 md:w-[655px] md:h-[655px]"
        src={bg}
        alt=""
      />
      <nav className="flex items-center justify-around w-full  py-4 ">
        {/* Logo */}
        <div className="">
          <img
            src={logo}
            alt="logo"
            className="w-32 h-8 sm:w-48 sm:h-10 md:w-[238px] md:h-[48px]"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="items-center lg:gap-[33px] text-sm font-semibold text-[#020407] jakarta-sans hidden md:flex ">
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-300 cursor-pointer hover:text-[#3B9DF8] capitalize px-1 py-1">
            Home
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-300 cursor-pointer hover:text-[#3B9DF8] capitalize px-1 py-1">
            About
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-300 cursor-pointer hover:text-[#3B9DF8] capitalize px-1 py-1">
            Pricing
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-300 cursor-pointer hover:text-[#3B9DF8] capitalize px-1 py-1">
            Consulting
          </li>
          <li className="hover:border-b-[#3B9DF8] border-b-[2px] border-transparent transition-all duration-300 cursor-pointer hover:text-[#3B9DF8] capitalize px-1 py-1">
            AI Coach
          </li>
        </ul>

        {/* Desktop Search and Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 border border-[#010205] rounded-full text-base font-bold manrope hover:bg-[#3B9DF8] hover:text-white hover:border-[#3B9DF8] transition-colors">
            Get started
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 md:hidden">
          <button className="px-3 py-1.5 border border-[#010205] rounded-full text-xs sm:text-sm font-medium hover:bg-[#3B9DF8] hover:text-white hover:border-[#3B9DF8] transition-colors">
            Get started
          </button>
          {isMenuOpen ? (
            <IoMdClose
              className="text-2xl text-[#424242] cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <CiMenuFries
              className="text-2xl text-[#424242] cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        <aside
          className={`md:hidden fixed top-0 right-0 h-full bg-white shadow-lg w-64 sm:w-72 z-20 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} alt="logo" className="w-40 h-10" />
              <IoMdClose
                className="text-2xl text-[#424242] cursor-pointer"
                onClick={toggleMenu}
              />
            </div>

            <ul className="flex flex-col gap-4 text-base font-medium text-[#020407]">
              <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer hover:text-[#3B9DF8] transition-colors">
                Home
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer hover:text-[#3B9DF8] transition-colors">
                About
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer hover:text-[#3B9DF8] transition-colors">
                Pricing
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer hover:text-[#3B9DF8] transition-colors">
                Consulting
              </li>
              <li className="px-2 py-2 hover:bg-gray-100 rounded-md cursor-pointer hover:text-[#3B9DF8] transition-colors">
                AI Coach
              </li>
            </ul>
          </div>
        </aside>
      </nav>
    </div>
  );
};

export default Navbar;
