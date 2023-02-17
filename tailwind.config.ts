import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  content: [
    "./components/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.ts",
    "./nuxt.config.ts",
  ],
  theme: {
    fontFamily: {
      half: ["Oswald", "sans-serif"],
      code: ['"Roboto Mono"', "monospace"],
    },
  },
};
