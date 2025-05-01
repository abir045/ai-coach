import React from "react";
import miniRobo from "../assets/mini-robo.svg";
import backup from "../assets/backup_table.svg";
import dots from "../assets/dotes.svg";
import robocop from "../assets/robocop.png";

const Hero = () => {
  return (
    <div>
      <div className="md:flex-row  lg:flex items-center container mx-auto px-20 mt-[100px] ">
        {/* left */}
        <div className="w-full">
          <h1 className="text-[80px] font-medium ">
            Your AI-Powered Sales Coach
          </h1>
          <div className="md:flex items-center gap-[68px] ">
            <img
              src={miniRobo}
              className="w-[204px] h-[198px] bg-white"
              alt=""
            />
            <p className="font-medium text-[20px] lg:w-[30%] text-[#05131DB2] opacity-70">
              Get real-time coaching, script suggestions, and deal-closing
              strategies powered by advanced AI technology.
            </p>
          </div>

          <div className="md:flex space-y-5 md:space-y-0 items-center mt-[92.11px] md:gap-[55px] mb-10">
            <div className="flex items-center gap-[35.6px]">
              <img
                src={backup}
                alt=""
                className="bg-white p-4 rounded-[15.57px]"
              />

              <div>
                <span className="font-semibold text-[40px]">2000+</span>
                <p className="font-medium text-[20px] opacity-70">
                  Your protection
                </p>
              </div>
            </div>

            <div className="flex items-center gap-[35.6px]">
              <img
                src={dots}
                alt=""
                className="bg-white p-4 rounded-[15.57px]"
              />

              <div>
                <span className="font-semibold text-[40px]">7001+</span>
                <p className="font-medium text-[20px] opacity-70">
                  Provide tailored
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative w-full">
          <div className="w-full h-full ml-22 mb-24 ">
            <img src={robocop} className="w-[538px]  h-[628px]" alt="" />
          </div>

          <div className="bg-white  absolute h-[350px] right-0 top-45  md:top-[40%] md:right-[45%] lg:top-[54%] lg:right-[40%]   px-6 rounded-[27px] ">
            <div className="flex items-center gap-[40px]  mt-[50px]">
              <span className="font-semibold text-[50px] text-[#00245F]">
                721+
              </span>{" "}
              <span className="font-semibold text-[50px] text-[#00245F]">
                1000+
              </span>
            </div>

            <p className="font-semibold text-[27.98px] text-[#05131D] mt-[23px]">
              Growth is our priority.
            </p>

            <p className="mt-[39px] font-medium text-[17px] text-[05131D]  opacity-70 poppins mb-6">
              As a full-service business agency, we specialize in helping
              companies of all sizes optimize their operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
