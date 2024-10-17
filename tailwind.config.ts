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
       'white': 'hsl(0, 0%, 100%)',
       'lime' : ' hsl(61, 70%, 52%)',
       'red': 'hsl(4, 69%, 50%)',
       'Slate100': 'hsl(202, 86%, 94%)',
       'Slate300': 'hsl(203, 41%, 72%)',
       'Slate500': 'hsl(200, 26%, 54%)',
       'Slate700': 'hsl(200, 24%, 40%)',
       'Slate900': 'hsl(202, 55%, 16%)'
      },
    },
  },
  plugins: [],
};
export default config;
