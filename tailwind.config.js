module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#007BFF',
        lightBlue: '#66B2FF',
        darkBlue: '#0056B3',
        grayishBlue: '#B3D4FF',
        descriptionGray: '#4A4A4A',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  plugins: [require('daisyui')],
}
