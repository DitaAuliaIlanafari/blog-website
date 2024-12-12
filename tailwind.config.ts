import { transform } from "next/dist/build/swc/generated-native";
import type { Config } from "tailwindcss";

const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#7B00D3",
        accentDark: "#ffdb4d",
        gray: "#747474",
      },
      fontFamily: {
        sa: ["var(--font-sa)"],
        mn: ["var(--font-mn)"],
      },
      screens: {
        sxl: "1180px",
        xs: "480px",
      },
    },
  },
  plugins: [flowbite.plugin(), require("@tailwindcss/forms")],
} satisfies Config;
