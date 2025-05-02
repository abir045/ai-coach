import React from "react";
import robo1 from "../assets/robo-left.png";
import robo2 from "../assets/robo-right.png";

const Courses = () => {
  return (
    <div className="container mx-auto px-20 ">
      <h1 className="text-[48px] font-semibold text-[#262626] mt-15">
        Our Courses
      </h1>
      <div className="lg:flex space-y-3 lg:space-y-0 items-center justify-between mt-2 w-full">
        <p className="text-[18px] text-[#59595A] w-10/12">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>

        <button className="py-[18px] px-[24px] rounded-[8px] bg-[#002868] text-white ">
          View All
        </button>
      </div>

      <div className="lg:flex-row flex flex-col gap-4 items-center mt-[48px] lg:gap-[30px] ">
        {/* 1st */}
        <div className="bg-[#F0F0F0] p-[50px] ">
          <img src={robo1} className="w-full" alt="" />

          <div className="flex items-center md:justify-between  mt-[30px]">
            <div className="">
              <span className="text-[18px] font-medium bg-white text-[#4C4C4D] px-4 py-[10px] rounded-[8px] mr-[10px]">
                4 Weeks
              </span>
              <span className="text-[18px] font-medium bg-white text-[#4C4C4D] px-4 py-[10px] rounded-[8px] mr-[10px]">
                Beginner
              </span>
            </div>

            <span className="text-[20px] text-[#262626] font-medium">
              By John Smith
            </span>
          </div>

          <h4 className="text-[#262626] text-[24px] font-semibold mt-[30px]">
            Web Design Fundamentals
          </h4>

          <p className="text-lg text-[#4C4C4D] mt-[14px] ">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>

          <button className="mt-[30px] bg-[#002868] vietnam rounded-[8px] px-[24px] py-[18px] text-white text-lg font-medium">
            Get it Now
          </button>
        </div>

        {/* 2nd */}

        <div className="bg-[#F0F0F0] p-[50px]">
          <img src={robo2} alt="" className="w-full" />

          <div className="flex items-center justify-between  mt-[30px]">
            <div>
              <span className="text-[18px] font-medium bg-white text-[#4C4C4D] px-4 py-[10px] rounded-[8px] mr-[10px]">
                4 Weeks
              </span>
              <span className="text-[18px] font-medium bg-white text-[#4C4C4D] px-4 py-[10px] rounded-[8px] mr-[10px]">
                Beginner
              </span>
            </div>

            <span className="text-[20px] text-[#262626] font-medium">
              By John Smith
            </span>
          </div>

          <h4 className="text-[#262626] text-[24px] font-semibold mt-[30px]">
            Web Design Fundamentals
          </h4>

          <p className="text-lg text-[#4C4C4D] mt-[14px] ">
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>

          <button className="mt-[30px] bg-[#002868] vietnam rounded-[8px] px-[24px] py-[18px] text-white text-lg font-medium">
            Get it Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
