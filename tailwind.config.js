module.exports = {
  darkMode: "class", // or 'media' based on preference
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      SohneBuch: ["Sohne-Buch", "sans-serif"],
      SohneDreiviertel: ["Sohne-Dreiviertel", "sans-serif"],
      SohneKraftig: ["Sohne-Kraftig", "sans-serif"],
    },
    extend: {
      colors: {
        bgBlack: "#1E1E1E",
        navbg: "#161616",
        starter: "#1A1A1A",
        growth: "#292929",
        enterprise: "#474747",
      },
      boxShadow: {
        custom: "0 0 21.4px rgba(0, 0, 0, 0.25)",
        custom2: "0px 0px 21.4px rgba(0, 0, 0, 0.25)",
        custom3: "0px 2px 6px rgba(13, 10, 44, 0.08)",
      },
      borderRadius: {
        20: "20px",
        30: "30px",
        35: "35px", // Or any other name/key you prefer
        38: "38px",
        40: "40px",
        57: "57px",
      },
    },
  },
  plugins: [],
};
