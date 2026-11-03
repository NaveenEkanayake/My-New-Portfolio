/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#05070d",
        surface: "#0a101c",
        card: "#0d1424",
        line: "#1e2a42",
        ink: "#eaf0fa",
        soft: "#b9c3d6",
        mute: "#8592a8",
        accent: {
          DEFAULT: "#22c55e",
          bright: "#4ade80",
          soft: "#2dd4bf",
        },
        glow: "#22d3ee",
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
        script: ["Caveat", "cursive"],
      },
      boxShadow: {
        "glow-green": "0 0 24px rgba(34, 197, 94, 0.35)",
        "glow-cyan": "0 0 24px rgba(34, 211, 238, 0.30)",
        "card-3d": "6px 6px 0 rgba(30, 42, 66, 0.9), 0 24px 40px -24px rgba(0, 0, 0, 0.9)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-y-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(48px, -36px, 0)" },
        },
        tap: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-slow": "float-y 7s ease-in-out infinite",
        "float-mid": "float-y 5.6s ease-in-out infinite",
        "float-fast": "float-y 4.6s ease-in-out infinite",
        "bob-soft": "float-y-soft 6.5s ease-in-out infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        "tap-l": "tap 1.15s ease-in-out infinite",
        "tap-r": "tap 1.15s ease-in-out infinite 0.55s",
      },
    },
  },
  plugins: [],
}
