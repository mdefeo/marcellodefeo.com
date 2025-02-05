import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'profile-gradient': 'conic-gradient(from 180deg, #B2CDFF, #131C2D)',
        'profile-gradient-hover': 'linear-gradient(to bottom, #29344e, #2e3a56, #33405e, #384667, #3d4c6f, #425378, #475b82, #4c628b, #526c97, #5777a3, #5d81af, #628cbb)',

      },
      animation: {
        "image-perspective": "transformPerspective 1s ease-out .5s 1 forwards",
        "infinite-scroll": "infinite-scroll 25s linear infinite"
      },
      keyframes: {
        transformPerspective: {
          "0%": { transform: "perspective(1800px) rotateY(90deg)", opacity: "0" },
          "100%": { transform: "none", opacity: "1" },
        },
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        }
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      'nord', 
      'night',
      {
        'aTributeToSinclair': {
          primary: "#F5F2E9",
          "primary-content": "#29344E",
          secondary: "#D1CAB2",
          "secondary-content": "#44557B",
          accent: "#E1E3DE",
          "accent-content": "#6078AB",
          neutral: "#29344E",
          "neutral-content": "#CDCFC2",
          "base-100": "#CDCAC3",
          "base-200": "#A5A39D",
          "base-300": "#807D79",
          "base-content": "#3A3937",
          info: "#628CBB",
          "info-content": "#333C5E",
          success: "#7B886B", 
          "success-content": "#F3F2F0",
          warning: "#FDD673",
          "warning-content": "#F3F2F0",
          error: "#D03052",
          "error-content": "#F3F2F0",
        }
      },
      {
        'darkMind': {
          primary: "#F5F2E9",
          "primary-content": "#E0E0E0",
          secondary: "#303e59",
          "secondary-content": "#fdfdfd",
          accent: "#E1E3DE",
          "accent-content": "#86C5FF",
          neutral: "#1F2133",
          "neutral-content": "#f8f8f7",
          "base-100": "#A1C4FD",
          "base-200": "#A0AEC0",
          "base-300": "#B0B3B8",
          "base-content": "#F8F1E5",
          info: "#628CBB",
          "info-content": "#F8F1E5",
          success: "#7bc285", 
          "success-content": "#F8F1E5",
          warning: "#ef6f6c",
          "warning-content": "#F8F1E5",
          error: "#ba6e6e",
          "error-content": "#F8F1E5",
        }
      },
    ],
  }
} satisfies Config;
