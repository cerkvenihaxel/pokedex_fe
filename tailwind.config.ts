import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backGroundColor : "#F5DC25",
        blackColor: "#272615",
        buttonAColor: "#E44631",
        buttonBColor: "#067547",
        brownColor: "#6F4404",
      },
    },
  },
  plugins: [],
};
export default config;
