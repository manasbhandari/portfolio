import React from "react";
import sayaji from "../assets/Sayaji.png";
import profile from "../assets/Snapch.jpg";
import gdgimg from "../assets/gdgimg.png"
import communityimg from "../assets/community.png"

export function Gallery() {
  const data = [
    {
      imgelink: profile,
      work: "Intern",
      text: "SafeSend offers several foundational technology solutions for the tax and accounting profession. SafeSend One is a multi-year winner of the CPA Practice Advisor Technology Innovation Award and has redefined the way accounting firms address tax return processes from getting tax ready and flowing data in and out of tax preparation software, to finishing with tax return delivery and e-signing, in order to file quicker. We solve real-world problems for the tax and accounting profession – from tax ready to finish & file – through award-winning automation SaaS solutions.",
      heading: "upcoming ASD @Safesend Banglore",
    },
    {
      imgelink: communityimg,
      work: "GDSC Lead",
      text: "GDSC IET DAVV is part of a dynamic community where students from diverse backgrounds unite to explore the latest advancements in technology. It's a space for learning about Google's tools and platforms, while also collaborating on innovative projects. The club nurtures growth for developers at all levels, from beginners to advanced, providing opportunities not only for coding but also for networking, collective learning, and personal development. It's a place where the focus is on connecting, learning together, and growing as a community..",
      heading: "Google Developer Lead @IETDAVV ",
    },
    {
      imgelink: gdgimg,
      work: "Community",
      text: "GDG Indore, which stands for Google Developers Group Indore, is a technical-community based in Indore, India. We organize frequent meetup events which include talks on a wide range of technical topics where you can learn new skills through hands-on workshops, online challenges, interaction with the community, and hackathons.The community prides itself on being an inclusive environment where everyone and anyone interested in tech - from beginner developers to experienced professionals.",
      heading: "GDG Indore Core team member",
    },
    {
      imgelink: sayaji,
      work: "Founder",
      text: "AskGuru is a real-time platform designed to connect individuals with experienced mentors for counseling and problem-solving. It aims to offer users immediate access to guidance across various areas of expertise, helping them find solutions, gain insights, and receive mentorship. Whether it's career advice, personal development, or specific technical challenges, AskGuru ensures that users can interact with qualified mentors for timely support. The platform bridges the gap between people seeking help and those offering it, fostering an environment of continuous learning and growth.",
      heading: "founder @askGuru",
    },
  ];

  const [active, setActive] = React.useState(data[0]);

  return (
    <div className="font-sans pt-20 bg-[#1E1E1E] pb-2">
      <h1 className="  text-[#FFCD29] text-4xl ml-12 pt-10 font-semibold ">
        experience
      </h1>

      <h1 className="text-white text-5xl pt-16 text-center ">
        i have experience of <span className="text-[#FFCD29]">working </span>as
      </h1>

      <div className="flex justify-center pt-20 pb-20">
        <div className="flex flex-col justify-center  gap-8 ">
          {data.map((item, index) => (
            <div key={index}>
              <h2
                onClick={() => setActive(item)}
                className="text-[#FFCD29] text-center text-2xl"
              >
                {item.work}
              </h2>
            </div>
          ))}
        </div>

        <div className="ml-20">
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[500px]"
            src={active.imgelink}
            alt={active.work}
          />
        </div>

        <div className="ml-4 w-2/6 flex flex-col justify-start">
          <h1 className="text-5xl text-white mb-16">{active.heading}</h1>

          <p className="text-white  mt-2 ">{active.text}</p>
        </div>
      </div>
    </div>
  );
}
