module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: () => ({
        primary: '#0a1929',
        secondary: '#0d2036',
      }),
    },
  },
  plugins: [],
};
