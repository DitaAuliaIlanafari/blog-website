"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "../../../public/Icons";
import Logo from "./Logo";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };
  return (
    <header className="w-full p-4 px-5 md:px-10 flex items-center justify-between">
      <Logo />
      <button className="inline-block sm:hidden px-3 z-50" onClick={toggle}>
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200 "
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark rounded transition-all ease duration-200 "
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        className="w-3/3 md:w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize items-center flex sm:hidden
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 transition-all ease duration-300"
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link
          href="/"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Home
        </Link>
        <Link
          href="/categories"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Categories
        </Link>
        <Link
          href="/about"
          className="text-sm md:text-lg mx-1 md:mx-2 hover:scale-110 transition-all ease duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-sm md:text-lg mx-1 hover:scale-110 transition-all ease duration-200"
        >
          Contact
        </Link>
      </nav>

      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize items-center hidden sm:flex
      fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link
          href="/"
          className="mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Home
        </Link>
        <Link
          href="/categories"
          className="mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Categories
        </Link>
        <Link
          href="/about"
          className="mx-2 hover:scale-110 transition-all ease duration-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="mx-2 hover:scale-110 transition-all ease duration-200"
        >
          Contact
        </Link>
      </nav>
      <div className="hidden sm:flex items-center">
        <a href="http://example.com" className="inline-block h-6 w-6 mr-4">
          <LinkedinIcon className="hover:scale-110 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block h-6 w-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block h-6 w-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
