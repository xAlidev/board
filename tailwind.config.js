module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        sidebar: '300px auto', // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: '64px auto', // 👈 for the navbar layout. adds grid-rows-header class
      },

      colors: {
        'bg-gray-900': '#111827',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};