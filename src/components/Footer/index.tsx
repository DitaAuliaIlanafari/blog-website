"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../../../public/Icons";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark m-2 sm:m-10 flex flex-col items-center text-light">
      <h3 className="mt-16 font-medium text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light p-1 sm:p-2 rounded mx-4"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          value="submit"
          className="bg-dark text-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
        <a href="http://example.com" className="inline-block h-6 w-6 mr-4">
          <LinkedinIcon className="hover:scale-110 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block h-6 w-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="http://example.com"
          className="inline-block h-6 w-6 mr-4 fill-light"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className="w-full mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          © 2024 DitaAulia. All rights reserved.
        </span>
        <span className="text-center">Made with ❤ by Me</span>
      </div>
    </footer>
  );
};

export default Footer;
