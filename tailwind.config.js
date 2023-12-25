/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  screens: {
    /*
        'xs': '360px',
        '5xl': '412px',
        '4xl': '540px',
        'sm': '640px',
        */
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 768px) { ... }

    'lg': '1024px',
    // => @media (min-width: 992px) { ... }
    '6xl': '1100px',
    '7xl': '1150px',
    'xl': '1200px',
    // => @media (min-width: 1200px) { ... }
    '2xl': '1500px',
    // => @media (min-width: 1400px) { ... }
  },
  plugins: [],
}

