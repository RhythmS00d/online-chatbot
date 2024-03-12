import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        layout: "#1f2937",
        footer: "#424769",
        button: "#424769",
        buttonHover: "#5a5f87",
      },
      borderColor: {
        footer: "#424769",
      },
      backgroundImage: {
        main: "url('/bg-main.svg')",
        chat: "url('/bg-chat.svg')",
      },
      animation: {
        expand: "notification 200ms linear",
      },
      keyframes: {
        notification: {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
