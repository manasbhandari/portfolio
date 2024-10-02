import React from "react";
import skillset from "../assets/skillset .png";

const Skills = () => {
  return (
    <div className="h-screen w-screen bg-[#1E1E1E] pt-10">
      <h1 className="  text-[#FFCD29] text-4xl ml-12 pt-6    font-semibold ">
        skills
      </h1>

      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-white text-5xl mt-10">
          i have good knowledge of these <span className="text-[#FFCD29]">skills</span>
        </h1>
        <div className="h-screen text-center">
          <img className="h-3/4  mt-16" src={skillset} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
