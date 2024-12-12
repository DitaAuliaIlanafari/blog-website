"use client";

import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <div>
      <DotLottiePlayer
        src="\Animation - 1733584805801.lottie"
        autoplay
        loop
      ></DotLottiePlayer>
    </div>
  );
};

export default LottieAnimation;
