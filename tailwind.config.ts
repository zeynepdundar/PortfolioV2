export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
    },
  },
};
