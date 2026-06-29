const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: "#ece7da",
          window: "#f3efe6",
          card: "#fbf8f1",
        },
        ink: {
          DEFAULT: "#2a241c",
          muted: "#8a8170",
          faint: "#a0967f",
        },
        accent: {
          DEFAULT: "#8a2e3b",
          soft: "#f7ece9",
          tint: "#f0e0dc",
        },
        hairline: {
          DEFAULT: "#e2dccf",
          warm: "#e7e0d2",
        },
      },
      fontFamily: {
        serif: ["'Source Serif 4'", "serif"],
        sans: ["'Hanken Grotesk'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), nextui()],
};
