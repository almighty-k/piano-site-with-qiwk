/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#141416",
          secondary: "#222529",
        },
        white: {
          DEFAULT: "#E7ECF3",
          secondary: "#B1B5C3",
        },
        green: {
          DEFAULT: "#58C27D",
        },
        yellow: {
          DEFAULT: "#FFAF4E",
        },
        purple: {
          DEFAULT: "#878CFF",
        }
      },
    },
  },
  plugins: [],
};
