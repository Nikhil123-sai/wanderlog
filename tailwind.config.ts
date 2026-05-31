import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        mist: "#f7f4ea",
        coral: "#ef8354",
        teal: "#0f766e",
        pine: "#14532d",
        sand: "#eadfcb",
      },
      boxShadow: {
        glow: "0 20px 60px rgba(15, 23, 42, 0.15)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(239,131,84,0.28), transparent 30%), radial-gradient(circle at 80% 20%, rgba(15,118,110,0.25), transparent 24%), linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.25))",
      },
    },
  },
  plugins: [],
};

export default config;
