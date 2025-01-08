const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      backgroundImage: {
        adBg: 'url("https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png")',
        "custom-gradient": `
          linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0)),
          linear-gradient(179.27deg, #ffedd6 0.83%, #ffc3e3 46.78%, #fff 99.57%),
          linear-gradient(0deg, #fff, #fff)
        `,
      },
    },
  },
  plugins: [flowbite.plugin()],
};
