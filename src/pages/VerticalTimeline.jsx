import React from "react";
import { Link } from "react-router-dom";
import hackimg from "../assets/hackthisfall.png";
import code from "../assets/code.png";
import hackteam from "../assets/hackteam.png";
import event from "../assets/event.png";
import team from "../assets/bang1.jpeg";
import google from "../assets/google.png";
import grp1 from "../assets/grp1.png";
import grp2 from "../assets/grp2.png";
import grp3 from "../assets/grp3.png";

const VerticalTimeline = () => {
  const timelineData = [
    {
      title: "Google Developer Graduation Ceremony Banglore",
      date: "13 July, 2024",
      description:
        "The day was really jam-packed with enlightening talks by Googlers, engaging panel discussions, and a pre-event activity that was pretty cool where we had to form teams to take on problem statements. So, our team, Search Party, really had a great time in ideating and presenting the solution.And of course, the event wouldn't have been complete without the fun activities and delicious food because lets be honest, a Google event always has amazing food!.",
      images: [team, google],
      icon: event,
      link: "https://www.linkedin.com/posts/manas0609_and-the-year-comes-to-an-end-memories-made-activity-7222611180060635137-KolI?utm_source=share&utm_medium=member_desktop",
      latest: true,
    },

    {
      title: "Hack This Fall S4 Gandhinagar",
      date: "9-11 February, 2024",
      description:
        "We build a website to help and educate farmers with or without Internet, by using Vonage APIs to transform lessons into automated calls, and adding a mentorship program to help users take consultations and advice from agricultural specialists.",
      images: [hackimg, hackteam],
      icon: code,
      link: "https://developer.vonage.com/en/blog/hack-this-fall-4-0-winner-and-participants-spotlight",
      latest: false,
    },
    {
      title: "Devfest 2023 Indore ",
      date: "26 November 2023",
      description: `
        I am overwhelmed with gratitude when I reflect on the amazing experience of organizing DevFest 23 Indore at Sayaji Hotels Ltd.
        Being at the helm of this event was nothing short of a transformative experience. From meticulous team preparation to navigating the complexities of event management, every challenge was met with resilience and collective knowledge.

        Thanks to the addition of the Community and Expert Lounges, this DevFest was really unique. An additional layer of connection and learning was added by seeing lively community debates and exploring professional ideas.
      
        A Personal Milestone: This event holds a special place in my heart as I took the stage for the first time as a speaker in the Community Lounge. I shared insights on Making Most out of the Communities.
      `,
      images: [grp1, grp2, grp3],
      icon: event,
      link: "#",
      latest: false,
    },
  ];

  return (
    <div className="h-100vh w-100vw bg-[#1E1E1E]">
      <Link
        to="/"
        className="text-[#FFCD29] text-4xl absolute top-0 right-0 mr-40 mt-[55px] font-semibold"
      >
        home
      </Link>

      <div className="flex flex-col gap-2 fixed bottom-0 right-0 mr-6 mb-6">
        <div className="bg-[#FFCD29] rounded-lg h-10 w-10">
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
        <div className="bg-white rounded-lg h-10 w-10">
          <img
            className="rounded p-1 hover:scale-110"
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt=""
          />
        </div>
      </div>

      <h3 className="text-[#FFCD29] text-5xl text-center pt-32 font-bold ">
        featured timeline
      </h3>

      <div className="flex justify-center mt-20 items-center">
        <ol className="relative border-s-2 w-2/3 border-yellow-400">
          {timelineData.map((event, index) => (
            <li
              key={index}
              className="mb-20 ms-7 flex justify-center items-center"
            >
              <span>
                <img
                  className="absolute w-12 h-12 rounded-full -start-6 ring-2 ring-white"
                  src={event.icon}
                  alt="icon"
                />
              </span>
              <div className="ml-24">
                <h3 className="flex items-center mb-1 text-4xl font-semibold text-white">
                  {event.title}
                  {event.latest && (
                    <span className="text-sm font-medium ms-3 px-2.5 py-0.5 rounded bg-yellow-600 text-white">
                      Latest
                    </span>
                  )}
                </h3>
                <time className="block mb-2 text-lg font-normal text-[#ffcd29] leading-none">
                  {event.date}
                </time>
                <p className="mb-4 text-base font-normal text-gray-400">
                  {event.description}
                </p>
                <div className="flex gap-2">
                  {event.images.map((image, imgIndex) => (
                    <a
                      key={imgIndex}
                      href={event.link}
                      className="h-64 inline-flex items-center px-2 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
                    >
                      <img
                        className="rounded h-60"
                        src={image}
                        alt={`Event ${imgIndex}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default VerticalTimeline;
