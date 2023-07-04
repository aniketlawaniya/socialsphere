module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      "primary-color": { 100: "#32a1ec", 200: "#1489d7" },
      
      "secondary-color": {
        50: "#f6f8f9",
        100: "#e6edef",
        200: "#a2bcc3",
      },
      "secondary-color-dm": {
        50: "#1d262f",
        100: "#111a22",
        200: "#a2bcc3",
      },
      "background-color": "#ffffff",
      "background-color-dm": "#16212c",
      "text-color": "#4a5055",
      "text-color-dm": "#f7f9f9",
      "dark-color": "	#0f141a",
      "red-color": "#eb2d4a",
      "green-color": "#38c238",
      "modal-bg-color-dm": "#020617",
      "modal-bg-color": "rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};