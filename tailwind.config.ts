import type { Config } from "tailwindcss";
export default <Partial<Config>>{
  theme: {
    fontFamily: {
      body: ["ヒラギノ角ゴシック", '"Zen Kaku Gothic New"', "sans-serif"],
      half: ["Oswald", "sans-serif"],
      code: ['"Roboto Mono"', "monospace"],
    },
  },
};
