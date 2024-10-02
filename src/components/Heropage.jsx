import React from "react";
import "./Heropage.css";
import profile from "../assets/final.gif";
import { Link } from "react-router-dom";

const Heropage = () => {
  return (
    <div>
      <div className="backdrop font-sans relative h-screen w-screen bg-[#1E1E1E]">
        <Link to="/timeline" className="  text-[#FFCD29] text-4xl  absolute top-0 right-0 mr-40 mt-[55px] font-semibold ">
          timeline
        </Link>
        <div className="flex flex-col gap-2 fixed bottom-0 right-0 mr-6 mb-6">
          <div className="bg-[#FFCD29] rounded-lg h-10 w-10 ">
            <img
              className="rounded hover:scale-110"
              src="https://st4.depositphotos.com/1000417/41563/v/450/depositphotos_415634850-stock-illustration-linkedin-logo-vector-editorial-illustration.jpg"
              alt=""
            />
          </div>
          <div className="bg-[#FFCD29] rounded-lg h-10 w-10">
            <img
              className="rounded hover:scale-110 border-4 border-white"
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              alt=""
            />
          </div>
          <div className="bg-white  rounded-lg h-10 w-10">
            <img
              className="rounded p-1 hover:scale-110"
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex  items-center justify-center h-full w-full">
          <div className="mr-10 h-2/4 w-1/4">
            <img className="rounded border-solid" src={profile} alt="" />
          </div>
          <div className="h-2/4">
            <h1 className=" text-white text-8xl">👋 hey ,</h1>
            <br />
            <br />
            <br />
            <br />

            <p className="text-[#FFCD29] pl-6 text-7xl">i am a</p>
            <br />
            <p className="text-[#FFCD29]  pl-6 text-7xl">software developer.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
