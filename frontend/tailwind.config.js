/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        100: "100",
        101: "101",
        102: "102",
        103: "103",
        104: "104",
        105: "105",
      },
    },
    container: {
      padding: {
        md: "10rem",
      },
    },
    backgroundImage: {
      Hero: "url('https://app.1lives.us/wp-content/uploads/2024/02/mbg.jpg')",
    },
  },
  plugins: [],
};
