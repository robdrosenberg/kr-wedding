/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      backgroundColor: {
        'nav': '#B7BDB8',
        'primary': '#C3C9C5',
        'polaroid': '#FDFDFD',
      },
      boxShadow: {
        'polaroid': '0px 2px 4px rgba(49, 54, 50, 0.49)',
      },
      colors: {
        'darkest': '#313632'
      },
      fontFamily: {
        'bell': ["Bellissima Script Pro", 'cursive'],
        'mack': ['p22-mackinac-pro', 'serif'],
        'gothic-w': ['tablet-gothic-wide', 'sans-serif'],
      },
      
    },
	},
	plugins: [
    require('tailwindcss-opentype')
  ],
}
