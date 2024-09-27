import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Update this to reflect the new folder structure
    './components/**/*.{js,ts,jsx,tsx,mdx}' // Components can be outside src
  ],
  theme: {
    extend: {}
  },
  plugins: []
};

export default config;
