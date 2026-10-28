import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#FFF3EC", 100: "#FFE3D1", 200: "#FFC5A1", 300: "#FF9F66", 400: "#FB7A33",
          500: "#F85606", 600: "#DB4A04", 700: "#B63D05", 800: "#92330A", 900: "#762C0B",
        },
        ink: "#171717",
        soft: "#F7F7F7",
      },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
      boxShadow: {
        card: "0 1px 2px rgba(23,23,23,.06), 0 2px 8px rgba(23,23,23,.05)",
        lift: "0 12px 28px -8px rgba(23,23,23,.22)",
      },
      keyframes: {
        shimmer: { "100%": { transform: "translateX(100%)" } },
        slideIn: { from: { transform: "translateX(100%)" }, to: { transform: "none" } },
        slideInLeft: { from: { transform: "translateX(-100%)" }, to: { transform: "none" } },
        fadeUp: { from: { opacity: "0", transform: "translateY(14px)" }, to: { opacity: "1", transform: "none" } },
        fade: { from: { opacity: "0" }, to: { opacity: "1" } },
        pop: { "0%": { transform: "scale(1)" }, "50%": { transform: "scale(1.25)" }, "100%": { transform: "scale(1)" } },
      },
      animation: {
        slideIn: "slideIn .3s cubic-bezier(.2,.8,.2,1)",
        slideInLeft: "slideInLeft .3s cubic-bezier(.2,.8,.2,1)",
        fadeUp: "fadeUp .5s cubic-bezier(.2,.8,.2,1) both",
        pop: "pop .35s ease",
        fade: "fade .35s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
