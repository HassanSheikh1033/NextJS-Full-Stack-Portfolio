"use client";

import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Experience".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 1 ? "text-green-main" : "text-[#fff]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex flex-col gap-6">
              {experienceData && experienceData.length
                ? experienceData.map((experienceItem, index) => (
                    <div
                      key={index}
                      className="border-[2px] p-4 rounded-[8px] border-green-main mt-4"
                    >
                      <p className="font-bold">{experienceItem.duration}</p>
                      <h3 className="font-extrabold text-[#edebec] mt-2">
                        {experienceItem.company}, {experienceItem.location}
                      </h3>
                      <p className="font-extrabold mt-2">
                        {experienceItem.position}
                      </p>
                      <p className="font-extralight mt-2">
                        {experienceItem.jobprofile}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex flex-col gap-5">
          <AnimationWrapper className={"py-6 sm:py-16"}>
            <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
              <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
                {"My Education".split(" ").map((item, index) => (
                  <span
                    key={index}
                    className={`${
                      index === 1 ? "text-green-main" : "text-[#fff]"
                    }`}
                  >
                    {item}{" "}
                  </span>
                ))}
              </h1>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="flex flex-col gap-6">
              {educationData && educationData.length
                ? educationData.map((educationItem, index) => (
                    <div
                      key={index}
                      className="border-[2px] p-4 rounded-[8px] border-green-main mt-4"
                    >
                      <p className="font-bold">{educationItem.year}</p>
                      <h3 className="font-extrabold text-[#e5e3e4] mt-2">
                        {educationItem.college}
                      </h3>
                      <p className="font-extrabold mt-2">
                        {educationItem.degree}
                      </p>
                    </div>
                  ))
                : null}
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </div>
  );
}
