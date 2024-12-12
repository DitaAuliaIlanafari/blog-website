import Image from "next/image";
import React from "react";
import profilePic from "../../../public/freepik__candid-image-photography-natural-textures-highly-r__4782.jpeg";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] mt-10 border-t-2 border-b-2 border-solid border-dark flex flex-col md:flex-row items-center justify-center text-dark">
      <div className="w-full md:w-1/2 h-full md:border-r-2 border-solid border-dark flex justify-center p-5">
        <Image
          src={profilePic}
          alt="image"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-center items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl">
          About Me
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Welcome to my tech blog! This journey began in 2013, driven by my
          fascination with technology and its ever-evolving landscape. What
          started as a personal project to document my thoughts and experiences
          has transformed into a platform where tech enthusiasts, learners, and
          professionals alike can find valuable insights and engaging
          discussions.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
