import React from "react";
import circle from "../assets/circle.svg";
import arrowup from "../assets/ArrowUp.svg";
import reactions from "../assets/reactions.svg";
import tick from "../assets/tick.svg";
import progress from "../assets/progress.png";
import graph from "../assets/graph.svg";
import generate from "../assets/generate.svg";
import practice from "../assets/practice.svg";

const Coaching = () => {
  return (
    <div className="bg-[#113877] mt-5">
      <div className="container mx-auto px-20">
        <h5 className="text-[24px] text-base text-[#FCE38A] questrial pt-4">
          Live Ai Coach
        </h5>
        <h3 className="text-base text-[60px] text-white questrial">
          Take a Suggestion Coaching
        </h3>

        <div className="lg:flex-row flex flex-col items-center gap-6 w-full">
          {/* 1st */}
          <div className="w-full border-t  ">
            {/* inside 1st */}
            <div className="bg-white  rounded-t-[20px]  ">
              <h3 className="font-bold text-[18px] pt-4 pb-6 pl-8">
                AI Sales Coach
              </h3>
            </div>
            {/*inside 2nd */}
            <div className="bg-gray-100 flex items-start gap-6 pb-[200px] pr-10">
              <img src={circle} alt="" className="mt-6 pl-8" />

              <p className="text-[18px] bg-white mt-6 p-4 lato w-[78%]">
                Hello! I'm your AI sales coach. How can I help you improve your
                <br />
                sales performance today?
              </p>
            </div>
            {/*inside  3rd */}
            <div className="bg-white w-full rounded-b-[20px] px-5">
              <div className="md:flex space-y-2 md:space-y-0 items-center gap-[13px] pl-8 pt-4">
                <p className="bg-[#002868]/[0.08] rounded-[36px] text-[#002868] px-[17px] py-[12px] text-sm geist">
                  How do I handle objections?
                </p>
                <p className="bg-[#002868]/[0.08] rounded-[36px] text-[#002868] px-[17px] py-[12px] text-sm geist">
                  Give me a cold email template
                </p>
                <p className="bg-[#002868]/[0.08] rounded-[36px] text-[#002868] px-[17px] py-[12px] text-sm geist">
                  Closing techniques
                </p>
                <p className="bg-[#002868]/[0.08] rounded-[36px] text-[#002868] px-[17px] py-[12px] text-sm geist">
                  Negotiation tips
                </p>
              </div>

              <div className="md:flex space-y-2 items-center gap-3 px-9 mt-4 pb-6 mb-15">
                <input
                  type="text"
                  placeholder="Ask anything you need"
                  className="px-[23px] py-[17px] rounded-[4px] border-[#e5e7eb] text-sm border w-full"
                />
                <button className="bg-[#002868] flex items-center gap-1 px-[18px] py-[14px] rounded-[8px] font-medium text-[17px] text-white ">
                  <span>Send</span>

                  <img src={arrowup} alt="" />
                </button>
              </div>
            </div>
          </div>

          {/* 2nd */}
          <div className="">
            <img src={reactions} className="w-[72px]" alt="" />
          </div>
          {/* 3rd */}
          <div className="w-full h-full">
            <div className="bg-[#EFEFEF] rounded-[20px] pb-2 mb-5 ">
              <h3 className="font-bold text-[32px] text-[#323232] pt-[30px] ml-[30px]">
                Real-time Analysis
              </h3>

              <div className="bg-white rounded-[12px] mt-5 border border-[#E7E7E7]  ml-[30px] mr-[30px]  ">
                <div className="flex items-center gap-1 mt-4 ml-4">
                  <img src={tick} alt="" />
                  <p className="font-semibold text-[18px] text-[#171025]">
                    Confidence Level
                  </p>
                </div>
                <div className="flex items-center gap-1 mt-4 pb-4 ml-4 ">
                  <img src={progress} alt="" />
                  <span className="inter text-[12px] text-[#6D6D6D]">60%</span>
                </div>
              </div>

              <div className="bg-white mt-5 ml-[30px] mr-[30px] mb-[30px] border border-[#E7E7E7] rounded-[12px] ">
                <div className="flex items-center gap-1 pt-[16px] ml-4 ">
                  <img src={graph} alt="" />
                  <p className="font-semibold text-[18px] text-[#171025]">
                    Confidence Level
                  </p>
                </div>

                <p className="lato text-[18px] text-[#919191] pt-3 pb-4  ml-4">
                  85% improvement in objection handling
                </p>
              </div>
            </div>

            <div className="bg-[#EFEFEF] rounded-[20px] w-full mb-16 ">
              <h3 className="text-[32px] font-bold text-[#323232] pt-[30px] ml-[30px]">
                Quick Actions
              </h3>

              <div className="flex items-center gap-5 md:ml-[30px] mt-[20px] pb-[30px] px-5 md:px-0">
                <div className="bg-white px-4 py-4 rounded-[12px]">
                  <img src={generate} alt="" />
                  <p className="text-[18px] font-semibold text-[#171d25]">
                    Generate Script
                  </p>
                </div>

                <div className="bg-white px-4 py-4 rounded-[12px]">
                  <img src={practice} alt="" />
                  <p className="text-[18px] font-semibold text-[#171d25]">
                    Practice Script
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coaching;
