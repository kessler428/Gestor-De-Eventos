module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d1410c',
        banner: '#1e0a3c',
        icons: '#6f7287',
        bgNavBar: '#242526',
        bgButton: '#db2f0d',
        bgButtonHover: '#fc4f2d',
        titleTextColor: '#1E0A3C',

        bgBluebtn : '#0f27ab',
        bgBlueIconbtn : '#0e2399',
        bgGreenDarkbtn: '#044f60',
        bgGreenDarkIconbtn: '#034352',
        bgBluebtn2 : '#3659E3',
        bgBlueIconbtn2 : '#2143cc',
        bgVioletDarkbtn: '#324B8C',
        bgVioletDarIconkbtn: '#233563',
        bgGreenbtn: '#0a6e3a',
        bgGreenIconbtn: '#085c30',
      },
      backgroundImage: {
        "home-banner": "url('./assets/banner.jpg')",
      },
    },
  },
  plugins: [],
}
