import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import plus from "../assets/Plus.svg";
import minus from "../assets/Minus.svg";
import bgAccordion from "../assets/bg-accordion.png";
import circle from "../assets/circle.svg";
import left from "../assets/arrow-left.svg";
import right from "../assets/arrow-right.svg";

const Faq = () => {
  const [isAccordionOpen, setIsAccordingOpen] = useState(0);

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  const accordionData = [
    {
      title: "Why should I choose Humestic?",
      description:
        "Bottleneck mice my capacity is full, nor incentivization we need to start advertising on social media, or helicopter view, for what the. Let's put a pin in that we need to build it so that it scales, are there any leftovers in the kitchen?, if you're not hurting you're not winning loop back",
    },
    {
      title: "I like your works, how do we start a project?",
      description:
        "User-centered design ensures products meet the needs and preferences of the end-users, contact us immediately.",
    },
    {
      title: "What info is required to get a quotation?",
      description:
        "To get a quotation, please provide your requirements, quantity, delivery details, any customizations, and your contact information.",
    },
  ];
  return (
    <div className="container mx-auto px-20 mt-41">
      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-[655px] md:h-[655px] rounded-full blur-3xl -z-10 bg-gradient-to-r from-pink-400/55 to-blue-400/55"
        style={{
          filter: "blur(1000px)",
          background:
            "linear-gradient(90deg, rgba(255, 111, 185, 0.55), rgba(134, 171, 250, 0.55) 100%)",
        }}
      ></div>

      <div className="md:flex  justify-between items-start gap-[80px] w-full">
        <span className="questrial text-2xl text-[#001C4A] ">
          Frequently asked <br /> questions
        </span>

        <h4 className="md:text-[60px] text-[36px] questrial text-[#111111]">
          Constant collaboration is how we roll. Let's see if we are a good fit.
        </h4>
      </div>
      {/* accordion */}
      <div className="flex gap-3 flex-col  mt-20 ">
        {accordionData?.map((accordion, index) => {
          const isOpen = isAccordionOpen === index;
          const formattedIndex = String(index + 1).padStart(2, "0");

          return (
            <div
              key={index}
              className={`border-b border-[#CCCCCC] last:border-b-0 
                `}
            >
              <div className="relative">
                {/* Number indicator on left */}
                <div className="absolute -left-7 top-1/2 -translate-y-1/2 text-[#8B7D4C] text-[32px] questrial">
                  {formattedIndex}
                </div>

                {/* Title and toggle area */}
                <div
                  className="flex items-center justify-between py-4 pl-12 pr-4 cursor-pointer "
                  onClick={() => handleClick(index)}
                >
                  <h3 className="text-[#111111] text-[20px] md:text-[40px] questrial">
                    {accordion.title}
                  </h3>
                  <div className="w-10 h-10 flex items-center justify-center text-lg">
                    {isOpen ? (
                      //   <span className="text-gray-500">−</span>
                      <img src={plus} alt="" />
                    ) : (
                      //   <span className="text-red-400">+</span>

                      <img src={minus} alt="" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`transition-all duration-300 overflow-hidden pl-12 pr-4 pb-4 w-fulls ${
                    isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#636363] text-base font-light inter">
                    {accordion.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <img
        src={bgAccordion}
        alt=""
        className="absolute left-1/2 transform -translate-x-1/2 w-64 h-64 md:w-full md:h-full -z-10"
      /> */}

      {/* quotes nad menu */}
      <div className="mt-[115px]">
        <h1 className="md:text-[36px] text-[24px]  font-semibold text-[#010205]">
          “ They thoroughly analyze our industry and target audience, allowing
          them to develop customized campaigns that effectively reach and engage
          our customers. Their creative ideas and cutting-edge techniques have
          helped us stay ahead of the competition.”
        </h1>

        <div className="md:flex space-y-5 items-center justify-between mt-[74px] mb-[84px]">
          {/* 1st div  */}
          <div className="flex items-center gap-[12.5px]">
            <img src={circle} alt="" />

            <div>
              <span className="text-[20px] font-bold text-[#010205]">
                Michael Kaizer
              </span>
              <p className="text-base font-medium text-[#878C91]">
                CEO of Basecamp Corp
              </p>
            </div>
          </div>

          {/* 2nd div */}

          <div className="flex items-center gap-[38px]">
            <button className="px-8 py-4 bg-transparent border border-[#00245F] rounded-[70px]">
              <img src={left} alt="" />
            </button>

            <p>
              {" "}
              <span className="text-[20px] font-semibold text-[#00245F]">
                01
              </span>{" "}
              /{" "}
              <span className="text-[20px] font-semibold text-[#01020566]/[0.40]">
                05
              </span>
            </p>

            <button className="px-8 py-4 bg-[#00245F] rounded-[70px]">
              <img src={right} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
