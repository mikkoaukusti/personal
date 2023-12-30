import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Inter'", ...fontFamily.sans],
      },
      keyframes: {
        "card-visible": {
          "0%": {
            transform:
              "rotate3d(1, 12, -3, 18deg) translate3d(210px, 0px, 90px)",
          },
          "95%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "100%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
        },
        "card-on-stack": {
          "0%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "5%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "100%": {
            transform: "rotate3d(0, 0, 0, 0) translate3d(0, 0px, 0px)",
          },
        },
        "card-details": {
          "0%": {
            opacity: "0",
            pointerEvents: "none",
          },
          "80%": {
            opacity: "0",
            pointerEvents: "none",
          },
          "100%": {
            opacity: "1",
            pointerEvents: "auto",
          },
        },
      },
      animation: {
        "card-visible": "card-visible 0.8s ease-in-out forwards",
        "card-hidden": "card-on-stack 0.8s ease-in-out forwards",
        "card-details": "card-details 0.8s ease-in-out forwards",
        "card-details-hidden": "card-details 0.8s ease-in-out reverse",
      },
    },
  },
  plugins: [typography],
} satisfies Config;
