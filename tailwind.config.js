/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#ccff00",
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#7c3aed",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": {
                color: theme("colors.primary.foreground"),
              },
            },
            h1: { color: theme("colors.white") },
            h2: { color: theme("colors.white") },
            h3: { color: theme("colors.white") },
            h4: { color: theme("colors.white") },
            strong: { color: theme("colors.white") },
            code: { color: theme("colors.primary.DEFAULT") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
