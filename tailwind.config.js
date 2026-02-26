/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.svelte"],
  theme: {
    extend: {
      colors: {
        // Ocean Depths palette
        primary: "#1D4ED8", // vivid medium blue
        accent: "#32C5FF", // cyan-blue for highlights
        "bg-dark": "#0C0F14", // nearly black charcoal background
        background: "#0C0F14", // alias for main page background
        surface: "#2A2F3C", // greyer, desaturated surface
        "off-white": "#E8EAF6", // light text
      },
    },
  },
  plugins: [],
};
