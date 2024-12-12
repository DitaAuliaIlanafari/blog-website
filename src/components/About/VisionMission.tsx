import React from "react";

const VisionMission = () => {
  return (
    <section className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark text-dark text-center">
      <div>
        <h2 className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent">
          Vision
        </h2>
        <p className="font-medium capitalize mt-4 text-sm md:text-m">
          Our vision is to be a trusted source of tech insights, fostering
          continuous learning and innovation. We aim to make technology
          accessible to all, simplifying complex concepts and highlighting
          practical applications. We believe in the power of technology to drive
          progress and solve real-world problems. Our goal is to create a
          community where curiosity is nurtured, creativity is encouraged, and
          knowledge is shared freely. Through our blog, we aspire to inspire the
          next generation of tech enthusiasts and innovators.
        </p>
        <h2 className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent mt-10">
          Mission
        </h2>
        <p className="font-medium capitalize mt-4 text-sm md:text-m">
          Our mission is to simplify complex tech concepts, making them
          accessible and understandable for everyone, while inspiring creativity
          and innovation through sharing cutting-edge developments and practical
          applications of technology. We aim to provide resources, tutorials,
          and discussions that support ongoing education and skill development
          in the tech field, fostering a collaborative space where tech
          enthusiasts can share ideas, solve problems, and inspire each other.
        </p>
      </div>
    </section>
  );
};

export default VisionMission;
