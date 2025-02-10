import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Update this to reflect the new folder structure
    './components/**/*.{js,ts,jsx,tsx,mdx}' // Components can be outside src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e79f39',
        secondary: '#00050a'
      }
    }
  },
  plugins: []
};

export default config;
